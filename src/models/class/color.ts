import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Color implements Nodes {
    key = "Color";
    value = "Neutral";
    mode = ModeType.button;
    only = ["VGA"];
    merge = false;
    language = {
        English: 'Color',
        TraditionalChinese: '顏色'
    };
    nodes = [
        // ECO
        {
            key: "ECO",
            value: "ECO",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'ECO',
                TraditionalChinese: 'ECO'
            },
            nodes: null
        },
        // 暖色
        {
            key: "Warm",
            value: "Warm",
            mode: ModeType.range,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Warm',
                TraditionalChinese: '暖色'
            },
            nodes: null
        },
        // 中性色
        {
            key: "Neutral",
            value: "Neutral",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Neutral',
                TraditionalChinese: '中性色'
            },
            nodes: null
        },
        // 冷色
        {
            key: "LowBlueLight",
            value: "Low Blue Light",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Low Blue Light',
                TraditionalChinese: '冷色'
            },
            nodes: null
        },
        // 原生
        {
            key: "HPEnhance+",
            value: "Medium",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'HP Enhance+',
                TraditionalChinese: '原生'
            },
            nodes: [
                {
                    key: "Low",
                    value: " Auto",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'Low',
                        TraditionalChinese: '低'
                    },
                    nodes: null,
                },
                {
                    key: "Medium",
                    value: "Medium",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'Medium',
                        TraditionalChinese: '中'
                    },
                    nodes: null,
                },
                {
                    key: "High",
                    value: "High",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'High',
                        TraditionalChinese: '高'
                    },
                    nodes: null,
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