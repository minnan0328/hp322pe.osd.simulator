const brightness = {
    key: "Brightness +",
    value: null,
    mode: "menu",
    only: [ "HDMI", "VGA" ],
    reset: true,
    back: true,
    nodes: [
        // 亮度
        { key: "Brightness", value: 86, mode: "range", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
        // 對比
        { key: "Contrast", value: 100, mode: "range", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
        // 動態對比
        { key: "Dynamic Contrast", value: "Off", mode: "radio", reset: false, back: true, 
            nodes: [
                { key: "On", value: "On", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
                { key: "Off", value: "Off", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] }
            ],
            only: [ "HDMI", "VGA" ]
        },
        { key: "Black Stretch", value: "Off", mode: "radio", reset: false, back: true, 
            nodes: [
                { key: "On", value: "On", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
                { key: "Low", value: "Low", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
                { key: "Medium", value: "Medium", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] },
                { key: "High", value: "High", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI", "VGA" ] }
            ],
            only: [ "HDMI", "VGA" ]
        },
        { key: "Video Level", value: "Auto", mode: "radio", reset: false, back: true, 
            nodes: [
                { key: "Auto", value: " Auto", mode: "radio", nodes: null,  reset: false, back: true, only: [ "HDMI"] },
                { key: "Limited Range (16 - 235)", value: "Limited Range (16 - 235)", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI"] },
                { key: "Full Range (0 - 255)", value: "Full Range (0 - 255)", mode: "radio", nodes: null, reset: false, back: true, only: [ "HDMI"] },
            ],
            only: [ "HDMI", "VGA" ]
        }
    ]
};

export default brightness;