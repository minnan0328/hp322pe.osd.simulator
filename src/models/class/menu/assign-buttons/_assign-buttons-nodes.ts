// 功能表 > 指定鍵

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../../_utilities';
import { 
    AssignAutoAdjustmentNodes,
    AssignBrightnessNodes,
    AssignColorNodes,
    AssignDisplayInformationNodes,
    AssignNextActiveInputNodes,
    AssignEmptyNodes
} from './_utilities';

const BackNodesEnum = new BackNodes();
const AssignAutoAdjustmentNodesEnum = new AssignAutoAdjustmentNodes();
const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

export default class AssignButtonsNodes implements Nodes {
    key = "AssignButtons";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 4;
    page = 1;
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
            value: AssignNextActiveInputNodesEnum.value,
            result: AssignNextActiveInputNodesEnum.result,
            displayValue: true,
            displayState: true,
            livePreview: false,
            size: 7,
            page: 1,
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
                    ...BackNodesEnum,
                    parents: this.key
                }
            ]
        },
        {   
            // Y  (FD=Auto-Adjustment) VGA input
            // Y (FD=Color)
            key: "AssignButton2",
            value: AssignColorNodesEnum.value,
            result: AssignColorNodesEnum.result,
            displayValue: true,
            displayState: true,
            livePreview: false,
            size: 7,
            page: 1,
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
                    ...BackNodesEnum,
                    parents: this.key
                }
            ]
        },
        {   
            // Auto-Adjustment only appears in menu for VGA
            // Y  (FD=Brightness)
            key: "AssignButton3",
            value: AssignBrightnessNodesEnum.value,
            result: AssignBrightnessNodesEnum.result,
            displayValue: true,
            displayState: true,
            livePreview: false,
            size: 7,
            page: 1,
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
                    ...BackNodesEnum,
                    parents: this.key
                }
            ]
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};