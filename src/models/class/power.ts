import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class Power implements Nodes {
    key = "Power";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Power",
        TraditionalChinese: "電源"
    };
    nodes = [
        {
            key: "AutoSleepMode",
            value: "On",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Auto-Sleep Mode",
                TraditionalChinese: "Auto-Sleep Mode"
            },
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "On",
                        TraditionalChinese: "開"
                    },
                    nodes: null
                },
                {
                    key: "Off",
                    value: "Off",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Off",
                        TraditionalChinese: "關"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        {
            key: "PowerOnRecall",
            value: "On",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Power-On Recall",
                TraditionalChinese: "Power-On Recall"
            },
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "On",
                        TraditionalChinese: "開"
                    },
                    nodes: null
                },
                {
                    key: "Off",
                    value: "Off",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Off",
                        TraditionalChinese: "關"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        {
            key: "PowerLED",
            value: "On",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Power LED",
                TraditionalChinese: "Power LED"
            },
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "On",
                        TraditionalChinese: "開"
                    },
                    nodes: null
                },
                {
                    key: "Off",
                    value: "Off",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Off",
                        TraditionalChinese: "關"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        // 重置
        {
            key: "Reset",
            value: null,
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: true,
            language: {
                English: "Reset",
                TraditionalChinese: "重置"
            },
            nodes: null
        },
        // 返回
        {
            key: "Back",
            value: null,
            mode: ModeType.button,
            mergeGrid: true,
            only: ["HDMI", "VGA"],
            language: {
                English: "Back",
                TraditionalChinese: "返回"
            },
            nodes: null
        }
    ];
};