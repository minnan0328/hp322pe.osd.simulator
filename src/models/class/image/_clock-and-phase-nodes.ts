// 影像 > 時脈和相位

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';
const BackNodesEnum = new BackNodes();

export default class HPEnhancePlusNodes implements Nodes {
    key = "ClockandPhase";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 3;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["VGA"];
    mergeGrid = false
    language = {
        German: "Takt und Phasenlage",
        SimplifiedChinese: "时钟和相位",
        TraditionalChinese: "時脈和相位",
        English: "Clock and Phase",
        Español: "Reloj y fase",
        French: "Horloge et Phase",
        Italian: "Orologio e fase",
        Japanese: "クロックおよびフェーズ",
        Nederlands: "Clock en Phase",
        BrazilianPortuguese: "Relógio e fase",
        Russian: "Частота синхр. и фаза"
    };
    unit = null;
    nodes = [
        // 時脈
        {
            // VGA only - Range (0~100)
            key: "Clock",
            value: 0,
            result: 0,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                German: "Takt",
                SimplifiedChinese: "时钟",
                TraditionalChinese: "時脈",
                English: "Clock",
                Español: "Reloj",
                French: "Horloge",
                Italian: "Orologio",
                Japanese: "クロック",
                Nederlands: "Kloksnelheid",
                BrazilianPortuguese: "Sincronização",
                Russian: "Частота синхр."
            },
            unit: null,
            nodes: null
        },
        // 相位
        {
            // Range (0~100)
            key: "Phase",
            value: 0,
            result: 0,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                German: "Phasenlage",
                SimplifiedChinese: "相位",
                TraditionalChinese: "相位",
                English: "Phase",
                Español: "Fase",
                French: "Phase",
                Italian: "Fase",
                Japanese: "フェーズ",
                Nederlands: "Phase",
                BrazilianPortuguese: "Fase",
                Russian: "Фаза"
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