<template>
    <div class="container">
        <div class="curtain">
            <ribbon></ribbon>

            <div class="section">
                <div class="inner">
                    <div class="left">
                        <div class="input">
                            <div :class="['tab', { 'selected-tab': selectedTab == tab}]" v-for="tab in tabs" v-text="tab.value" @click="selectTad(tab)"></div>
                        </div>
                        <div class="card">
                            <div class="top"></div>
                            <div class="info">
                                Welcome to the HP 322pe OSD Simulator. Please press the power button and then select an input source.
                            </div>
                        </div>
                    </div>
                    
                    <div class="monitor-block">
                        <div class="monitor">
                            <img src="@/assets/images/monitor.png" alt="monitor">
                        </div>

                        <div class="wrapper">
                            <div class="power-light" v-if="openMonitor && monitorResult.powerLED"></div>
    
                            <monitorScreen v-if="openMonitor" v-model="openMonitor" v-model:showMonitorStatus="showMonitorStatus"></monitorScreen>
    
                            <div class="menu-buttons">
                                <img src="@/assets/images/menu-buttons.png" alt="">
                                <div class="power-light menu-btn" v-if="openMonitor && monitorResult.powerLED"></div>
                            </div>
    
                            <menus v-model:openMonitor="openMonitor" v-model:isFinish="isFinish" v-model:showMonitorStatus="showMonitorStatus">
                                <template v-slot:openMonitor>
                                    <button class="controller-btn open-btn" @click="handleMonitor"></button>
                                </template>
                            </menus>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, provide } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import ribbon from '@/views/home/_ribbon/ribbon.vue';
import monitorScreen from '@/views/home/_monitor-screen/monitor-screen.vue';
import menus from '@/views/home/_menus/menus.vue';
import { OnNodes } from '@/models/class/_utilities';

const OnNodesEnum = new OnNodes();
const store = useStore();

const inputEnum = computed(() => {
    return store.$state.input;
});

const tabs = reactive([
    inputEnum.value.nodes[0],
    inputEnum.value.nodes[1]
])

const selectedTab = ref<Nodes | null>(tabs[0] as Nodes | null);

function selectTad(tab: Nodes) {
    selectedTab.value = tab;
    inputEnum.value.value = selectedTab.value.value as string;
};

/* 啟動螢幕 start  */
const openMonitor = ref(false);
let showMonitorStatus = ref(false);
let isFinish = ref(false);

provide('updateFinish', (value: boolean) => {
    isFinish.value = value;
});

function handleMonitor() {
    openMonitor.value = !openMonitor.value;
}
/* 啟動螢幕 end  */

const monitorResult = computed(() => {
    return {
        autoSleepMode: store.$state.power.nodes[0].result == OnNodesEnum.result ? true : false,
        powerOnRecall: store.$state.power.nodes[1].result == OnNodesEnum.result ? true : false,
        powerLED: store.$state.power.nodes[2].result == OnNodesEnum.result ? true : false,
    }
});

</script>

<style lang="scss" >
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    .curtain {
        width: 1200px;
        max-width: 1200px;
        height: 768px;
        max-height: 768px;
        background-image: linear-gradient(to bottom, #ffffff 9%, #999999 141%);
    }

    .section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: initial;

        .inner {
            display: grid;
            grid-template-columns: max-content 1fr;
            gap: 0 4px;
            margin-top: 8px;
        }

        .left {
            width: 224px;
            height: max-content;
            display: grid;
            gap: 88px 0;
            margin-top: 88px;

            .card {
                width: 184px;

                .top {
                    width: initial;
                    height: 18px;
                    background-color: #8b8b8b;
                    margin-bottom: 2px;
                }

                .info {
                    background-color: #aaaaaa;
                    padding: 24px;
                    color: #ffffff;
                    line-height: 1.2;
                }
            }
        }

        .monitor-block {
            position: relative;

            .wrapper {
                position: absolute;
                content: '';
                top: 9px;
                left: 9px;
                width: 782px;
                height: 428px;
            }
            
            .monitor {
                img {
                    height: 655px;
                }
            }

            .power-light {
                position: absolute;
                bottom: -22px;
                right: 57px;
                width: 4px;
                height: 4px;
                background-color: #0083ca;
                border-radius: 50%;
                box-shadow: 0px 0px 10px 2px rgba(#0083ca, 0.9);
            }

            .menu-buttons {
                position: absolute;
                bottom: -86px;
                right: -8px;

                img {
                    width: 100%;
                }

                > .power-light.menu-btn {
                    position: absolute;
                    bottom: 15px;
                    right: 56px;

                }
            }
        }
    }


    .initial-enter-active {
        transition: opacity 1s ease;
    }

    .initial-leave-active {
        transition: opacity 2s ease;
    }

    .initial-enter-from,
    .initial-leave-to {
        opacity: 0;
    }


</style>