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
        English: "Native",
        TraditionalChinese: "原生"
    };
    unit = null;
    nodes = null
};