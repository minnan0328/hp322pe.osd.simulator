// 管理 > 診斷模式

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';

const BackEnum = new Back();

export default class DiagnosticPatternsNodes implements Nodes {
    // Y (Cycle Patterns highlighted)
    key = "DiagnosticPatterns";
    value = "Cycle Patterns";
    displayValue = false;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Diagnostic Patterns",
        TraditionalChinese: "診斷模式"
    };
    unit = null;
    nodes = [
        {
            key: "CyclePatterns",
            value: "Cycle Patterns",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Cycle Patterns",
                TraditionalChinese: "循環模式"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FullScreenBlack",
            value: "Full Screen Black",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Full Screen Black",
                TraditionalChinese: "全螢幕黑色"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FullScreenWhite",
            value: "Full Screen White",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Full Screen White",
                TraditionalChinese: "全螢幕白色"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FullScreenRed",
            value: "Full Screen Red",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Full Screen Red",
                TraditionalChinese: "全螢幕紅色"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FullScreenGreen",
            value: "Full Screen Green",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Full Screen Green",
                TraditionalChinese: "全螢幕綠色"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FullScreenBlue",
            value: "Full Screen Blue",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Full Screen Blue",
                TraditionalChinese: "全螢幕藍色"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};