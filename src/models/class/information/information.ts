import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import Color from '../color/_cool-nodes';
import { ExitNodes } from '../_utilities';

const ColorEnum = new Color();
const ExitNodesEnum = new ExitNodes();

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
        German: "Information",
        SimplifiedChinese: "信息",
        TraditionalChinese: "資訊",
        English: "Information",
        Español: "Información",
        French: "Informations",
        Italian: "Informazioni",
        Japanese: "情報",
        Nederlands: "Informatie",
        BrazilianPortuguese: "Informação",
        Russian: "Информация"
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
                German: "Aktueller Modus",
                SimplifiedChinese: "当前模式",
                TraditionalChinese: "目前模式",
                English: "Current Mode",
                Español: "Modo actual",
                French: "Mode actuel",
                Italian: "Modalità corrente",
                Japanese: "現在のモード",
                Nederlands: "Huidige modus",
                BrazilianPortuguese: "Modo atual",
                Russian: "Текущий режим"
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
                German: "Optimaler Modus",
                SimplifiedChinese: "最佳模式",
                TraditionalChinese: "最佳模式",
                English: "Optimal Mode",
                Español: "Modo óptimo",
                French: "Mode optimal",
                Italian: "Modalità ottimale",
                Japanese: "最適なモード",
                Nederlands: "Optimale modus",
                BrazilianPortuguese: "Modo ótimo",
                Russian: "Оптимальный"
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
                German: "Farbeinstellung",
                SimplifiedChinese: "颜色设置",
                TraditionalChinese: "色彩設定",
                English: "Color Setting",
                Español: "Configuración de color",
                French: "Réglage couleur",
                Italian: "Impostazioni colore",
                Japanese: "カラー設定",
                Nederlands: "Kleurinstelling",
                BrazilianPortuguese: "Definição de cor",
                Russian: "Настройка цвета"
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
                German: "Firmwarepaketversion",
                SimplifiedChinese: "固件包版本",
                TraditionalChinese: "韌體套件版本",
                English: "FW Package Version",
                Español: "Versión del paquete de FW",
                French: "Version de package du FW",
                Italian: "Versione del pacchetto FW",
                Japanese: "FWパッケージのバージョン",
                Nederlands: "Versie van firmwarepakket",
                BrazilianPortuguese: "Versão do pacote de firmware",
                Russian: "Версия пакета микропрограммы"
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
                German: "Hardwarerevision",
                SimplifiedChinese: "硬件修订版本号",
                TraditionalChinese: "硬體修訂編號",
                English: "HW Revision",
                Español: "Revisión de hardware",
                French: "Révision du matériel",
                Italian: "Revisione hardware",
                Japanese: "HWのリビジョン",
                Nederlands: "Revisie van hardware",
                BrazilianPortuguese: "Revisão de hardware",
                Russian: "Версия оборудования"
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
                German: "Seriennummer",
                SimplifiedChinese: "序列号",
                TraditionalChinese: "序列號碼",
                English: "Serial Number",
                Español: "Número de serie",
                French: "N° de série",
                Italian: "N. di serie",
                Japanese: "シリアル番号",
                Nederlands: "Serienummer",
                BrazilianPortuguese: "Número de Série",
                Russian: "Серийный номер"
            },
            unit: null,
            nodes: null
        },
        {
            ...ExitNodesEnum,
            parents: this.key,
        }
    ];
}