import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { ResetNodes, BackNodes, ExitNodes } from '../_utilities';
import ECONodes from './_ECONodes';
import WarmNodes from './_warm-nodes';
import NeutralNodes from './_neutral-nodes';
import CoolNodes from './_cool-nodes';
import NativeNodes from './_native-nodes';
import LowBlueLightNodes from './_low-blue-light';
import HPEnhancePlusNodes from './_HP-enhance-plus-nodes';
import CustomRGBNodes from './_custom-RGB-nodes';

const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const ExitNodesEnum = new ExitNodes();
const ECONodesEnum = new ECONodes();
const WarmNodesEnum = new WarmNodes();
const NeutralNodesEnum = new NeutralNodes();
const CoolNodesEnum = new CoolNodes();
const NativeNodesEnum = new NativeNodes();
const LowBlueLightNodesEnum = new LowBlueLightNodes();
const HPEnhancePlusNodesEnum = new HPEnhancePlusNodes();
const CustomRGBNodesEnum = new CustomRGBNodes();

export default class Color implements Nodes {
    key = "Color";
    value = NeutralNodesEnum.value;
    result = NeutralNodesEnum.result;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 11;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Farbe",
        SimplifiedChinese: "颜色",
        TraditionalChinese: "色彩",
        English: "Color",
        Español: "Color",
        French: "Couleur",
        Italian: "Colore",
        Japanese: "色",
        Nederlands: "Kleur",
        BrazilianPortuguese: "Cor",
        Russian: "Цвет"
    };
    unit = null;
    nodes = [
        // ECO
        {
            ...ECONodesEnum,
            parents: this.key
        },
        // 暖色
        {
            ...WarmNodesEnum,
            parents: this.key
        },
        // 中性色
        {
            ...NeutralNodesEnum,
            parents: this.key
        },
        // 冷色
        {
            ...CoolNodesEnum,
            parents: this.key
        },
        // 原生
        {
            ...NativeNodesEnum,
            parents: this.key
        },
        // 低藍光
        {
            ...LowBlueLightNodesEnum,
            parents: this.key
        },
        // HP Enhance+
        {
            ...HPEnhancePlusNodesEnum,
            parents: this.key
        },
        // 自訂 RBG
        {
            ...CustomRGBNodesEnum,
            parents: this.key
        },
        // 重置
        {
            ...ResetNodesEnum,
            parents: this.key,
            mergeGrid: true 
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key,
            mergeGrid: true 
        },
        {
            ...ExitNodesEnum,
            parents: this.key,
        }
    ];
};