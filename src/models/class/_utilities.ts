// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export class Reset implements Nodes {
    key = "Reset";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    only = ["HDMI", "VGA"];
    mergeGrid = true;
    language = {
        English: "Reset",
        TraditionalChinese: "重置"
    };
    unit = null;
    nodes = null;
};

export class Back implements Nodes {
    key = "Back";
    value = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    only = ["HDMI", "VGA"];
    mergeGrid = true;
    language = {
        English: "Back",
        TraditionalChinese: "上一步"
    };
    unit = null;
    nodes = null;
};