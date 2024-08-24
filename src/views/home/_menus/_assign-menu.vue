<template>
    <div :class="['assign-setting', mainSectionNodes!.key]">
        <template v-for="secondNodes in mainSectionNodes!.nodes">
            <div :class="['setting-item', secondNodes.key, { 'unset-grid': secondNodes.mode != ModeType.info }]"
                v-if="isEnableInput(secondNodes) && secondNodes.key != ResetNodesEnum.key && isEnableInput(secondNodes) && secondNodes.key != BackNodesEnum.key && isEnableInput(secondNodes) && secondNodes.mode != ModeType.verticalRange">
                <!-- button -->
                <div :class="['item', {
                        selected: secondarySectionNodes?.key == secondNodes.key,
                        'merge-grid': secondNodes.mergeGrid,
                        disabled: secondNodes.disabled
                    }]"
                    v-if="(secondNodes.mode == ModeType.button && secondNodes.key == ExitNodesEnum.key) || secondNodes.mode == ModeType.info" v-text="toLanguageText(secondNodes.language!)">
                </div>
                <!-- button -->

                <!-- radio -->
                <customizeRadio v-else-if="secondNodes.mode == ModeType.radio"
                    :nodes="secondNodes"
                    :isChecked="mainSectionNodes!.selected == secondNodes.selected"
                    :selected="secondarySectionNodes?.key == secondNodes.key"
                    :disabled="(secondNodes.disabled as boolean)">
                </customizeRadio>
                <!-- radio -->

                <!-- value -->
                <template v-if="secondNodes.mode == ModeType.info">
                    <div :class="['item item-value', {
                        disabled: secondNodes.disabled
                    }]">
                        <span v-text="secondNodes.result"></span>
                    </div>
                </template>
                <!-- value -->
            </div>
            <!-- 一般縱向 range -->
            <verticalRange v-else-if="secondNodes.mode == ModeType.verticalRange"
                :nodes="secondNodes"
                :disabled="(secondNodes.disabled as boolean)">
            </verticalRange>
            <!-- 一般縱向 range -->
        </template>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableInput, toLanguageText } from '@/service/service';
// components
import verticalRange from './_vertical-range.vue';
import customizeRadio from './_customize-radio.vue';

import { BackNodes, ResetNodes, ExitNodes } from '@/models/class/_utilities';

const BackNodesEnum = new BackNodes();
const ResetNodesEnum = new ResetNodes();
const ExitNodesEnum = new ExitNodes();

const props = defineProps({
    mainSectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    },
    secondarySectionNodes: {
        type: Object as PropType<Nodes | null>,
        default: null
    }
});

</script>

<style lang="scss" scoped>

</style>