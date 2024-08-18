import { computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
const store = useStore();

const currentLanguage = computed(() => {
    let language = store.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.value ?? "English";
});

export function toLanguageText(langItem: { [key: string]: string; }) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

export function getIconSrc (setItem: Nodes) {
    return new URL(`/src/assets/icons/${setItem.rangeIcon}`, import.meta.url).href;
};
