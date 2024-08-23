import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ResetNodes, BackNodes } from '../_utilities';
import LanguageNodes from './_language-nodes';
import MenuPositionNodes from './_menu-position-nodes';
import MenuTransparencyNodes from './_menu-transparency-nodes';
import MenuTimeoutNodes from './_menu-timeout-nodes';
import OSDMessagesNodes from './OSD-messages-nodes/_OSD-messages-nodes';
import AssignButtonsNodes from './assign-buttons/_assign-buttons-nodes';

let ResetNodesEnum = new ResetNodes(); 
let BackNodesEnum = new BackNodes();
let LanguageNodesEnum = new LanguageNodes();
let MenuPositionNodesEnum = new MenuPositionNodes();
let MenuTransparencyNodesEnum = new MenuTransparencyNodes();
let MenuTimeoutNodesEnum = new MenuTimeoutNodes();
let OSDMessagesNodesEnum = new OSDMessagesNodes();
let AssignButtonsNodesEnum = new AssignButtonsNodes();

export default class Menu extends DefaultNodes implements Nodes {
    key = "Menu";
    size = 8;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Menü",
        SimplifiedChinese: "菜单",
        TraditionalChinese: "功能表",
        English: "Menu",
        Español: "Menú",
        French: "Menu",
        Italian: "Menu",
        Japanese: "メニュー",
        Nederlands: "Menu",
        BrazilianPortuguese: "Menu",
        Russian: "Меню"
    };
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
            ...ResetNodesEnum,
            parents: this.key
        },
        // 上一步
        {
            ...BackNodesEnum,
            parents: this.key
        }
    ];
};