const color = {
    key: "Color",
    value: "Neutral",
    mode: "radio",
    only: [ "HDMI", "VGA" ],
    reset: true,
    back: true,
    nodes: [
        // ECO
        { key: "ECO", value: "ECO", mode: "radio", nodes: null, reset: false, back: false, only: [ "HDMI", "VGA" ] },
        // 暖色
        { key: "Warm", value: "Warm", mode: "range", nodes: null, reset: false, back: false, only: [ "HDMI", "VGA" ] },
        // 中性色
        { key: "Neutral", value: "Neutral", mode: "radio", reset: false, back: false, nodes: null, only: [ "HDMI", "VGA" ] },
        // 冷色
        { key: "Low Blue Light", value: "Low Blue Light", mode: "radio", reset: false, back: false, nodes: null, only: [ "HDMI", "VGA" ] },
        // 原生
        { key: "HP Enhance+", value: "Medium", mode: "radio", reset: false, back: true, 
            nodes: [
                { key: "Low", value: " Auto", mode: "radio", nodes: null,  reset: false, back: true, only: [ "HDMI", "VGA" ] },
                { key: "Medium", value: "Medium", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
                { key: "High", value: "High", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
            ],
            only: [ "HDMI", "VGA" ]
        }
    ]
};


export default color;