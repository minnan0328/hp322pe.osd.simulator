import type { Nodes } from "@/types";
import { ModeType } from "@/types";


export default class Exit implements Nodes {
    key = "Exit";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Exit",
        TraditionalChinese: "退出"
    };
    nodes = [];
};