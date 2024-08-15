import type { Nodes } from '@/types';
import { ModeType } from '@/types';

export default class Image implements Nodes {
    key = "Image";
    value = null;
    mode = ModeType.button;
    only = [ "HDMI", "VGA" ];
    merge = false;
    language = {
        English: 'Image',
        TraditionalChinese: '影像'
    };
    nodes = [];
};