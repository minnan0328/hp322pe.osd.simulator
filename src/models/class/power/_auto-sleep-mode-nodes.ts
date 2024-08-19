// 電源 > 自動睡眠模式

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, OnNodes, OffNodes } from '../_utilities';

const BackEnum = new Back();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AutoSleepModeNodes implements Nodes {
    key = "AutoSleepMode";
    value = OnNodesEnum.value;
    displayValue = true;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Auto-Sleep Mode",
        TraditionalChinese: "自動睡眠模式"
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
            ...BackEnum,
            parents: this.key
        }
    ]
};