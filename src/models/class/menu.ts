import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Menu implements Nodes {
    key = "Menu";
    value = null;
    mode = ModeType.button;
    only = ["HDMI", "VGA"];
    merge = false;
    language = {
        English: 'Menu',
        TraditionalChinese: '功能表'
    };
    nodes = [
        // 語言
        {
            key: "Language",
            value: "English",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            merge: false,
            language: {
                English: 'Language',
                TraditionalChinese: '語言'
            },
            nodes: []
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