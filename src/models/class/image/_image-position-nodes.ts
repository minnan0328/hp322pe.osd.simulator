// 影像 > 影像位置

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../_utilities';
const BackNodesEnum = new BackNodes();

export default class ImagePositionPlusNodes implements Nodes {
    key = "ImagePosition";
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
        German: "Bildposition",
        SimplifiedChinese: "图像位置",
        TraditionalChinese: "影像位置",
        English: "Image Position",
        Español: "Posición de la imagen",
        French: "Position de l'image",
        Italian: "Posizione immagine",
        Japanese: "画面の位置",
        Nederlands: "Afbeeldingspositie",
        BrazilianPortuguese: "Posição da imagem",
        Russian: "Положение изобр-ния"
    };
    unit = null;
    nodes = [
        // 水平
        {
            // VGA only - Range (0~100)
            key: "Horizontal",
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
        // 垂直
        {
            // Range (0~100)
            key: "Vertical",
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
            parents: this.key,
        }
    ];
};