import { useStore } from '@/stores/index';
const store = useStore();

export const BrightnessDefaultValueEnum = {
    [store.$state.color.nodes[0].key]: 76,
    [store.$state.color.nodes[1].key]: 26,
    [store.$state.color.nodes[2].key]: 86,
    [store.$state.color.nodes[3].key]: 86,
    [store.$state.color.nodes[4].key]: 100,
    [store.$state.color.nodes[5].key]: 90,
    [store.$state.color.nodes[6].key]: 86,
    [store.$state.color.nodes[7].key]: 100,
};

export function setBrightnessDefaultValue() {
    store.$state.brightness.nodes[0].selected = BrightnessDefaultValueEnum[store.$state.color.selected];
    store.$state.brightness.nodes[0].result = BrightnessDefaultValueEnum[store.$state.color.result];
    store.$state.brightness.nodes[0].nodes![0].selected = BrightnessDefaultValueEnum[store.$state.color.selected];
    store.$state.brightness.nodes[0].nodes![0].result = BrightnessDefaultValueEnum[store.$state.color.result];
};