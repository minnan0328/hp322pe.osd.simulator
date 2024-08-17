import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { Reset, Back } from './_utilities';

let resetEnum = new Reset(); 
let backEnum = new Back();
let innerBackEnum = new Back();
innerBackEnum.mergeGrid = false;

export default class Input implements Nodes {
    key = "Input";
    value = "HDMI";
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
            key: "Auto-SwitchInput",
            value: "On",
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
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: 'On',
                        TraditionalChinese: '開'
                    },
                    unit: null,
                    nodes: null
                },
                {
                    key: "Off",
                    value: "Off",
                    mode: ModeType.radio,
                    rangeMin: 0,
                    rangeMax: 0,
                    rangeIcon: null,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: 'Off',
                        TraditionalChinese: '關'
                    },
                    unit: null,
                    nodes: null
                },
                // 上一步
                innerBackEnum
            ]
        },
        // 重置
        resetEnum,
        // 返回
        backEnum
    ];
}