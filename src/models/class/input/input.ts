// 輸入

import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { DefaultNodes, ResetNodes, BackNodes, ExitNodes, OnNodes, OffNodes } from '../_utilities';

let DefaultNodesEnum = new DefaultNodes(); 
let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let ExitNodesEnum = new ExitNodes();
let OnNodesEnum = new OnNodes();
let OffNodesEnum = new OffNodes();

export default class Input extends DefaultNodes implements Nodes {
    key = "Input";
    selected = "HDMI";
    result = "HDMI";
    size = 6;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Eingabe",
        SimplifiedChinese: "输入",
        TraditionalChinese: "輸入",
        English: "Input",
        Español: "Entrada",
        French: "Entrée",
        Italian: "Invoer",
        Japanese: "入力",
        Nederlands: "Invoer",
        BrazilianPortuguese: "Entrada",
        Russian: "Входы",
    };
    nodes =  [
        // HDMI
        {
            ...DefaultNodesEnum,
            key: "HDMI",
            selected: "HDMI",
            result: "HDMI",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "HDMI",
                SimplifiedChinese: "HDMI",
                TraditionalChinese: "HDMI",
                English: "HDMI",
                Español: "HDMI",
                French: "HDMI",
                Italian: "HDMI",
                Japanese: "HDMI",
                Nederlands: "HDMI",
                BrazilianPortuguese: "HDMI",
                Russian: "HDMI"
            }
        },
        // VGA
        {
            ...DefaultNodesEnum,
            key: "VGA",
            selected: "VGA",
            result: "VGA",
            parents: this.key,
            mode: ModeType.radio,
            language: {
                German: "VGA",
                SimplifiedChinese: "VGA",
                TraditionalChinese: "VGA",
                English: "VGA",
                Español: "VGA",
                French: "VGA",
                Italian: "VGA",
                Japanese: "VGA",
                Nederlands: "VGA",
                BrazilianPortuguese: "VGA",
                Russian: "VGA"
            }
        },
        // 自動切換輸入
        {
            ...DefaultNodesEnum,
            key: "AutoSwitchInput",
            selected: OnNodesEnum.selected,
            result: OnNodesEnum.result,
            displayValue: true,
            size: 3,
            page: 1,
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Autom. ing. omsch.",
                SimplifiedChinese: "输入自动切换",
                TraditionalChinese: "自動切換輸入",
                English: "Auto-Switch Input",
                Español: "Cambio automático de entrada",
                French: "Entrée activation autom.",
                Italian: "Ingresso comm. aut.",
                Japanese: "自動切替入力",
                Nederlands: "Autom. ing. omsch.",
                BrazilianPortuguese: "Auto mudança de entrada",
                Russian: "Авто смена входа"
            },
            nodes: [
                {
                    ...OnNodesEnum,
                    parents: "AutoSwitchInput"
                },
                {
                    ...OffNodesEnum,
                    parents: "AutoSwitchInput"
                },
                // 上一步
                {
                    ...BackNodesEnum,
                    parents: "AutoSwitchInput"
                }
            ]
        },
        // 重置
        {
            ...ResetNodesEnum,
            parents: this.key,
            mergeGrid: true

        },
        // 返回
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
}