import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Image implements Nodes {
    key = "Image";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Image",
        TraditionalChinese: "影像"
    };
    unit = null;
    nodes = [
        {
            key: "AutoAdjustment",
            value: null,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Auto-Adjustment",
                TraditionalChinese: "Auto-Adjustment"
            },
            unit: null,
            nodes: null
        },
        {
            key: "ClockandPhase",
            value: null,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Clock and Phase",
                TraditionalChinese: "Clock and Phase"
            },
            unit: null,
            nodes: [
                {
                    // VGA only - Range (0~100)
                    key: "Clock(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.horizontalRange,
                    rangeMin: 0,
                    rangeMax: 100,
                    rangeIcon: null,
                    only: ["VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Clock",
                        TraditionalChinese: "Clock"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    // Range (0~100)
                    key: "Phase(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.horizontalRange,
                    rangeMin: 0,
                    rangeMax: 100,
                    rangeIcon: null,
                    only: ["VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Phase",
                        TraditionalChinese: "Phase"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "ImagePosition",
            value: null,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Image Position",
                TraditionalChinese: "Image Position"
            },
            unit: null,
            nodes: [
                {
                    // VGA only - Range (0~100)
                    key: "Horizontal(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.horizontalRange,
                    rangeMin: 0,
                    rangeMax: 100,
                    rangeIcon: null,
                    only: ["VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Horizontal",
                        TraditionalChinese: "Horizontal"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    // Range (0~100)
                    key: "Vertical(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.horizontalRange,
                    rangeMin: 0,
                    rangeMax: 100,
                    rangeIcon: null,
                    only: ["VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Vertical",
                        TraditionalChinese: "Vertical"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "ResponseTime",
            value: "Level 1",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Response Time",
                TraditionalChinese: "Response Time"
            },
            unit: null,
            nodes: [
                {
                    key: "Level1",
                    value: "Level 1",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 1",
                        TraditionalChinese: "Level 1"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level2(Fast)",
                    value: "Level 2 (Fast)",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 2 (Fast)",
                        TraditionalChinese: "Level 2 (Fast)"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level3",
                    value: "Level 3",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 3",
                        TraditionalChinese: "Level 3"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level4(Fastest)",
                    value: "Level 4 (Fastest)",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 4 (Fastest)",
                        TraditionalChinese: "Level 4 (Fastest)"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "Sharpness",
            value: "Level 4",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Sharpness",
                TraditionalChinese: "Sharpness"
            },
            unit: null,
            nodes: [
                {
                    key: "Level1",
                    value: "Level 1",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 1",
                        TraditionalChinese: "Level 1"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level2",
                    value: "Level 2",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 2",
                        TraditionalChinese: "Level 2"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level3",
                    value: "Level 3",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 3",
                        TraditionalChinese: "Level 3"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level4",
                    value: "Level 4",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 4",
                        TraditionalChinese: "Level 4"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level5",
                    value: "Level 5",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Level 5",
                        TraditionalChinese: "Level 5"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Level6",
                    value: "Level 6",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 6",
                        TraditionalChinese: "Level 6"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Sharp",
                    value: "Sharp",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Sharp",
                        TraditionalChinese: "Sharp"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "ImageScaling",
            value: "Fill to Screen",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Image Scaling",
                TraditionalChinese: "Image Scaling"
            },
            unit: null,
            nodes: [
                {
                    key: "FilltoScreen",
                    value: "Fill to Screen",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Fill to Screen",
                        TraditionalChinese: "Fill to Screen"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FilltoAspectRatio",
                    value: "Fill to Aspect Ratio",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Fill to Aspect Ratio",
                        TraditionalChinese: "Fill to Aspect Ratio"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Sharp",
                    value: "Sharp",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Sharp",
                        TraditionalChinese: "Sharp"
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