import type { Nodes } from "@/types";
import { ModeType } from "@/types";

export default class Image implements Nodes {
    key = "Image";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Image",
        TraditionalChinese: "影像"
    };
    nodes = [
        {
            key: "AutoAdjustment",
            value: null,
            mode: ModeType.button,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Auto-Adjustment",
                TraditionalChinese: "Auto-Adjustment"
            },
            nodes: null
        },
        {
            key: "ClockandPhase",
            value: null,
            mode: ModeType.button,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Clock and Phase",
                TraditionalChinese: "Clock and Phase"
            },
            nodes: [
                {
                    key: "Clock(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    only: ["VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Clock (w/ ADJ SCALE)",
                        TraditionalChinese: "Clock (w/ ADJ SCALE)"
                    },
                    nodes: null
                },
                {
                    key: "Phase(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    only: ["VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Phase (w/ ADJ SCALE)",
                        TraditionalChinese: "Phase (w/ ADJ SCALE)"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        {
            key: "ImagePosition",
            value: null,
            mode: ModeType.button,
            only: ["VGA"],
            mergeGrid: false,
            language: {
                English: "Image Position",
                TraditionalChinese: "Image Position"
            },
            nodes: [
                {
                    key: "Horizontal(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    only: ["VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Horizontal (w/ADJ SCALE)",
                        TraditionalChinese: "Horizontal (w/ADJ SCALE)"
                    },
                    nodes: null
                },
                {
                    key: "Vertical(w/ADJSCALE)",
                    value: 0,
                    mode: ModeType.range,
                    only: ["VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Vertical (w/ADJ SCALE)",
                        TraditionalChinese: "Vertical (w/ADJ SCALE)"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        {
            key: "ResponseTime",
            value: "Level 1",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Response Time",
                TraditionalChinese: "Response Time"
            },
            nodes: [
                {
                    key: "Level1",
                    value: "Level 1",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 1",
                        TraditionalChinese: "Level 1"
                    },
                    nodes: null
                },
                {
                    key: "Level2(Fast)",
                    value: "Level 2 (Fast)",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 2 (Fast)",
                        TraditionalChinese: "Level 2 (Fast)"
                    },
                    nodes: null
                },
                {
                    key: "Level3",
                    value: "Level 3",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 3",
                        TraditionalChinese: "Level 3"
                    },
                    nodes: null
                },
                {
                    key: "Level4(Fastest)",
                    value: "Level 4 (Fastest)",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 4 (Fastest)",
                        TraditionalChinese: "Level 4 (Fastest)"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        {
            key: "Sharpness",
            value: "Level 4",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Sharpness",
                TraditionalChinese: "Sharpness"
            },
            nodes: [
                {
                    key: "Level1",
                    value: "Level 1",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 1",
                        TraditionalChinese: "Level 1"
                    },
                    nodes: null
                },
                {
                    key: "Level2",
                    value: "Level 2",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 2",
                        TraditionalChinese: "Level 2"
                    },
                    nodes: null
                },
                {
                    key: "Level3",
                    value: "Level 3",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 3",
                        TraditionalChinese: "Level 3"
                    },
                    nodes: null
                },
                {
                    key: "Level4",
                    value: "Level 4",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 4",
                        TraditionalChinese: "Level 4"
                    },
                    nodes: null
                },
                {
                    key: "Level5",
                    value: "Level 5",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 5",
                        TraditionalChinese: "Level 5"
                    },
                    nodes: null
                },
                {
                    key: "Level6",
                    value: "Level 6",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Level 6",
                        TraditionalChinese: "Level 6"
                    },
                    nodes: null
                },
                {
                    key: "Sharp",
                    value: "Sharp",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Sharp",
                        TraditionalChinese: "Sharp"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        },
        {
            key: "ImageScaling",
            value: "Fill to Screen",
            mode: ModeType.button,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Image Scaling",
                TraditionalChinese: "Image Scaling"
            },
            nodes: [
                {
                    key: "FilltoScreen",
                    value: "Fill to Screen",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Fill to Screen",
                        TraditionalChinese: "Fill to Screen"
                    },
                    nodes: null
                },
                {
                    key: "FilltoAspectRatio",
                    value: "Fill to Aspect Ratio",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Fill to Aspect Ratio",
                        TraditionalChinese: "Fill to Aspect Ratio"
                    },
                    nodes: null
                },
                {
                    key: "Sharp",
                    value: "Sharp",
                    mode: ModeType.radio,
                    only: ["HDMI", "VGA"],
                    mergeGrid: true,
                    language: {
                        English: "Sharp",
                        TraditionalChinese: "Sharp"
                    },
                    nodes: null
                },
                // 返回
                {
                    key: "Back",
                    value: null,
                    mode: ModeType.button,
                    only: ["HDMI", "VGA"],
                    mergeGrid: false,
                    language: {
                        English: "Back",
                        TraditionalChinese: "返回"
                    },
                    nodes: null
                }
            ]
        }
    ];
};