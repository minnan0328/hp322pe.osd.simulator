import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { ExitNodes } from '../_utilities';
const ExitNodesEnum = new ExitNodes();

export default class Exit implements Nodes {
    key = "Exit";
    value = "logo.png";
    result = "logo.png";
    displayValue = false;
    displayState = false;
    livePreview = false;
    size = 0;
    page = 1;
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