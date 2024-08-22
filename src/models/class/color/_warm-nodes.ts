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
        German: "Warm",
        SimplifiedChinese: "暖色",
        TraditionalChinese: "暖色",
        English: "Warm",
        Español: "Caldo",
        French: "Chaud",
        Italian: "Caldo",
        Japanese: "暖色",
        Nederlands: "Warm",
        BrazilianPortuguese: "Aquecida",
        Russian: "Теплый"
    };
    unit = null;
    nodes = null
};