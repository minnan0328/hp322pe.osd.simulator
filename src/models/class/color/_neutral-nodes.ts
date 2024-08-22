// 顏色 > 中性色

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class NeutralNodes implements Nodes {
    key = "Neutral";
    value = "Neutral";
    result = "Neutral";
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
        German: "Neutral",
        SimplifiedChinese: "中性色",
        TraditionalChinese: "中性色",
        English: "Neutral",
        Español: "Neutro",
        French: "Neutre",
        Italian: "Neutro",
        Japanese: "無彩色",
        Nederlands: "Neutraal",
        BrazilianPortuguese: "Neutra",
        Russian: "Нейтральный"
    };
    unit = null;
    nodes = null
};