// 顏色 > 自訂 RBG

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class CustomRGBNodes implements Nodes {
    key = "CustomRGB";
    value = "CustomRGB";
    result = "CustomRGB";
    displayValue = false;
    displayState = false;
    livePreview = true;
    size = 3;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Benutzerdefiniert RGB",
        SimplifiedChinese: "自定义 RGB",
        TraditionalChinese: "自訂 RGB",
        English: "Custom RGB",
        Español: "RGB Personalizado",
        French: "Personnalisé RGB",
        Italian: "Personalizzato RGB",
        Japanese: "カスタム RGB",
        Nederlands: "Aangepast RGB",
        BrazilianPortuguese: "RGB Personalizado",
        Russian: "Пользовательские настройки RGB"
    };
    unit = null;
    nodes = [
        // RGB range (0~255)
        // Red Color
        {
            key: "RedColor",
            value: 255,
            result: 255,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "R",
                SimplifiedChinese: "R",
                TraditionalChinese: "R",
                English: "R",
                Español: "R",
                French: "R",
                Italian: "R",
                Japanese: "R",
                Nederlands: "R",
                BrazilianPortuguese: "R",
                Russian: "R"
            },
            unit: null,
            nodes: null
        },
        // Green Color
        {
            key: "GreenColor",
            value: 255,
            result: 255,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "G",
                SimplifiedChinese: "G",
                TraditionalChinese: "G",
                English: "G",
                Español: "G",
                French: "G",
                Italian: "G",
                Japanese: "G",
                Nederlands: "G",
                BrazilianPortuguese: "G",
                Russian: "G"
            },
            unit: null,
            nodes: null
        },
        // Blue Color
        {
            key: "BlueColor",
            value: 255,
            result: 255,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 0,
            rangeMax: 255,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "B",
                SimplifiedChinese: "B",
                TraditionalChinese: "B",
                English: "B",
                Español: "B",
                French: "B",
                Italian: "B",
                Japanese: "B",
                Nederlands: "B",
                BrazilianPortuguese: "B",
                Russian: "B"
            },
            unit: null,
            nodes: null
        }
    ]
};