// 功能表 > 功能表延遲

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();

export default class MenuTimeoutNodes implements Nodes {
    key = "MenuTimeout";
    value = 30;
    result = 30;
    displayValue = true;
    displayState = false;
    livePreview = false;
    size = 1;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Menü-Timeout",
        SimplifiedChinese: "菜单超时",
        TraditionalChinese: "功能表逾時",
        English: "Menu Time-out",
        Español: "Tiempo de espera del menú",
        French: "Délai d'expiration du menu",
        Italian: "Timeout menu",
        Japanese: "メニューのタイムアウト",
        Nederlands: "Menu Time-out",
        BrazilianPortuguese: "Tempo limite do menu",
        Russian: "Тайм-аут меню"
    };
    unit = {
        English: "s",
        TraditionalChinese: "s",
        SimplifiedChinese: "s",
        German: "s",
        Spanish: "s",
        French: "s",
        Italian: "s",
        Japanese: "s",
        Dutch: "s",
        BrazilianPortuguese: "s",
        Russian: "s"
    };
    nodes = [
        {
            // Range (5~60)
            // Y (FD=60) for Accessibility mode
            key: "MenuTimeoutNodes",
            value: this.value,
            result: this.result,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.verticalRange,
            rangeMin: 5,
            rangeMax: 60,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Menü-Timeout",
                SimplifiedChinese: "菜单超时",
                TraditionalChinese: "功能表逾時",
                English: "Menu Time-out",
                Español: "Tiempo de espera del menú",
                French: "Délai d'expiration du menu",
                Italian: "Timeout menu",
                Japanese: "メニューのタイムアウト",
                Nederlands: "Menu Time-out",
                BrazilianPortuguese: "Tempo limite do menu",
                Russian: "Тайм-аут меню"
            },
            unit: this.unit,
            nodes: null
        }
    ]
};