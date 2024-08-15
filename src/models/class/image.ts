import type { Nodes } from '@/types';

export default class Image implements Nodes {
    key = "Image";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [];
};