import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { toLanguageText, toDisplayValueLanguageText } from './toDisplayLanguageText';
const store = useStore();

export function isEnableInput(nodes: Nodes): boolean {
    return nodes.only?.includes(store.$state.input.value) ? true : false;
};

export function getIconSrc (setItem: Nodes) {
    return new URL(`/src/assets/icons/${setItem.rangeIcon}`, import.meta.url).href;
};

export {
    toLanguageText,
    toDisplayValueLanguageText
}