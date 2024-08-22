// 功能表 > 功能表位置

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';

const BackNodesEnum = new BackNodes();

export default class MenuPositionNodes implements Nodes {
    key = "MenuPosition";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 2;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Menüposition",
        SimplifiedChinese: "菜单位置",
        TraditionalChinese: "功能表位置",
        English: "Menu Position",
        Español: "Posición del menú",
        French: "Position du menu",
        Italian: "Posizione menu",
        Japanese: "メニューの表示位置",
        Nederlands: "Menu Positie",
        BrazilianPortuguese: "Posição do menu",
        Russian: "Положение меню"
    };
    unit = null;
    nodes = [
        {
            // Range (0~100)
            key: "Horizontal",
            value: 74,
            result: 74,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Horizontal",
                SimplifiedChinese: "水平",
                TraditionalChinese: "水平",
                English: "Horizontal",
                Español: "Horizontal",
                French: "Horizontal",
                Italian: "Orizzontale",
                Japanese: "水平",
                Nederlands: "Horizontaal",
                BrazilianPortuguese: "Horizontal",
                Russian: "Горизонтально"
            },
            unit: null,
            nodes: null
        },
        {
            // Range (0~100)
            key: "Vertical",
            value: 81,
            result: 81,
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.horizontalRange,
            rangeMin: 0,
            rangeMax: 100,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                German: "Vertikal",
                SimplifiedChinese: "垂直",
                TraditionalChinese: "垂直",
                English: "Vertical",
                Español: "Vertical",
                French: "Vertical",
                Italian: "Verticale",
                Japanese: "垂直",
                Nederlands: "Verticaal",
                BrazilianPortuguese: "Vertical",
                Russian: "Вертикально"
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