// 管理 > 恢復出廠設定值

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';

const BackEnum = new Back();

export default class FactoryResetNodes implements Nodes {
    key = "FactoryReset";
    value = "Yes";
    displayValue = false;
    parents = null;
    mode = ModeType.setting;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Factory Reset",
        TraditionalChinese: "恢復出廠設定值"
    };
    unit = null;
    nodes = [
        {
            key: "Yes",
            value: "Yes",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Yes",
                TraditionalChinese: "是"
            },
            unit: null,
            nodes: null
        },
        {
            key: "No",
            value: "No",
            displayValue: false,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "No",
                TraditionalChinese: "否"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};