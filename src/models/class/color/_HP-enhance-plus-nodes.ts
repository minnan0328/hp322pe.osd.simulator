// 顏色 > HP Enhance+

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, LowNodes, MediumNodes, HighNodes } from '../_utilities';

const BackEnum = new Back();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

export default class HPEnhancePlusNodes implements Nodes {
    key = "HPEnhancePlus";
    value = MediumNodesEnum.value;
    result = MediumNodesEnum.result;
    displayValue = true;
    displayState = false;
    livePreview = true;
    size = 4;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "HP Enhance+",
        TraditionalChinese: "HP Enhance+"
    };
    unit = null;
    nodes = [
        // 低
        {
            ...LowNodesEnum,
            parents: this.key
        },
        // 中
        {
            ...MediumNodesEnum,
            parents: this.key
        },
        // 高
        {
            ...HighNodesEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};