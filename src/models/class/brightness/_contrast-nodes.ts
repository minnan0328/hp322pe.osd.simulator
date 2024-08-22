// 亮度 > 對比

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class contrastNodes implements Nodes {
    key = "Contrast";
    value = 100;
    result = 100;
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
        German: "Kontrast",
        SimplifiedChinese: "对比度",
        TraditionalChinese: "對比",
        English: "Contrast",
        Español: "Contraste",
        French: "Contraste",
        Italian: "Contrasto",
        Japanese: "コントラスト",
        Nederlands: "Contrast",
        BrazilianPortuguese: "Contraste",
        Russian: "Контрастность"
    };
    unit = null;
    nodes = [
        {
            key: "ContrastNodes",
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
    ]
};