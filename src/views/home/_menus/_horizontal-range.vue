<template>
    <div class="range">
        <div :class="['vertical-range', { selected: selected, disabled: disabled }]">
            <div class="item range-text" v-text="toLanguageText(nodes.language!)"></div>

            <div :class="['item range-graduate', { selected: selected }]">
                <div :class="['graduate', nodes.key, { max: nodes.selected == nodes.rangeMax }]"></div>
            </div>

            <div class="item range-max-value">
                <span v-text="nodes.selected"></span>
                <span v-if="nodes.unit" v-text="toLanguageText(nodes.unit)"></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { toLanguageText } from '@/service/service';

const props = defineProps({
    nodes: {
        type: Object as PropType<Nodes>,
        required: true
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

const currentValue = computed(() => {
    let showValue = convertRange(props.nodes.selected as number, props.nodes.rangeMin as number, props.nodes.rangeMax as number);
    return `${showValue as number - 4}%`
});

function convertRange(value: number, rangeMin: number, rangeMax: number) {
    return ((value - rangeMin) / (rangeMax - rangeMin)) * (100 - 0) + 0;
};

</script>
<style lang="scss" scoped>
    .range {

        .vertical-range {
            .item {
                height: 26px;
                border: 1px solid transparent;
                padding: 0 8px;
                display: flex;
                align-items: center;

                &.range-max-value {
                    justify-content: center;
                }

                &.range-text,
                &.range-max-value {
                    font-weight: bold;
                }
            }

            &.selected {
                .range-text,
                .range-max-value {
                    color: #FFFFFF;;
                }
            }

            .range-graduate {
                width: calc(100% - 18px);
                background-color: transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid transparent;
                position: relative;

                &.selected:not(.disabled) {
                    background-color: #000000;
                    border: 1px solid #0083ca;
                    color: #ffffff;
                }

                .graduate {
                    height: 12px;
                    width: 70%;
                    background-color: #505050;
                    border-radius: 6px;
                    position: relative;

                    &::before {
                        position: absolute;
                        content: '';
                        bottom: 0;
                        left: 0;
                        background-color: #AAAAAA;
                        height: 6px;
                        width: v-bind(currentValue);
                        border: 3px solid #505050;
                        border-top-left-radius: 6px;
                        border-bottom-left-radius: 6px;
                    }

                    &.max {
                        &::before {
                            border-radius: 6px;
                        }
                    }
                }
            }
        }
    }
</style>