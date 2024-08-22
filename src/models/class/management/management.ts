import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { ResetNodes, BackNodes } from '../_utilities';
import FactoryResetNodes from './_factory-reset-nodes';
import DDCCISupportNodes from './_DDC-CISupport-nodes';
import DiagnosticPatternsNodes from './_diagnostic-patterns-nodes';
import AccessibilityNodes from './_accessibility-nodes';

const ResetNodesEnum = new ResetNodes(); 
const BackNodesEnum = new BackNodes();
const FactoryResetNodesEnum = new FactoryResetNodes();
const DDCCISupportNodesEnum = new DDCCISupportNodes();
const DiagnosticPatternsNodesEnum = new DiagnosticPatternsNodes();
const AccessibilityNodesEnum = new AccessibilityNodes();

export default class Management implements Nodes {
    key = "Management";
    value = null;
    result = null;
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 6;
    page = 1;
    parents = null;
    mode = ModeType.button;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        German: "Steuerung",
        SimplifiedChinese: "管理",
        TraditionalChinese: "管理",
        English: "Management",
        Español: "Gestión",
        French: "Gestion",
        Italian: "Gestione",
        Japanese: "マネージメント",
        Nederlands: "Beheer",
        BrazilianPortuguese: "Gerenciamento",
        Russian: "Управление"
    };
    unit = null;
    nodes = [
        {
            ...FactoryResetNodesEnum,
            parents: this.key
        },
        {
            ...DDCCISupportNodesEnum,
            parents: this.key
        },
        {
            ...DiagnosticPatternsNodesEnum,
            parents: this.key
        },
        {
            // 目前實體螢幕無顯示此功能，須待確認
            ...AccessibilityNodesEnum,
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