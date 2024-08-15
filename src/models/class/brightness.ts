// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Brightness implements Nodes {
    key = "Brightness";
    value = null;
    mode = ModeType.button;
    only = ["HDMI", "VGA"];
    merge = false;
    language = {
        English: 'Brightness +',
        TraditionalChinese: '亮度'
    };
    nodes = [
        // 亮度
        {
            key: "Brightness",
            value: 86,
            mode: ModeType.range,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Brightness',
                TraditionalChinese: '亮度'
            },
            nodes: null,
        },
        // 對比
        {
            key: "Contrast",
            value: 100,
            mode: ModeType.range,
            only: ["VGA"],
            merge: false,
            language: {
                English: 'Contrast',
                TraditionalChinese: '對比'
            },
            nodes: null,
        },
        // 動態對比
        {
            key: "DynamicContrast", value: "Off",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Dynamic Contrast',
                TraditionalChinese: '動態對比'
            },
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'On',
                        TraditionalChinese: '開'
                    },
                    nodes: null,
                },
                {
                    key: "Off",
                    value: "Off",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'Off',
                        TraditionalChinese: '關'
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'Back',
                        TraditionalChinese: '返回'
                    },
                    nodes: null,
                }
            ]
        },
        {
            key: "BlackStretch",
            value: "Off",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Black Stretch',
                TraditionalChinese: '黑色延展'
            },
            nodes: [
                {
                    key: "Off",
                    value: "Off",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'Off',
                        TraditionalChinese: '關'
                    },
                    nodes: null
                },
                {
                    key: "Low",
                    value: "Low",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'Low',
                        TraditionalChinese: '低'
                    },
                    nodes: null
                },
                {
                    key: "Medium", value: "Medium",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'Medium',
                        TraditionalChinese: '中'
                    },
                    nodes: null,
                },
                {
                    key: "High", value: "High",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'High',
                        TraditionalChinese: '高'
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'Back',
                        TraditionalChinese: '返回'
                    },
                    nodes: null,
                }
            ]
        },
        {
            key: "VideoLevel",
            value: "Auto",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Video Level',
                TraditionalChinese: '視訊等級'
            },
            nodes: [
                {
                    key: "Auto",
                    value: "Auto",
                    mode: ModeType.radio,
                    only: ["HDMI"],
                    merge: true,
                    language: {
                        English: 'Auto',
                        TraditionalChinese: '自動'
                    },
                    nodes: null
                },
                {
                    key: "LimitedRange(16 - 235)",
                    value: "Limited Range (16 - 235)",
                    mode: ModeType.radio,
                    only: ["HDMI"],
                    merge: true,
                    language: {
                        English: 'Limited Range (16 - 235）',
                        TraditionalChinese: '限制範圍(16 - 235）'
                    },
                    nodes: null
                },
                {
                    key: "FullRange(0 - 255)",
                    value: "Full Range (0 - 255)",
                    mode: ModeType.radio,
                    only: ["HDMI"],
                    merge: true,
                    language: {
                        English: 'Full Range (0 - 255)',
                        TraditionalChinese: '完整範圍 (16 - 235）'
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'Back',
                        TraditionalChinese: '返回'
                    },
                    nodes: null,
                }
            ]
        },
        // 重置
        {
            key: "Reset", value: null,
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            merge: true,
            language: {
                English: 'Reset',
                TraditionalChinese: '重置'
            },
            nodes: null
        },
        // 返回
        {
            key: "Back", value: null,
            mode: ModeType.button,
            merge: true,
            only: ["HDMI", "VGA"],
            language: {
                English: 'Back',
                TraditionalChinese: '返回'
            },
            nodes: null
        }
    ];
};