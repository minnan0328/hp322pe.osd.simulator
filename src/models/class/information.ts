import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Information implements Nodes {
    key = "Information";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    merge = false;
    language = {
        English: 'Information',
        TraditionalChinese: '資訊'
    };
    nodes = [];
};