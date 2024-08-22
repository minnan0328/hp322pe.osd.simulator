// 電源 > 電源指示燈

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class PowerLEDNodes implements Nodes {
    key = "PowerLED";
    value = OnNodesEnum.value;
    result = OnNodesEnum.result;
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
        German: "Betriebs-LED",
        SimplifiedChinese: "电源 LED 指示灯",
        TraditionalChinese: "電源指示燈",
        English: "Power LED",
        Español: "LED de encendido",
        French: "Voyant d'alimentation",
        Italian: "LED alimentazione",
        Japanese: "電源ランプ",
        Nederlands: "Aan/uit-lampje",
        BrazilianPortuguese: "LED de energia",
        Russian: "Индикатор питания"
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