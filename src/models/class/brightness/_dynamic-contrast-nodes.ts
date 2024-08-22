// 亮度 > 動態對比

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class DynamicContrastNodes implements Nodes {
    key = "DynamicContrast";
    value = OffNodesEnum.value;
    result = OffNodesEnum.result;
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 3;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Dynamischer Kontrast",
        SimplifiedChinese: "动态对比度",
        TraditionalChinese: "動態對比",
        English: "Dynamic Contrast",
        Español: "Contraste dinámico",
        French: "Contraste dynamique",
        Italian: "Contrasto dinamico",
        Japanese: "ダイナミック コントラスト",
        Nederlands: "Dynamisch contrast",
        BrazilianPortuguese: "Contraste dinâmico",
        Russian: "Динамическая контрастность"
    };
    unit = null;
    nodes = [
        {
            ...OnNodesEnum,
            parents: this.key
        },
        {
            ...OffNodesEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};