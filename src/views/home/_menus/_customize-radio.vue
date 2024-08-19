<template>
    <div :class="['customize-radio', { selected: selected }]">
        <div :class="['round', { selected: isChecked }]"></div>
        <div v-text="toLanguageText(nodes.language)"></div>
    </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { toLanguageText } from '@/service/service';

const props = defineProps({
    nodes: {
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