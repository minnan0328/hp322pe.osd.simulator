// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Brightness implements Nodes {
    key = "Brightness";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Brightness +",
        TraditionalChinese: "亮度"
    };
    unit = null;
    nodes = [
        // 亮度
        {
            key: "Brightness",
            value: 86,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Brightness",
                TraditionalChinese: "亮度"
            },
            unit: null,
            nodes: [
                {
                    key: "Brightness",
                    value: 86,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 100,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Brightness",
                        TraditionalChinese: "亮度"
                    },
                    unit: null,
                    nodes: null
                }
            ]
        },
        // 對比
        {
            key: "Contrast",
            value: 100,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Contrast",
                TraditionalChinese: "對比"
            },
            unit: null,
            nodes: [
                {
                    key: "Contrast",
                    value: 100,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 100,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Contrast",
                        TraditionalChinese: "對比"
                    },
                    unit: null,
                    nodes: null
                }
            ]
        },
        // 動態對比
        {
            key: "DynamicContrast",
            value: "Off",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Dynamic Contrast",
                TraditionalChinese: "動態對比"
            },
            unit: null,
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "On",
                        TraditionalChinese: "開"
                    },
                    unit: null,
                    nodes: null
                },
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
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "BlackStretch",
            value: "Off",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Black Stretch",
                TraditionalChinese: "黑色延展"
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
                    key: "Low",
                    value: "Low",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Low",
                        TraditionalChinese: "低"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Medium",
                    value: "Medium",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Medium",
                        TraditionalChinese: "中"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "High",
                    value: "High",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "High",
                        TraditionalChinese: "高"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "VideoLevel",
            value: "Auto",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Video Level",
                TraditionalChinese: "視訊等級"
            },
            unit: null,
            nodes: [
                {
                    key: "Auto",
                    value: "Auto",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI"],
                    mergeGrid: false,
                    language: {
                        English: "Auto",
                        TraditionalChinese: "自動"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "LimitedRange(16 - 235)",
                    value: "Limited Range (16 - 235)",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI"],
                    mergeGrid: false,
                    language: {
                        English: "Limited Range (16 - 235）",
                        TraditionalChinese: "限制範圍(16 - 235）"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FullRange(0 - 255)",
                    value: "Full Range (0 - 255)",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI"],
                    mergeGrid: false,
                    language: {
                        English: "Full Range (0 - 255)",
                        TraditionalChinese: "完整範圍 (16 - 235）"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        // 重置
        resetEnum,
        // 上一步
        backEnum
    ];
};