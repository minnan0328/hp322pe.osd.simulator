import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import Color from './color';
const currentCOlor = new Color();
export default class Information implements Nodes {
    key = "Information";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Information",
        TraditionalChinese: "資訊"
    };
    nodes = [
        {
            key: "CurrentMode:",
            value: "1920x1080 60Hz",
            mode: ModeType.info,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Current Mode:",
                TraditionalChinese: "Current Mode:"
            },
            nodes: null
        },
        {
            key: "OptimalMode:",
            value: "1920x1080 100Hz",
            mode: ModeType.info,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Optimal Mode:",
                TraditionalChinese: "Optimal Mode:"
            },
            nodes: null
        },
        {
            key: "ColorSetting:",
            value: currentCOlor.value,
            mode: ModeType.info,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Color Setting:",
                TraditionalChinese: "Color Setting:"
            },
            nodes: null
        },
        {
            key: "FWPackageVersion:",
            value: "0.0.1.0",
            mode: ModeType.info,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "FW Package Version:",
                TraditionalChinese: "FW Package Version:"
            },
            nodes: null
        },
        {
            key: "HWRevision:",
            value: "B0IT0000",
            mode: ModeType.info,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "HW Revision:",
                TraditionalChinese: "HW Revision:"
            },
            nodes: null
        },
        {
            key: "SerialNumber:",
            value: "CNK0000001",
            mode: ModeType.info,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Serial Number:",
                TraditionalChinese: "Serial Number:"
            },
            nodes: null
        }
    ];
};