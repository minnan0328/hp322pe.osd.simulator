// 亮度基本值，依據 color 切換有不同亮度
import type { Nodes } from '@/types';

export default class Brightness implements Nodes {
    key = "Brightness +";
    value = null;
    mode = null;
    only = [ "HDMI", "VGA" ];
    nodes = [
        // 亮度
        { key: "Brightness", value: 86, mode: "range", nodes: null, only: [ "HDMI", "VGA" ] },
        // 對比
        { key: "Contrast", value: 100, mode: "range", nodes: null, only: [ "VGA" ] },
        // 動態對比
        { key: "Dynamic Contrast", value: "Off", mode: null, 
            nodes: [
                { key: "On", value: "On", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                { key: "Off", value: "Off", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] }
            ],
            only: [ "HDMI", "VGA" ]
        },
        { key: "Black Stretch", value: "Off", mode: null, 
            nodes: [
                { key: "On", value: "On", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                { key: "Low", value: "Low", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                { key: "Medium", value: "Medium", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                { key: "High", value: "High", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] }
            ],
            only: [ "HDMI", "VGA" ]
        },
        { key: "Video Level", value: "Auto", mode: null, 
            nodes: [
                { key: "Auto", value: " Auto", mode: "radio", nodes: null,  only: [ "HDMI"] },
                { key: "Limited Range (16 - 235)", value: "Limited Range (16 - 235)", mode: "radio", nodes: null, only: [ "HDMI"] },
                { key: "Full Range (0 - 255)", value: "Full Range (0 - 255)", mode: "radio", nodes: null, only: [ "HDMI"] },
            ],
            only: [ "HDMI", "VGA" ]
        },
        // 重置
        { key: "Reset", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] },
        // 返回
        { key: "Back", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] }
    ];
};