// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export class Reset implements Nodes {
    key = "Reset";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
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
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Back",
        TraditionalChinese: "上一步"
    };
    unit = null;
    nodes = null;
};

// On enum
export class OnNodes implements Nodes {
    key = "On";
    value = "On";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "On",
        TraditionalChinese: "開"
    };
    unit = null;
    nodes = null;
};

// Off enum
export class OffNodes implements Nodes {
    key = "Off";
    value = "Off";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Off",
        TraditionalChinese: "關"
    };
    unit = null;
    nodes = null;
};

// Low enum
export class LowNodes implements Nodes {
    key = "Low";
    value = "Low";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Low",
        TraditionalChinese: "低"
    };
    unit = null;
    nodes = null;
};

// Medium enum
export class MediumNodes implements Nodes {
    key = "Medium";
    value = "Medium";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Medium",
        TraditionalChinese: "中"
    };
    unit = null;
    nodes = null;
};

// High enum
export class HighNodes implements Nodes {
    key = "High";
    value = "High";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "High",
        TraditionalChinese: "高"
    };
    unit = null;
    nodes = null;
};
// Top enum
export class TopNodes implements Nodes {
    key = "Top";
    value = "Top";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Top",
        TraditionalChinese: "上"
    };
    unit = null;
    nodes = null;
};
// Bottom enum
export class BottomNodes implements Nodes {
    key = "Bottom";
    value = "Bottom";
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Bottom",
        TraditionalChinese: "下"
    };
    unit = null;
    nodes = null;
};
// page change button
export class PreviousPageButtonsNodes implements Nodes {
    key = "PreviousPageButtons";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.paginationButton;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Previous Page",
        TraditionalChinese: "上一頁"
    };
    unit = null;
    nodes = null;
};
// page change button
export class NextPageButtonsNodes implements Nodes {
    key = "NextPageButtons";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.paginationButton;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Next Page",
        TraditionalChinese: "下一頁"
    };
    unit = null;
    nodes = null;
};