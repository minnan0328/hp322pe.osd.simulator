// 電源 > 重新開機

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class PowerOnRecallNodes implements Nodes {
    key = "PowerOnRecall";
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
        German: "Einschaltstatus speichern",
        SimplifiedChinese: "开机复位",
        TraditionalChinese: "重新開機",
        English: "Power-On Recall",
        Español: "Reactivar",
        French: "Réveil",
        Italian: "Ripristino all’accensione",
        Japanese: "再開時に電源オン",
        Nederlands: "Opstartstand opslaan",
        BrazilianPortuguese: "Ligar Novamente",
        Russian: "Восстан. питания"
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