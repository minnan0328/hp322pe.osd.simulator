<template>
    <div :class="['monitor-status', position]" v-show="show">
        <div class="monitor-status-title">{{ toLanguageText(menuStateResult.monitorStatus.language) }}</div>
        <div class="monitor-status-info input">
            <template v-for="currentInput in menuStateResult.input.nodes">
                <p v-if="currentInput.mode == ModeType.radio"
                :class="{ action: currentInput.result == menuStateResult.input.result }">
                    {{ toLanguageText(currentInput.language) }}
                </p>
                <p v-if="currentInput.mode == ModeType.radio"
                :class="{ action: currentInput.result == menuStateResult.input.result }">
                    {{ currentInput.result == menuStateResult.input.result ? "Active" : "Inactive" }}
                </p>
            </template>
        </div>

        <div class="monitor-status-info setting">
            <p>{{ toLanguageText(menuStateResult.autoSwitchInput.name.language) }}:</p>
            <p>{{ toLanguageText(menuStateResult.autoSwitchInput.state!.language) }}</p>
            <p>{{ toLanguageText(menuStateResult.color.name.language) }}</p>
            <p>{{ toLanguageText(menuStateResult.color.state?.language!) }}</p>
        </div>

        <div class="monitor-status-info mode">
            <p>{{ toLanguageText(menuStateResult.information.currentMode.language) }}</p>
            <p>{{ menuStateResult.information.currentMode.result }}</p>
            <p>{{ toLanguageText(menuStateResult.information.optimalMode.language) }}</p>
            <p>{{ menuStateResult.information.optimalMode.result }}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from '@/stores/index';
import { toLanguageText } from '@/service/service';
import { ModeType } from '@/types';

const store = useStore();

const props = defineProps({
    show: {
        type: Boolean,
        default: true
    },
    position: {
        type: String,
        default: "Top"
        
    }
});

const menuStateResult = computed(() => {
    return {
        monitorStatus: store.$state.menu.nodes![4].nodes![3],
        input: store.$state.input,
        autoSwitchInput: {
            name: store.$state.input.nodes[2],
            state: store.$state.input.nodes[2].nodes?.find(n => n.result == store.$state.input.nodes[2].result)
        },
        color: {
            name: store.$state.information.nodes[2],
            state: store.$state.color.nodes?.find(n => n.result == store.$state.information.nodes[2].result)
        },
        information: {
            currentMode: store.$state.information.nodes[0],
            optimalMode: store.$state.information.nodes[1]
        }
    }
});

</script>
<style lang="scss" scoped>
    .monitor-status {
        position: absolute;
        top: 32px;
        left: calc((100% - 268px) / 2);
        width: 240px;
        color: #FFFFFF;
        background-color: #161616;
        border: 2px solid  #AAAAAA;
        padding: 12px 12px 20px;
        font-size: 10px;
        font-weight: bold;
        z-index: 1;
        width: 240px;
        height: 134px;

        &.Top {
            top: 32px;
            left: 281px; 
        }
        &.Medium {
            top: calc((100% - 170px) / 2);
        }
        &.Bottom {
            top: unset;
            bottom: 32px;
        }

        .monitor-status-title {
            padding-bottom: 8px;
            margin-bottom: 12px;
            border-bottom: 1px solid #AAAAAA;;
        }

        .monitor-status-info {
            display: grid;
            grid-template-columns: max-content max-content;
            gap: 0 16px;

            &.input {
                margin-bottom: 14px;

                .action {
                    color: #6895D1;
                }
            }

            &.setting {
                margin-bottom: 24px;
            }
        }
    }
</style>