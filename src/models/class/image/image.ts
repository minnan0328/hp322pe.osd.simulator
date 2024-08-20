import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from '../_utilities';
import AutoAdjustmentNodes from './_auto-adjustment-nodes';
import ClockandPhaseNodes from './_clock-and-phase-nodes';
import ImagePositionNodes from './_image-position-nodes';
import ResponseTimeNodes from './_response-rime-nodes';
import SharpnessNodes from './_sharpness-nodes';
import ImageScalingNodes from './_image-scaling-nodes';

const ResetEnum = new Reset(); 
const BackEnum = new Back();
const AutoAdjustmentNodesEnum = new AutoAdjustmentNodes();
const ClockandPhaseNodesEnum = new ClockandPhaseNodes();
const ImagePositionNodesEnum = new ImagePositionNodes();
const ResponseTimeNodesEnum = new ResponseTimeNodes();
const SharpnessNodesEnum = new SharpnessNodes();
const ImageScalingNodesEnum = new ImageScalingNodes();

export default class Image implements Nodes {
    key = "Image";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 8;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Image",
        TraditionalChinese: "影像"
    };
    unit = null;
    nodes = [
        // 自動調整
        {
            ...AutoAdjustmentNodesEnum,
            parents: this.key
        },
        // 時脈和相位
        {
            ...ClockandPhaseNodesEnum,
            parents: this.key
        },
        // 影像位置
        {
            ...ImagePositionNodesEnum,
            parents: this.key
        },
        // 回應時間
        {
            ...ResponseTimeNodesEnum,
            parents: this.key
        },
        // 銳利度
        {
            ...SharpnessNodesEnum,
            parents: this.key
        },
        // 影像縮放
        {
            ...ImageScalingNodesEnum,
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