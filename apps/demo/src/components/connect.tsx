import { DefaultButton, Dialog, Dropdown, IDropdownOption, PrimaryButton, ProgressIndicator, Stack, StackItem } from '@fluentui/react';
import { Adb, AdbBackend, InspectStream, pipeFrom } from '@yume-chan/adb';
import AdbDirectSocketsBackend from "@yume-chan/adb-backend-direct-sockets";
import AdbWebUsbBackend, { AdbWebUsbBackendWatcher } from '@yume-chan/adb-backend-webusb';
import AdbWsBackend from '@yume-chan/adb-backend-ws';
import AdbWebCredentialStore from '@yume-chan/adb-credential-web';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { globalState } from '../state';
import { CommonStackTokens, Icons } from '../utils';

const DropdownStyles = { dropdown: { width: '100%' } };

const CredentialStore = new AdbWebCredentialStore();

function _Connect(): JSX.Element | null {
    const [supported, setSupported] = useState(true);

    const [selectedBackend, setSelectedBackend] = useState<AdbBackend | undefined>();
    const [connecting, setConnecting] = useState(false);

    const [usbBackendList, setUsbBackendList] = useState<AdbBackend[]>([]);
    const updateUsbBackendList = useCallback(async () => {
        const backendList: AdbBackend[] = await AdbWebUsbBackend.getDevices();
        setUsbBackendList(backendList);
        return backendList;
    }, []);

    useEffect(
        () => {
            // Only run on client
            const supported = AdbWebUsbBackend.isSupported();
            setSupported(supported);

            if (!supported) {
                globalState.showErrorDialog('お使いのブラウザは、本サイトの動作に必要な WebUSB API に対応していません。\n\nGoogle Chrome や Microsoft Edge など、Chromium ベースのブラウザの最新版が必要です。');
                return;
            }

            updateUsbBackendList();

            const watcher = new AdbWebUsbBackendWatcher(async (serial?: string) => {
                const list = await updateUsbBackendList();

                if (serial) {
                    setSelectedBackend(list.find(backend => backend.serial === serial));
                    return;
                }
            });

            return () => watcher.dispose();
        },
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
        []
    );

    const [wsBackendList, setWsBackendList] = useState<AdbWsBackend[]>([]);
    useEffect(() => {
        const savedList = localStorage.getItem('ws-backend-list');
        if (!savedList) {
            return;
        }

        const parsed = JSON.parse(savedList) as { address: string; }[];
        setWsBackendList(parsed.map(x => new AdbWsBackend(x.address)));
    }, []);

    const addWsBackend = useCallback(() => {
        const address = window.prompt('WebSockify サーバーのアドレスを入力してください');
        if (!address) {
            return;
        }
        setWsBackendList(list => {
            const copy = list.slice();
            copy.push(new AdbWsBackend(address));
            window.localStorage.setItem('ws-backend-list', JSON.stringify(copy.map(x => ({ address: x.serial }))));
            return copy;
        });
    }, []);

    const [tcpBackendList, setTcpBackendList] = useState<AdbDirectSocketsBackend[]>([]);
    useEffect(() => {
        if (!AdbDirectSocketsBackend.isSupported()) {
            return;
        }

        const savedList = localStorage.getItem('tcp-backend-list');
        if (!savedList) {
            return;
        }

        const parsed = JSON.parse(savedList) as { address: string; port: number; }[];
        setTcpBackendList(parsed.map(x => new AdbDirectSocketsBackend(x.address, x.port)));
    }, []);

    const addTcpBackend = useCallback(() => {
        const host = window.prompt('デバイスのアドレスを入力してください');
        if (!host) {
            return;
        }

        const port = window.prompt('デバイスのポートを入力してください', '5555');
        if (!port) {
            return;
        }

        const portNumber = Number.parseInt(port, 10);

        setTcpBackendList(list => {
            const copy = list.slice();
            copy.push(new AdbDirectSocketsBackend(host, portNumber));
            window.localStorage.setItem(
                'tcp-backend-list',
                JSON.stringify(
                    copy.map(
                        x => ({
                            address: x.host,
                            port: x.port
                        })
                    )
                )
            );
            return copy;
        });
    }, []);

    const handleSelectedBackendChange = (
        e: React.FormEvent<HTMLDivElement>,
        option?: IDropdownOption,
    ) => {
        setSelectedBackend(option?.data as AdbBackend);
    };

    const addUsbBackend = useCallback(async () => {
        const backend = await AdbWebUsbBackend.requestDevice();
        setSelectedBackend(backend);
        await updateUsbBackendList();
    }, [updateUsbBackendList]);

    const connect = useCallback(async () => {
        try {
            if (selectedBackend) {
                let device: Adb | undefined;
                try {
                    setConnecting(true);

                    const streams = await selectedBackend.connect();

                    // Use `TransformStream` to intercept packets and log them
                    const readable = streams.readable
                        .pipeThrough(
                            new InspectStream(packet => {
                                globalState.appendLog('in', packet);
                            })
                        );
                    const writable = pipeFrom(
                        streams.writable,
                        new InspectStream(packet => {
                            globalState.appendLog('out', packet);
                        })
                    );
                    device = await Adb.authenticate({ readable, writable }, CredentialStore, undefined);
                    device.disconnected.then(() => {
                        globalState.setDevice(undefined, undefined);
                    }, (e) => {
                        globalState.showErrorDialog(e);
                        globalState.setDevice(undefined, undefined);
                    });
                    globalState.setDevice(selectedBackend, device);
                } catch (e) {
                    device?.dispose();
                    throw e;
                }
            }
        } catch (e: any) {
            globalState.showErrorDialog(e);
        } finally {
            setConnecting(false);
        }
    }, [selectedBackend]);
    const disconnect = useCallback(async () => {
        try {
            await globalState.device!.dispose();
            globalState.setDevice(undefined, undefined);
        } catch (e: any) {
            globalState.showErrorDialog(e);
        }
    }, []);

    const backendList = useMemo(
        () => ([] as AdbBackend[]).concat(usbBackendList, wsBackendList, tcpBackendList),
        [usbBackendList, wsBackendList, tcpBackendList]
    );

    const backendOptions = useMemo(() => {
        return backendList.map(backend => ({
            key: backend.serial,
            text: `${backend.serial} ${backend.name ? `(${backend.name})` : ''}`,
            data: backend,
        }));
    }, [backendList]);

    useEffect(() => {
        setSelectedBackend(old => {
            if (old) {
                const current = backendList.find(backend => backend.serial === old.serial);
                if (current) {
                    return current;
                }
            }

            return backendList.length ? backendList[0] : undefined;
        });
    }, [backendList]);

    const addMenuProps = useMemo(() => {
        const items = [];

        items.push({
            key: 'usb',
            text: 'USB',
            onClick: addUsbBackend,
        });

        items.push({
            key: 'websocket',
            text: 'WebSocket',
            onClick: addWsBackend,
        });

        if (AdbDirectSocketsBackend.isSupported()) {
            items.push({
                key: 'direct-sockets',
                text: 'Direct Sockets TCP',
                onClick: addTcpBackend,
            });
        }

        return {
            items,
        };
    }, [addUsbBackend, addWsBackend, addTcpBackend]);

    return (
        <Stack
            tokens={{ childrenGap: 8, padding: '0 0 8px 8px' }}
        >
            <Dropdown
                disabled={!!globalState.device || backendOptions.length === 0}
                label="利用できるデバイス"
                placeholder="デバイスがありません"
                options={backendOptions}
                styles={DropdownStyles}
                dropdownWidth={300}
                selectedKey={selectedBackend?.serial}
                onChange={handleSelectedBackendChange}
            />

            {!globalState.device
                ? (
                    <Stack horizontal tokens={CommonStackTokens}>
                        <StackItem grow shrink>
                            <PrimaryButton
                                iconProps={{ iconName: Icons.PlugConnected }}
                                text="接続"
                                disabled={!selectedBackend}
                                primary={!!selectedBackend}
                                styles={{ root: { width: '100%' } }}
                                onClick={connect}
                            />
                        </StackItem>
                        <StackItem grow shrink>
                            <DefaultButton
                                iconProps={{ iconName: Icons.AddCircle }}
                                text="追加"
                                split
                                splitButtonAriaLabel="他の接続方法を追加"
                                menuProps={addMenuProps}
                                disabled={!supported}
                                primary={!selectedBackend}
                                styles={{ root: { width: '100%' } }}
                                onClick={addUsbBackend}
                            />
                        </StackItem>
                    </Stack>
                )
                : (
                    <DefaultButton
                        iconProps={{ iconName: Icons.PlugDisconnected }}
                        text="接続解除"
                        onClick={disconnect}
                    />
                )}

            <Dialog
                hidden={!connecting}
                dialogContentProps={{
                    title: '接続中...',
                    subText: 'お使いの端末で接続を許可してください'
                }}
            >
                <ProgressIndicator />
            </Dialog>
        </Stack>
    );
};

export const Connect = observer(_Connect);
