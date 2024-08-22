import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import {
	Brightness,
	Color,
	Image,
	Input,
	Power,
	Menu,
	Management,
	Information,
	Exit
} from '@/models/index';

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

	return { brightness, color, image, input, power, menu, management, information, exit, $reset };
})
