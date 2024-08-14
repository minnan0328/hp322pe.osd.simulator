import type { Nodes } from '@/interface';


const input: Nodes = {
    key: "Input",
    value: "HDMI",
    mode: null,
    only: [ "HDMI", "VGA" ],
    nodes: [
        // HDMI
        { key: "HDMI", value: "HDMI", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
        // VGA
        { key: "VGA", value: "VGA", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
        // 
        { key: "Auto-Switch Input", value: "On", mode: null, 
            nodes: [
                { key: "On", value: "On", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                { key: "Off", value: "Off", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                // 返回
                { key: "Back", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] }
            ],
            only: [ "HDMI", "VGA" ]
        },
        // 重置
        { key: "Reset", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] },
        // 返回
        { key: "Back", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] }
    ]
};


export default input;