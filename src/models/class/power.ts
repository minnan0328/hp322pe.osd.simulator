import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Power implements Nodes {
    key = "Power";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    merge = false;
    language = {
        English: 'Power',
        TraditionalChinese: '電源'
    };
    nodes = [];
};