import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Color implements Nodes {
    key = "Color";
    value = "Neutral";
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Color",
        TraditionalChinese: "顏色"
    };
    unit = null;
    nodes = [
        // ECO
        {
            key: "ECO",
            value: "ECO",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "ECO",
                TraditionalChinese: "ECO"
            },
            unit: null,
            nodes: null
        },
        // 暖色
        {
            key: "Warm",
            value: "Warm",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Warm",
                TraditionalChinese: "暖色"
            },
            unit: null,
            nodes: null
        },
        // 中性色
        {
            key: "Neutral",
            value: "Neutral",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Neutral",
                TraditionalChinese: "中性色"
            },
            unit: null,
            nodes: null
        },
        // 冷色
        {
            key: "Cool",
            value: "Cool",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Cool",
                TraditionalChinese: "冷色"
            },
            unit: null,
            nodes: null
        },
        // 原生
        {
            key: "Native",
            value: "Native",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Native",
                TraditionalChinese: "原生"
            },
            unit: null,
            nodes: null
        },
        // 低藍光
        {
            key: "LowBlueLight",
            value: "Low Blue Light",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Low Blue Light",
                TraditionalChinese: "低藍光"
            },
            unit: null,
            nodes: null
        },
        // HP Enhance+
        {
            key: "HPEnhance+",
            value: "Medium",
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "HP Enhance+",
                TraditionalChinese: "HP Enhance+"
            },
            unit: null,
            nodes: [
                {
                    key: "Low",
                    value: " Auto",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Low",
                        TraditionalChinese: "低"
                    },
                    unit: null,
                    nodes: null,
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
                    nodes: null,
                },
                {
                    key: "High",
                    value: "High",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "High",
                        TraditionalChinese: "高"
                    },
                    unit: null,
                    nodes: null,
                },
                // 上一步
                innerBackEnum
            ]
        },
        // 自訂 RBG
        {
            key: "CustomRGB",
            value: null,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Custom RGB",
                TraditionalChinese: "自訂 RBG"
            },
            unit: null,
            nodes: [
                // RGB range (0~255)
                // Red Color
                {
                    key: "RedColor",
                    value: 255,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 255,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "R",
                        TraditionalChinese: "R"
                    },
                    unit: null,
                    nodes: null
                },
                // Green Color
                {
                    key: "GreenColor",
                    value: 255,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 255,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "G",
                        TraditionalChinese: "G"
                    },
                    unit: null,
                    nodes: null
                },
                // Blue Color
                {
                    key: "BlueColor",
                    value: 255,
                    mode: ModeType.range,
                    rangeMin: 0,
                    rangeMax: 255,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "B",
                        TraditionalChinese: "B"
                    },
                    unit: null,
                    nodes: null
                }
            ]
        },
        // 重置
        resetEnum,
        // 上一步
        backEnum
    ];
};