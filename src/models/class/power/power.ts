import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import AutoSleepModeNodes from './_auto-sleep-mode-nodes';
import PowerOnRecallNodes from './_power-on-recall';
import PowerLEDNodes from './_power-LED-nodes';

let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let AutoSleepModeNodesEnum = new AutoSleepModeNodes();
let PowerOnRecallNodesEnum = new PowerOnRecallNodes();
let PowerLEDNodesEnum = new PowerLEDNodes();

export default class Power extends DefaultNodes implements Nodes {
    key = "Power";
    size = 5;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Energie",
        SimplifiedChinese: "电源",
        TraditionalChinese: "電源",
        English: "Power",
        Español: "Alimentación",
        French: "Alimentation",
        Italian: "Alimentazione",
        Japanese: "電源",
        Nederlands: "Energie",
        BrazilianPortuguese: "Energia",
        Russian: "Питание"
    };
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