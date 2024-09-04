<template>
    <div :class="['customize-radio', { selected: selected, disabled: disabled }]">
        <div :class="['round', { selected: isChecked, disabled: disabled }]"></div>
        <div v-text="toLanguageText(nodes.language!)"></div>
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
    },
    disabled: {
        disabled: Boolean,
        required: true,
        default: false
    }
});

</script>
<style lang="scss" scoped>
@import '@/styles/_var';

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
        background-color: $black;
        border: 1px solid $black-28;
        border-radius: 50%;
        margin-right: 4px;

        &.selected::before {
            position: absolute;
            content: "";
            width: 6px;
            height: 6px;
            background-color: $light-grey;
            border-radius: 50%;
            left: 2px;
            top: 2px;
        }
    }

    &.disabled {
        color: $black-50;
    }

    &.selected:not(.disabled) {
        background-color: $black;
        border: 1px solid $blue;
        color: $white;

        &.customize-radio {
            .round {
                background-color: $black-28;
                border: 1px solid $light-grey;

                &.selected::before {
                    background-color: $white;
                }
            }
        }
    }
}
</style>