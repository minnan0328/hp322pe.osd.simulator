import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { ResetNodes, BackNodes } from '../_utilities';
import AutoSleepModeNodes from './_auto-sleep-mode-nodes';
import PowerOnRecallNodes from './_power-on-recall';
import PowerLEDNodes from './_power-LED-nodes';

let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let AutoSleepModeNodesEnum = new AutoSleepModeNodes();
let PowerOnRecallNodesEnum = new PowerOnRecallNodes();
let PowerLEDNodesEnum = new PowerLEDNodes();

export default class Power implements Nodes {
    key = "Power";
    value = null;
    result = null;
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
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Power",
        TraditionalChinese: "電源"
    };
    unit = null;
    nodes = [
        // 自動睡眠模式
        {
            ...AutoSleepModeNodesEnum,
            parents: this.key
        },
        // 重新開機
        {
            ...PowerOnRecallNodesEnum,
            parents: this.key

        },
        // 電源指示燈
        {
            ...PowerLEDNodesEnum,
            parents: this.key
        },
        // 重置
        {
            ...ResetNodesEnum,
            parents: this.key,
            mergeGrid: true 
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key,
            mergeGrid: true 
        }
    ];
};