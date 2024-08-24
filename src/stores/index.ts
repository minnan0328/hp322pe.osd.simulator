import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import {
	Brightness, Color, Image, Input,
	Power, Menu, Management,Information, Exit
} from '@/models/index';


import { AssignAutoAdjustmentNodes, AssignColorNodes } from '@/models/class/menu/assign-buttons/_utilities';
const AssignAutoAdjustmentNodesEnum = new AssignAutoAdjustmentNodes();
const AssignColorNodesEnum = new AssignColorNodes();

export const useStore = defineStore('counter', () => {
	let brightness = ref(new Brightness());
	let color = ref(new Color());
	let image = ref(new Image());
	let input = ref(new Input());
	let power = ref(new Power());
	let menu = ref(new Menu());
	let management = ref(new Management());
	let information = ref(new Information());
	let exit = ref(new Exit());

	let isDiagnosticPatterns = ref(false);
	let currentDiagnosticPatterns = ref("black");

    // 選擇 VGA 時更換自訂按鈕項目
	function setAssignButtonValue() {
		let assignButton2Result = input.value.result == "VGA" ? AssignAutoAdjustmentNodesEnum : AssignColorNodesEnum;
		menu.value.nodes[5].nodes![1].selected = assignButton2Result.selected;
		menu.value.nodes[5].nodes![1].result = assignButton2Result.result;
	};

	// 目前只顯示英文，所以當切換語言時，返回上一步要恢復設定
	function resetLanguage() {
		menu.value.nodes[0].selected = "English";
		menu.value.nodes[0].result = "English";
	}

	function $reset() {
		brightness.value = new Brightness();
		color.value = new Color();
		image.value = new Image();
		input.value = new Input();
		power.value = new Power();
		menu.value = new Menu();
		management.value = new Management();
		information.value = new Information();
		exit.value = new Exit();
	}

	return { brightness, color, image, input,
		power, menu, management, information, exit,
		isDiagnosticPatterns, currentDiagnosticPatterns,
		$reset, setAssignButtonValue, resetLanguage
	};
});