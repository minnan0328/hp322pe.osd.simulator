// 功能表 > 功能表位置

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';

const BackEnum = new Back();

export default class MenuPositionNodes implements Nodes {
    key = "MenuPosition";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 2;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Menu Position",
        TraditionalChinese: "功能表位置"
    };
    unit = null;
    nodes = [
        {
            // Range (0~100)
            key: "Horizontal",
            value: 74,
            result: 74,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Horizontal",
                TraditionalChinese: "水平"
            },
            unit: null,
            nodes: null
        },
        {
            // Range (0~100)
            key: "Vertical",
            value: 81,
            result: 81,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
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
            parents: this.key
        }
    ]
};