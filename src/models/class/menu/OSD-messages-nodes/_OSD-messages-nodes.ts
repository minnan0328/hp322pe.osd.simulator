// 功能表 > OSD 訊息

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Back } from '../../_utilities';
import MonitorStatusNodes from './_monitor-status-nodes';

const BackEnum = new Back();
const MonitorStatusNodesEnum = new MonitorStatusNodes();

export default class OSDMessagesNodes implements Nodes {
    key = "OSDMessages";
    value = ["Power-On Logo", "No Input Signal Warning", "Confirm Change Message"];
    result = ["Power-On Logo", "No Input Signal Warning", "Confirm Change Message"];
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 5;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false
    language = {
        English: "OSD Messages",
        TraditionalChinese: "OSD 訊息"
    };
    unit = {
        English: "s",
        TraditionalChinese: "s"
    };
    nodes = [
        {
            key: "PowerOnLogo",
            value: "Power-On Logo",
            result: "Power-On Logo",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.checkBox,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Power-On Logo",
                TraditionalChinese: "電源開啟標誌"
            },
            unit: null,
            nodes: null
        },
        {
            key: "NoInputSignalWarning",
            value: "No Input Signal Warning",
            result: "No Input Signal Warning",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.checkBox,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "No Input Signal Warning",
                TraditionalChinese: "「無輸入訊號」警告"
            },
            unit: null,
            nodes: null
        },
        {
            // Y (FD=On=>checked) EMEA
            // Y (FD=Off=>unchecked) Non-EMEA
            key: "ConfirmChangeMessage",
            value: "Confirm Change Message",
            result: "Confirm Change Message",
            displayValue: false,
            displayState: false,
            livePreview: false,
            size: 0,
            page: 1,
            parents: this.key,
            mode: ModeType.checkBox,
            rangeMin: 0,
            rangeMax: 0,
            rangeIcon: null,
            only: ["HDMI", "VGA"],
            mergeGrid: false,
            language: {
                English: "Confirm Change Message",
                TraditionalChinese: "確認變更訊息"
            },
            unit: null,
            nodes: null
        },
        {
            ...MonitorStatusNodesEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ]
};