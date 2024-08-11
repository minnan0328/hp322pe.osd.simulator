
// 亮度基本值，依據 color 切換有不同亮度

class Brightness {
    ECO: number | string;
    Warm: number | string;
    Neutral: number | string;
    Cool: number | string;
    Native: number | string;
    LBL: number | string;
    HPEnahnces: number | string;
    CustomRGB: number | string;

    constructor() {
        this.ECO = 76;
        this.Warm = 26;
        this.Neutral = 86;
        this.Cool = 86;
        this.Native = 100;
        this.LBL = 90;
        this.HPEnahnces = 86;
        this.CustomRGB = 100;
    }
};

export default Brightness;