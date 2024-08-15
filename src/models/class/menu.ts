import type { Nodes } from '@/types';

export default class Menu implements Nodes {
    key = "Menu";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [];
};