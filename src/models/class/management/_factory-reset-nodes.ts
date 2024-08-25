// 管理 > 恢復出廠設定值

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes } from '../_utilities';

const DefaultNodesEnum = new DefaultNodes(); 
const BackNodesEnum = new BackNodes();

export default class FactoryResetNodes extends DefaultNodes implements Nodes {
    key = "FactoryReset";
    selected = "Yes";
    result = "Yes";
    size = 3;
    page = 1;
    mode = ModeType.button;
    language = {
        German: "Werkseinst. wiederherst.",
        SimplifiedChinese: "恢复出厂设置",
        TraditionalChinese: "恢復出廠預設值",
        English: "Factory Reset",
        Español: "Ajuste de fábrica",
        French: "Réglage usine",
        Italian: "Regolazione di fabbrica",
        Japanese: "出荷時設定にリセット",
        Nederlands: "Standaard herstellen",
        BrazilianPortuguese: "Redefinição de Fábrica",
        Russian: "Сброс до заводских значений"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "Yes",
            selected: "Yes",
            result: "Yes",
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Ja",
                SimplifiedChinese: "是",
                TraditionalChinese: "是",
                English: "Yes",
                Español: "Sí",
                French: "Oui",
                Italian: "Sì",
                Japanese: "はい",
                Nederlands: "Ja",
                BrazilianPortuguese: "Sim",
                Russian: "Да"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "No",
            selected: "No",
            result: "No",
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Nein",
                SimplifiedChinese: "否",
                TraditionalChinese: "否",
                English: "No",
                Español: "No",
                French: "Non",
                Italian: "No",
                Japanese: "いいえ",
                Nederlands: "Nee",
                BrazilianPortuguese: "Não",
                Russian: "Нет"
            },
            unit: null,
            nodes: null
        },
        // 上一步
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ]
};