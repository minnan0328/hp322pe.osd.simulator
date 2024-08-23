import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, ExitNodes } from '../_utilities';
const ExitNodesEnum = new ExitNodes();

export default class Exit extends DefaultNodes implements Nodes {
    key = "Exit";
    selected = "logo.png";
    result = "logo.png";
    mode = ModeType.exit;
    only = [ "HDMI", "VGA" ];
    language = {
        German: "Beenden",
        SimplifiedChinese: "退出",
        TraditionalChinese: "退出",
        English: "Exit",
        Español: "Salir",
        French: "Quitter",
        Italian: "Uscita",
        Japanese: "終了",
        Nederlands: "Afsluiten",
        BrazilianPortuguese: "Sair",
        Russian: "Выход"
    };
};