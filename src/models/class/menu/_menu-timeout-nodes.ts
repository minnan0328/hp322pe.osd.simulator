// 功能表 > 功能表延遲

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../_utilities';

const BackEnum = new Back();

export default class MenuTimeoutNodes implements Nodes {
    key = "MenuTimeout";
    value = 30;
    displayValue = true;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Menu Timeout",
        TraditionalChinese: "功能表延遲"
    };
    unit = {
        English: "s",
        TraditionalChinese: "s"
    };
    nodes = [
        {
            // Range (5~60)
            // Y (FD=60) for Accessibility mode
            key: "MenuTimeoutNodes",
            value: this.value,
            displayValue: false,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 5,
            rangeMax: 60,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Timeout",
                TraditionalChinese: "功能表延遲"
            },
            unit: {
                English: "s",
                TraditionalChinese: "秒"
            },
            nodes: null
        }
    ]
};