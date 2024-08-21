// 輸入

import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { Reset, Back, Exit, OnNodes, OffNodes } from '../_utilities';

let ResetEnum = new Reset(); 
let BackEnum = new Back();
let ExitEnum = new Exit();
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
        English: 'Input',
        TraditionalChinese: '輸入'
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
                English: 'HDMI',
                TraditionalChinese: 'HDMI'
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
                English: 'VGA',
                TraditionalChinese: 'VGA'
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
                English: 'Auto-Switch Input',
                TraditionalChinese: '自動切換輸入'
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
                    ...BackEnum,
                    parents: "AutoSwitchInput"
                }
            ]
        },
        // 重置
        {
            ...ResetEnum,
            parents: this.key,
            mergeGrid: true

        },
        // 返回
        {
            ...BackEnum,
            parents: this.key,
            mergeGrid: true
        },
        {
            ...ExitEnum,
            parents: this.key,
        }
    ];
}