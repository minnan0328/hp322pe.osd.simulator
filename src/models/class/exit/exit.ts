import type { Nodes } from "@/types";
import { ModeType } from "@/types";
export default class Exit implements Nodes {
    key = "Exit";
    value = "logo.png";
    displayValue = false;
    parents = null;
    mode = ModeType.exit;
    rangeMin = 0;
    rangeMax = 0;
    rangeIcon = null;
    only = [ "HDMI", "VGA" ];
    mergeGrid = false;
    language = {
        English: "Exit",
        TraditionalChinese: "退出"
    };
    unit = null;
    nodes = [];
};