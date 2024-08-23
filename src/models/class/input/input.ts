// 輸入

import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { ResetNodes, BackNodes, ExitNodes, OnNodes, OffNodes } from '../_utilities';

let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let ExitNodesEnum = new ExitNodes();
let OnNodesEnum = new OnNodes();
let OffNodesEnum = new OffNodes();

export default class Input implements Nodes {
    key = "Input";
    value = "HDMI";
    result = "HDMI";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 6;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
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
    unit = null;
    nodes =  [
        // HDMI
        {
            key: "HDMI",
            value: "HDMI",
            result: "HDMI",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
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
            },
            unit: null,
            nodes: null
        },
        // VGA
        {
            key: "VGA",
            value: "VGA",
            result: "VGA",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
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
            },
            unit: null,
            nodes: null,
        },
        // 自動切換輸入
        {
            key: "AutoSwitchInput",
            value: OnNodesEnum.value,
            result: OnNodesEnum.result,
            displayState: false,
            livePreview: false,
            size: 3,
            page: 1,
            displayValue: true,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
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
            unit: null,
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