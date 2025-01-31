// cspell: ignore addrs

import { ICommandBarItemProps, MessageBar, Stack, StackItem, Text, TextField, Toggle } from "@fluentui/react";
import { autorun, makeAutoObservable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect } from "react";
import { CommandBar, ExternalLink } from "../components";
import { globalState } from "../state";
import { asyncEffect, Icons, RouteStackProps } from "../utils";

class TcpIpState {
    initial = true;
    visible = false;
    serviceListenAddresses: string[] | undefined = undefined;
    servicePortEnabled = false;
    servicePort: string = '';
    persistPortEnabled = false;
    persistPort: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this, {
            initial: false,
            queryInfo: false,
            applyServicePort: false,
        });


        autorun(() => {
            if (globalState.device) {
                if (this.initial && this.visible) {
                    this.initial = false;
                    this.queryInfo();
                }
            } else {
                this.initial = true;
            }
        });
    }

    get commandBarItems(): ICommandBarItemProps[] {
        return [
            {
                key: 'refresh',
                disabled: !globalState.device,
                iconProps: { iconName: Icons.ArrowClockwise },
                text: '更新',
                onClick: this.queryInfo as VoidFunction,
            },
            {
                key: 'apply',
                disabled: !globalState.device,
                iconProps: { iconName: Icons.Save },
                text: '適用',
                onClick: this.applyServicePort,
            }
        ];
    }

    queryInfo = asyncEffect(async (signal) => {
        if (!globalState.device) {
            runInAction(() => {
                this.serviceListenAddresses = undefined;
                this.servicePortEnabled = false;
                this.servicePort = '';
                this.persistPortEnabled = false;
                this.persistPort = undefined;
            });
            return;
        }

        const serviceListenAddresses = await globalState.device.getProp('service.adb.listen_addrs');
        const servicePort = await globalState.device.getProp('service.adb.tcp.port');
        const persistPort = await globalState.device.getProp('persist.adb.tcp.port');

        if (signal.aborted) {
            return;
        }

        runInAction(() => {
            this.serviceListenAddresses = serviceListenAddresses !== '' ? serviceListenAddresses.split(',') : undefined;

            if (servicePort) {
                this.servicePortEnabled = !serviceListenAddresses && servicePort !== '0';
                this.servicePort = servicePort;
            } else {
                this.servicePortEnabled = false;
                this.servicePort = '5555';
            }

            if (persistPort) {
                this.persistPortEnabled = !serviceListenAddresses && !servicePort;
                this.persistPort = persistPort;
            } else {
                this.persistPortEnabled = false;
                this.persistPort = undefined;
            }
        });
    });

    applyServicePort = async () => {
        if (!globalState.device) {
            return;
        }

        if (state.servicePortEnabled) {
            await globalState.device.tcpip.setPort(Number.parseInt(state.servicePort, 10));
        } else {
            await globalState.device.tcpip.disable();
        }
    };
}

const state = new TcpIpState();

const TcpIp: NextPage = () => {
    useEffect(() => {
        runInAction(() => {
            state.visible = true;
        });

        return () => {
            runInAction(() => {
                state.visible = false;
            });
        };
    });

    const handleServicePortEnabledChange = useCallback((e, value?: boolean) => {
        runInAction(() => { state.servicePortEnabled = !!value; });
    }, []);

    const handleServicePortChange = useCallback((e, value?: string) => {
        if (value === undefined) {
            return;
        }
        runInAction(() => state.servicePort = value);
    }, []);

    return (
        <Stack {...RouteStackProps}>
            <Head>
                <title>ADB over WiFi - Android ウェブツール</title>
            </Head>

            <CommandBar items={state.commandBarItems} />

            <StackItem>
                <MessageBar>
                    <Text>
                        WebADB でデバイスにワイヤレス接続するには
                        <ExternalLink href="https://github.com/yume-chan/ya-webadb/discussions/245#discussioncomment-384030" spaceBefore spaceAfter>追加のソフトウェア</ExternalLink>
                        が必要です。
                    </Text>
                </MessageBar>
            </StackItem>
            <StackItem>
                <MessageBar >
                    <Text>ADB over WiFiの設定を変更すると、デバイスが切断されます。</Text>
                </MessageBar>
            </StackItem>

            <StackItem>
                <Toggle
                    inlineLabel
                    label="service.adb.listen_addrs"
                    disabled
                    checked={!!state.serviceListenAddresses}
                    onText="有効"
                    offText="無効"
                />
                {state.serviceListenAddresses?.map((address) => (
                    <TextField
                        key={address}
                        disabled
                        value={address}
                        styles={{ root: { width: 300 } }}
                    />
                ))}
            </StackItem>

            <StackItem>
                <Toggle
                    inlineLabel
                    label="service.adb.tcp.port"
                    checked={state.servicePortEnabled}
                    disabled={!globalState.device || !!state.serviceListenAddresses}
                    onText="有効"
                    offText="無効"
                    onChange={handleServicePortEnabledChange}
                />
                <TextField
                    disabled={!globalState.device || !!state.serviceListenAddresses}
                    value={state.servicePort}
                    styles={{ root: { width: 300 } }}
                    onChange={handleServicePortChange}
                />
            </StackItem>

            <StackItem>
                <Toggle
                    inlineLabel
                    label="persist.adb.tcp.port"
                    disabled
                    checked={state.persistPortEnabled}
                    onText="有効"
                    offText="無効"
                />
                {state.persistPort && (
                    <TextField
                        disabled
                        value={state.persistPort}
                        styles={{ root: { width: 300 } }}
                    />
                )}
            </StackItem>
        </Stack>
    );
};

export default observer(TcpIp);
