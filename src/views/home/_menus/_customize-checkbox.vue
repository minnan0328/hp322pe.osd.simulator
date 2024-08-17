<template>
    <div :class="['customize-checkbox', { selected: selected }]">
        <div :class="['box', { selected: isChecked(setItem) }]"></div>
        <div v-text="getLanguageText(setItem.language)"></div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';

const props = defineProps({
    setItem: {
        type: Object as PropType<Nodes>,
        required: true
    },
    // type string[]
    selectedItem: {
        type: Object as PropType<Nodes>,
        required: true
    },
    selected: {
        type: Boolean,
        required: true,
        default: false
    }
});

const store = useStore();
const currentLanguage = computed(() => {
    let language = store.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.value ?? "English";
});

function getLanguageText(langItem: { [key: string]: string; }) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

function isChecked(item: Nodes): boolean {
    const value = props.selectedItem.value;

    // 強制轉型，並根據類型使用 includes 方法
    return Array.isArray(value)
        ? (value as string[]).includes(item.value as string)
        : false;
};

</script>
<style lang="scss" scoped>
.customize-checkbox {
    height: 26px;
    border: 1px solid transparent;
    padding: 0 8px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    .box {
        position: relative;
        width: 10px;
        height: 10px;
        background-color: #000000;
        border: 1px solid #444444;
        margin-right: 4px;

        &.selected::before {
            position: absolute;
            content: "";
            background-image: url('@/assets/icons/icon-check.svg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            left: 0px;
            top: 0px;
            width: 10px;
            height: 10px;
        }
    }

    &.selected:not(.disabled) {
        background-color: #000000;
        border: 1px solid #0083ca;
        color: #ffffff;
    }
}
</style>