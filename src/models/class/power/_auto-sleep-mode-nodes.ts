// 電源 > 自動睡眠模式

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AutoSleepModeNodes implements Nodes {
    key = "AutoSleepMode";
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
        German: "Automat. Ruhemodus",
        SimplifiedChinese: "自动睡眠模式",
        TraditionalChinese: "自動睡眠模式",
        English: "Auto-Sleep Mode",
        Español: "Modo de apagado automático",
        French: "Mode Veille automatique",
        Italian: "Modalità disattivazione automatica",
        Japanese: "自動スリープ モード",
        Nederlands: "Automatische slaapmodus",
        BrazilianPortuguese: "Modo Suspensão automática",
        Russian: "Автом. спящий режим"
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