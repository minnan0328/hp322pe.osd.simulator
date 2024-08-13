import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

import BrightnessEnum from '@/models/enum/brightness';
import ColorEnum from '@/models/enum/color';

export const useStore = defineStore('counter', () => {
  const brightness = reactive(BrightnessEnum);
  const color = reactive(ColorEnum);

  return { brightness, color };
})
