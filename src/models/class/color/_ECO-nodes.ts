// 顏色 > ECO

import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes } from '../_utilities';

export default class ECONodes extends DefaultNodes implements Nodes {
    key = "ECO";
    selected = "ECO";
    result = "ECO";
    livePreview = true;
    mode = ModeType.radio;
    language = {
        German: "ECO",
        SimplifiedChinese: "ECO",
        TraditionalChinese: "ECO",
        English: "ECO",
        Español: "ECO",
        French: "ECO",
        Italian: "ECO",
        Japanese: "ECO",
        Nederlands: "ECO",
        BrazilianPortuguese: "ECO",
        Russian: "ECO"
    };
};