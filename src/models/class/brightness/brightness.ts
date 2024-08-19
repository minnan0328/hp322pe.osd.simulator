// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from '../_utilities';
import BrightnessNodes from './_brightness-nodes';
import ContrastNodes from './_contrast-nodes';
import DynamicContrastNodes from './_dynamic-contrast-nodes';
import BlackStretchNodes from './_black-stretch-nodes';
import VideoLevelNodes from './_video-level-nodes';

const ResetEnum = new Reset(); 
const BackEnum = new Back();
const BrightnessNodesEnum = new BrightnessNodes();
const ContrastNodesEnum = new ContrastNodes();
const DynamicContrastNodesEnum = new DynamicContrastNodes();
const BlackStretchNodesEnum = new BlackStretchNodes();
const VideoLevelNodesEnum = new VideoLevelNodes();

export default class Brightness implements Nodes {
    key = "BrightnessPlus";
    value = null;
    displayValue = false;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Brightness +",
        TraditionalChinese: "亮度"
    };
    unit = null;
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
            ...ResetEnum,
            parents: this.key,
            mergeGrid: true 
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key,
            mergeGrid: true 
        }
    ];
};