import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import Color from '../color/_cool-nodes';
import { Exit } from '../_utilities';

const ColorEnum = new Color();
const ExitEnum = new Exit();

export default class Information implements Nodes {
    key = "Information";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 7;
    page = 1;
    parents = null;
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
            result: "1920x1080 60Hz",
            displayValue: true,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
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
            result: "1920x1080 100Hz",
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            displayValue: true,
            parents: this.key,
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
            value: ColorEnum.value,
            result: ColorEnum.result,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            displayValue: true,
            parents: this.key,
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
            result: "0.0.1.0",
            displayValue: true,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
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
            result: "B0IT0000",
            displayValue: true,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
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
            result: "CNK0000001",
            displayValue: true,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 0,
            parents: this.key,
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
        },
        {
            ...ExitEnum,
            parents: this.key,
        }
    ];
}