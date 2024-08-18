// 亮度 > 黑色延展

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, OffNodes, LowNodes, MediumNodes, HighNodes } from '../_utilities';

const BackEnum = new Back();
const offNodesEnum = new OffNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

export default class BlackStretchNodes implements Nodes {
    key = "BlackStretch";
    value = offNodesEnum.value;
    displayValue = true;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Black Stretch",
        TraditionalChinese: "黑色延展"
    };
    unit = null;
    nodes = [
        // 關
        {
            ...offNodesEnum,
            parents: this.key
        },
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