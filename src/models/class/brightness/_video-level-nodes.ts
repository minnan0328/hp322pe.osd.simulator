// 亮度 > 視訊等級

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';

const BackEnum = new Back();

export default class BlackStretchNodes implements Nodes {
    key = "VideoLevel";
    value = "Auto";
    result = "Auto";
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 4;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI"];
    mergeGrid = false
    language = {
        English: "Video Level",
        TraditionalChinese: "視訊等級"
    };
    unit = null;
    nodes = [
        // 自動
        {
            key: "Auto",
            value: "Auto",
            result: "Auto",
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
            only: ["HDMI"],
            mergeGrid: false,
            language: {
                English: "Auto",
                TraditionalChinese: "自動"
            },
            unit: null,
            nodes: null
        },
        // 限制範圍
        {
            key: "LimitedRange(16 - 235)",
            value: "Limited Range (16 - 235)",
            result: "Limited Range (16 - 235)",
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
            only: ["HDMI"],
            mergeGrid: false,
            language: {
                English: "Limited Range (16 - 235）",
                TraditionalChinese: "限制範圍(16 - 235）"
            },
            unit: null,
            nodes: null
        },
        // 完整範圍
        {
            key: "FullRange(0 - 255)",
            value: "Full Range (0 - 255)",
            result: "Full Range (0 - 255)",
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
        {
            ...BackEnum,
            mergeGrid: false
        }
    ]
};