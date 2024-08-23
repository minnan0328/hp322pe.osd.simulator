// 功能表 > 語言

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes, NextPageButtonsNodes, PreviousPageButtonsNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();
const PreviousPageButtonsNodesEnum = new PreviousPageButtonsNodes();
const NextPageButtonsNodesEnum = new NextPageButtonsNodes();

export default class LanguageNodes implements Nodes {
    key = "Language";
    value = "English";
    result = "English";
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 11;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Sprache",
        SimplifiedChinese: "语言",
        TraditionalChinese: "語言",
        English: "Language",
        Español: "Idioma",
        French: "Langue",
        Italian: "Lingua",
        Japanese: "言語",
        Nederlands: "Taal",
        BrazilianPortuguese: "Idioma",
        Russian: "Язык"
    };
    unit = null;
    nodes = [
        {
            key: "German",
            value: "German",
            result: "German",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Deutsch",
                SimplifiedChinese: "Deutsch",
                TraditionalChinese: "Deutsch",
                English: "Deutsch",
                Español: "Deutsch",
                French: "Deutsch",
                Italian: "Deutsch",
                Japanese: "Deutsch",
                Nederlands: "Deutsch",
                BrazilianPortuguese: "Deutsch",
                Russian: "Deutsch"
            },
            unit: null,
            nodes: null
        },
        {
            key: "SimplifiedChinese",
            value: "SimplifiedChinese",
            result: "SimplifiedChinese",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "简体中文",
                SimplifiedChinese: "简体中文",
                TraditionalChinese: "简体中文",
                English: "简体中文",
                Español: "简体中文",
                French: "简体中文",
                Italian: "简体中文",
                Japanese: "简体中文",
                Nederlands: "简体中文",
                BrazilianPortuguese: "简体中文",
                Russian: "简体中文"
            },
            unit: null,
            nodes: null
        },
        {
            key: "TraditionalChinese",
            value: "TraditionalChinese",
            result: "TraditionalChinese",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "繁體中文",
                SimplifiedChinese: "繁體中文",
                TraditionalChinese: "繁體中文",
                English: "繁體中文",
                Español: "繁體中文",
                French: "繁體中文",
                Italian: "繁體中文",
                Japanese: "繁體中文",
                Nederlands: "繁體中文",
                BrazilianPortuguese: "繁體中文",
                Russian: "繁體中文"
            },
            unit: null,
            nodes: null
        },
        {
            key: "English",
            value: "English",
            result: "English",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "English",
                SimplifiedChinese: "English",
                TraditionalChinese: "English",
                English: "English",
                Español: "English",
                French: "English",
                Italian: "English",
                Japanese: "English",
                Nederlands: "English",
                BrazilianPortuguese: "English",
                Russian: "English"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Español",
            value: "Español",
            result: "Español",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Español",
                SimplifiedChinese: "Español",
                TraditionalChinese: "Español",
                English: "Español",
                Español: "Español",
                French: "Español",
                Italian: "Español",
                Japanese: "Español",
                Nederlands: "Español",
                BrazilianPortuguese: "Español",
                Russian: "Español"
            },
            unit: null,
            nodes: null
        },
        {
            key: "French",
            value: "French",
            result: "French",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Français",
                SimplifiedChinese: "Français",
                TraditionalChinese: "Français",
                English: "Français",
                Español: "Français",
                French: "Français",
                Italian: "Français",
                Japanese: "Français",
                Nederlands: "Français",
                BrazilianPortuguese: "Français",
                Russian: "Français"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Italian",
            value: "Italian",
            result: "Italian",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Italiano",
                SimplifiedChinese: "Italiano",
                TraditionalChinese: "Italiano",
                English: "Italiano",
                Español: "Italiano",
                French: "Italiano",
                Italian: "Italiano",
                Japanese: "Italiano",
                Nederlands: "Italiano",
                BrazilianPortuguese: "Italiano",
                Russian: "Italiano"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Japanese",
            value: "Japanese",
            result: "Japanese",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "日本語",
                SimplifiedChinese: "日本語",
                TraditionalChinese: "日本語",
                English: "日本語",
                Español: "日本語",
                French: "日本語",
                Italian: "日本語",
                Japanese: "日本語",
                Nederlands: "日本語",
                BrazilianPortuguese: "日本語",
                Russian: "日本語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Nederlands",
            value: "Nederlands",
            result: "Nederlands",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Nederlands",
                SimplifiedChinese: "Nederlands",
                TraditionalChinese: "Nederlands",
                English: "Nederlands",
                Español: "Nederlands",
                French: "Nederlands",
                Italian: "Nederlands",
                Japanese: "Nederlands",
                Nederlands: "Nederlands",
                BrazilianPortuguese: "Nederlands",
                Russian: "Nederlands"
            },
            unit: null,
            nodes: null
        },
        {
            key: "BrazilianPortuguese",
            value: "BrazilianPortuguese",
            result: "BrazilianPortuguese",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Português",
                SimplifiedChinese: "Português",
                TraditionalChinese: "Português",
                English: "Português",
                Español: "Português",
                French: "Português",
                Italian: "Português",
                Japanese: "Português",
                Nederlands: "Português",
                BrazilianPortuguese: "Português",
                Russian: "Português"
            },
            unit: null,
            nodes: null
        },
        {
            // 下一頁
            ...NextPageButtonsNodesEnum,
            parents: this.key,
        },
        {
            // 上一頁
            ...PreviousPageButtonsNodesEnum,
            parents: this.key,
        },
        {
            key: "Russian",
            value: "Russian",
            result: "Russian",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.radio,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Pусский",
                SimplifiedChinese: "Pусский",
                TraditionalChinese: "Pусский",
                English: "Pусский",
                Español: "Pусский",
                French: "Pусский",
                Italian: "Pусский",
                Japanese: "Pусский",
                Nederlands: "Pусский",
                BrazilianPortuguese: "Pусский",
                Russian: "Pусский"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};