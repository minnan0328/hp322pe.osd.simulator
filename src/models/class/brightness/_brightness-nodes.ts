// 亮度 > 亮度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class BrightnessNodes implements Nodes {
    key = "Brightness";
    value = 86;
    displayValue = true;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Brightness",
        TraditionalChinese: "亮度"
    };
    unit = null;
    nodes = [
        {
            key: "BrightnessNodes",
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
    ];
};