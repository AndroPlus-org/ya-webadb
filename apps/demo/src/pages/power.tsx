// cspell: ignore bootloader
// cspell: ignore fastboot

import { DefaultButton, Icon, MessageBar, MessageBarType, Stack, TooltipHost } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Head from "next/head";
import { globalState } from "../state";
import { Icons, RouteStackProps } from "../utils";

const Power: NextPage = () => {
    return (
        <Stack {...RouteStackProps}>
            <Head>
                <title>電源メニュー - Android ウェブツール</title>
            </Head>

            <div>
                <DefaultButton text="再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.reboot()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="電源を切る" disabled={!globalState.device} onClick={() => globalState.device!.power.powerOff()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="電源ボタンを押す" disabled={!globalState.device} onClick={() => globalState.device!.power.powerButton()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <MessageBar messageBarType={MessageBarType.severeWarning}>以下の操作には気をつけてください</MessageBar>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Bootloader へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.bootloader()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Fastboot へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.fastboot()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Recovery へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.recovery()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Sideload へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.sideload()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Qualcomm EDL Mode へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.qualcommEdlMode()} />
                <TooltipHost content={<span>一部の Qualcomm デバイスでのみ動作します。</span>}>
                    <Icon style={{ verticalAlign: 'middle', marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Samsung Odin Download Mode へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.samsungOdin()} />
                <TooltipHost content={<span>一部の Samsung デバイスでのみ動作します。</span>}>
                    <Icon style={{ verticalAlign: 'middle', marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Factory へ再起動" disabled={!globalState.device} onClick={() => globalState.device!.power.reboot('factory')} />
                <TooltipHost content={<span>一部のデバイスでのみ動作します。</span>}>
                    <Icon style={{ verticalAlign: 'middle', marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>
        </Stack>
    );
};

export default observer(Power);
