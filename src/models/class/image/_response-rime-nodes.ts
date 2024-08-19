// 影像 > 回應時間

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';
const BackEnum = new Back();

export default class ResponseTimeNodes implements Nodes {
    key = "ResponseTime";
    value = "Level 1";
    displayValue = true;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Response Time",
        TraditionalChinese: "回應時間"
    };
    unit = null;
    nodes = [
        {
            key: "Level1",
            value: "Level 1",
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 1",
                TraditionalChinese: "1級"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level2(Fast)",
            value: "Level 2 (Fast)",
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 2 (Fast)",
                TraditionalChinese: "2級 (快)"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level3",
            value: "Level 3",
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
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
            key: "Level4(Fastest)",
            value: "Level 4 (Fastest)",
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Level 4 (Fastest)",
                TraditionalChinese: "4級 (最快)"
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