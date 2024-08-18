// enum
export enum ModeType {
    horizontalRange = "horizontalRange",
    verticalRange = "verticalRange",
    radio = "radio",
    button = "button",
    checkBox ="checkBox",
    setting = "setting",
    info = "info",
    exit = "exit",
};

// interface
export interface Nodes {
    key: string;
    value: number | string | string[] | boolean | null;
    displayValue: boolean
    parents: string | null
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
