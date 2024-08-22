// 影像 > 銳利度

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';
const BackNodesEnum = new BackNodes();

export default class SharpnessNodes implements Nodes {
    key = "Sharpness";
    value = "Level 4";
    result = "Level 4";
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 8;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Schärfe",
        SimplifiedChinese: "清晰度",
        TraditionalChinese: "銳利度",
        English: "Sharpness",
        Español: "Nitidez",
        French: "Netteté",
        Italian: "Nitidezza",
        Japanese: "シャープネス",
        Nederlands: "Scherpte",
        BrazilianPortuguese: "Nitidez",
        Russian: "Резкость"
    };
    unit = null;
    nodes = [
        {
            key: "Soft",
            value: "Soft",
            result: "Soft",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Weich",
                SimplifiedChinese: "柔和",
                TraditionalChinese: "柔和",
                English: "Soft",
                Español: "Suave",
                French: "Doux",
                Italian: "Con poco contrasto",
                Japanese: "ソフト",
                Nederlands: "Zacht",
                BrazilianPortuguese: "Suave",
                Russian: "Мягкое"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level2",
            value: "Level 2",
            result: "Level 2",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Ebene 2",
                SimplifiedChinese: "2 级",
                TraditionalChinese: "2 級",
                English: "Level 2",
                Español: "Nivel 2",
                French: "Niveau 2",
                Italian: "Livello 2",
                Japanese: "レベル 2",
                Nederlands: "Niveau 2",
                BrazilianPortuguese: "Nível 2",
                Russian: "Уровень 2"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level3",
            value: "Level 3",
            result: "Level 3",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Ebene 3",
                SimplifiedChinese: "3 级",
                TraditionalChinese: "3 級",
                English: "Level 3",
                Español: "Nivel 3",
                French: "Niveau 3",
                Italian: "Livello 3",
                Japanese: "レベル 3",
                Nederlands: "Niveau 3",
                BrazilianPortuguese: "Nível 3",
                Russian: "Уровень 3"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level4",
            value: "Level 4",
            result: "Level 4",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Ebene 4",
                SimplifiedChinese: "4 级",
                TraditionalChinese: "4 級",
                English: "Level 4",
                Español: "Nivel 4",
                French: "Niveau 4",
                Italian: "Livello 4",
                Japanese: "レベル 4",
                Nederlands: "Niveau 4",
                BrazilianPortuguese: "Nível 4",
                Russian: "Уровень 4"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level5",
            value: "Level 5",
            result: "Level 5",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Ebene 5",
                SimplifiedChinese: "5 级",
                TraditionalChinese: "5 級",
                English: "Level 5",
                Español: "Nivel 5",
                French: "Niveau 5",
                Italian: "Livello 5",
                Japanese: "レベル 5",
                Nederlands: "Niveau 5",
                BrazilianPortuguese: "Nível 5",
                Russian: "Уровень 5"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level6",
            value: "Level 6",
            result: "Level 6",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Ebene 6",
                SimplifiedChinese: "6 级",
                TraditionalChinese: "6 級",
                English: "Level 6",
                Español: "Nivel 6",
                French: "Niveau 6",
                Italian: "Livello 6",
                Japanese: "レベル 6",
                Nederlands: "Niveau 6",
                BrazilianPortuguese: "Nível 6",
                Russian: "Уровень 6"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Sharp",
            value: "Sharp",
            result: "Sharp",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Scharf",
                SimplifiedChinese: "清晰",
                TraditionalChinese: "銳利",
                English: "Sharp",
                Español: "Nítido",
                French: "Dur",
                Italian: "Bene a fuoco",
                Japanese: "シャープ",
                Nederlands: "Scherp",
                BrazilianPortuguese: "Nítido",
                Russian: "Резкое"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key,
        }
    ];
};