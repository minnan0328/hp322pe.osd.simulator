// 功能表 > 指定鍵

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../../_utilities';
import { 
    AssignAutoAdjustmentNodes,
    AssignBrightnessNodes,
    AssignColorNodes,
    AssignDisplayInformationNodes,
    AssignNextActiveInputNodes,
    AssignEmptyNodes
} from './_utilities';

const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const AssignAutoAdjustmentNodesEnum = new AssignAutoAdjustmentNodes();
const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

export default class AssignButtonsNodes extends DefaultNodes implements Nodes {
    key = "AssignButtons";
    size = 4;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Tasten zuweisen",
        SimplifiedChinese: "指定按钮",
        TraditionalChinese: "指定鍵",
        English: "Assign Buttons",
        Español: "Asignar botones",
        French: "Attribuer boutons",
        Italian: "Assegna pulsanti",
        Japanese: "ボタンの割り当て",
        Nederlands: "Knoppen toewijzen",
        BrazilianPortuguese: "Atribuir botões",
        Russian: "Назначить кнопки"
    };
    nodes = [
        {
            // Y  (FD=Next Active Input)
            ...DefaultNodesEnum,
            key: "AssignButton1",
            selected: AssignNextActiveInputNodesEnum.selected,
            result: AssignNextActiveInputNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: 7,
            page: 1,
            parents: this.key,
            mode: ModeType.button,
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
            ...DefaultNodesEnum,
            key: "AssignButton2",
            selected: AssignColorNodesEnum.selected,
            result: AssignColorNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: 7,
            page: 1,
            parents: this.key,
            mode: ModeType.button,
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
            ...DefaultNodesEnum,
            key: "AssignButton3",
            selected: AssignBrightnessNodesEnum.selected,
            result: AssignBrightnessNodesEnum.result,
            displayValue: true,
            displayState: true,
            size: 7,
            page: 1,
            parents: this.key,
            mode: ModeType.button,
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