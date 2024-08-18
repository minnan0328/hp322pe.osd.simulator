<template>
    <div :class="['customize-checkbox', { selected: selected }]">
        <div :class="['box', { selected: isChecked(setItem) }]"></div>
        <div v-text="toLanguageText(setItem.language)"></div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { toLanguageText } from '@/service/service';

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