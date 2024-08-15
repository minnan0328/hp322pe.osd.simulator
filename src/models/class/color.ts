import type { Nodes } from '@/types';

export default class Color implements Nodes {
    key = "Color";
    value = "Neutral";
    mode = null;
    only = [ "VGA" ];
    nodes = [
        // ECO
        { key: "ECO", value: "ECO", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
        // 暖色
        { key: "Warm", value: "Warm", mode: "range", nodes: null, only: [ "HDMI", "VGA" ] },
        // 中性色
        { key: "Neutral", value: "Neutral", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
        // 冷色
        { key: "Low Blue Light", value: "Low Blue Light", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
        // 原生
        { key: "HP Enhance+", value: "Medium", mode: "radio", 
            nodes: [
                { key: "Low", value: " Auto", mode: "radio", nodes: null,  only: [ "HDMI", "VGA" ] },
                { key: "Medium", value: "Medium", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
                { key: "High", value: "High", mode: "radio", nodes: null, only: [ "HDMI", "VGA" ] },
            ],
            only: [ "HDMI", "VGA" ]
        },
        // 重置
        { key: "Reset", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] },
        // 返回
        { key: "Contrast", value: null, mode: "button", nodes: null, only: [ "HDMI", "VGA" ] }
    ];
};