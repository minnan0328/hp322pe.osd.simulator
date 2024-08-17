import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Management implements Nodes {
    key = "Management";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Management",
        TraditionalChinese: "管理"
    };
    unit = null;
    nodes = [
        {
            key: "FactoryReset",
            value: "Yes",
            mode: ModeType.setting,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Factory Reset",
                TraditionalChinese: "Factory Reset"
            },
            unit: null,
            nodes: [
                {
                    key: "Yes",
                    value: "Yes",
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Yes",
                        TraditionalChinese: "是"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "No",
                    value: "No",
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "No",
                        TraditionalChinese: "否"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "DDC/CISupport",
            value: "On",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "DDC/CI Support",
                TraditionalChinese: "DDC/CI Support"
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
            key: "DiagnosticPatterns",
            value: "Cycle Patterns",
            mode: ModeType.setting,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Diagnostic Patterns",
                TraditionalChinese: "Diagnostic Patterns"
            },
            unit: null,
            nodes: [
                {
                    key: "CyclePatterns",
                    value: null,
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Cycle Patterns",
                        TraditionalChinese: "Cycle Patterns"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FullScreenBlack",
                    value: null,
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Black",
                        TraditionalChinese: "Full Screen Black"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FullScreenWhite",
                    value: null,
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen White",
                        TraditionalChinese: "Full Screen White"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FullScreenRed",
                    value: null,
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Red",
                        TraditionalChinese: "Full Screen Red"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FullScreenGreen",
                    value: null,
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Green",
                        TraditionalChinese: "Full Screen Green"
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "FullScreenBlue",
                    value: null,
                    mode: ModeType.button,
                    rangeMin: 0,
                    rangeMax: 0,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Full Screen Blue",
                        TraditionalChinese: "Full Screen Blue"
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        {
            key: "Accessibility",
            value: "Off",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Accessibility",
                TraditionalChinese: "Accessibility"
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
                // 返回
                innerBackEnum
            ]
        },
        // 重置
        resetEnum,
        // 上一步
        backEnum
    ];
};