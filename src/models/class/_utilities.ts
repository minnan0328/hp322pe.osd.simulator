// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export class ResetNodes implements Nodes {
    key = "Reset";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Zurücksetzen",
        SimplifiedChinese: "重置",
        TraditionalChinese: "重置",
        English: "Reset",
        Español: "Restablecer",
        French: "Réinitialiser",
        Italian: "Reset",
        Japanese: "リセット",
        Nederlands: "Opnieuw instellen",
        BrazilianPortuguese: "Redefinir",
        Russian: "Сброс"
    };
    unit = null;
    nodes = null;
};

export class BackNodes implements Nodes {
    key = "Back";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Zurück",
        SimplifiedChinese: "返回",
        TraditionalChinese: "上一步",
        English: "Back",
        Español: "Regresar",
        French: "Retour",
        Italian: "Indietro",
        Japanese: "戻る",
        Nederlands: "Terug",
        BrazilianPortuguese: "Retroceder",
        Russian: "Назад"
    };
    unit = null;
    nodes = null;
};
export class ExitNodes implements Nodes {
    key = "Exit";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Beenden",
        SimplifiedChinese: "退出",
        TraditionalChinese: "退出",
        English: "Exit",
        Español: "Salir",
        French: "Quitter",
        Italian: "Uscita",
        Japanese: "終了",
        Nederlands: "Afsluiten",
        BrazilianPortuguese: "Sair",
        Russian: "Выход"
    };
    unit = null;
    nodes = null;
};

// On enum
export class OnNodes implements Nodes {
    key = "On";
    value = "On";
    result = "On";
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
    mergeGrid = false;
    language = {
        German: "Ein",
        SimplifiedChinese: "开",
        TraditionalChinese: "開",
        English: "On",
        Español: "Encendido",
        French: "Oui",
        Italian: "Attivato",
        Japanese: "オン",
        Nederlands: "Aan",
        BrazilianPortuguese: "Ativado",
        Russian: "Вкл."
    };
    unit = null;
    nodes = null;
};

// Off enum
export class OffNodes implements Nodes {
    key = "Off";
    value = "Off";
    result = "Off";
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
    mergeGrid = false;
    language = {
        German: "Aus",
        SimplifiedChinese: "关闭",
        TraditionalChinese: "關",
        English: "Off",
        Español: "Apagado",
        French: "Eteint",
        Italian: "Spento",
        Japanese: "オフ",
        Nederlands: "Uit",
        BrazilianPortuguese: "Desligado",
        Russian: "Выкл."
    };
    unit = null;
    nodes = null;
};

// Low enum
export class LowNodes implements Nodes {
    key = "Low";
    value = "Low";
    result = "Low";
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
    mergeGrid = false;
    language = {
        German: "Niedrig",
        SimplifiedChinese: "低",
        TraditionalChinese: "低",
        English: "Low",
        Español: "Baja",
        French: "Bas",
        Italian: "Bassa",
        Japanese: "低",
        Nederlands: "Laag",
        BrazilianPortuguese: "Baixo",
        Russian: "Низк."
    };
    unit = null;
    nodes = null;
};

// Medium enum
export class MediumNodes implements Nodes {
    key = "Medium";
    value = "Medium";
    result = "Medium";
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
    mergeGrid = false;
    language = {
        German: "Mittel",
        SimplifiedChinese: "中",
        TraditionalChinese: "中",
        English: "Medium",
        Español: "Media",
        French: "Moyen",
        Italian: "Media",
        Japanese: "中",
        Nederlands: "Gemiddeld",
        BrazilianPortuguese: "Médio",
        Russian: "Средн."
    };
    unit = null;
    nodes = null;
};

// High enum
export class HighNodes implements Nodes {
    key = "High";
    value = "High";
    result = "High";
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
    mergeGrid = false;
    language = {
        German: "Hoch",
        SimplifiedChinese: "高",
        TraditionalChinese: "高",
        English: "High",
        Español: "Alta",
        French: "Haut",
        Italian: "Alta",
        Japanese: "高",
        Nederlands: "Hoog",
        BrazilianPortuguese: "Alto",
        Russian: "Высок."
    };
    unit = null;
    nodes = null;
};
// Top enum
export class TopNodes implements Nodes {
    key = "Top";
    value = "Top";
    result = "Top";
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
    mergeGrid = false;
    language = {
        German: "Oben",
        SimplifiedChinese: "顶部",
        TraditionalChinese: "上",
        English: "Top",
        Español: "Superior",
        French: "Haut",
        Italian: "In alto",
        Japanese: "上",
        Nederlands: "Boven",
        BrazilianPortuguese: "Superior",
        Russian: "Сверху"
    };
    unit = null;
    nodes = null;
};
// Bottom enum
export class BottomNodes implements Nodes {
    key = "Bottom";
    value = "Bottom";
    result = "Bottom";
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
    mergeGrid = false;
    language = {
        German: "Unten",
        SimplifiedChinese: "底部",
        TraditionalChinese: "下",
        English: "Bottom",
        Español: "Inferior",
        French: "Bas",
        Italian: "In basso",
        Japanese: "下",
        Nederlands: "Onder",
        BrazilianPortuguese: "Inferior",
        Russian: "Снизу"
    
    };
    unit = null;
    nodes = null;
};
// page change button
export class PreviousPageButtonsNodes implements Nodes {
    key = "PreviousPageButtons";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.paginationButton;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Vorherige Seite",
        SimplifiedChinese: "上一页",
        TraditionalChinese: "上一頁",
        English: "Previous Page",
        Español: "Página anterior",
        French: "Page précédente",
        Italian: "Pagina precedente",
        Japanese: "前のページ",
        Nederlands: "Vorige pagina",
        BrazilianPortuguese: "Página anterior",
        Russian: "Предыдущая страница"
    };
    unit = null;
    nodes = null;
};
// page change button
export class NextPageButtonsNodes implements Nodes {
    key = "NextPageButtons";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.paginationButton;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        German: "Nächste Seite",
        SimplifiedChinese: "下一页",
        TraditionalChinese: "下一頁",
        English: "Next Page",
        Español: "Página siguiente",
        French: "Page suivante",
        Italian: "Pagina successiva",
        Japanese: "次のページ",
        Nederlands: "Volgende pagina",
        BrazilianPortuguese: "Página seguinte",
        Russian: "Следующая страница"
    };
    unit = null;
    nodes = null;
};