import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import AutoAdjustmentNodes from './_auto-adjustment-nodes';
import ClockandPhaseNodes from './_clock-and-phase-nodes';
import ImagePositionNodes from './_image-position-nodes';
import ResponseTimeNodes from './_response-rime-nodes';
import SharpnessNodes from './_sharpness-nodes';
import ImageScalingNodes from './_image-scaling-nodes';

const DefaultNodesEnum = new DefaultNodes(); 
const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const AutoAdjustmentNodesEnum = new AutoAdjustmentNodes();
const ClockandPhaseNodesEnum = new ClockandPhaseNodes();
const ImagePositionNodesEnum = new ImagePositionNodes();
const ResponseTimeNodesEnum = new ResponseTimeNodes();
const SharpnessNodesEnum = new SharpnessNodes();
const ImageScalingNodesEnum = new ImageScalingNodes();

export default class Image extends DefaultNodes implements Nodes {
    key = "Image";
    size = 8;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Bild",
        SimplifiedChinese: "图像",
        TraditionalChinese: "影像",
        English: "Image",
        Español: "Imagen",
        French: "Image",
        Italian: "Immagine",
        Japanese: "イメージ",
        Nederlands: "Beeld",
        BrazilianPortuguese: "Imagem",
        Russian: "Изображение"
    };
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