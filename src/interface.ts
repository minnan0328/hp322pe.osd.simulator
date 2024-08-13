export interface BrightnessInterface {
    brightness: number | string;
    contrast: number | string;
    dynamicContrast: number | string;
    blackStretch: number | string;
    videoLevel: number | string;
}

export interface Nodes {
    key: string | null;
    value: number | string | null;
    mode: string;
    nodes: Nodes[] | null;
    reset: boolean;
    back: boolean;
    only: string[]| null;
};
