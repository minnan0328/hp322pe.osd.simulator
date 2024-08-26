<template>
    <div class="container">
        <div class="curtain">
            <ribbon></ribbon>

            <div class="section">
                <div class="inner">
                    <div class="left">
                        <div class="input">
                            <div :class="['tab', { 'selected-tab': inputEnum.result == tab.result }]" v-for="tab in tabs"
                                v-text="tab.selected" @click="selectInput(tab)"></div>
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
    
                            <monitorScreen v-if="openMonitor" v-model:openMonitor="openMonitor"
                                v-model:screenInitial="screenInitial"
                                v-model:showMonitorStatus="showMonitorStatus"
                                v-model:showScreen="showScreen"
                                v-model:startUpFinish="startUpFinish">
                            </monitorScreen>

                            <div class="auto-adjustment" v-if="isAutoAdjustment && inputEnum.result == 'VGA'">
                                <div class="image">
                                    <img src="@/assets/icons/icon-warn.svg" alt="">
                                </div>
                                <div>
                                    <p>{{ toLanguageText(autoAdjustmentNode.language) }} Progress...</p>
                                </div>
                            </div>
    
                            <div class="menu-buttons">
                                <img src="@/assets/images/menu-buttons.png" alt="">
                                <div class="power-light menu-btn" v-if="openMonitor && monitorResult.powerLED"></div>
                            </div>
    
                            <menus v-model:openMonitor="openMonitor"
                                v-model:startUpFinish="startUpFinish"
                                v-model:showScreen="showScreen"
                                v-model:showMonitorStatus="showMonitorStatus"
                                v-model:isAutoAdjustment="isAutoAdjustment"
                                ref="childMenusComponentRef">
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
import type { Nodes, ControlScreen} from '@/types';
import ribbon from '@/views/home/_ribbon/ribbon.vue';
import monitorScreen from '@/views/home/_monitor-screen/monitor-screen.vue';
import menus from '@/views/home/_menus/menus.vue';
import { monitorResult } from '@/service/monitorStateResult';
import { toLanguageText } from '@/service/toDisplayLanguageText';

const store = useStore();

const inputEnum = computed(() => {
    return store.$state.input;
});

const tabs = reactive([
    inputEnum.value.nodes[0],
    inputEnum.value.nodes[1]
]);

const selectedTab = ref<Nodes | null>(tabs[0] as Nodes | null);

function selectInput(tab: Nodes) {
    if(screenInitial.value == false) {

        if(openMonitor.value && tab.result != inputEnum.value.result) {
            restartScreen();
        };

        selectedTab.value = tab;
        inputEnum.value.selected = selectedTab.value.selected as string;
        inputEnum.value.result = selectedTab.value.result as string;
        
    
        // 選擇 VGA 時更換自訂按鈕項目
        store.setAssignButtonValue();
    }
};


/* 啟動螢幕 start  */
const openMonitor = ref(false);
const screenInitial = ref(false);
const showMonitorStatus = ref(false);
const showScreen = ref(false);
const startUpFinish = ref(false);
const childMenusComponentRef = ref(null);
const isAutoAdjustment = ref(false);

function handleMonitor() {
    openMonitor.value = !openMonitor.value;

    if(openMonitor.value) {
        showScreen.value = false;
        showMonitorStatus.value = false;
        startUpFinish.value = false;
    }
};

const autoAdjustmentNode = computed(() => store.$state.image.nodes[0]);

const autoAdjustmentIntervalId = ref<number | null>(null);

provide("autoAdjustment", () => {
    isAutoAdjustment.value = true;

    store.$state.image.nodes[1].nodes[0].result = 50;
    store.$state.image.nodes[1].nodes[0].selected = 50;
    store.$state.image.nodes[1].nodes[1].result = 50;
    store.$state.image.nodes[1].nodes[1].selected = 50;

    store.$state.image.nodes[2].nodes[0].result = 50;
    store.$state.image.nodes[2].nodes[0].selected = 50;
    store.$state.image.nodes[2].nodes[1].result = 50;
    store.$state.image.nodes[2].nodes[1].selected = 50;
    
    setTimeout(() => {
        isAutoAdjustment.value = false;
        store.$state.image.nodes[1].nodes[0].result = 50;
        store.$state.image.nodes[1].nodes[0].selected = 50;
        store.$state.image.nodes[1].nodes[1].result = 50;
        store.$state.image.nodes[1].nodes[1].selected = 50;
    
        store.$state.image.nodes[2].nodes[0].result = 50;
        store.$state.image.nodes[2].nodes[0].selected = 50;
        store.$state.image.nodes[2].nodes[1].result = 50;
        store.$state.image.nodes[2].nodes[1].selected = 50;

        if (autoAdjustmentIntervalId.value !== null) {
            clearInterval(autoAdjustmentIntervalId.value);
            autoAdjustmentIntervalId.value = null;
        };
    }, 5000);

    autoAdjustmentIntervalId.value = setInterval(() => {
        store.$state.image.nodes[2].nodes[0].result += Math.floor(Math.random() * (2 - (-2)) + (-2));
        store.$state.image.nodes[2].nodes[0].selected += Math.floor(Math.random() * (2 - (-2)) + (-2));
    }, 100);
    
});
/* 啟動螢幕 end  */

/* 重啟畫面 */
function restartScreen() {
    if(!screenInitial.value) {
        showScreen.value = false;
        showMonitorStatus.value = false;
        startUpFinish.value = false;
    
        if(childMenusComponentRef.value) {
            // 暫時使用 any 解決
            (childMenusComponentRef.value as any).handlerClose();
        };
        
        setTimeout(() => {
            showScreen.value = true;
            showMonitorStatus.value = true;
    
            setTimeout(() => {
                showMonitorStatus.value = false;
                startUpFinish.value = true;
            }, 2000);
        }, 1000);
    }
};

/* 重啟畫面 */
provide("controlScreen", {
    restartScreen
} as ControlScreen);

</script>

<style lang="scss" >
@import '@/styles/_var';

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
    background-image: linear-gradient(to bottom, $white 9%, $grey 141%);
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
                background-color: $dark-gray;
                margin-bottom: 2px;
            }

            .info {
                background-color: $light-grey;
                padding: 24px;
                color: $white;
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

            .auto-adjustment {
                position: absolute;
                display: flex;
                align-items: center;
                gap: 0 8px;
                top: calc((100% - 60px) / 2);
                left: calc((100% - 268px) / 2);
                width: 240px;
                color: #FFFFFF;
                background-color: #161616;
                border: 2px solid  #AAAAAA;
                padding: 16px 8px;
                font-size: 10px;
            }
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


</style>@/service/_menuStateResult