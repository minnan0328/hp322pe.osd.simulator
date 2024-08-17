<template>
    <div :class="['customize-radio', { selected: selected }]">
        <div :class="['round', { selected: isChecked }]"></div>
        <div v-text="getLanguageText(setItem.language)"></div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { useStore } from '@/stores/index';
const store = useStore();

const props = defineProps({
    setItem: {
        type: Object as PropType<Nodes>,
        required: true
    },
    isChecked: {
        type: Boolean,
        required: true,
        default: false
    },
    selected: {
        type: Boolean,
        required: true,
        default: false
    }
});

const currentLanguage = computed(() => {
    let language = store.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.value ?? "English";
});

function getLanguageText(langItem: { [key: string]: string; }) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

</script>
<style lang="scss" scoped>
.customize-radio {
    height: 26px;
    border: 1px solid transparent;
    padding: 0 8px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    .round {
        position: relative;
        width: 10px;
        height: 10px;
        background-color: #000000;
        border: 1px solid #444444;
        border-radius: 50%;
        margin-right: 4px;

        &.selected::before {
            position: absolute;
            content: "";
            width: 6px;
            height: 6px;
            background-color: #aaaaaa;
            border-radius: 50%;
            left: 2px;
            top: 2px;
        }
    }

    &.selected:not(.disabled) {
        background-color: #000000;
        border: 1px solid #0083ca;
        color: #ffffff;

        &.customize-radio {
            .round {
                &.selected::before {
                    background-color: #ffffff;
                }
            }
        }
    }
}
</style>