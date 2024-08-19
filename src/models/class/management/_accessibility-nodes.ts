// 管理 > 無障礙

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, OnNodes, OffNodes } from '../_utilities';

const BackEnum = new Back();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AccessibilityNodes implements Nodes {
    // On = Auto-switch to English language and will turn on/off TTS (if included), High Contrast and Menu Size 2x.
    // Off = Returns to previous selected language.
    // Press/hold button 1 (or joystick 5 - CENTER) 4s to toggle
    key = "Accessibility";
    value = OffNodesEnum.value;
    displayValue = true;
    displayState = false;
    livePreview = false;
    total = 0;
    page = 0;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Accessibility",
        TraditionalChinese: "無障礙"
    };
    unit = null;
    nodes = [
        {
            ...OnNodesEnum,
            parents: this.key
        },
        {
            ...OffNodesEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};