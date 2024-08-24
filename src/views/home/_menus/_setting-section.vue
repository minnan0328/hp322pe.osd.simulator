<template>
    <div :class="['setting', { 'two-columns': secondarySectionNodes }]" v-if="mainSectionNodes || secondarySectionNodes">
        <template v-if="mainSectionNodes && mainSectionNodes.mode != ModeType.exit">
            <div class="main-section">

                <div class="setting-item unset-grid" v-if="currentPanelNumber == 4">
                    <div class="item border-bottom-line" v-text="toLanguageText(mainSectionNodes.language!)"></div>
                </div>

                <template v-for="(secondNodes, secondNodesIdx) in mainSectionNodes.nodes">
                    <div :class="['setting-item', secondNodes.key, { 'unset-grid': secondarySectionNodes }]"
                        v-if="isEnableInput(secondNodes) && mainSectionNodes.mode && handlePagination(mainSectionNodes, secondNodesIdx) && secondNodes.key != 'Exit'">
                        <!-- 上一頁 -->
                        <div :class="['item previous-page-btn', {
                                selected: secondarySectionNodes?.key == secondNodes.key,
                                'merge-grid': secondNodes.mergeGrid
                            }]" v-if="secondNodes.mode == ModeType.paginationButton && secondNodes.key == 'PreviousPageButtons'
                                && mainSectionNodes.page > 1">
                        </div>
                        <!-- 上一頁 -->


                        <!-- button -->
                        <div :class="['item', {
                                selected: secondarySectionNodes?.key == secondNodes.key,
                                focus: secondarySectionNodes == secondNodes && thirdSectionNodes,
                                'merge-grid': secondNodes.mergeGrid
                            }]"
                            v-if="secondNodes.mode == ModeType.button || secondNodes.mode == ModeType.setting" v-text="toLanguageText(secondNodes.language!)">
                        </div>
                        <div :class="['item', {
                                selected: secondarySectionNodes?.key == secondNodes.key,
                                focus: secondarySectionNodes == secondNodes && thirdSectionNodes,
                                'merge-grid': secondNodes.mergeGrid
                            }]"
                            v-else-if="secondNodes.mode == ModeType.info" v-text="`${toLanguageText(secondNodes.language!)}：`">
                        </div>
                        <!-- button -->

                        <!-- radio -->
                        <customizeRadio v-else-if="secondNodes.mode == ModeType.radio"
                            :nodes="secondNodes"
                            :isChecked="mainSectionNodes.selected == secondNodes.selected"
                            :selected="secondarySectionNodes?.key == secondNodes.key">
                        </customizeRadio>
                        <!-- radio -->

                        <!-- checkbox -->
                        <customizeCheckbox v-else-if="mainSectionNodes.nodes && secondNodes.mode == ModeType.checkBox"
                            :nodes="secondNodes"
                            :previousNodes="mainSectionNodes"
                            :selected="thirdSectionNodes?.key == secondNodes.key"
                            :lastNodes="isCheckboxLast(secondNodes, mainSectionNodes)">
                        </customizeCheckbox>
                        <!-- checkbox -->

                        <!-- 設定狀態 -->
                        <div class="item state-item" v-if="secondNodes.displayState">
                            <span class="state" >state：{{toDisplayValueLanguageText(secondNodes)}}</span>
                        </div>
                        <!-- 設定狀態 -->

                        <!-- 下一頁 -->
                        <div :class="['item next-page-btn', {
                                selected: secondarySectionNodes?.key == secondNodes.key,
                                'merge-grid': secondNodes.mergeGrid
                            }]" v-else-if="secondNodes.mode == ModeType.paginationButton && secondNodes.key == 'NextPageButtons'
                                && mainSectionNodes.nodes && (mainSectionNodes.nodes.length + 1) > mainSectionNodes.size">
                        </div>
                        <!-- 下一頁 -->

                        <!-- value -->
                        <template v-if="!secondarySectionNodes">
                            <div class="item item-value"
                                v-if="secondNodes.result && secondNodes.displayValue || secondNodes.result == 0 && secondNodes.displayValue">
                                <span v-if="secondNodes.mode != ModeType.info" v-text="toDisplayValueLanguageText(secondNodes)"></span>
                                <span v-else-if="secondNodes.mode == ModeType.info" v-text="secondNodes.result"></span>
                                <span v-if="secondNodes.unit" v-text="toLanguageText(secondNodes.unit)"></span>
                            </div>
                        </template>
                        <!-- value -->
                    </div>
                </template>
            </div>
            <div :class="['secondary-section', { 'customRGB-range-section': secondarySectionNodes.key == 'CustomRGB' }]"
                    v-if="mainSectionNodes && secondarySectionNodes && secondarySectionNodes.nodes">
                <template v-for="(thirdNodes, thirdNodesIdx) in secondarySectionNodes.nodes">
                    <div :class="['setting-item unset-grid', thirdNodes.key]"
                        v-if="isEnableInput(thirdNodes) && thirdNodes.mode != ModeType.verticalRange
                            && isEnableInput(thirdNodes) && thirdNodes.mode != ModeType.horizontalRange
                            && handlePagination(secondarySectionNodes, thirdNodesIdx)">
                        <!-- 上一頁 -->
                        <div :class="['item previous-page-btn', {
                                selected: thirdSectionNodes?.key == thirdNodes.key,
                                'merge-grid': thirdNodes.mergeGrid
                            }]" v-if="thirdNodes.mode == ModeType.paginationButton && thirdNodes.key == 'PreviousPageButtons'
                                && secondarySectionNodes.page > 1">
                        </div>
                        <!-- 上一頁 -->
                        <!-- button -->
                        <div :class="['item', { selected: thirdSectionNodes?.key == thirdNodes.key, 'merge-grid': thirdNodes.mergeGrid }]"
                            v-if="thirdNodes.mode == ModeType.button || thirdNodes.mode == ModeType.info || thirdNodes.mode == ModeType.setting" v-text="toLanguageText(thirdNodes.language!)">
                        </div>
                        <!-- button -->
                        
                        <!-- radio -->
                        <customizeRadio v-else-if="thirdNodes.mode == ModeType.radio"
                            :nodes="thirdNodes"
                            :isChecked="secondarySectionNodes.selected == thirdNodes.selected"
                            :selected="thirdSectionNodes?.key == thirdNodes.key">
                        </customizeRadio>
                        <!-- radio -->
                        
                        <!-- checkbox -->
                        <customizeCheckbox v-else-if="thirdNodes.mode == ModeType.checkBox"
                            :nodes="thirdNodes"
                            :previousNodes="secondarySectionNodes"
                            :selected="thirdSectionNodes?.key == thirdNodes.key"
                            :lastNodes="isCheckboxLast(thirdNodes, secondarySectionNodes)">
                        </customizeCheckbox>
                        <!-- checkbox -->

                        <!-- 設定狀態 -->
                        <div class="item state-item" v-if="thirdNodes.displayState">
                            <span class="state" >state：{{toDisplayValueLanguageText(thirdNodes)}}</span>
                        </div>
                        <!-- 設定狀態 -->

                        <!-- 下一頁 -->
                        <div :class="['item next-page-btn', {
                                selected: thirdSectionNodes?.key == thirdNodes.key,
                                'merge-grid': thirdNodes.mergeGrid
                            }]" v-else-if="thirdNodes.mode == ModeType.paginationButton && thirdNodes.key == 'NextPageButtons'
                                && (secondarySectionNodes.nodes.length + 1) > secondarySectionNodes.size">
                        </div>
                        <!-- 下一頁 -->
                    </div>
                    <!-- 一般縱向 range -->
                    <verticalRange v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange && secondarySectionNodes.key != 'CustomRGB'"
                        :nodes="thirdNodes"
                        :selected="thirdSectionNodes?.key == thirdNodes.key">
                    </verticalRange>
                    <!-- 一般縱向 range -->
                    <!-- 縱向 color range -->
                    <template v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange && secondarySectionNodes.key == 'CustomRGB'">
                        <verticalRange v-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange"
                            :nodes="thirdNodes"
                            :selected="thirdSectionNodes?.key == thirdNodes.key"
                            :isColor="true">
                        </verticalRange>
                    </template>
                    <!-- 縱向 color range -->
                    <!-- 橫向 range -->
                    <horizontalRange v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.horizontalRange"
                        :nodes="thirdNodes"
                        :selected="thirdSectionNodes?.key == thirdNodes.key">
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
    },
    currentPanelNumber: {
        type: Number,
        default: 0
    }
});

function isCheckboxLast(node: Nodes, previousNodes: Nodes) {
    if(previousNodes.nodes) {
        let checkboxList = previousNodes.nodes.filter(n => n.mode == ModeType.checkBox);

        return checkboxList[checkboxList.length - 1].key == node.key;
    } else {
        return false
    }
};

function handlePagination(node: Nodes, index: number) {
    return index > ((node.size * (node.page - 1)) - 1)&& index <= (node.size * (node.page));
};

</script>
<style lang="scss" scoped>

</style>