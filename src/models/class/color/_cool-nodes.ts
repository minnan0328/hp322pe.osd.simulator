// 顏色 > 冷色

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class CoolNodes implements Nodes {
    key = "Cool";
    value = "Cool";
    displayValue = false;
    displayState = false;
    livePreview = true;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Cool",
        TraditionalChinese: "冷色"
    };
    unit = null;
    nodes = null
};