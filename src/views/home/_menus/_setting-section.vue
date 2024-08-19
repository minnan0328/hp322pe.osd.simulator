<template>
    <div :class="['setting', { 'two-columns': secondarySectionNodes }]" v-if="mainSectionNodes || secondarySectionNodes">
        <template v-if="mainSectionNodes && mainSectionNodes.mode != ModeType.exit">
            <div class="function">
                <template v-for="secondNodes in mainSectionNodes.nodes">
                    <div :class="['setting-item', secondNodes.key, { 'unset-grid': secondarySectionNodes }]" v-if="isEnableInput(secondNodes)">
                        <!-- button -->
                        <div :class="['item', {
                                selected: secondarySectionNodes == secondNodes,
                                focus: secondarySectionNodes == secondNodes && thirdSectionNodes,
                                'merge-grid': secondNodes.mergeGrid
                            }]"
                            v-if="secondNodes.mode == ModeType.button || secondNodes.mode == ModeType.info" v-text="toLanguageText(secondNodes.language)">
                        </div>
                        <!-- button -->

                        <!-- radio -->
                        <customizeRadio v-else-if="secondNodes.mode == ModeType.radio"
                            :nodes="secondNodes"
                            :isChecked="mainSectionNodes.value == secondNodes.value"
                            :selected="secondarySectionNodes == secondNodes">
                        </customizeRadio>
                        <!-- radio -->

                        <!-- checkbox -->
                        <customizeCheckbox v-else-if="mainSectionNodes.nodes && secondNodes.mode == ModeType.checkBox"
                            :nodes="secondNodes"
                            :previousNodes="mainSectionNodes"
                            :selected="thirdSectionNodes == secondNodes"
                            :lastNodes="isCheckboxLast(secondNodes, mainSectionNodes)">
                        </customizeCheckbox>
                        <!-- checkbox -->

                        <!-- value -->
                        <template v-if="!secondarySectionNodes">
                            <div class="item item-value"
                                v-if="secondNodes.value && secondNodes.displayValue
                                        || secondNodes.value == 0 && secondNodes.displayValue">
                                <span v-text="toDisplayValueLanguageText(secondNodes)"></span>
                                <span v-if="secondNodes.unit" v-text="toLanguageText(secondNodes.unit)"></span>
                            </div>
                        </template>
                        <!-- value -->
                    </div>
                </template>
            </div>
            <div :class="['function-setting', { 'customRGB-range-section': secondarySectionNodes.key == 'CustomRGB' }]"
                    v-if="mainSectionNodes && secondarySectionNodes && secondarySectionNodes.nodes">
                <template v-for="thirdNodes in secondarySectionNodes.nodes">
                    <div :class="['setting-item unset-grid', thirdNodes.key]"
                        v-if="isEnableInput(thirdNodes) && thirdNodes.mode != ModeType.verticalRange
                            && isEnableInput(thirdNodes) && thirdNodes.mode != ModeType.horizontalRange">
                        <!-- button -->
                        <div :class="['item', { selected: thirdSectionNodes == thirdNodes, 'merge-grid': thirdNodes.mergeGrid }]"
                            v-if="thirdNodes.mode == ModeType.button || thirdNodes.mode == ModeType.info" v-text="toLanguageText(thirdNodes.language)">
                        </div>
                        <!-- button -->
                        
                        <!-- radio -->
                        <customizeRadio v-else-if="thirdNodes.mode == ModeType.radio"
                            :nodes="thirdNodes"
                            :isChecked="secondarySectionNodes.value == thirdNodes.value"
                            :selected="thirdSectionNodes == thirdNodes">
                        </customizeRadio>
                        <!-- radio -->
                        
                        <!-- checkbox -->
                        <customizeCheckbox v-else-if="thirdNodes.mode == ModeType.checkBox"
                            :nodes="thirdNodes"
                            :previousNodes="secondarySectionNodes"
                            :selected="thirdSectionNodes == thirdNodes"
                            :lastNodes="isCheckboxLast(thirdNodes, secondarySectionNodes)">
                        </customizeCheckbox>
                        <!-- checkbox -->
                    </div>
                    <!-- 一般縱向 range -->
                    <verticalRange v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange && secondarySectionNodes.key != 'CustomRGB'"
                        :nodes="thirdNodes"
                        :selected="thirdSectionNodes == thirdNodes">
                    </verticalRange>
                    <!-- 一般縱向 range -->
                    <!-- 縱向 color range -->
                    <template v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange && secondarySectionNodes.key == 'CustomRGB'">
                        <verticalRange v-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange"
                            :nodes="thirdNodes"
                            :selected="thirdSectionNodes == thirdNodes"
                            :isColor="true">
                        </verticalRange>
                    </template>
                    <!-- 縱向 color range -->
                    <!-- 橫向 range -->
                    <horizontalRange v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.horizontalRange"
                        :nodes="thirdNodes"
                        :selected="thirdSectionNodes == thirdNodes">
                    </horizontalRange>
                    <!-- 橫向 range -->
                </template>
            </div>
        </template>
        <template v-if="mainSectionNodes && mainSectionNodes.mode == ModeType.exit">
            <div class="full-image">
                <img src="@/assets/icons/logo.svg" alt="">
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import type { PropType } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableInput, toLanguageText, toDisplayValueLanguageText } from '@/service/service';
// components
import verticalRange from './_vertical-range.vue';
import horizontalRange from './_horizontal-range.vue';
import customizeCheckbox from './_customize-checkbox.vue';
import customizeRadio from './_customize-radio.vue';

const props = defineProps({
    mainSectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    },
    secondarySectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    },
    thirdSectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    }
});

function isCheckboxLast(item: Nodes, node: Nodes) {
    if(node.nodes) {
        let checkboxList = node.nodes.filter(n => n.mode == ModeType.checkBox);

        return checkboxList[checkboxList.length - 1].key == item.key;
    } else {
        return false
    }
};

</script>
<style lang="scss" scoped>
.setting {
    width: calc(100% - 120px);
    background-color: #161616;
    padding: 2px 0;
    position: relative;

    .full-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            min-width: 30%;
        }
    }

    &.two-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .function-setting {
        position: relative;
        border-left: 1px solid #202020;

        &.customRGB-range-section {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .setting-item {
        display: grid;
        grid-template-columns: 1fr 1fr;

        &.unset-grid {
            display: block;
        }

        &.disabled {
            color: #444444;
        }

        &.Reset {
            width: 100%;
            position: absolute;
            bottom: 26px;
            z-index: 1;
        }

        &.Back {
            width: 100%;
            position: absolute;
            bottom: 0px;
            z-index: 1;
        }

        .item {
            height: 26px;
            border: 1px solid transparent;
            padding: 0 8px;
            display: flex;
            align-items: center;

            &.merge-grid,
            &.Back,
            &.Rese {
                grid-column: 1 / 3;
            }

            &.selected:not(.disabled) {
                background-color: #000000;
                border: 1px solid #0083ca;
                color: #ffffff;

                &.focus {
                    border: 1px solid transparent;
                    position: relative;

                    &::before {
                        position: absolute;
                        content: "";
                        right: 4px;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 5px 0 5px 10px;
                        border-color: transparent transparent transparent #FFFFFF;
                    }
                }
            }
        }
    }
}
</style>