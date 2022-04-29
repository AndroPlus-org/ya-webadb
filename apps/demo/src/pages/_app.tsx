import { IComponentAsProps, IconButton, INavButtonProps, mergeStyles, mergeStyleSets, Nav, Stack, StackItem } from "@fluentui/react";
import type { AppProps } from 'next/app';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import { Connect, ErrorDialogProvider } from "../components";
import '../styles/globals.css';
import { Icons } from "../utils";
import { register as registerIcons } from '../utils/icons';

registerIcons();

const ROUTES = [
    {
        url: '/',
        icon: Icons.Bookmark,
        name: '説明',
    },
    {
        url: '/device-info',
        icon: Icons.Phone,
        name: 'デバイス情報',
    },
    {
        url: '/file-manager',
        icon: Icons.Folder,
        name: 'ファイルマネージャー',
    },
    {
        url: '/framebuffer',
        icon: Icons.Camera,
        name: 'スクリーンショット',
    },
    {
        url: '/shell',
        icon: Icons.WindowConsole,
        name: 'ADB Shell',
    },
    {
        url: '/scrcpy',
        icon: Icons.PhoneLaptop,
        name: 'Scrcpy (ミラーリング)',
    },
    {
        url: '/tcpip',
        icon: Icons.WifiSettings,
        name: 'ADB over WiFi',
    },
    {
        url: '/install',
        icon: Icons.Box,
        name: 'APK インストール',
    },
    {
        url: '/power',
        icon: Icons.Power,
        name: '電源メニュー',
    },
    {
        url: '/bug-report',
        icon: Icons.Bug,
        name: 'バグレポート',
    },
    {
        url: '/packet-log',
        icon: Icons.TextGrammarError,
        name: 'パケットログ',
    },
];

function NavLink({ link, defaultRender: DefaultRender, ...props }: IComponentAsProps<INavButtonProps>) {
    if (!link) {
        return null;
    }

    return (
        <Link href={link.url} passHref>
            <DefaultRender {...props} />
        </Link>
    );
}

function App({ Component, pageProps }: AppProps) {
    const classNames = mergeStyleSets({
        'title-container': {
            borderBottom: '1px solid rgb(243, 242, 241)',
        },
        title: {
            padding: '4px 0',
            fontSize: 20,
            textAlign: 'center',
        },
        'left-column': {
            width: 270,
            paddingRight: 8,
            borderRight: '1px solid rgb(243, 242, 241)',
            overflow: 'auto',
        },
        'right-column': {
            borderLeft: '1px solid rgb(243, 242, 241)',
        }
    });

    const [leftPanelVisible, setLeftPanelVisible] = useState(false);
    const toggleLeftPanel = useCallback(() => {
        setLeftPanelVisible(value => !value);
    }, []);
    useEffect(() => {
        setLeftPanelVisible(innerWidth > 650);
    }, []);

    const router = useRouter();

    return (
        <ErrorDialogProvider>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0606165858439985" crossorigin="anonymous"></script>
            </Head>

            <Stack verticalFill>
                <Stack className={classNames['title-container']} horizontal verticalAlign="center">
                    <IconButton
                        checked={leftPanelVisible}
                        title="トグルメニュー"
                        iconProps={{ iconName: Icons.Navigation }}
                        onClick={toggleLeftPanel}
                    />

                    <StackItem grow>
                        <div className={classNames.title}>Android ウェブツール</div>
                    </StackItem>

                    <IconButton
                        iconProps={{ iconName: 'PersonFeedback' }}
                        title="フィードバック"
                        as="a"
                        href="https://github.com/AndroPlus-org/ya-webadb/issues/new"
                        target="_blank"
                    />
                </Stack>

                <Stack grow horizontal verticalFill disableShrink styles={{ root: { minHeight: 0, overflow: 'hidden', lineHeight: '1.5' } }}>
                    <StackItem className={mergeStyles(classNames['left-column'], !leftPanelVisible && { display: 'none' })}>
                        <Connect />

                        <Nav
                            groups={[{
                                links: ROUTES.map(route => ({
                                    ...route,
                                    key: route.url,
                                })),
                            }]}
                            linkAs={NavLink}
                            selectedKey={router.pathname}
                        />
                    </StackItem>

                    <StackItem grow styles={{ root: { width: 0 } }}>
                        <Component {...pageProps} />
                    </StackItem>
                </Stack>
            </Stack>
        </ErrorDialogProvider >
    );
}

export default App;
