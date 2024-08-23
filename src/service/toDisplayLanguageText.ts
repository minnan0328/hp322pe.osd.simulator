import { computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
const store = useStore();

const currentLanguage = computed(() => {
    let language = store.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.value ? language?.value : "English";
});

export function toLanguageText(langItem: { [key: string]: string; }) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

export function toDisplayValueLanguageText(nodes: Nodes) {
    // 取得第一層需要顯示值得語言 
    if(nodes.displayValue && nodes.nodes) {
        let node = nodes.nodes.find(n => {
            if(n.mode == ModeType.radio) {
                return nodes.value == n.value;
            }
        });
        return node ? toLanguageText(node?.language) : nodes.value;
    }
};