import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Power implements Nodes {
    key = "Power";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Power",
        TraditionalChinese: "電源"
    };
    unit = null;
    nodes = [
        {
            key: "AutoSleepMode",
            value: "On",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Auto-Sleep Mode",
                TraditionalChinese: "Auto-Sleep Mode"
            },
            unit: null,
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
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
                    rangeIcon: null,
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
            key: "PowerOnRecall",
            parents: "AutoSleepMode",
            value: "On",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Power-On Recall",
                TraditionalChinese: "Power-On Recall"
            },
            unit: null,
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
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
                    rangeIcon: null,
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
            key: "PowerLED",
            value: "On",
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Power LED",
                TraditionalChinese: "Power LED"
            },
            unit: null,
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
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
                    rangeIcon: null,
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
        // 重置
        resetEnum,
        // 上一步
        backEnum
    ];
};