// 顏色 > 自訂 RBG

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class CustomRGBNodes implements Nodes {
    key = "CustomRGB";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = true;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Custom RGB",
        TraditionalChinese: "自訂 RBG"
    };
    unit = null;
    nodes = [
        // RGB range (0~255)
        // Red Color
        {
            key: "RedColor",
            value: 255,
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            rangeIcon: null,
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
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            rangeIcon: null,
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
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            rangeIcon: null,
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
};