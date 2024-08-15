import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Input implements Nodes {
    key = "Input";
    value = "HDMI";
    mode = ModeType.button;
    only = ["HDMI", "VGA"];
    merge = false;
    language = {
        English: 'Input',
        TraditionalChinese: '輸入'
    };
    nodes = [
        // HDMI
        {
            key: "HDMI",
            value: "HDMI",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'HDMI',
                TraditionalChinese: 'HDMI'
            },
            nodes: null
        },
        // VGA
        {
            key: "VGA",
            value: "VGA",
            mode: ModeType.radio,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'VGA',
                TraditionalChinese: 'VGA'
            },
            nodes: null,
        },
        // 自動切換輸入
        {
            key: "Auto-SwitchInput",
            value: "On",
            mode: null,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Auto-Switch Input',
                TraditionalChinese: '自動切換輸入'
            },
            nodes: [
                {
                    key: "On",
                    value: "On",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'On',
                        TraditionalChinese: '開'
                    },
                    nodes: null
                },
                {
                    key: "Off", value: "Off",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    merge: true,
                    language: {
                        English: 'Off',
                        TraditionalChinese: '關'
                    },
                    nodes: null,
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    merge: false,
                    language: {
                        English: 'Back',
                        TraditionalChinese: '返回'
                    },
                    nodes: null,
                }
            ],

        },
        // 重置
        {
            key: "Reset", value: null,
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            merge: true,
            language: {
                English: 'Reset',
                TraditionalChinese: '重置'
            },
            nodes: null
        },
        // 返回
        {
            key: "Back", value: null,
            mode: ModeType.button,
            merge: true,
            only: ["HDMI", "VGA"],
            language: {
                English: 'Back',
                TraditionalChinese: '返回'
            },
            nodes: null
        }
    ];
};