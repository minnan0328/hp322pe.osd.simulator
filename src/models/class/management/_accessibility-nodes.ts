// 管理 > 無障礙

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, OnNodes, OffNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();

export default class AccessibilityNodes implements Nodes {
    // On = Auto-switch to English language and will turn on/off TTS (if included), High Contrast and Menu Size 2x.
    // Off = Returns to previous selected language.
    // Press/hold button 1 (or joystick 5 - CENTER) 4s to toggle
    key = "Accessibility";
    value = OffNodesEnum.value;
    result = OffNodesEnum.result;
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 3;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        German: "Barrierefreiheit",
        SimplifiedChinese: "辅助功能",
        TraditionalChinese: "協助工具",
        English: "Accessibility",
        Español: "Accesibilidad",
        French: "Accessibilité",
        Italian: "Accessibilità",
        Japanese: "ユーザー サポート",
        Nederlands: "Toegankelijkheid",
        BrazilianPortuguese: "Acessibilidade",
        Russian: "Спец. Возможности"
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
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};