import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { Reset, Back } from '../_utilities';
import LanguageNodes from './_language-nodes';
import MenuPositionNodes from './_menu-position-nodes';
import MenuTransparencyNodes from './_menu-transparency-nodes';
import MenuTimeoutNodes from './_menu-timeout-nodes';
import OSDMessagesNodes from './OSD-messages-nodes/_OSD-messages-nodes';
import AssignButtonsNodes from './assign-buttons/_assign-buttons-nodes';

let ResetEnum = new Reset(); 
let BackEnum = new Back();
let LanguageNodesEnum = new LanguageNodes();
let MenuPositionNodesEnum = new MenuPositionNodes();
let MenuTransparencyNodesEnum = new MenuTransparencyNodes();
let MenuTimeoutNodesEnum = new MenuTimeoutNodes();
let OSDMessagesNodesEnum = new OSDMessagesNodes();
let AssignButtonsNodesEnum = new AssignButtonsNodes();

export default class Menu implements Nodes {
    key = "Menu";
    value = null;
    displayValue = false;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = ["HDMI", "VGA"];
    mergeGrid = false;
    language = {
        English: "Menu",
        TraditionalChinese: "功能表"
    };
    unit = null;
    nodes = [
        // 語言
        {
            ...LanguageNodesEnum,
            parents: this.key
        },
        // 選單位置
        {
            ...MenuPositionNodesEnum,
            parents: this.key
        },
        // 功能表透明度
        {
            ...MenuTransparencyNodesEnum,
            parents: this.key
        },
        // 功能表延遲
        {
            ...MenuTimeoutNodesEnum,
            parents: this.key
        },
        // OSD 訊息
        {
            ...OSDMessagesNodesEnum,
            parents: this.key
        },
        // 指定鍵
        {
            ...AssignButtonsNodesEnum,
            parents: this.key
        },
        // 重置
        {
            ...ResetEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackEnum,
            parents: this.key
        }
    ];
};