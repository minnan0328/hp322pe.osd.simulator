import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class Management implements Nodes {
    key = "Management";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Management",
        TraditionalChinese: "管理"
    };
    nodes = [
        {
            key: "FactoryReset",
            value: "Yes",
            mode: ModeType.setting,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Factory Reset",
                TraditionalChinese: "Factory Reset"
            },
            nodes: [
                {
                    key: "Yes",
                    value: "Yes",
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Yes",
                        TraditionalChinese: "是"
                    },
                    nodes: null
                },
                {
                    key: "No",
                    value: "No",
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "No",
                        TraditionalChinese: "否"
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
            key: "DDC/CISupport",
            value: "On",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "DDC/CI Support",
                TraditionalChinese: "DDC/CI Support"
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
            key: "DiagnosticPatterns",
            value: "Cycle Patterns",
            mode: ModeType.setting,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Diagnostic Patterns",
                TraditionalChinese: "Diagnostic Patterns"
            },
            nodes: [
                {
                    key: "CyclePatterns",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Cycle Patterns",
                        TraditionalChinese: "Cycle Patterns"
                    },
                    nodes: null
                },
                {
                    key: "FullScreenBlack",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Black",
                        TraditionalChinese: "Full Screen Black"
                    },
                    nodes: null
                },
                {
                    key: "FullScreenWhite",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen White",
                        TraditionalChinese: "Full Screen White"
                    },
                    nodes: null
                },
                {
                    key: "FullScreenRed",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Red",
                        TraditionalChinese: "Full Screen Red"
                    },
                    nodes: null
                },
                {
                    key: "FullScreenGreen",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Green",
                        TraditionalChinese: "Full Screen Green"
                    },
                    nodes: null
                },
                {
                    key: "FullScreenBlue",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Blue",
                        TraditionalChinese: "Full Screen Blue"
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
            key: "Accessibility",
            value: "Off",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Accessibility",
                TraditionalChinese: "Accessibility"
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