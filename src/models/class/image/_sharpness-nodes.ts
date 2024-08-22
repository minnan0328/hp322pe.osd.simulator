// 影像 > 銳利度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';
const BackEnum = new Back();

export default class SharpnessNodes implements Nodes {
    key = "Sharpness";
    value = "Level 4";
    result = "Level 4";
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 8;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Sharpness",
        TraditionalChinese: "銳利度"
    };
    unit = null;
    nodes = [
        {
            key: "Soft",
            value: "Soft",
            result: "Soft",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Soft",
                TraditionalChinese: "柔和"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level2",
            value: "Level 2",
            result: "Level 2",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 2",
                TraditionalChinese: "2級"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level3",
            value: "Level 3",
            result: "Level 3",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 3",
                TraditionalChinese: "3級"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level4",
            value: "Level 4",
            result: "Level 4",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 4",
                TraditionalChinese: "4級"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level5",
            value: "Level 5",
            result: "Level 5",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 5",
                TraditionalChinese: "5級"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level6",
            value: "Level 6",
            result: "Level 6",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 6",
                TraditionalChinese: "6級"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Sharp",
            value: "Sharp",
            result: "Sharp",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Sharp",
                TraditionalChinese: "銳利"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key,
        }
    ];
};