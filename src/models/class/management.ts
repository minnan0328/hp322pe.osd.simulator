import type { Nodes } from '@/types';

export default class Management implements Nodes {
    key = "Management";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [];
};