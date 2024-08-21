// 功能表 > 指定鍵 > 1~3 共用

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export class AssignAutoAdjustmentNodes implements Nodes {
    key = "AssignAutoAdjustment";
    value = "Auto-Adjustment";
    result = "Auto-Adjustment";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
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

export class AssignBrightnessNodes implements Nodes {
    key = "AssignBrightness";
    value = "Brightness";
    result = "Brightness";
    displayValue = false;
    displayState = false;
    livePreview = false;
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
        English: "Brightness",
        TraditionalChinese: "亮度"
    };
    unit = null;
    nodes = null;
};

export class AssignColorNodes implements Nodes {
    key = "AssignColor";
    value = "Color";
    result = "Color";
    displayValue = false;
    displayState = false;
    livePreview = false;
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
        English: "Color",
        TraditionalChinese: "顏色"
    };
    unit = null;
    nodes = null;
};

export class AssignDisplayInformationNodes implements Nodes {
    key = "AssignDisplayInformation";
    value = "Display Information";
    result = "Display Information";
    displayValue = false;
    displayState = false;
    livePreview = false;
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
        English: "Display Information",
        TraditionalChinese: "顯示資訊"
    };
    unit = null;
    nodes = null;
};

export class AssignNextActiveInputNodes implements Nodes {
    key = "AssignNextActiveInput";
    value = "Next Active Input";
    result = "Next Active Input";
    displayValue = false;
    displayState = false;
    livePreview = false;
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
        English: "Next Active Input",
        TraditionalChinese: "下一個使用中的輸入"
    };
    unit = null;
    nodes = null;
};

export class AssignEmptyNodes implements Nodes {
    key = "AssignEmpty";
    value = "Empty (No Function)";
    result = "Empty (No Function)";
    displayValue = false;
    displayState = false;
    livePreview = false;
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
        English: "Empty (No Function)",
        TraditionalChinese: "無定義（沒有功能）"
    };
    unit = null;
    nodes = null;
};