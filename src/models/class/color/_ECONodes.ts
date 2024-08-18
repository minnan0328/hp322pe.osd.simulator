// 顏色 > ECO

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class ECONodes implements Nodes {
    key = "ECO";
    value = "ECO";
    displayValue = false;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "ECO",
        TraditionalChinese: "ECO"
    };
    unit = null;
    nodes = null
};