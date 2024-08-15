import type { Nodes } from '@/types';

export default class Power implements Nodes {
    key = "Power";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [];
};