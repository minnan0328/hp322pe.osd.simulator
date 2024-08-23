// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import BrightnessNodes from './_brightness-nodes';
import ContrastNodes from './_contrast-nodes';
import DynamicContrastNodes from './_dynamic-contrast-nodes';
import BlackStretchNodes from './_black-stretch-nodes';
import VideoLevelNodes from './_video-level-nodes';

const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();
const DynamicContrastNodesEnum = new DynamicContrastNodes();
const BlackStretchNodesEnum = new BlackStretchNodes();
const VideoLevelNodesEnum = new VideoLevelNodes();

export default class Brightness extends DefaultNodes implements Nodes {
    key = "BrightnessPlus";
    selected = "BrightnessPlus";
    result = "BrightnessPlus";
    size = 7;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Helligkeit +",
        SimplifiedChinese: "亮度 +",
        TraditionalChinese: "亮度 +",
        English: "Brightness +",
        Español: "Brillo +",
        French: "Luminosité +",
        Italian: "Luminosità +",
        Japanese: "輝度＋",
        Nederlands: "Helderheid +",
        BrazilianPortuguese: "Brilho +",
        Russian: "Яркость +"
    };
    nodes = [
        // 亮度
        {
            ...BrightnessNodesEnum,
            parents: this.key
        },
        // 對比
        {
            ...ContrastNodesEnum,
            parents: this.key
        },
        // 動態對比
        {
            ...DynamicContrastNodesEnum,
            parents: this.key
        },
        // 黑色延展
        {
            ...BlackStretchNodesEnum,
            parents: this.key
        },
        // 視訊等級
        {
            ...VideoLevelNodesEnum,
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
        }
    ];
};