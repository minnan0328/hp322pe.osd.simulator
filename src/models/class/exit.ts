import type { Nodes } from "@/types";
import { ModeType } from "@/types";
export default class Exit implements Nodes {
    key = "Exit";
    value = "logo.png";
    mode = ModeType.image;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Exit",
        TraditionalChinese: "退出"
    };
    nodes = [];
};