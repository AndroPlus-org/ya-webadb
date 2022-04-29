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
                <title>�d�����j���[ - Android �E�F�u�c�[��</title>
            </Head>

            <div>
                <DefaultButton text="�ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.reboot()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="�d����؂�" disabled={!globalState.device} onClick={() => globalState.device!.power.powerOff()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="�d���{�^��������" disabled={!globalState.device} onClick={() => globalState.device!.power.powerButton()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <MessageBar messageBarType={MessageBarType.severeWarning}>�ȉ��̑���ɂ͋C�����Ă�������</MessageBar>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Bootloader �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.bootloader()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Fastboot �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.fastboot()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Recovery �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.recovery()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Sideload �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.sideload()} />
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Qualcomm EDL Mode �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.qualcommEdlMode()} />
                <TooltipHost content={<span>Only works on some Qualcomm devices.</span>}>
                    <Icon style={{ verticalAlign: 'middle', marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Samsung Odin Download Mode �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.samsungOdin()} />
                <TooltipHost content={<span>Only works on Samsung devices.</span>}>
                    <Icon style={{ verticalAlign: 'middle', marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>

            <div style={{ marginTop: 20 }}>
                <DefaultButton text="Factory �֍ċN��" disabled={!globalState.device} onClick={() => globalState.device!.power.reboot('factory')} />
                <TooltipHost content={<span>Only works on some devices.</span>}>
                    <Icon style={{ verticalAlign: 'middle', marginLeft: 4, fontSize: 18 }} iconName={Icons.Info} />
                </TooltipHost>
            </div>
        </Stack>
    );
};

export default observer(Power);
