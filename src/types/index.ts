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
    nodes: Nodes[] | null;
    only: string[]| null;
};
