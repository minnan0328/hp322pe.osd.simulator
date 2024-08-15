import type { Nodes } from '@/types';

export default class Exit implements Nodes {
    key = "Exit";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [];
};