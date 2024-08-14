export interface BrightnessInterface {
    brightness: number | string;
    contrast: number | string;
    dynamicContrast: number | string;
    blackStretch: number | string;
    videoLevel: number | string;
}

export interface Nodes {
    key: string;
    value: number | string | null;
    mode: string | null;
    nodes: Nodes[] | null;
    only: string[]| null;
};
