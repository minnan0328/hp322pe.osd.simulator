import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class Color implements Nodes {
    key = "Color";
    value = "Neutral";
    mode = ModeType.button;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Color",
        TraditionalChinese: "顏色"
    };
    nodes = [
        // ECO
        {
            key: "ECO",
            value: "ECO",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "ECO",
                TraditionalChinese: "ECO"
            },
            nodes: null
        },
        // 暖色
        {
            key: "Warm",
            value: "Warm",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Warm",
                TraditionalChinese: "暖色"
            },
            nodes: null
        },
        // 中性色
        {
            key: "Neutral",
            value: "Neutral",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Neutral",
                TraditionalChinese: "中性色"
            },
            nodes: null
        },
        // 冷色
        {
            key: "Cool",
            value: "Cool",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Cool",
                TraditionalChinese: "冷色"
            },
            nodes: null
        },
        // 原生
        {
            key: "Native",
            value: "Native",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Native",
                TraditionalChinese: "原生"
            },
            nodes: null
        },
        // 低藍光
        {
            key: "LowBlueLight",
            value: "Low Blue Light",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Low Blue Light",
                TraditionalChinese: "低藍光"
            },
            nodes: null
        },
        // HP Enhance+
        {
            key: "HPEnhance+",
            value: "Medium",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "HP Enhance+",
                TraditionalChinese: "HP Enhance+"
            },
            nodes: [
                {
                    key: "Low",
                    value: " Auto",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Low",
                        TraditionalChinese: "低"
                    },
                    nodes: null,
                },
                {
                    key: "Medium",
                    value: "Medium",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Medium",
                        TraditionalChinese: "中"
                    },
                    nodes: null,
                },
                {
                    key: "High",
                    value: "High",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "High",
                        TraditionalChinese: "高"
                    },
                    nodes: null,
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
                        TraditionalChinese: "上一步"
                    },
                    nodes: null
                }
            ]
        },
        // 自訂 RBG
        {
            key: "CustomRGB",
            value: null,
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Custom RGB",
                TraditionalChinese: "自訂 RBG"
            },
            nodes: [
                // RGB range (0~255)
                // Red Color
                {
                    key: "RedColor",
                    value: 255,
                    mode: ModeType.range,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "R",
                        TraditionalChinese: "R"
                    },
                    nodes: null
                },
                // Green Color
                {
                    key: "GreenColor",
                    value: 255,
                    mode: ModeType.range,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "G",
                        TraditionalChinese: "G"
                    },
                    nodes: null
                },
                // Blue Color
                {
                    key: "BlueColor",
                    value: 255,
                    mode: ModeType.range,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "B",
                        TraditionalChinese: "B"
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