import { Icon, MessageBar, Separator, Stack, TooltipHost } from "@fluentui/react";
import { AdbFeatures } from "@yume-chan/adb";
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from "react";
import { ExternalLink } from "../components";
import { globalState } from '../state';
import { Icons, RouteStackProps } from "../utils";

const KNOWN_FEATURES: Record<string, string> = {
    [AdbFeatures.ShellV2]: `"shell" command now supports separating child process's stdout and stderr, and returning exit code`,
    // 'cmd': '',
    [AdbFeatures.StatV2]: '"sync" command now supports "STA2" (returns more information of a file than old "STAT") and "LST2" (returns information of a directory) sub command',
    [AdbFeatures.ListV2]: '"sync" command now supports "LST2" sub command which returns more information when listing a directory than old "LIST"',
    [AdbFeatures.FixedPushMkdir]: 'Android 9 (P) introduced a bug that pushing files to a non-existing directory would fail. This feature indicates it\'s fixed (Android 10)',
    // 'apex': '',
    // 'abb': '',
    // 'fixed_push_symlink_timestamp': '',
    'abb_exec': 'Support "exec" command which can stream stdin into child process',
    // 'remount_shell': '',
    // 'track_app': '',
    // 'sendrecv_v2': '',
    // 'sendrecv_v2_brotli': '',
    // 'sendrecv_v2_lz4': '',
    // 'sendrecv_v2_zstd': '',
    // 'sendrecv_v2_dry_run_send': '',
};

const DeviceInfo: NextPage = () => {

    return (
        <Stack {...RouteStackProps}>
            <Head>
                <title>デバイス情報 - Android ウェブツール</title>
            </Head>

            <MessageBar>
                <span>ADB プロトコルバージョンはクライアントとサーバー間のパケット形式により決まります。現在2つのバージョンがあります:</span>
                <br />

                <code>01000000</code>
                <span> Android 8 (Oreo) 以前で利用</span>
                <br />

                <code>01000001</code>
                <span> Android 9 (Pie) 以降で利用</span>
                <br />


                <ExternalLink href="https://chensi.moe/blog/2020/09/30/webadb-part2-connection/#version">こちらのページ</ExternalLink>
                <span>で詳しい情報が掲載されています (英語)。</span>
            </MessageBar>
            <span>
                <span>プロトコルバージョン: </span>
                <code>{globalState.device?.protocolVersion?.toString(16).padStart(8, '0')}</code>
            </span>
            <Separator />

            <MessageBar>
                <code>ro.product.name</code>
                <span> の値</span>
            </MessageBar>
            <span>プロダクト名: {globalState.device?.product}</span>
            <Separator />

            <MessageBar>
                <code>ro.product.model</code>
                <span> の値</span>
            </MessageBar>
            <span>モデル名: {globalState.device?.model}</span>
            <Separator />

            <MessageBar>
                <code>ro.product.device</code>
                <span> の値</span>
            </MessageBar>
            <span>デバイス名: {globalState.device?.device}</span>
            <Separator />

            <MessageBar>
                <span>各コマンドがどういった挙動をするべきか決める機能一覧です。</span>
                <br />

                <span>例えば新しいコマンドが使えることを示したり、古いバグへの対策が不要であることを示したりします。</span>
                <br />
            </MessageBar>
            <span>
                <span>機能: </span>
                {globalState.device?.features?.map((feature, index) => (
                    <span key={feature}>
                        {index !== 0 && (<span>, </span>)}
                        <span>{feature}</span>
                        {KNOWN_FEATURES[feature] && (
                            <TooltipHost content={<span>{KNOWN_FEATURES[feature]}</span>}>
                                <Icon style={{ marginLeft: 4 }} iconName={Icons.Info} />
                            </TooltipHost>
                        )}
                    </span>
                ))}
            </span>
        </Stack>
    );
};

export default observer(DeviceInfo);
