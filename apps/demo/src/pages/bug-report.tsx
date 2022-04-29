// cspell: ignore bugreport
// cspell: ignore bugreportz

import { MessageBar, MessageBarType, PrimaryButton, Stack, StackItem } from "@fluentui/react";
import { BugReport, BugReportZ, BugReportZVersion } from "@yume-chan/android-bin";
import { action, autorun, makeAutoObservable, observable, runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import Head from "next/head";
import { globalState } from "../state";
import { RouteStackProps, saveFile } from "../utils";

class BugReportState {
    bugReport: BugReport | undefined = undefined;

    bugReportZ: BugReportZ | undefined = undefined;

    bugReportZVersion: BugReportZVersion | undefined = undefined;

    bugReportZInProgress = false;

    bugReportZProgress: string | undefined = undefined;

    bugReportZTotalSize: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this, {
            bugReportZVersion: observable.deep,
            generateBugReport: action.bound,
            generateBugReportZStream: action.bound,
            generateBugReportZ: action.bound,
        });

        autorun(() => {
            if (globalState.device) {
                runInAction(() => {
                    this.bugReport = new BugReport(globalState.device!);
                    this.bugReportZ = new BugReportZ(globalState.device!);

                    this.bugReportZ.version().then(action(version => {
                        this.bugReportZVersion = version;
                    }));
                });
            } else {
                runInAction(() => {
                    this.bugReport = undefined;
                    this.bugReportZ = undefined;
                    this.bugReportZVersion = undefined;
                });
            }
        });
    }

    async generateBugReport() {
        await this.bugReport!.generate()
            .pipeTo(saveFile('bugreport.txt'));
    }

    async generateBugReportZStream() {
        await this.bugReportZ!.stream()
            .pipeTo(saveFile('bugreport.zip'));
    }

    async generateBugReportZ() {
        runInAction(() => {
            this.bugReportZInProgress = true;
        });

        const filename = await this.bugReportZ!.generate(
            this.bugReportZVersion!.supportProgress
                ? action((progress, total) => {
                    this.bugReportZProgress = progress;
                    this.bugReportZTotalSize = total;
                })
                : undefined
        );

        const sync = await globalState.device!.sync();
        await sync.read(filename)
            .pipeTo(saveFile('bugreport.zip'));

        sync.dispose();

        runInAction(() => {
            this.bugReportZInProgress = false;
            this.bugReportZProgress = undefined;
            this.bugReportZTotalSize = undefined;
        });
    }
}

const state = new BugReportState();

const BugReportPage: NextPage = () => {
    return (
        <Stack {...RouteStackProps}>
            <Head>
                <title>バグレポート - Android ウェブツール</title>
            </Head>

            <MessageBar messageBarType={MessageBarType.info}>Android の `bugreport`/`bugreportz` ツールです</MessageBar>

            <StackItem>
                <PrimaryButton
                    disabled={!state.bugReport}
                    text="バグレポートを生成"
                    onClick={state.generateBugReport}
                />
            </StackItem>

            <StackItem>
                <PrimaryButton
                    disabled={!state.bugReportZVersion?.supportStream}
                    text="ZIP 圧縮したバグレポートを生成 (ストリーミング)"
                    onClick={state.generateBugReportZStream}
                />
            </StackItem>

            <StackItem>
                <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 8 }}>
                    <StackItem>
                        <PrimaryButton
                            disabled={!state.bugReportZVersion || state.bugReportZInProgress}
                            text="ZIP 圧縮したバグレポートを生成"
                            onClick={state.generateBugReportZ}
                        />
                    </StackItem>

                    {state.bugReportZInProgress && (
                        <StackItem>
                            {state.bugReportZTotalSize ? (
                                <span>
                                    進捗: {state.bugReportZProgress} / {state.bugReportZTotalSize}
                                </span>
                            ) : (
                                <span>
                                    生成中... お待ちください
                                    {!state.bugReportZVersion!.supportProgress && ' (this device does not support progress)'}
                                </span>
                            )}
                        </StackItem>
                    )}
                </Stack>
            </StackItem>
        </Stack>
    );
};

export default observer(BugReportPage);
