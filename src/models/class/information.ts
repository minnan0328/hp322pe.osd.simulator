import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import Color from './color';

const currentColor = new Color();

export default class Information implements Nodes {
    key = "Information";
    value = null;
    mode = ModeType.info;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Information",
        TraditionalChinese: "資訊"
    };
    unit = null;
    nodes = [
        {
            key: "CurrentMode:",
            value: "1920x1080 60Hz",
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Current Mode:",
                TraditionalChinese: "Current Mode:"
            },
            unit: null,
            nodes: null
        },
        {
            key: "OptimalMode:",
            value: "1920x1080 100Hz",
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Optimal Mode:",
                TraditionalChinese: "Optimal Mode:"
            },
            unit: null,
            nodes: null
        },
        {
            key: "ColorSetting:",
            value: currentColor.value,
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Color Setting:",
                TraditionalChinese: "Color Setting:"
            },
            unit: null,
            nodes: null
        },
        {
            key: "FWPackageVersion:",
            value: "0.0.1.0",
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "FW Package Version:",
                TraditionalChinese: "FW Package Version:"
            },
            unit: null,
            nodes: null
        },
        {
            key: "HWRevision:",
            value: "B0IT0000",
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "HW Revision:",
                TraditionalChinese: "HW Revision:"
            },
            unit: null,
            nodes: null
        },
        {
            key: "SerialNumber:",
            value: "CNK0000001",
            mode: ModeType.info,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Serial Number:",
                TraditionalChinese: "Serial Number:"
            },
            unit: null,
            nodes: null
        }
    ];
}