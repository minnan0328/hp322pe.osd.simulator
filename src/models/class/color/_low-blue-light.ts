// 顏色 > 低藍光

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class LowBlueLightNodes implements Nodes {
    key = "LowBlueLight";
    value = "Low Blue Light";
    result = "Low Blue Light";
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
        German: "Schwaches blaues Licht",
        SimplifiedChinese: "低蓝光",
        TraditionalChinese: "低藍光",
        English: "Low Blue Light",
        Español: "Luz azul fraca",
        French: "Voyant bleu faible",
        Italian: "Riduci luce blu",
        Japanese: "低ブルー ライト",
        Nederlands: "Laag blauw licht",
        BrazilianPortuguese: "Luz azul clara",
        Russian: "Ослабление синего цвета"
    };
    unit = null;
    nodes = null
};