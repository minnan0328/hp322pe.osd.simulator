// 影像 > 影像位置

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';
const BackEnum = new Back();

export default class ImagePositionPlusNodes implements Nodes {
    key = "ImagePosition";
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
        English: "Image Position",
        TraditionalChinese: "影像位置"
    };
    unit = null;
    nodes = [
        // 水平
        {
            // VGA only - Range (0~100)
            key: "Horizontal",
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
                English: "Horizontal",
                TraditionalChinese: "水平"
            },
            unit: null,
            nodes: null
        },
        // 垂直
        {
            // Range (0~100)
            key: "Vertical",
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
                English: "Vertical",
                TraditionalChinese: "垂直"
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