// 影像 > 影像縮放

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';
const BackEnum = new Back();

export default class ImageScalingNodes implements Nodes {
    key = "ImageScaling";
    value = "Fill to Screen";
    displayValue = true;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Image Scaling",
        TraditionalChinese: "影像縮放"
    };
    unit = null;
    nodes = [
        {
            key: "FilltoScreen",
            value: "Fill to Screen",
            displayValue: false,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Fill to Screen",
                TraditionalChinese: "填滿影像"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FilltoAspectRatio",
            value: "Fill to Aspect Ratio",
            displayValue: false,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Fill to Aspect Ratio",
                TraditionalChinese: "填滿至長寬比"
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