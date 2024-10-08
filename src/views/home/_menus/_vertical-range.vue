<template>
    <div class="range">
        <div :class="['vertical-range', { selected: selected, color: isColor, disabled: disabled }]">
            <div class="range-max-value">
                <img v-if="nodes.rangeIcon" class="original" :src="getIconSrc(nodes)" alt="">
                <span v-else-if="!isColor" v-text="nodes.rangeMax"></span>
                <span v-if="!nodes.rangeIcon && isColor" :class="nodes.key" v-text="toLanguageText(nodes.language!)"></span>
            </div>

            <div class="range-max-value" v-if="!isColor">
                <span v-if="nodes.rangeIcon" v-text="nodes.rangeMax"></span>
            </div>

            <div :class="['range-graduate', { selected: selected, 'merge-grid': isColor }]">
                <div :class="['graduate', nodes.key, { max: nodes.selected == nodes.rangeMax }]">
                </div>
            </div>

            <div class="range-text" v-if="!isColor" >
                <span v-text="nodes.selected"></span>
                <span v-if="nodes.unit" v-text="toLanguageText(nodes.unit)"></span>
            </div>

            <div class="range-max-value">
                <img v-if="nodes.rangeIcon" class="small" :src="getIconSrc(nodes)" alt="">
                <span v-else-if="!isColor" v-text="nodes.rangeMin"></span>
                <span v-if="!nodes.rangeIcon && isColor" v-text="nodes.selected"></span>
            </div>

            <div class="range-max-value" v-if="!isColor">
                <span v-if="nodes.rangeIcon" v-text="nodes.rangeMin"></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { toLanguageText, getIconSrc } from '@/service/service';

const props = defineProps({
    nodes: {
        type: Object as PropType<Nodes>,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    },
    isColor: {
        type: Boolean,
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
    return `${showValue as number}%`
});

function convertRange(value: number, rangeMin: number, rangeMax: number) {
    return ((value - rangeMin) / (rangeMax - rangeMin)) * (100 - 0) + 0;
};

</script>
<style lang="scss" scoped>
@import '@/styles/_var';

.range {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .vertical-range {
        display: grid;
        grid-template-columns: max-content 16px;
        grid-template-rows: max-content 1fr max-content;
        gap: 8px 8px;
        height: 75%;
        justify-content: center;
        align-items: center;

        &.color {
            grid-template-columns: max-content;
        }

        .range-text,
        .range-max-value {
            text-align: center;
        }

        .range-max-value {
            font-weight: bold;

            .original {
                width: 100%;
            }

            .small {
                max-width: 70%;
            }
        }

        &.selected:not(.disabled) {
            .range-text {
                color: #ffffff;
            }

            .range-max-value  {
                .RedColor {
                    color: #FF0000;
                }

                .GreenColor {
                    color: #00FF00;
                }
                
                .BlueColor {
                    color: #0000FF;
                }
            }
        }

        .range-graduate {
            width: 20px;
            height: calc(100% - 6px);
            background-color: transparent;
            padding: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid transparent;
            position: relative;

            &.selected:not(.disabled) {
                background-color: $black;
                border: 1px solid $blue;
                color: $white;
            }

            .graduate {
                width: 4px;
                height: calc(100% - 14px);
                background-color: $black-50;
                border-radius: 6px;
                position: absolute;
                bottom: 6px;
                padding: 4px;

                &::before {
                    position: absolute;
                    content: '';
                    bottom: 2px;
                    left: 2px;
                    right: 0;
                    background-color: $light-grey;
                    width: 6px;
                    height: calc(v-bind(currentValue) - 6px);
                    border: 1px solid #505050;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                &.RedColor::before {
                    background-color: #FF0000;
                }
                &.GreenColor::before {
                    background-color: #00FF00;
                }
                &.BlueColor::before {
                    background-color: #0000FF;
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