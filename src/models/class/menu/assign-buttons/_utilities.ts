// 功能表 > 指定鍵 > 1~3 共用

import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export class AssignAutoAdjustmentNodes implements Nodes {
    key = "AssignAuto-Adjustment";
    value = "Auto-Adjustment";
    result = "Auto-Adjustment";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["VGA"];
    mergeGrid = false
    language = {
        German: "Automatische Einstellung wird durchgeführt",
        SimplifiedChinese: "正在自动调整",
        TraditionalChinese: "自動調整中",
        English: "Auto-Adjustment in Progress",
        Español: "Ajuste automático en curso",
        French: "Ajustement automatique en cours",
        Italian: "Autoregolazione in corso",
        Japanese: "自動調整中です",
        Nederlands: "Bezig met automatisch aanpassen",
        BrazilianPortuguese: "Ajuste Automático está em Andamento",
        Russian: "Выполняется автом. регулировка"
    };
    unit = null;
    nodes = null;
};

export class AssignBrightnessNodes implements Nodes {
    key = "AssignBrightness";
    value = "Brightness";
    result = "Brightness";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Helligkeit",
        SimplifiedChinese: "亮度",
        TraditionalChinese: "亮度",
        English: "Brightness",
        Español: "Brillo",
        French: "Luminosité",
        Italian: "Luminosità",
        Japanese: "輝度",
        Nederlands: "Helderheid",
        BrazilianPortuguese: "Brilho",
        Russian: "Яркость"
    };
    unit = null;
    nodes = null;
};

export class AssignColorNodes implements Nodes {
    key = "AssignColor";
    value = "Color";
    result = "Color";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Farbe",
        SimplifiedChinese: "颜色",
        TraditionalChinese: "色彩",
        English: "Color",
        Español: "Color",
        French: "Couleur",
        Italian: "Colore",
        Japanese: "色",
        Nederlands: "Kleur",
        BrazilianPortuguese: "Cor",
        Russian: "Цвет"
    };
    unit = null;
    nodes = null;
};

export class AssignDisplayInformationNodes implements Nodes {
    key = "AssignDisplayInformation";
    value = "Display Information";
    result = "Display Information";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Display-Information",
        SimplifiedChinese: "显示信息",
        TraditionalChinese: "顯示資訊",
        English: "Display Information",
        Español: "Información de pantalla",
        French: "Afficher Informations",
        Italian: "Visualizza Informazioni",
        Japanese: "ディスプレイ情報",
        Nederlands: "Informatie weergeven",
        BrazilianPortuguese: "Informações do monitor",
        Russian: "Информация"
    };
    unit = null;
    nodes = null;
};

export class AssignNextActiveInputNodes implements Nodes {
    key = "AssignNextActiveInput";
    value = "Next Active Input";
    result = "Next Active Input";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Nächster aktiver Eingang",
        SimplifiedChinese: "下一个有效输入",
        TraditionalChinese: "下一個使用中的輸入",
        English: "Next Active Input",
        Español: "Siguiente entrada activa",
        French: "Prochaine entrée active",
        Italian: "Ingresso attivo successivo",
        Japanese: "次のアクティブな入力",
        Nederlands: "Volgende actieve ingang",
        BrazilianPortuguese: "Entr. ativa seguinte",
        Russian: "След. активный вход"
    };
    unit = null;
    nodes = null;
};

export class AssignEmptyNodes implements Nodes {
    key = "AssignEmpty(NoFunction)";
    value = "Empty (No Function)";
    result = "Empty (No Function)";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.radio;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        German: "Leer (keine Funktion)",
        SimplifiedChinese: "空（不具备任何功能）",
        TraditionalChinese: "無定義（沒有功能）",
        English: "Empty (No Function)",
        Español: "Vacía (sin función)",
        French: "Vide (sans fonction)",
        Italian: "Vuoto (inutile)",
        Japanese: "空き（機能なし）",
        Nederlands: "Leeg (geen functie)",
        BrazilianPortuguese: "Vazio (sem função)",
        Russian: "Пусто (функция не назначена)"
    };
    unit = null;
    nodes = null;
};