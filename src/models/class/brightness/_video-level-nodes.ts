// 亮度 > 視訊等級

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();

export default class BlackStretchNodes implements Nodes {
    key = "VideoLevel";
    value = "Auto";
    result = "Auto";
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 4;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI"];
    mergeGrid = false
    language = {
        German: "Videostufe",
        SimplifiedChinese: "视频电平",
        TraditionalChinese: "視訊等級",
        English: "Video Level",
        Español: "Nivel de vídeo",
        French: "Niveau vidéo",
        Italian: "Livello video",
        Japanese: "ビデオ レベル",
        Nederlands: "Videoniveau",
        BrazilianPortuguese: "Nível de vídeo",
        Russian: "Уровень видеосигнала"
    };
    unit = null;
    nodes = [
        // 自動
        {
            key: "Auto",
            value: "Auto",
            result: "Auto",
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
            only: ["HDMI"],
            mergeGrid: false,
            language: {
                German: "Automatisch",
                SimplifiedChinese: "自动",
                TraditionalChinese: "自動",
                English: "Auto",
                Español: "Automático",
                French: "Automatique",
                Italian: "Automatico",
                Japanese: "自動",
                Nederlands: "Automatisch",
                BrazilianPortuguese: "Automático",
                Russian: "Автоматически"
            },
            unit: null,
            nodes: null
        },
        // 限制範圍
        {
            key: "LimitedRange(16 - 235)",
            value: "Limited Range (16 - 235)",
            result: "Limited Range (16 - 235)",
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
            only: ["HDMI"],
            mergeGrid: false,
            language: {
                German: "Begrenzter Bereich (16 - 235)",
                SimplifiedChinese: "有限范围 (16 - 235)",
                TraditionalChinese: "限制範圍 (16 - 235)",
                English: "Limited Range (16 - 235)",
                Español: "Rango limitado (16 - 235)",
                French: "Plage limitée (16 - 235)",
                Italian: "Intervallo limitato (16 - 235)",
                Japanese: "制限された範囲（16 - 235）",
                Nederlands: "Beperkt bereik (16 - 235)",
                BrazilianPortuguese: "Gama limitada (16 - 235)",
                Russian: "Ограниченный диапазон (16 - 235)"
            },
            unit: null,
            nodes: null
        },
        // 完整範圍
        {
            key: "FullRange(0 - 255)",
            value: "Full Range (0 - 255)",
            result: "Full Range (0 - 255)",
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
            only: ["HDMI"],
            mergeGrid: false,
            language: {
                German: "Volle Reichweite (0 - 255)",
                SimplifiedChinese: "完整范围 (0 - 255)",
                TraditionalChinese: "完整範圍 (0 - 255)",
                English: "Full Range (0 - 255)",
                Español: "Rango completo (0 - 255)",
                French: "Plage maximale (0 - 255)",
                Italian: "Intervallo completo (0 - 255)",
                Japanese: "すべての範囲（0 - 255）",
                Nederlands: "Volledig bereik (0 - 255)",
                BrazilianPortuguese: "Gama completa (0 - 255)",
                Russian: "Полный диапазон (0 - 255)"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...BackNodesEnum,
            mergeGrid: false
        }
    ]
};