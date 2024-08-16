// enum
export enum ModeType {
    range = "range",
    radio = "radio",
    button = "button",
    checkBox ="checkBox",
    info = "info"
};

// interface
export interface Nodes {
    key: string;
    value: number | string | boolean | null;
    mode: string | null;
    mergeGrid: boolean;
    only: string[] | null;
    language: {
        [key: string]: string; // 任意鍵，值為字符串
    };
    nodes: Nodes[] | null; // 可以是 Nodes 的數組或者 null
};
