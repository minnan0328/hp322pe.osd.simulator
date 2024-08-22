// 亮度 > 螢幕狀態

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, OffNodes, TopNodes, MediumNodes, BottomNodes } from '../../_utilities';

const BackEnum = new Back();
const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const MediumNodesEnum = new MediumNodes();
const BottomNodesEnum = new BottomNodes();

export default class MonitorStatusNodes implements Nodes {
    key = "MonitorStatus";
    value = MediumNodesEnum.value;
    result = TopNodesEnum.result;
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
        English: "Monitor Status",
        TraditionalChinese: "螢幕狀態"
    };
    unit = null;
    nodes = [
        {
            ...OffNodesEnum,
            parents: this.key
        },
        {
            ...TopNodesEnum,
            parents: this.key
        },
        {
            ...MediumNodesEnum,
            parents: this.key
        },
        {
            ...BottomNodesEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};