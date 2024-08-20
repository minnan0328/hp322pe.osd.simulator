// 電源 > 電源指示燈

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, OnNodes, OffNodes } from '../_utilities';

const BackEnum = new Back();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class PowerLEDNodes implements Nodes {
    key = "PowerLED";
    value = OnNodesEnum.value;
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
        English: "Power LED",
        TraditionalChinese: "電源指示燈"
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