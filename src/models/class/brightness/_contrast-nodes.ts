// 亮度 > 對比

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class contrastNodes implements Nodes {
    key = "Contrast";
    value = 100;
    displayValue = true;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Contrast",
        TraditionalChinese: "對比"
    };
    unit = null;
    nodes = [
        {
            key: "ContrastNodes",
            value: this.value,
            displayValue: false,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: "icon-brightness.svg",
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: this.language,
            unit: null,
            nodes: null
        }
    ]
};