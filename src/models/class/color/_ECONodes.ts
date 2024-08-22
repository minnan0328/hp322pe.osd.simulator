// 顏色 > ECO

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class ECONodes implements Nodes {
    key = "ECO";
    value = "ECO";
    result = "ECO";
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
        German: "ECO",
        SimplifiedChinese: "ECO",
        TraditionalChinese: "ECO",
        English: "ECO",
        Español: "ECO",
        French: "ECO",
        Italian: "ECO",
        Japanese: "ECO",
        Nederlands: "ECO",
        BrazilianPortuguese: "ECO",
        Russian: "ECO"
    };
    unit = null;
    nodes = null
};