import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class Menu implements Nodes {
    key = "Menu";
    value = null;
    mode = ModeType.button;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Menu",
        TraditionalChinese: "功能表"
    };
    nodes = [
        // 語言
        {
            key: "Language",
            value: "English",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Language",
                TraditionalChinese: "語言"
            },
            nodes: [
                {
                    key: "Deutsch",
                    value: "Deutsch",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Deutsch",
                        TraditionalChinese: "德文"
                    },
                    nodes: null
                },
                {
                    key: "简体中文",
                    value: "SimplifiedChinese",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "简体中文",
                        TraditionalChinese: "简体中文"
                    },
                    nodes: null
                },
                {
                    key: "繁體中文",
                    value: "TraditionalChinese",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "繁體中文",
                        TraditionalChinese: "繁體中文"
                    },
                    nodes: null
                },
                {
                    key: "English",
                    value: "English",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "English",
                        TraditionalChinese: "英語"
                    },
                    nodes: null
                },
                {
                    key: "Español",
                    value: "Español",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Español",
                        TraditionalChinese: "西班牙語"
                    },
                    nodes: null
                },
                {
                    key: "Français",
                    value: "Français",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Français",
                        TraditionalChinese: "法語"
                    },
                    nodes: null
                },
                {
                    key: "Italiano",
                    value: "Italiano",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Italiano",
                        TraditionalChinese: "義大利語"
                    },
                    nodes: null
                },
                {
                    key: "日本語",
                    value: "日本語",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "日本語",
                        TraditionalChinese: "日本語"
                    },
                    nodes: null
                },
                {
                    key: "Nederlands",
                    value: "Nederlands",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Nederlands",
                        TraditionalChinese: "荷蘭語"
                    },
                    nodes: null
                },
                {
                    key: "Português",
                    value: "Português",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Português",
                        TraditionalChinese: "葡萄牙語"
                    },
                    nodes: null
                },
                {
                    key: "Pусский",
                    value: "Pусский",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Pусский",
                        TraditionalChinese: "俄文"
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
        // 選單位置
        {
            key: "MenuPosition",
            value: null,
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Position",
                TraditionalChinese: "Menu Position"
            },
            nodes: [
                // 橫向
                {
                    key: "Horizontal(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Horizontal (w/ADJ SCALE)",
                        TraditionalChinese: "Horizontal (w/ADJ SCALE)"
                    },
                    nodes: null
                },
                // 縱向
                {
                    key: "Vertical(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Vertical (w/ADJ SCALE)",
                        TraditionalChinese: "Vertical (w/ADJ SCALE)"
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
            // Range (0 - 10) with 0 = Off, no transparency
            //Y (FD=0=Off)
            key: "MenuTransparency",
            value: 0,
            mode: ModeType.range,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Transparency",
                TraditionalChinese: "Menu Transparency"
            },
            nodes: null
        },
        {
            // Range (5~60)
            // Y (FD=60) for Accessibility mode
            key: "MenuTimeout",
            value: 30,
            mode: ModeType.range,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Transparency",
                TraditionalChinese: "Menu Transparency"
            },
            nodes: null
        },
        {
            key: "OSDMessages",
            value: null,
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "OSD Messages",
                TraditionalChinese: "OSD Messages"
            },
            nodes: [
                {
                    key: "PowerOnLogo",
                    value: true,
                    mode: ModeType.checkBox,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Power-On Logo",
                        TraditionalChinese: "Power-On Logo"
                    },
                    nodes: null
                },
                {
                    key: "NoInputSignalWarning",
                    value: true,
                    mode: ModeType.checkBox,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "No Input Signal Warning",
                        TraditionalChinese: "No Input Signal Warning"
                    },
                    nodes: null
                },
                {
                    // Y (FD=On=>checked) EMEA
                    // Y (FD=Off=>unchecked) Non-EMEA
                    key: "ConfirmChangeMessage",
                    value: true,
                    mode: ModeType.checkBox,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Confirm Change Message",
                        TraditionalChinese: "Confirm Change Message"
                    },
                    nodes: null
                },
                {
                    key: "MonitorStatus",
                    value: "Top",
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Monitor Status",
                        TraditionalChinese: "Monitor Status"
                    },
                    nodes: [
                        {
                            key: "Off",
                            value: "Off",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Off",
                                TraditionalChinese: "關"
                            },
                            nodes: null
                        },
                        {
                            key: "Top",
                            value: "Top",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Top",
                                TraditionalChinese: "Top"
                            },
                            nodes: null
                        },
                        {
                            key: "Middle",
                            value: "Middle",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Middle",
                                TraditionalChinese: "Middle"
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
            key: "AssignButtons",
            value: null,
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Assign Buttons",
                TraditionalChinese: "Assign Buttons"
            },
            nodes: [
                {
                    // Auto-Adjustment only appears in menu for VGA.  Don't place subcode in cap string.
                    // Y  (FD=Next Active Input)
                    key: "AssignButton1",
                    value: "Next Active Input",
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Assign Button 1",
                        TraditionalChinese: "Assign Button 1"
                    },
                    nodes: [
                        {
                            key: "AutoAdjustment",
                            value: "Auto-Adjustment",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Auto-Adjustment",
                                TraditionalChinese: "Auto-Adjustment"
                            },
                            nodes: null
                        },
                        {
                            key: "Brightness",
                            value: "Brightness",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Brightness",
                                TraditionalChinese: "Brightness"
                            },
                            nodes: null
                        },
                        {
                            key: "Color",
                            value: "Color",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Color",
                                TraditionalChinese: "Color"
                            },
                            nodes: null
                        },
                        {
                            key: "DisplayInformation",
                            value: "Display Information",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Display Information",
                                TraditionalChinese: "Display Information"
                            },
                            nodes: null
                        },
                        {
                            key: "NextActiveInput",
                            value: "Next Active Input",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Next Active Input",
                                TraditionalChinese: "Next Active Input"
                            },
                            nodes: null
                        },
                        {
                            key: "Empty(NoFunction)",
                            value: "Empty (No Function)",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Empty (No Function)",
                                TraditionalChinese: "Empty (No Function)"
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
                    // Y  (FD=Auto-Adjustment) VGA input
                    key: "AssignButton2",
                    value: "Color",
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Assign Button 2",
                        TraditionalChinese: "Assign Button 2"
                    },
                    nodes: [
                        {
                            key: "AutoAdjustment",
                            value: "Auto-Adjustment",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Auto-Adjustment",
                                TraditionalChinese: "Auto-Adjustment"
                            },
                            nodes: null
                        },
                        {
                            key: "Brightness",
                            value: "Brightness",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Brightness",
                                TraditionalChinese: "Brightness"
                            },
                            nodes: null
                        },
                        {
                            key: "Color",
                            value: "Color",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Color",
                                TraditionalChinese: "Color"
                            },
                            nodes: null
                        },
                        {
                            key: "DisplayInformation",
                            value: "Display Information",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Display Information",
                                TraditionalChinese: "Display Information"
                            },
                            nodes: null
                        },
                        {
                            key: "NextActiveInput",
                            value: "Next Active Input",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Next Active Input",
                                TraditionalChinese: "Next Active Input"
                            },
                            nodes: null
                        },
                        {
                            key: "Empty(NoFunction)",
                            value: "Empty (No Function)",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Empty (No Function)",
                                TraditionalChinese: "Empty (No Function)"
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
                    // Y  (FD=Auto-Adjustment) VGA input
                    key: "AssignButton3",
                    value: "Brightness",
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Assign Button 3",
                        TraditionalChinese: "Assign Button 3"
                    },
                    nodes: [
                        {
                            key: "AutoAdjustment",
                            value: "Auto-Adjustment",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Auto-Adjustment",
                                TraditionalChinese: "Auto-Adjustment"
                            },
                            nodes: null
                        },
                        {
                            key: "Brightness",
                            value: "Brightness",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Brightness",
                                TraditionalChinese: "Brightness"
                            },
                            nodes: null
                        },
                        {
                            key: "Color",
                            value: "Color",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Color",
                                TraditionalChinese: "Color"
                            },
                            nodes: null
                        },
                        {
                            key: "DisplayInformation",
                            value: "Display Information",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Display Information",
                                TraditionalChinese: "Display Information"
                            },
                            nodes: null
                        },
                        {
                            key: "NextActiveInput",
                            value: "Next Active Input",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Next Active Input",
                                TraditionalChinese: "Next Active Input"
                            },
                            nodes: null
                        },
                        {
                            key: "Empty(NoFunction)",
                            value: "Empty (No Function)",
                            mode: ModeType.radio,
                            only: ["HDMI", "VGA"],
                            mergeGrid: true,
                            language: {
                                English: "Empty (No Function)",
                                TraditionalChinese: "Empty (No Function)"
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