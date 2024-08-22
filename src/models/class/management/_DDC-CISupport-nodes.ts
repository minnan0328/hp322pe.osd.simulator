// 管理 > 支援 DDC/DC

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class DDCCISupportNodes implements Nodes {
    key = "DDC/CISupport";
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
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        German: "DDC/CI-Unterstützung",
        SimplifiedChinese: "DDC/CI 支持",
        TraditionalChinese: "支援 DDC/CI",
        English: "DDC/CI Support",
        Español: "Compatibilidad DDC/CI",
        French: "Prise en charge DDC/CI",
        Italian: "Supporto DDC/CI",
        Japanese: "DDC/CI サポート",
        Nederlands: "DDC/CI-ondersteuning",
        BrazilianPortuguese: "Suporte DDC/CI",
        Russian: "Поддержка DDC/CI"
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