// 影像 > 自動調整

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class AutoAdjustmentNodes implements Nodes {
    key = "AutoAdjustment";
    value = null;
    result = null;
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
        German: "Automat. Einstellung",
        SimplifiedChinese: "自动调整",
        TraditionalChinese: "自動調整",
        English: "Auto-Adjustment",
        Español: "Ajuste automático",
        French: "Réglage auto",
        Italian: "Regolazione autom.",
        Japanese: "自動調整",
        Nederlands: "Automatisch aanpassen",
        BrazilianPortuguese: "Ajuste Automático",
        Russian: "Автом. регулировка"
    };
    unit = null;
    nodes = null;
};