<template>
    <div class="range">
        <div :class="['vertical-range', { selected: selected, color: isColor }]">
            <div class="range-max-value">
                <img v-if="setItem.rangeIcon" class="original" :src="getIconSrc(setItem)" alt="">
                <span v-else-if="!isColor" v-text="setItem.rangeMax"></span>
                <span v-if="!setItem.rangeIcon && isColor" :class="setItem.key" v-text="getLanguageText(setItem.language)"></span>
            </div>

            <div class="range-max-value" v-if="!isColor">
                <span v-if="setItem.rangeIcon" v-text="setItem.rangeMax"></span>
            </div>

            <div :class="['range-graduate', { selected: selected, 'merge-grid': isColor }]">
                <div :class="['graduate', setItem.key, { max: setItem.value == setItem.rangeMax }]">
                </div>
            </div>

            <div class="range-text" v-if="!isColor" >
                <span v-text="setItem.value"></span>
            </div>

            <div class="range-max-value">
                <img v-if="setItem.rangeIcon" class="small" :src="getIconSrc(setItem)" alt="">
                <span v-else-if="!isColor" v-text="setItem.rangeMin"></span>
                <span v-if="!setItem.rangeIcon && isColor" v-text="setItem.rangeMax"></span>
            </div>

            <div class="range-max-value" v-if="!isColor">
                <span v-if="setItem.rangeIcon" v-text="setItem.rangeMin"></span>
            </div>
        </div>
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
    selected: {
        type: Boolean,
        required: true,
        default: false
    },
    isColor: {
        type: Boolean,
        default: false
    }
});

const currentValue = computed(() => {
    let showValue = props.isColor ? convertRange(props.setItem.value as number) : props.setItem.value;
    return `${showValue as number - 4}%`
});

function convertRange(value: number) {
    return ((value - 0) / (255 - 0)) * (100 - 0) + 0;
};

const currentLanguage = computed(() => {
    let language = store.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.value ?? "English";
});


function getLanguageText(langItem: { [key: string]: string; }) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

function getIconSrc (setItem: Nodes) {
    return new URL(`/src/assets/icons/${setItem.rangeIcon}`, import.meta.url).href;
};

</script>
<style lang="scss" scoped>
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
                background-color: #000000;
                border: 1px solid #0083ca;
                color: #ffffff;
            }

            .graduate {
                width: 12px;
                height: calc(100% - 14px);
                background-color: #505050;
                border-radius: 6px;
                position: absolute;
                bottom: 6px;

                &::before {
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: #AAAAAA;
                    width: 6px;
                    height: v-bind(currentValue);
                    border: 3px solid #505050;
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