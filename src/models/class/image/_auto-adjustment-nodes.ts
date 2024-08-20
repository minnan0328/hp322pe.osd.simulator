// 影像 > 自動調整

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class AutoAdjustmentNodes implements Nodes {
    key = "AutoAdjustment";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["VGA"];
    mergeGrid = false
    language = {
        English: "Auto-Adjustment",
        TraditionalChinese: "自動調整"
    };
    unit = null;
    nodes = null;
};