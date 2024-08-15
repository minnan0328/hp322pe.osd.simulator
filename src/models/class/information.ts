import type { Nodes } from '@/types';

export default class Information implements Nodes {
    key = "Information";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [];
};