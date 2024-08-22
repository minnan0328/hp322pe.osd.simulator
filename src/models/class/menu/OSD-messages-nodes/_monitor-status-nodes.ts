// 亮度 > 螢幕狀態

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OffNodes, TopNodes, MediumNodes, BottomNodes } from '../../_utilities';

const BackNodesEnum = new BackNodes();
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
        German: "Monitorstatus",
        SimplifiedChinese: "显示器状态",
        TraditionalChinese: "螢幕狀態",
        English: "Monitor Status",
        Español: "Estado del monitor",
        French: "État du moniteur",
        Italian: "Stato Monitor",
        Japanese: "モニター ステータス",
        Nederlands: "Monitor Status",
        BrazilianPortuguese: "Status do Monitor",
        Russian: "Состояние монитора"
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
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};