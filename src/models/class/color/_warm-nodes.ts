// 顏色 > 暖色

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class WarmNodes implements Nodes {
    key = "Warm";
    value = "Warm";
    result = "Warm";
    displayValue = false;
    displayState = false;
    livePreview = true;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Warm",
        TraditionalChinese: "暖色"
    };
    unit = null;
    nodes = null
};