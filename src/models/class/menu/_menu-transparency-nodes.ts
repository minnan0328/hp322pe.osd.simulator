// 功能表 > 功能表透明度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
export default class MenuTransparencyNodes implements Nodes {
    key = "MenuTransparency";
    value = 0;
    result = 0;
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 1;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "Menu Transparency",
        TraditionalChinese: "功能表透明度"
    };
    unit = null;
    nodes = [
        {
            // Range (0 - 10) with 0 = Off, no transparency
            // Y (FD=0=Off)
            key: "MenuTransparencyNodes",
            value: this.value,
            result: this.result,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 10,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Menu Transparency",
                TraditionalChinese: "功能表透明度"
            },
            unit: null,
            nodes: null
        }
    ]
};