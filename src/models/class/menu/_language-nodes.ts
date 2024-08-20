// 功能表 > 語言

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back, NextPageButtonsNodes, PreviousPageButtonsNodes } from '../_utilities';

const BackEnum = new Back();
const PreviousPageButtonsNodesEnum = new PreviousPageButtonsNodes();
const NextPageButtonsNodesEnum = new NextPageButtonsNodes();

export default class LanguageNodes implements Nodes {
    key = "Language";
    value = "English";
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
        English: "Language",
        TraditionalChinese: "語言"
    };
    unit = null;
    nodes = [
        {
            key: "Deutsch",
            value: "Deutsch",
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
                English: "Deutsch",
                TraditionalChinese: "德文"
            },
            unit: null,
            nodes: null
        },
        {
            key: "简体中文",
            value: "SimplifiedChinese",
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
                English: "简体中文",
                TraditionalChinese: "简体中文"
            },
            unit: null,
            nodes: null
        },
        {
            key: "繁體中文",
            value: "TraditionalChinese",
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
                English: "繁體中文",
                TraditionalChinese: "繁體中文"
            },
            unit: null,
            nodes: null
        },
        {
            key: "English",
            value: "English",
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
                English: "English",
                TraditionalChinese: "英語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Español",
            value: "Español",
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
                English: "Español",
                TraditionalChinese: "西班牙語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Français",
            value: "Français",
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
                English: "Français",
                TraditionalChinese: "法語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Italiano",
            value: "Italiano",
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
                English: "Italiano",
                TraditionalChinese: "義大利語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "日本語",
            value: "日本語",
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
                English: "日本語",
                TraditionalChinese: "日本語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Nederlands",
            value: "Nederlands",
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
                English: "Nederlands",
                TraditionalChinese: "荷蘭語"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Português",
            value: "Português",
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
                English: "Português",
                TraditionalChinese: "葡萄牙語"
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
            key: "Pусский",
            value: "Pусский",
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
                English: "Pусский",
                TraditionalChinese: "俄文"
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