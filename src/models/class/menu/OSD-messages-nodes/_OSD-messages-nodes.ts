// 功能表 > OSD 訊息

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { BackNodes } from '../../_utilities';
import MonitorStatusNodes from './_monitor-status-nodes';

const BackNodesEnum = new BackNodes();
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
        German: "OSD-Nachrichten",
        SimplifiedChinese: "OSD 消息",
        TraditionalChinese: "OSD 訊息",
        English: "OSD Messages",
        Español: "Mensajes OSD",
        French: "Messages OSD",
        Italian: "Messaggi OSD",
        Japanese: "OSDメッセージ",
        Nederlands: "Schermweergaveberichten",
        BrazilianPortuguese: "Mensagens OSD",
        Russian: "Сообщения OSD"
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
                German: "Power-On Logo",
                SimplifiedChinese: "开机徽标",
                TraditionalChinese: "電源開啟標誌",
                English: "Power-On Logo",
                Español: "Logotipo de encendido",
                French: "Logo de mise sous tension",
                Italian: "Logo accensione",
                Japanese: "電源投入時ロゴ",
                Nederlands: "Logo bij inschakelen",
                BrazilianPortuguese: "Logótipo de arranque",
                Russian: "Логотип при включении питания"
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
                German: "Keine Eingangssignal-Warnung",
                SimplifiedChinese: "无输入信号警告",
                TraditionalChinese: "「無輸入訊號」警告",
                English: "No Input Signal Warning",
                Español: "Advertencia de falta de señal de entrada",
                French: "Avertissement : Aucun signal d'entrée",
                Italian: "Avviso assenza segnale ingresso",
                Japanese: "警告、入力信号なし",
                Nederlands: "Waarschuwing geen signaal",
                BrazilianPortuguese: "Aviso de sem sinal de entrada",
                Russian: "Предупреждение: нет входного сигнала"
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
                German: "Änderungsmeldung bestätigen",
                SimplifiedChinese: "确认变更讯息",
                TraditionalChinese: "確認變更訊息",
                English: "Confirm Change Message",
                Español: "Confirmar mensaje de cambio",
                French: "Confirmer le message de modification",
                Italian: "Conferma il messaggio di modifica",
                Japanese: "変更メッセージの確認",
                Nederlands: "Bevestig wijzigingsbericht",
                BrazilianPortuguese: "Confirmar mensagem de alteração",
                Russian: "подтвердить изменение"
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
            ...BackNodesEnum,
            parents: this.key
        }
    ]
};