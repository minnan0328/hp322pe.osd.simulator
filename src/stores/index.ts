import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

import BrightnessEnum from '@/models/enum/brightness';
import ColorEnum from '@/models/enum/color';
import InputEnum from '@/models/enum/input';

export const useStore = defineStore('counter', () => {
  const brightness = reactive(BrightnessEnum);
  const color = reactive(ColorEnum);
  const input = reactive(InputEnum);

  return { brightness, color, input };
})
