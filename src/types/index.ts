// enum
export enum ModeType {
    range = 'range',
    radio = 'radio',
    button ='button'
};

// interface
export interface Nodes {
    key: string;
    value: number | string | null;
    mode: string | null;
    nodes: Nodes[] | null; // 可以是 Nodes 的數組或者 null
    language: {
        [key: string]: string; // 任意鍵，值為字符串
    };
    only: string[] | null;
    merge: boolean;
};
