// 顏色 > 冷色

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class CoolNodes implements Nodes {
    key = "Cool";
    value = "Cool";
    result = "Cool";
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
        German: "Kühl",
        SimplifiedChinese: "冷色",
        TraditionalChinese: "冷色",
        English: "Cool",
        Español: "Frío",
        French: "Froid",
        Italian: "Freddo",
        Japanese: "寒色",
        Nederlands: "Koel",
        BrazilianPortuguese: "Suave",
        Russian: "Холодный"
    };
    unit = null;
    nodes = null
};