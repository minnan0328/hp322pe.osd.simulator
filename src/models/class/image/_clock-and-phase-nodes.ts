// 影像 > 時脈和相位

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';
const BackEnum = new Back();

export default class HPEnhancePlusNodes implements Nodes {
    key = "ClockandPhase";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["VGA"];
    mergeGrid = false
    language = {
        English: "Clock and Phase",
        TraditionalChinese: "時脈和相位"
    };
    unit = null;
    nodes = [
        // 時脈
        {
            // VGA only - Range (0~100)
            key: "Clock",
            value: 0,
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Clock",
                TraditionalChinese: "時脈"
            },
            unit: null,
            nodes: null
        },
        // 相位
        {
            // Range (0~100)
            key: "Phase",
            value: 0,
            displayValue: false,
            displayState: false,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Phase",
                TraditionalChinese: "相位"
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