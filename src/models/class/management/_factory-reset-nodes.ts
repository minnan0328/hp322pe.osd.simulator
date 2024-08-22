// 管理 > 恢復出廠設定值

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();

export default class FactoryResetNodes implements Nodes {
    key = "FactoryReset";
    value = "Yes";
    result = "Yes";
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
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Factory Reset",
        TraditionalChinese: "恢復出廠設定值"
    };
    unit = null;
    nodes = [
        {
            key: "Yes",
            value: "Yes",
            result: "Yes",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Ja",
                SimplifiedChinese: "是",
                TraditionalChinese: "是",
                English: "Yes",
                Español: "Sí",
                French: "Oui",
                Italian: "Sì",
                Japanese: "はい",
                Nederlands: "Ja",
                BrazilianPortuguese: "Sim",
                Russian: "Да"
            },
            unit: null,
            nodes: null
        },
        {
            key: "No",
            value: "No",
            result: "No",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
            mode: ModeType.button,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Nein",
                SimplifiedChinese: "否",
                TraditionalChinese: "否",
                English: "No",
                Español: "No",
                French: "Non",
                Italian: "No",
                Japanese: "いいえ",
                Nederlands: "Nee",
                BrazilianPortuguese: "Não",
                Russian: "Нет"
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