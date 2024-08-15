import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Management implements Nodes {
    key = "Management";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    merge = false;
    language = {
        English: 'Management',
        TraditionalChinese: '管理'
    };
    nodes = [];
};