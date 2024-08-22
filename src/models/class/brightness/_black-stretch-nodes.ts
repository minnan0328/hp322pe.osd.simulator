// 亮度 > 黑色延展

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OffNodes, LowNodes, MediumNodes, HighNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const offNodesEnum = new OffNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

export default class BlackStretchNodes implements Nodes {
    key = "BlackStretch";
    value = offNodesEnum.value;
    result = offNodesEnum.result;
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 5;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Schwarzdehnung",
        SimplifiedChinese: "黑延伸",
        TraditionalChinese: "黑色延展",
        English: "Black Stretch",
        Español: "Estirar negro",
        French: "Suramplification du noir",
        Italian: "Controllo del nero",
        Japanese: "黒色ストレッチ",
        Nederlands: "Black Stretch",
        BrazilianPortuguese: "Contraste de sombreado",
        Russian: "Растяжение черного"
    };
    unit = null;
    nodes = [
        // 關
        {
            ...offNodesEnum,
            livePreview: true,
            parents: this.key
        },
        // 低
        {
            ...LowNodesEnum,
            livePreview: true,
            parents: this.key
        },
        // 中
        {
            ...MediumNodesEnum,
            livePreview: true,
            parents: this.key
        },
        // 高
        {
            ...HighNodesEnum,
            livePreview: true,
            parents: this.key
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};