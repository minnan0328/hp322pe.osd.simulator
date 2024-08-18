// 管理 > 支援 DDC/DC

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, OnNodes, OffNodes } from '../_utilities';

const BackEnum = new Back();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class DDCCISupportNodes implements Nodes {
    key = "DDC/CISupport";
    value = OnNodesEnum.value;
    displayValue = true;
    parents = null;
    mode = ModeType.setting;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "DDC/CI Support",
        TraditionalChinese: "支援 DDC/DC"
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