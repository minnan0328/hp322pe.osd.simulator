// 亮度 > 亮度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class BrightnessNodes implements Nodes {
    key = "Brightness";
    value = 86;
    result = 86;
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 1;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Helligkeit",
        SimplifiedChinese: "亮度",
        TraditionalChinese: "亮度",
        English: "Brightness",
        Español: "Brillo",
        French: "Luminosité",
        Italian: "Luminosità",
        Japanese: "輝度",
        Nederlands: "Helderheid",
        BrazilianPortuguese: "Brilho",
        Russian: "Яркость"
    };
    unit = null;
    nodes = [
        {
            key: "BrightnessNodes",
            value: this.value,
            result: this.result,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
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