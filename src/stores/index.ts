import { reactive, toRefs } from 'vue';
import { defineStore } from 'pinia';
import {
	Brightness, Color, Image, Input,
	Power, Menu, Management,Information, Exit
} from '@/models/index';


import { AssignAutoAdjustmentNodes, AssignColorNodes } from '@/models/class/menu/assign-buttons/_utilities';
const AssignAutoAdjustmentNodesEnum = new AssignAutoAdjustmentNodes();
const AssignColorNodesEnum = new AssignColorNodes();

export interface StoreState {
    brightnessPlus: Brightness;
    color: Color;
    image: Image;
    input: Input;
    power: Power;
    menu: Menu;
    management: Management;
    information: Information;
    exit: Exit;
    isDiagnosticPatterns: boolean;
    currentDiagnosticPatterns: string;
}

// 定義 resetMenus 類型
const resetMenus: Record<keyof StoreState, StoreState[keyof StoreState]> = {
    brightnessPlus: new Brightness(),
    color: new Color(),
    image: new Image(),
    input: new Input(),
    power: new Power(),
    menu: new Menu(),
    management: new Management(),
    information: new Information(),
    exit: new Exit(),
	isDiagnosticPatterns: false,
	currentDiagnosticPatterns: "black"
};

export const useStore = defineStore('counter', () => {
    const state = reactive<StoreState>({
        brightnessPlus: new Brightness(),
        color: new Color(),
        image: new Image(),
        input: new Input(),
        power: new Power(),
        menu: new Menu(),
        management: new Management(),
        information: new Information(),
        exit: new Exit(),
        isDiagnosticPatterns: false,
        currentDiagnosticPatterns: "black",
    });

    // 選擇 VGA 時更換自訂按鈕項目
    function setAssignButtonValue() {
        const assignButton2Result = state.input.result === "VGA" ? AssignAutoAdjustmentNodesEnum : AssignColorNodesEnum;
        if (state.menu.nodes[5]?.nodes?.[1]) {
            state.menu.nodes[5].nodes[1].selected = assignButton2Result.selected;
            state.menu.nodes[5].nodes[1].result = assignButton2Result.result;
        }
    }

    // 目前只顯示英文，所以當切換語言時，返回上一步要恢復設定
    function resetLanguage() {
        if (state.menu.nodes[0]) {
            state.menu.nodes[0].selected = "English";
            state.menu.nodes[0].result = "English";
        }
    }

    function $reset() {
        state.brightnessPlus = JSON.parse(JSON.stringify(new Brightness()));
        state.color = JSON.parse(JSON.stringify(new Color()));
        state.image = JSON.parse(JSON.stringify(new Image()));
        state.input = JSON.parse(JSON.stringify(new Input()));
        state.power = JSON.parse(JSON.stringify(new Power()));
        state.menu = JSON.parse(JSON.stringify(new Menu()));
        state.management = JSON.parse(JSON.stringify(new Management()));
        state.information = JSON.parse(JSON.stringify(new Information()));
        state.exit = JSON.parse(JSON.stringify(new Exit()));
    }

    return {
        ...toRefs(state),
        $reset,
        setAssignButtonValue,
        resetLanguage,
    };
});