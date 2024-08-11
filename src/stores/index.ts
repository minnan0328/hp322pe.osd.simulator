import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

import BrightnessEnum from '@/models/enum/brightness';

export const useStore = defineStore('counter', () => {
  const brightness = reactive(BrightnessEnum)

  return { brightness };
})
