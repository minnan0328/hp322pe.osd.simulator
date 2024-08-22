// 影像 > 回應時間

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';
const BackNodesEnum = new BackNodes();

export default class ResponseTimeNodes implements Nodes {
    key = "ResponseTime";
    value = "Level 1";
    result = "Level 1";
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 5;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Reaktionszeit",
        SimplifiedChinese: "响应时间",
        TraditionalChinese: "回應時間",
        English: "Response Time",
        Español: "Tiempo de respuesta",
        French: "Temps de réponse",
        Italian: "Tempo di risposta",
        Japanese: "応答時間",
        Nederlands: "Reactietijd",
        BrazilianPortuguese: "Tempo de resposta",
        Russian: "Время отклика"
    };
    unit = null;
    nodes = [
        {
            key: "Level1",
            value: "Level 1",
            result: "Level 1",
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
                German: "Ebene 1",
                SimplifiedChinese: "1 级",
                TraditionalChinese: "1 級",
                English: "Level 1",
                Español: "Nivel 1",
                French: "Niveau 1",
                Italian: "Livello 1",
                Japanese: "レベル 1",
                Nederlands: "Niveau 1",
                BrazilianPortuguese: "Nível 1",
                Russian: "Уровень 1"
            },
            unit: null,
            nodes: null
        },
        {
            key: "Level2(Fast)",
            value: "Level 2 (Fast)",
            result: "Level 2 (Fast)",
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
                German: "Ebene 2 (Schnell)",
                SimplifiedChinese: "2 级（快）",
                TraditionalChinese: "2 級（快）",
                English: "Level 2 (Fast)",
                Español: "Nivel 2 (Rápido)",
                French: "Niveau 2 (Rapide)",
                Italian: "Livello 2 (Veloce)",
                Japanese: "レベル 2（高速）",
                Nederlands: "Niveau 2 (Snel)",
                BrazilianPortuguese: "Nível 2 (Rápido)",
                Russian: "Уровень 2 (быстрый отклик)"
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
            key: "Level4(Fastest)",
            value: "Level 4 (Fastest)",
            result: "Level 4 (Fastest)",
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
                German: "Ebene 4 (Am schnellsten)",
                SimplifiedChinese: "4 级（最快）",
                TraditionalChinese: "4 級（最快）",
                English: "Level 4 (Fastest)",
                Español: "Nivel 4 (El más rápido)",
                French: "Niveau 4 (Le plus rapide)",
                Italian: "Livello 4 (Il più veloce)",
                Japanese: "レベル 4（最速）",
                Nederlands: "Niveau 4 (Snelste)",
                BrazilianPortuguese: "Nível 4 (O mais rápido)",
                Russian: "Уровень 4 (самый быстрый)"
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