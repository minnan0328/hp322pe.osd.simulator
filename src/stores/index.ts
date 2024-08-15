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
	const brightness = reactive(new Brightness());
	const color = reactive(new Color());
	const image = reactive(new Image());
	const input = reactive(new Input());
	const power = reactive(new Power());
	const menu = reactive(new Menu());
	const management = reactive(new Management());
	const information = reactive(new Information());
	const exit = reactive(new Exit());

	return { brightness, color, image, input, power, menu, management, information, exit };
})
