// enum
export enum ModeType {
    range = "range",
    horizontalRange = "horizontalRange",
    verticalRange = "verticalRange",
    radio = "radio",
    button = "button",
    checkBox ="checkBox",
    setting = "setting",
    info = "info",
    image = "image",
};

// interface
export interface Nodes {
    key: string;
    value: number | string | string[] | boolean | null;
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
