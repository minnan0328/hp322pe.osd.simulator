// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes, Language } from "@/types";
import { ModeType } from "@/types";

export class DefaultNodes implements Nodes {
    key = "";
    selected: number | string | string[] | boolean | null = null;;
    result: number | string | string[] | boolean | null = null;;
    disabled = false;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    horizontalRangeFocus = false;
    rangeIcon = null;
    only = [ "HDMI", "VGA"];
    mergeGrid = false;
    language: Language = {
        German: "",
        SimplifiedChinese: "",
        TraditionalChinese: "",
        English: "",
        Español: "",
        French: "",
        Italian: "",
        Japanese: "",
        Nederlands: "",
        BrazilianPortuguese: "",
        Russian: ""
    };
    unit: Language | null = null;
    nodes: Nodes[] | null = null;
};

export class ResetNodes extends DefaultNodes implements Nodes {
    key = "Reset";
    mode = ModeType.button;
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
};

export class BackNodes extends DefaultNodes implements Nodes {
    key = "Back";
    mode = ModeType.button;
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
};
export class ExitNodes extends DefaultNodes implements Nodes {
    key = "Exit";
    mode = ModeType.button;
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
};

// On enum
export class OnNodes extends DefaultNodes implements Nodes {
    key = "On";
    selected = "On";
    result = "On";
    mode = ModeType.radio;
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
};

// Off enum
export class OffNodes extends DefaultNodes implements Nodes {
    key = "Off";
    selected = "Off";
    result = "Off";
    mode = ModeType.radio;
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
};

// Low enum
export class LowNodes extends DefaultNodes implements Nodes {
    key = "Low";
    selected = "Low";
    result = "Low";
    mode = ModeType.radio;
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
};

// Medium enum
export class MediumNodes extends DefaultNodes implements Nodes {
    key = "Medium";
    selected = "Medium";
    result = "Medium";
    mode = ModeType.radio;
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
};

// High enum
export class HighNodes extends DefaultNodes implements Nodes {
    key = "High";
    selected = "High";
    result = "High";
    mode = ModeType.radio;
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
};
// Top enum
export class TopNodes extends DefaultNodes implements Nodes {
    key = "Top";
    selected = "Top";
    result = "Top";
    mode = ModeType.radio;
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
};
// Bottom enum
export class BottomNodes extends DefaultNodes implements Nodes {
    key = "Bottom";
    selected = "Bottom";
    result = "Bottom";
    mode = ModeType.radio;
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
};
// page change button
export class PreviousPageButtonsNodes extends DefaultNodes implements Nodes {
    key = "PreviousPageButtons";
    mode = ModeType.paginationButton;
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
};
// page change button
export class NextPageButtonsNodes extends DefaultNodes implements Nodes {
    key = "NextPageButtons";
    mode = ModeType.paginationButton;
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
};