// 功能表 > 指定鍵

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../../_utilities';
import { 
    AssignAutoAdjustmentNodes,
    AssignBrightnessNodes,
    AssignColorNodes,
    AssignDisplayInformationNodes,
    AssignNextActiveInputNodes,
    AssignEmptyNodes
} from './_utilities';

const BackEnum = new Back();
const AssignAutoAdjustmentNodesEnum = new AssignAutoAdjustmentNodes();
const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

export default class AssignButtonsNodes implements Nodes {
    key = "AssignButtons";
    value = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Assign Buttons",
        TraditionalChinese: "指定鍵"
    };
    unit = null;
    nodes = [
        {
            // Y  (FD=Next Active Input)
            key: "AssignButton1",
            value: "Next Active Input",
            displayValue: true,
            displayState: true,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Assign Button 1",
                TraditionalChinese: "指定鍵 1"
            },
            unit: null,
            nodes: [
                {
                    ...AssignAutoAdjustmentNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignBrightnessNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignColorNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignDisplayInformationNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignNextActiveInputNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignEmptyNodesEnum,
                    parents: this.key
                },
                // 上一步
                {
                    ...BackEnum,
                    parents: this.key
                }
            ]
        },
        {   
            // Y  (FD=Auto-Adjustment) VGA input
            // Y (FD=Color)
            key: "AssignButton2",
            value: "Color",
            displayValue: true,
            displayState: true,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Assign Button 2",
                TraditionalChinese: "指定鍵 2"
            },
            unit: null,
            nodes: [
                {
                    ...AssignAutoAdjustmentNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignBrightnessNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignColorNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignDisplayInformationNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignNextActiveInputNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignEmptyNodesEnum,
                    parents: this.key
                },
                // 上一步
                {
                    ...BackEnum,
                    parents: this.key
                }
            ]
        },
        {   
            // Auto-Adjustment only appears in menu for VGA
            // Y  (FD=Brightness)
            key: "AssignButton3",
            value: "Brightness",
            displayValue: true,
            displayState: true,
            livePreview: false,
            total: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Assign Button 3",
                TraditionalChinese: "指定鍵 3"
            },
            unit: null,
            nodes: [
                {
                    ...AssignAutoAdjustmentNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignBrightnessNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignColorNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignDisplayInformationNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignNextActiveInputNodesEnum,
                    parents: this.key
                },
                {
                    ...AssignEmptyNodesEnum,
                    parents: this.key
                },
                // 上一步
                {
                    ...BackEnum,
                    parents: this.key
                }
            ]
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};