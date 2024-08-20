// enum
export enum ModeType {
    horizontalRange = "horizontalRange",
    verticalRange = "verticalRange",
    radio = "radio",
    button = "button",
    paginationButton = "PaginationButton",
    checkBox ="checkBox",
    setting = "setting",
    info = "info",
    exit = "exit",
};

// interface
export interface Nodes {
    key: string;
    value: number | string | string[] | boolean | null;
    displayValue: boolean;
    displayState: boolean;
    livePreview: Boolean;
    size: number;
    page: number; // 當有啟用分頁需加入 NextPageButtonsNodes 及 PreviousPageButtonsNodes
    parents: string | null;
    mode: string | null;
    rangeMin: number;
    rangeMax: number;
    rangeIcon: string | null;
    mergeGrid: boolean;
    only: string[];
    language: { [key: string]: string; };
    unit: { [key: string]: string; } | null;
    nodes: Nodes[] | null;
};
