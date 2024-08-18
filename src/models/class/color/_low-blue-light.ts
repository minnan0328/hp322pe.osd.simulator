// 顏色 > 低藍光

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class LowBlueLightNodes implements Nodes {
    key = "LowBlueLight";
    value = "Low Blue Light";
    displayValue = false;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Low Blue Light",
        TraditionalChinese: "低藍光"
    };
    unit = null;
    nodes = null
};