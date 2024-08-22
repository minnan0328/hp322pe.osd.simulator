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
                German: "Taste 1 zuweisen",
                SimplifiedChinese: "指定按钮 1",
                TraditionalChinese: "指定鍵 1",
                English: "Assign Button 1",
                Español: "Asignar botón 1",
                French: "Attribuer bouton 1",
                Italian: "Assegna pulsante 1",
                Japanese: "ボタン1の割り当て",
                Nederlands: "Knop 1 toewijzen",
                BrazilianPortuguese: "Atribuir botões 1",
                Russian: "Назначить кнопку 1"
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
                German: "Taste 2 zuweisen",
                SimplifiedChinese: "指定按钮 2",
                TraditionalChinese: "指定鍵 2",
                English: "Assign Button 2",
                Español: "Asignar botón 2",
                French: "Attribuer bouton 2",
                Italian: "Assegna pulsante 2",
                Japanese: "ボタン2の割り当て",
                Nederlands: "Knop 2 toewijzen",
                BrazilianPortuguese: "Atribuir botões 2",
                Russian: "Назначить кнопку 2"
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
                German: "Taste 3 zuweisen",
                SimplifiedChinese: "指定按钮 3",
                TraditionalChinese: "指定鍵 3",
                English: "Assign Button 3",
                Español: "Asignar botón 3",
                French: "Attribuer bouton 3",
                Italian: "Assegna pulsante 3",
                Japanese: "ボタン3の割り当て",
                Nederlands: "Knop 3 toewijzen",
                BrazilianPortuguese: "Atribuir botões 3",
                Russian: "Назначить кнопку 3"
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