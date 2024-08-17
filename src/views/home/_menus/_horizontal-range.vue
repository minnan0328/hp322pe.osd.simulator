<template>
    <div class="range">
        <div :class="['vertical-range', { selected: selected }]">
            <div class="item range-text" v-text="getLanguageText(setItem.language)"></div>

            <div :class="['item range-graduate', { selected: selected }]">
                <div :class="['graduate', setItem.key, { max: setItem.value == setItem.rangeMax }]">
                </div>
            </div>

            <div class="item range-max-value" v-text="setItem.value"></div>
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
    }
});

const currentValue = computed(() => {
    return `${props.setItem.value as number - 4}%`
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