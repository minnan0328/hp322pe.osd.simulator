// 顏色 > 低藍光

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

export default class LowBlueLightNodes extends DefaultNodes implements Nodes {
    key = "LowBlueLight";
    selected = "Low Blue Light";
    result = "Low Blue Light";
    livePreview = true;
    mode = ModeType.radio;
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
};