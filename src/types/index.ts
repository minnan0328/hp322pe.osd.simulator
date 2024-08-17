// enum
export enum ModeType {
    range = "range",
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
    value: number | string | boolean | null;
    mode: string | null;
    rangeMin: number;
    rangeMax: number;
    mergeGrid: boolean;
    only: string[];
    language: { [key: string]: string; };
    unit: { [key: string]: string; } | null;
    nodes: Nodes[] | null; 
};
