// 顏色 > 原生

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class NativeNodes implements Nodes {
    key = "Native";
    value = "Native";
    result = "Native";
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
        German: "Eigen",
        SimplifiedChinese: "本机",
        TraditionalChinese: "原生",
        English: "Native",
        Español: "Nativo",
        French: "Native",
        Italian: "Nativo",
        Japanese: "ネイティブ",
        Nederlands: "Eigen",
        BrazilianPortuguese: "Nativo",
        Russian: "Исходный"
    };
    unit = null;
    nodes = null
};