import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Menu implements Nodes {
    key = "Menu";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Menu",
        TraditionalChinese: "功能表"
    };
    unit = null;
    nodes = [
        // 語言
        {
            key: "Language",
            value: "English",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Language",
                TraditionalChinese: "語言"
            },
            unit: null,
            nodes: [
                {
                    key: "Deutsch",
                    value: "Deutsch",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Deutsch",
                        TraditionalChinese: "德文"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "简体中文",
                    value: "SimplifiedChinese",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "简体中文",
                        TraditionalChinese: "简体中文"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "繁體中文",
                    value: "TraditionalChinese",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "繁體中文",
                        TraditionalChinese: "繁體中文"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "English",
                    value: "English",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "English",
                        TraditionalChinese: "英語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Español",
                    value: "Español",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Español",
                        TraditionalChinese: "西班牙語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Français",
                    value: "Français",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Français",
                        TraditionalChinese: "法語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Italiano",
                    value: "Italiano",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Italiano",
                        TraditionalChinese: "義大利語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "日本語",
                    value: "日本語",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "日本語",
                        TraditionalChinese: "日本語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Nederlands",
                    value: "Nederlands",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Nederlands",
                        TraditionalChinese: "荷蘭語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Português",
                    value: "Português",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Português",
                        TraditionalChinese: "葡萄牙語"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Pусский",
                    value: "Pусский",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Pусский",
                        TraditionalChinese: "俄文"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        // 選單位置
        {
            key: "MenuPosition",
            value: null,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Position",
                TraditionalChinese: "Menu Position"
            },
            unit: null,
            nodes: [
                // 橫向
                {
                    // Range (0~100)
                    key: "Horizontal(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 100,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Horizontal (w/ADJ SCALE)",
                        TraditionalChinese: "Horizontal (w/ADJ SCALE)"
                    },
                    unit: null,
                    nodes: null
                },
                // 縱向
                {
                    // Range (0~100)
                    key: "Vertical(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 100,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Vertical (w/ADJ SCALE)",
                        TraditionalChinese: "Vertical (w/ADJ SCALE)"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            // Range (0 - 10) with 0 = Off, no transparency
            //Y (FD=0=Off)
            key: "MenuTransparency",
            value: 0,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Transparency",
                TraditionalChinese: "Menu Transparency"
            },
            unit: null,
            nodes: null
        },
        {
            // Range (5~60)
            // Y (FD=60) for Accessibility mode
            key: "MenuTimeout",
            value: 30,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Timeout",
                TraditionalChinese: "Menu Timeout"
            },
            unit: {
                English: "s",
                TraditionalChinese: "秒"
            },
            nodes: null
        },
        {
            key: "OSDMessages",
            value: "Power-On Logo",
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "OSD Messages",
                TraditionalChinese: "OSD Messages"
            },
            unit: null,
            nodes: [
                {
                    key: "PowerOnLogo",
                    value: "Power-On Logo",
                    mode: ModeType.checkBox,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Power-On Logo",
                        TraditionalChinese: "Power-On Logo"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "NoInputSignalWarning",
                    value: "No Input Signal Warning",
                    mode: ModeType.checkBox,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "No Input Signal Warning",
                        TraditionalChinese: "No Input Signal Warning"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    // Y (FD=On=>checked) EMEA
                    // Y (FD=Off=>unchecked) Non-EMEA
                    key: "ConfirmChangeMessage",
                    value: "Confirm Change Message",
                    mode: ModeType.checkBox,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Confirm Change Message",
                        TraditionalChinese: "Confirm Change Message"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "MonitorStatus",
                    value: "Top",
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Monitor Status",
                        TraditionalChinese: "Monitor Status"
                    },
                    unit: null,
                    nodes: [
                        {
                            key: "Off",
                            value: "Off",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Off",
                                TraditionalChinese: "關"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Top",
                            value: "Top",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Top",
                                TraditionalChinese: "Top"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Middle",
                            value: "Middle",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Middle",
                                TraditionalChinese: "Middle"
                            },
                            unit: null,
                            nodes: null
                        },
                        // 上一步
                        innerBackEnum
                    ]
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "AssignButtons",
            value: null,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Assign Buttons",
                TraditionalChinese: "Assign Buttons"
            },
            unit: null,
            nodes: [
                {
                    // Auto-Adjustment only appears in menu for VGA.  Don't place subcode in cap string.
                    // Y  (FD=Next Active Input)
                    key: "AssignButton1",
                    value: "Next Active Input",
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Assign Button 1",
                        TraditionalChinese: "Assign Button 1"
                    },
                    unit: null,
                    nodes: [
                        {
                            key: "AutoAdjustment",
                            value: "Auto-Adjustment",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Auto-Adjustment",
                                TraditionalChinese: "Auto-Adjustment"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Brightness",
                            value: "Brightness",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Brightness",
                                TraditionalChinese: "Brightness"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Color",
                            value: "Color",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Color",
                                TraditionalChinese: "Color"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "DisplayInformation",
                            value: "Display Information",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Display Information",
                                TraditionalChinese: "Display Information"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "NextActiveInput",
                            value: "Next Active Input",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Next Active Input",
                                TraditionalChinese: "Next Active Input"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Empty(NoFunction)",
                            value: "Empty (No Function)",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Empty (No Function)",
                                TraditionalChinese: "Empty (No Function)"
                            },
                            unit: null,
                            nodes: null
                        },
                        // 上一步
                        innerBackEnum
                    ]
                },
                {
                    // Y  (FD=Auto-Adjustment) VGA input
                    key: "AssignButton2",
                    value: "Color",
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Assign Button 2",
                        TraditionalChinese: "Assign Button 2"
                    },
                    unit: null,
                    nodes: [
                        {
                            key: "AutoAdjustment",
                            value: "Auto-Adjustment",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Auto-Adjustment",
                                TraditionalChinese: "Auto-Adjustment"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Brightness",
                            value: "Brightness",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Brightness",
                                TraditionalChinese: "Brightness"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Color",
                            value: "Color",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Color",
                                TraditionalChinese: "Color"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "DisplayInformation",
                            value: "Display Information",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Display Information",
                                TraditionalChinese: "Display Information"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "NextActiveInput",
                            value: "Next Active Input",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Next Active Input",
                                TraditionalChinese: "Next Active Input"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Empty(NoFunction)",
                            value: "Empty (No Function)",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Empty (No Function)",
                                TraditionalChinese: "Empty (No Function)"
                            },
                            unit: null,
                            nodes: null
                        },
                        // 上一步
                        innerBackEnum
                    ]
                },
                {
                    // Y  (FD=Auto-Adjustment) VGA input
                    key: "AssignButton3",
                    value: "Brightness",
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Assign Button 3",
                        TraditionalChinese: "Assign Button 3"
                    },
                    unit: null,
                    nodes: [
                        {
                            key: "AutoAdjustment",
                            value: "Auto-Adjustment",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Auto-Adjustment",
                                TraditionalChinese: "Auto-Adjustment"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Brightness",
                            value: "Brightness",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Brightness",
                                TraditionalChinese: "Brightness"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Color",
                            value: "Color",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Color",
                                TraditionalChinese: "Color"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "DisplayInformation",
                            value: "Display Information",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Display Information",
                                TraditionalChinese: "Display Information"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "NextActiveInput",
                            value: "Next Active Input",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Next Active Input",
                                TraditionalChinese: "Next Active Input"
                            },
                            unit: null,
                            nodes: null
                        },
                        {
                            key: "Empty(NoFunction)",
                            value: "Empty (No Function)",
                            mode: ModeType.radio,
                            rangeMin: 0,
                            rangeMax: 0,
                            only: ["HDMI", "VGA"],
                            mergeGrid: false,
                            language: {
                                English: "Empty (No Function)",
                                TraditionalChinese: "Empty (No Function)"
                            },
                            unit: null,
                            nodes: null
                        },
                        // 上一步
                        innerBackEnum
                    ]
                }
            ]
        },
        // 重置
        resetEnum,
        // 上一步
        backEnum
    ];
};