<template>
    <div class="menu-wrapper">
        <div class="menus" v-if="openAllMenu && state.menuPanel">
            <div class="header">
                <p>HP 322pe</p>
            </div>
    
            <div class="body">
                <div class="sidebar">
                    <div class="hp-icon">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <div class="options">
                        <template  v-for="menu in menus.nodes" v-text="toLanguageText(menu.language)">
                            <div :class="['option', { selected: state.menuPanel?.key == menu.key, focus: state.menuPanel?.key == menu.key && state.secondPanel }]"
                                v-if="isEnableInput(menu)" v-text="toLanguageText(menu.language)">
                            </div>
                        </template>
                    </div>
                </div>
    
                <settingSection v-model:mainSectionNodes="displayCurrentNodes.mainSectionNodes"
                                v-model:secondarySectionNodes="displayCurrentNodes.secondarySectionNodes"
                                v-model:thirdSectionNodes="displayCurrentNodes.thirdSectionNodes"
                                v-model:currentPanelNumber="state.currentPanelNumber">
                </settingSection>
            </div>
    
            <div class="footer">
                <div class="current-mode">
                    {{ toLanguageText(informationEnum.nodes[0].language) }}: {{ informationEnum.nodes[0].value }}
                </div>
                <div class="current-input">
                    {{ toLanguageText(inputEnum.language) }}: {{ inputEnum.value }}
                </div>
            </div>
        </div>
        <div :class="['menu assign-menu', state.menuPanel.key]" v-if="openAssignButton && state.menuPanel">
            <div class="header">
                <p>{{ toLanguageText(state.menuPanel.language) }}</p>
            </div>
            <div class="body">
                <div :class="['assign-setting', state.menuPanel.key]">
                    <template v-for="secondNodes in state.menuPanel.nodes">
                        <div :class="['setting-item', secondNodes.key, { 'unset-grid': secondNodes.mode != ModeType.info }]"
                            v-if="isEnableInput(secondNodes) && secondNodes.key != ResetNodesEnum.key && isEnableInput(secondNodes) && secondNodes.key != BackNodesEnum.key && isEnableInput(secondNodes) && secondNodes.mode != ModeType.verticalRange">
                            <!-- button -->
                            <div :class="['item', {
                                    selected: state.secondPanel?.key == secondNodes.key,
                                    'merge-grid': secondNodes.mergeGrid
                                }]"
                                v-if="(secondNodes.mode == ModeType.button && secondNodes.key == ExitNodesEnum.key) || secondNodes.mode == ModeType.info" v-text="toLanguageText(secondNodes.language)">
                            </div>
                            <!-- button -->
    
                            <!-- radio -->
                            <customizeRadio v-else-if="secondNodes.mode == ModeType.radio"
                                :nodes="secondNodes"
                                :isChecked="state.menuPanel.value == secondNodes.value"
                                :selected="state.secondPanel?.key == secondNodes.key">
                            </customizeRadio>
                            <!-- radio -->
    
                            <!-- value -->
                            <template v-if="secondNodes.mode == ModeType.info">
                                <div class="item item-value">
                                    <span v-text="secondNodes.result"></span>
                                </div>
                            </template>
                            <!-- value -->
                        </div>
                        <!-- 一般縱向 range -->
                        <verticalRange v-else-if="secondNodes.mode == ModeType.verticalRange"
                            :nodes="secondNodes">
                        </verticalRange>
                        <!-- 一般縱向 range -->
                    </template>
                </div>
            </div>
        </div>
    
        <div class="controller-menus" v-if="openControllerMenus">
            <template v-for="currentButton in handleControllerButtonList">
                <div class="menu-item" v-if="currentButton.image">
                    <img :src="currentButton?.image" alt="">
                </div>
                <div class="menu-item" v-else></div>
            </template>
        </div>
    
        <div class="controller">
            <button v-if="openMonitor && !openControllerMenus" class="controller-btn controller-menus-btn" @click="handleControllerMenus"></button>
            <template v-else v-for="currentButton in handleControllerButtonList">
                <button v-if="currentButton.type == 'Button'" class="controller-btn" @click="currentButton?.event"></button>
                <button v-if="currentButton.type == 'RangeButton'" class="controller-btn"
                    @mousedown="currentButton?.event"
                    @mouseup="currentButton.stopEvent"
                    @mouseleave="currentButton.stopEvent">
                </button>
            </template>
            <slot name="openMonitor"></slot> 
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableInput, toLanguageText } from '@/service/service';
// components
import settingSection from './_setting-section.vue';
import verticalRange from './_vertical-range.vue';
import customizeRadio from './_customize-radio.vue';

// svg
import iconAllMenu from '@/assets/icons/icon-menu.svg';
import iconBrightness from '@/assets/icons/icon-brightness.svg';
import iconColor from '@/assets/icons/icon-color.svg';
import iconInput from '@/assets/icons/icon-input.svg';
import iconNext from '@/assets/icons/icon-next.svg';
import iconNextRight from '@/assets/icons/icon-next-right.svg';
import iconArrowButton from '@/assets/icons/icon-arrow-bottom.svg';
import iconArrowUp from '@/assets/icons/icon-arrow-up.svg';
import iconClose from '@/assets/icons/icon-close.svg';
import iconCheck from '@/assets/icons/icon-check.svg';
import iconSubtract from '@/assets/icons/icon-subtract.svg';
import iconAdd from '@/assets/icons/icon-add.svg';
import iconPrevious from '@/assets/icons/icon-previous.svg';
import iconInformation from '@/assets/icons/icon-information.svg';

import {
    Brightness, Color, Image, Input, Power,
    Menu, Management, Information, Exit
} from '@/models/index';

import { 
    AssignAutoAdjustmentNodes,
    AssignBrightnessNodes,
    AssignColorNodes,
    AssignDisplayInformationNodes,
    AssignNextActiveInputNodes,
    AssignEmptyNodes
} from '@/models/class/menu/assign-buttons/_utilities';

import { BackNodes, ResetNodes, ExitNodes, OnNodes, OffNodes } from '@/models/class/_utilities';

const BackNodesEnum = new BackNodes();
const ResetNodesEnum = new ResetNodes();
const ExitNodesEnum = new ExitNodes();
const OnNodesEnum = new OnNodes();
const OffNodesEnum = new OffNodes();


const AssignAutoAdjustmentNodesEnum = new AssignAutoAdjustmentNodes();
const AssignBrightnessNodesEnum = new AssignBrightnessNodes();
const AssignColorNodesEnum = new AssignColorNodes();
const AssignDisplayInformationNodesEnum = new AssignDisplayInformationNodes();
const AssignNextActiveInputNodesEnum = new AssignNextActiveInputNodes();
const AssignEmptyNodesEnum = new AssignEmptyNodes();

const store = useStore();

const props = defineProps({
    openMonitor: {
        type: Boolean,
        default: false
    }
});

const inputEnum = computed(() => {
    return store.$state.input;
});

const informationEnum = computed(() => {
    return store.$state.information;
});

const resetMenus = {
    brightness: new Brightness(),
    color: new Color(),
    image: new Image(),
    input: new Input(),
    power: new Power(),
    menu: new Menu(),
    management: new Management(),
    information: new Information(),
    Exit: new Exit()
};

const menus = computed(() => {
    return {
        key: "menu",
        value: null,
        result: null,
        displayValue: false,
        displayState: false,
        livePreview: false,
        size: 9,
        page: 1,
        parents: null,
        mode: ModeType.button,
        rangeMin: 0,
        rangeMax: 0,
        rangeIcon: null,
        only: ["HDMI", "VGA"],
        mergeGrid: false,
        language: {},
        unit: null,
        nodes: [
            store.$state.brightness,
            store.$state.color,
            store.$state.image,
            store.$state.input,
            store.$state.power,
            store.$state.menu,
            store.$state.management,
            store.$state.information,
            store.$state.exit,
        ]
    }
});

const assignMenus = computed(() => {
    return {
        [AssignAutoAdjustmentNodesEnum.key]: {
            key: AssignAutoAdjustmentNodesEnum.key,
            icon: iconAllMenu,
            node: null
        },
        [AssignBrightnessNodesEnum.key]: {
            key: AssignBrightnessNodesEnum.key,
            icon: iconBrightness,
            node: store.$state.brightness.nodes[0]
        }, 
        [AssignColorNodesEnum.key]: {
            key: AssignColorNodesEnum.key,
            icon: iconColor,
            node: store.$state.color
        },
        [AssignDisplayInformationNodesEnum.key]: {
            key: AssignDisplayInformationNodesEnum.key,
            icon: iconInformation,
            node: store.$state.information
        },
        [AssignNextActiveInputNodesEnum.key]: {
            key: AssignNextActiveInputNodesEnum.key,
            icon: iconInput,
            node: store.$state.input
        },
        [AssignEmptyNodesEnum.key]: {
            key: AssignEmptyNodesEnum.key,
            icon: null,
            node: null
        }
    }
});

const getAssignButton = computed(() => {
    return [
        assignMenus.value[`Assign${(store.$state.menu.nodes[5].nodes![0].result as string).replace(/\s/g, '')}`],
        assignMenus.value[`Assign${(store.$state.menu.nodes[5].nodes![1].result as string).replace(/\s/g, '')}`],
        assignMenus.value[`Assign${(store.$state.menu.nodes[5].nodes![2].result as string).replace(/\s/g, '')}`]
    ]
});

const assignPanelOrder = reactive([AssignBrightnessNodesEnum.key, AssignColorNodesEnum.key, AssignDisplayInformationNodesEnum.key, AssignNextActiveInputNodesEnum.key]);
// selected state and node
const state = reactive({
    currentPanelNumber: 0,
    menuPanel: null as Nodes | null,
    secondPanel: null as Nodes | null,
    thirdPanel: null as Nodes | null,
    fourthPanel: null as Nodes | null,
    menuPanelIndex: 0,
    secondPanelIndex: 0,
    thirdPanelIndex: 0,
    fourthPanelIndex: 0,
    assignPanelOrderIndex: 0
});


// node 的 livePreview 為 true 時才使用
const temporaryStorage = ref<Nodes | null>(null);

const displayCurrentNodes = computed(() => {
    if(state.thirdPanel && state.thirdPanel.nodes && state.fourthPanel) {
        return {
            mainSectionNodes: state.secondPanel,
            secondarySectionNodes: state.thirdPanel,
            thirdSectionNodes: state.fourthPanel,
            currentPanelNumber: state.currentPanelNumber
        }
    } else {
        return {
            mainSectionNodes: state.menuPanel,
            secondarySectionNodes: state.secondPanel,
            thirdSectionNodes: state.thirdPanel,
            currentPanelNumber: state.currentPanelNumber
        }
    }
});

const openControllerMenus = ref(false);
const openAllMenu = ref(false);
const openAssignButton = ref(false);

// 開啟選單
function handleControllerMenus() {
    if(props.openMonitor) {
        openControllerMenus.value = true;
    };
};

// 是否啟用選單控制按鈕
const isControllerMenusButton = computed(() => {
    if(openControllerMenus.value) {
        return !openAllMenu.value && !openAssignButton.value;
    }
});

// 開啟全部選單
function handleAllMenu() {
    openAllMenu.value = true;
    openAssignButton.value = false;
    selectedMenuPanel(menus.value.nodes[0]);
    // menuTimeout();
};
// 開啟自訂選單按鈕
function handleAssignButton(key: string) {
    if(key == "AssignNextActiveInput") {
        openAllMenu.value = true;
        selectedMenuPanel(assignMenus.value[key].node as Nodes);
        handleTarget();
    } else {
        state.menuPanel = null;
        state.secondPanel = null;
        state.menuPanelIndex = 0;
        state.secondPanelIndex = 0;
        state.assignPanelOrderIndex = assignPanelOrder.findIndex(a => a == key);
        openAssignButton.value = true;
        selectedMenuPanel(assignMenus.value[key].node as Nodes);
        handleTarget();
    }

    // menuTimeout();
};


const brightnessDefaultValue = {
    [store.$state.color.nodes[0].key]: 76,
    [store.$state.color.nodes[1].key]: 26,
    [store.$state.color.nodes[2].key]: 86,
    [store.$state.color.nodes[3].key]: 86,
    [store.$state.color.nodes[4].key]: 100,
    [store.$state.color.nodes[5].key]: 90,
    [store.$state.color.nodes[6].key]: 86,
    [store.$state.color.nodes[7].key]: 100,
};

function handleBrightness(key: string) {
    menus.value.nodes[0].nodes[0].result = brightnessDefaultValue[key];
}

watch(() => props.openMonitor, (newVal, oldVal) => {
    if(newVal == false) {
        handleClose();
    };
});

function selectedMenuPanel(nodes: Nodes) {
    state.menuPanel = nodes;
    state.currentPanelNumber = 1;
};

interface ControllerButtonList {
    image: string | null,
    event: (() => void) | null,
    stopEvent: (() => void) | null,
    type: string
};

// 控制選單按鈕組合列表
const handleControllerButtonList = computed<ControllerButtonList[] | null>(() => {
    if(props.openMonitor) {
        if(isControllerMenusButton.value) {
            // 開啟螢幕及開啟全部選單列表時候的組合
            return [
                { image: iconAllMenu, event: handleAllMenu, stopEvent: null, type: "Button" },
                { image: getAssignButton.value[2].icon, event: () => handleAssignButton(getAssignButton.value[2].key), stopEvent: null, type: "Button"},
                { image: getAssignButton.value[1].icon, event: () => handleAssignButton(getAssignButton.value[1].key), stopEvent: null, type: "Button" },
                { image: getAssignButton.value[0].icon, event:() => handleAssignButton(getAssignButton.value[0].key), stopEvent: null, type: "Button" }
            ]
        } else if(openAllMenu.value && !state.secondPanel) {
            // 第一層控制選單組合判斷
            let buttonList: ControllerButtonList[] = [];

            if(state.menuPanel?.mode == ModeType.info) {
                // 當選擇的節點為 info 時候的組合
                buttonList = [
                    { image: null, event: null, stopEvent: null, type: "Button" },
                    { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
                    { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: null, type: "Button" }
                ];
            } else if(state.menuPanel?.mode == ModeType.exit) {
                // 當選擇的節點為 exit 時候的組合
                buttonList = [
                    { image: iconCheck, event: handleClose, stopEvent: null, type: "Button" },
                    { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
                    { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: null, type: "Button" }
                ];
            } else {
                // 當選擇的節點為 exit 時候的組合
                buttonList = [
                    { image: iconNext, event: handleTarget, stopEvent: null, type: "Button" },
                    { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
                    { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: null, type: "Button" }
                ];
            }
            return buttonList;
        } else if(openAllMenu.value && state.menuPanel) {
            if(state.secondPanel && !state.thirdPanel) {
                // 第二層控制選單組合判斷
                return handleModeControllerButtonList(state.secondPanel, state.menuPanel);
            } else if(state.secondPanel && state.thirdPanel && !state.fourthPanel) {
                // 第三層控制選單組合判斷
                return handleModeControllerButtonList(state.thirdPanel, state.secondPanel);
            } else if(state.secondPanel && state.thirdPanel && state.fourthPanel) {
                // 第四層控制選單組合判斷
                return handleModeControllerButtonList(state.fourthPanel, state.thirdPanel);
            } else {
                return [];
            }
        } else {
            if(openAssignButton.value) {
                return handleModeControllerButtonList(state.secondPanel!, state.menuPanel!);
            } else {
                return [];
            }
        }
    } else {
        return []
    }
});

function handleModeControllerButtonList(nodes: Nodes, previousNodes: Nodes) {
    // 當下一層有節點時候的組合
    const nextButtonList: ControllerButtonList[] = [
        { image: iconNext, event: handleTarget, stopEvent: null, type: "Button" },
        { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
        { image: iconPrevious, event: handlePrevious, stopEvent: null, type: "Button" }
    ];
    // 確認選擇的按鈕組合
    const confirmedButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: null, type: "Button"},
        { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
        { image: iconPrevious, event: handlePrevious, stopEvent: null, type: "Button" }
    ];
    // range value 組合
    const rangeButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: null, type: "Button"},
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconPrevious, event: handlePrevious , stopEvent: null, type: "Button"}
    ];
    // 多個 range value 組合
    const rangeNextButtonList: ControllerButtonList[] = [
        { image: iconNextRight, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconPrevious, event: handlePrevious, stopEvent: null, type: "Button" }
    ];

        // assign button 確認選擇的按鈕組合
    const confirmedAssignButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: null, type: "Button"},
        { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
        { image: iconNextRight, event: handleNext, stopEvent: null, type: "Button" }
    ];

    // assign button range value 組合
    const rangeAssignButtonList: ControllerButtonList[] = [
        { image: iconClose, event: handleClose , stopEvent: null, type: "Button"},
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconNextRight, event: handleNext , stopEvent: null, type: "Button"}
    ];

    // assign button info 組合
    const infoAssignButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: null, type: "Button"},
        { image: null, event: null, stopEvent: null, type: "Button" },
        { image: null, event: null, stopEvent: null, type: "Button" },
        { image: iconNextRight, event: handleNext , stopEvent: null, type: "Button"}
    ];
    if(openAllMenu.value) {
        if(
            nodes.key == "Reset" || nodes.key == "Back"
            || nodes.mode == ModeType.radio && !nodes.nodes
            || nodes.mode == ModeType.button && !nodes.nodes
            || nodes.mode == ModeType.checkBox && !nodes.nodes
            || nodes.mode == ModeType.paginationButton && !nodes.nodes
        ) {
            // 當為 reset and back, button 下一層沒有節點的時候
            return confirmedButtonList;
        } else if(
            // 多個 range value
            nodes.mode == ModeType.verticalRange && previousNodes.nodes?.length == 1
            || nodes.mode == ModeType.horizontalRange  && previousNodes.nodes?.length == 1
        ) {
            return rangeButtonList;
        } else if(
            // 多個 range value
            nodes.mode == ModeType.verticalRange && previousNodes.nodes && previousNodes.nodes?.length > 1
            || nodes.mode == ModeType.horizontalRange && previousNodes.nodes && previousNodes.nodes?.length >  1
        ) {
            return rangeNextButtonList;
        } else {
            return nextButtonList;
        }
    } else if(openAssignButton.value) {
        if(previousNodes.mode == ModeType.info) {
            return infoAssignButtonList;
        } else if(nodes.mode == ModeType.verticalRange ) {
            return rangeAssignButtonList;
        } else if(nodes.mode == ModeType.radio || nodes.mode == ModeType.button && nodes.key == "Exit") {
            return confirmedAssignButtonList;
        } else {
            return confirmedAssignButtonList;
        }
    } else {
        return [];
    }
}

// 選擇下一層目標
function handleTarget() {
    if(state.menuPanel?.nodes) {
        if(!state.secondPanel) {
            // 第二層
            selectEnabledNode(state.menuPanel, state.secondPanelIndex, (nodes, index) => {
                state.secondPanel = nodes;
                state.secondPanelIndex = index;
                state.currentPanelNumber = 2;

                if(state.menuPanel?.mode == ModeType.radio && state.menuPanel.nodes) {
                    handleConfirmed(1);
                }
            });
        } else if(state.secondPanel?.nodes && !state.thirdPanel) {
            // 第三層
            selectEnabledNode(state.secondPanel, state.thirdPanelIndex, (nodes, index) => {
                state.thirdPanel = nodes;
                state.thirdPanelIndex = index;
                state.currentPanelNumber = 3;

                if(state.secondPanel?.mode == ModeType.radio && state.secondPanel.nodes) {
                    handleConfirmed(2);
                }
            });
        } else if(state.secondPanel?.nodes && state.thirdPanel && state.thirdPanel.nodes && !state.fourthPanel) {
            // 第四層
            selectEnabledNode(state.thirdPanel, state.fourthPanelIndex, (nodes, index) => {
                state.fourthPanel = nodes;
                state.fourthPanelIndex = index;
                state.currentPanelNumber = 4;

                if(state.thirdPanel?.mode == ModeType.radio && state.thirdPanel.nodes) {
                    handleConfirmed(3);
                }
            });
        }
    }
};

// 選擇啟用的節點
function selectEnabledNode(node: Nodes, startIndex: number, setValue: (node: Nodes, index: number) => void) {
    if(node.nodes) {
        let index = startIndex;
        const length = node.nodes.length;
    
        do {
            if (openAllMenu.value && isEnableInput(node.nodes[index]) || isEnableInput(node.nodes[index]) && openAssignButton.value && node.nodes[index].mode != ModeType.info) {
                let selectedIndex = (node.value || node.value == 0) ? node.nodes.findIndex(n => n.value == node.value) : index;
                index = selectedIndex > 0 ? selectedIndex : index;
                setValue(node.nodes[index], index);
                return;
            }
            index = (index + 1) % length;
        } while (index !== startIndex);
    }
};

// 上一步
function handlePrevious() {
    if(state.secondPanel && !state.thirdPanel) {
        state.secondPanel = null;
        state.secondPanelIndex = 0;
        state.currentPanelNumber = 1;

        if(temporaryStorage.value) {
            state.menuPanel = temporaryStorage.value;
            temporaryStorage.value = null;

            if(state.menuPanel.key == "Color") {
                handleBrightness(state.menuPanel.result as string);
            };
        };

    } else if(state.secondPanel && state.thirdPanel && !state.fourthPanel) {
        state.thirdPanel = null;
        state.thirdPanelIndex = 0;
        state.currentPanelNumber = 2;

        if(temporaryStorage.value) {
            state.secondPanel = temporaryStorage.value;
            temporaryStorage.value = null;
        }


        // 目前只顯示英文，所以當切換語言時，返回上一步要恢復設定
        if(state.secondPanel.key == "Language") {
            state.secondPanel.value = state.secondPanel.nodes![3].value;
            state.secondPanel.result = state.secondPanel.nodes![3].result;
        }


    } else if(state.secondPanel && state.thirdPanel && state.thirdPanel.nodes && state.fourthPanel) {
        state.fourthPanel = null;
        state.fourthPanelIndex = 0;
        state.currentPanelNumber = 3;

        if(temporaryStorage.value) {
            state.thirdPanel = temporaryStorage.value;
            temporaryStorage.value = null;
        }
    }
};

// 控制上一個
function handleUp() {
    handleNavigation('up');
};

// 控制下一個
function handleBottom() {
    handleNavigation('down');
};

function handleNavigation(direction: 'up' | 'down') {
    const step = direction === 'up' ? -1 : 1;

    if (menus.value && state.menuPanel?.nodes) {
        if (!state.secondPanel) {
            updatePanelIndexText(menus.value, state.menuPanelIndex, step, (page, index) => {
                if(state.menuPanel) {
                    menus.value.page = page;
                    state.menuPanelIndex = index;
                    state.menuPanel = menus.value.nodes[state.menuPanelIndex];

                    if(state.menuPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        temporaryStorage.value = JSON.parse(JSON.stringify(menus.value));
                        if(state.menuPanel.mode == ModeType.button || state.menuPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                            menus.value.result = state.menuPanel.result as null;
                        }
                    }
                }
            });
        } else if (state.secondPanel && !state.thirdPanel) {
            updatePanelIndexText(state.menuPanel, state.secondPanelIndex, step, (page, index) => {
                if(state.menuPanel && state.menuPanel.nodes) {
                    state.menuPanel.page = page;
                    state.secondPanelIndex = index;
                    state.secondPanel = state.menuPanel.nodes[state.secondPanelIndex];
                    

                    if(state.secondPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        if(temporaryStorage.value == null) {
                            temporaryStorage.value = JSON.parse(JSON.stringify(state.menuPanel));
                        }

                        if(state.secondPanel.mode == ModeType.button || state.secondPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷

                            if(state.secondPanel.parents == "Color") {
                                handleBrightness(state.secondPanel.result as string);
                            }
                            
                            state.menuPanel.result = state.secondPanel.result;
                        } 
                    } else if(
                        temporaryStorage.value && state.secondPanel.mode == ModeType.button && state.secondPanel.key == ExitNodesEnum.key
                        || temporaryStorage.value && state.secondPanel.mode == ModeType.button && state.secondPanel.key == ResetNodesEnum.key
                        || temporaryStorage.value && state.secondPanel.mode == ModeType.button && state.secondPanel.key == BackNodesEnum.key
                    ) {
                        state.menuPanel = temporaryStorage.value;
                        temporaryStorage.value = null;
                    }
                }
            });
        } else if (state.secondPanel && state.secondPanel.nodes && state.thirdPanel && !state.fourthPanel) {
            updatePanelIndexText(state.secondPanel, state.thirdPanelIndex, step, (page, index) => {
                if(state.secondPanel && state.secondPanel.nodes) {
                    state.secondPanel.page = page;
                    state.thirdPanelIndex = index;
                    state.thirdPanel = state.secondPanel.nodes[state.thirdPanelIndex];

                    if(state.thirdPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        temporaryStorage.value = JSON.parse(JSON.stringify(state.secondPanel));
                        if(state.thirdPanel.mode == ModeType.button || state.thirdPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                            state.secondPanel.result = state.thirdPanel.result;
                        }
                    }
                }
            });
        } else if (state.secondPanel?.nodes && state.thirdPanel?.nodes && state.fourthPanel) {
            updatePanelIndexText(state.thirdPanel, state.fourthPanelIndex, step, (page, index) => {
                if(state.thirdPanel && state.thirdPanel.nodes) {
                    state.thirdPanel.page = page;
                    state.fourthPanelIndex = index;
                    state.fourthPanel = state.thirdPanel.nodes[state.fourthPanelIndex];

                    if(state.fourthPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        temporaryStorage.value = JSON.parse(JSON.stringify(state.thirdPanel));
                        if(state.fourthPanel.mode == ModeType.button || state.fourthPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                            state.thirdPanel.result = state.fourthPanel.result;
                        }
                    }
                }
            });
        }
    }
};

function updatePanelIndexText(node: Nodes, nodeIndex: number, step: number, send: (page: number, index: number) => void) {
    let index = nodeIndex;
    let page = node.page;

    
    const updateIndex = (idx: number, length: number) => {
        return (idx + step + length) % length;
    };

    if(node.nodes) {
        index = updateIndex(index, node.nodes.length);
        
        const oldNodes = JSON.parse(JSON.stringify(node));

        if (
            !isEnableInput(node.nodes[index])
            || openAllMenu.value && node.nodes[index].key == ExitNodesEnum.key
            || openAssignButton.value && node.nodes[index].key == ResetNodesEnum.key
            || openAssignButton.value && node.nodes[index].key == BackNodesEnum.key
            || openAssignButton.value && node.nodes[index].mode == ModeType.button && node.nodes[index].key != ExitNodesEnum.key
        ) {
            updatePanelIndexText(node, index ,step, send);
        } else {
            page = Math.floor(index / node.size) + 1;
        
            if(page != oldNodes.page) {
                index += index == 0 || index == (node.nodes.length - 1)
                    ? 0 : page > oldNodes.page
                    ? 1 : -1;
            }
            send(page, index);
        }
    }
};

// assign button next panel
function handleNext() {
    state.menuPanel = null;
    state.secondPanel = null;
    state.menuPanelIndex = 0;
    state.secondPanelIndex = 0;
    state.assignPanelOrderIndex += 1;
    state.assignPanelOrderIndex = state.assignPanelOrderIndex == 4 ? 0 : state.assignPanelOrderIndex;
    let key = assignPanelOrder[state.assignPanelOrderIndex];

    selectedMenuPanel(assignMenus.value[key].node as Nodes);
    handleTarget();
}

// 控制 range value
function handleRangeValue(step: string) {
    switch(state.currentPanelNumber) {
        case 2:
            if(state.menuPanel && state.secondPanel) { calculateValue(state.secondPanel, state.menuPanel); }
            break;
        case 3:
            if(state.secondPanel && state.thirdPanel) { calculateValue(state.thirdPanel, state.secondPanel); }
            break;
        case 4:
            if(state.thirdPanel && state.fourthPanel) { calculateValue(state.fourthPanel, state.thirdPanel); }
            break;
    };

    // 增減 range value
    function calculateValue(nodes: Nodes, previousNodes: Nodes){
        if(nodes.mode == ModeType.verticalRange || nodes.mode == ModeType.horizontalRange) {
            if(step == "subtract" && (nodes.value as number) > nodes.rangeMin && (nodes.value as number) <= nodes.rangeMax) {
                (nodes.value as number) -= 1;
                (nodes.result as number) -= 1;
            } else if(step == "add" && (nodes.value as number) >= nodes.rangeMin && (nodes.value as number) < nodes.rangeMax) {
                (nodes.value as number) += 1;
                (nodes.result as number) += 1;
            }

            if(previousNodes.key != "CustomRGB") {
                previousNodes.value = nodes.value;
                previousNodes.result = nodes.result;
            }

        };
    }
};

// 用於存儲計時器的引用
const intervalId = ref<number | null>(null);
const currentStep = ref<string | null>(null);

// 開始觸發
function startTrigger(step: string) {
    currentStep.value = step;
    // 清除現有的計時器
    if (intervalId.value !== null) {
        clearInterval(intervalId.value);
    }
      // 設置新的計時器，每隔 100 毫秒觸發一次函式
    intervalId.value = window.setInterval(() => handleRangeValue(currentStep.value!), 100);
};

// 停止觸發
function stopTrigger() {
    if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
    }
};

// 控制 range value 遞減
function handleRangeSubtract() {
    startTrigger("subtract");

};
// 控制 range value 遞增
function handleRangeAdd() {
    startTrigger("add");
};

// 儲存選擇節點的 value
function handleConfirmed(currentPanelNumber: number = 0) {
    currentPanelNumber = currentPanelNumber > 0 ? currentPanelNumber : state.currentPanelNumber;

    switch(currentPanelNumber) {
        case 2:
            if(state.menuPanel && state.secondPanel) { setNodesValue(state.secondPanel, state.menuPanel); }
            break;
        case 3:
            if(state.secondPanel && state.thirdPanel) { setNodesValue(state.thirdPanel, state.secondPanel); }
            break;
        case 4:
            if(state.thirdPanel && state.fourthPanel) { setNodesValue(state.fourthPanel, state.thirdPanel); }
            break;
    };
};

function setNodesValue(nodes: Nodes, previousNodes: Nodes) {
    // 回到上一步
    if(nodes.key == BackNodesEnum.key) {
        handlePrevious();
        return;
    };
    
    // 恢復當前 menu 預設值
    if(nodes.key == ResetNodesEnum.key) {
        (Object.keys(resetMenus) as Array<keyof typeof resetMenus>).forEach(k => {
            if(resetMenus[k].key == state.menuPanel?.key) {
                state.menuPanel = resetMenus[k];
            }
        });

        handlePrevious();
        return
    };

    // 恢復原廠設定
    if(previousNodes.key == "FactoryReset") {
        if(nodes.key == "Yes") {
            store.$reset();
        }
        return
    }

    // 下一頁 目前只處理 secondaryNodesPagination(右邊畫面)
    if(nodes && (nodes as Nodes) && previousNodes.nodes && nodes.mode == ModeType.paginationButton && nodes.key == 'NextPageButtons') {
        handleBottom();
        return
    };
    // 上一頁 目前只處理 secondaryNodesPagination(右邊畫面)
    if(nodes && (nodes as Nodes) && previousNodes.nodes && nodes.mode == ModeType.paginationButton && nodes.key == 'PreviousPageButtons') {
        handleUp();
        return
    };

    // checkbox 處理只處理 string[]
    if(nodes.mode == ModeType.checkBox && typeof nodes.value == "string" && Array.isArray(previousNodes.value) && Array.isArray(previousNodes.result)) {
        let checked: boolean = (previousNodes.value as string[]).includes(nodes.value as string);
        checked ? previousNodes.value.splice(previousNodes.value.indexOf(nodes.value), 1) : previousNodes.value.push(nodes.value);
        previousNodes.result = previousNodes.value;
    } else {
        previousNodes.value = nodes.value;
        previousNodes.result = nodes.result;

        if(nodes.livePreview) {
            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
            temporaryStorage.value = null;
        }
    }
};

// 關閉全部選單，包含
function handleClose() {
    openControllerMenus.value = false;

    openAllMenu.value = false;
    openAssignButton.value = false;

    state.menuPanel = null;
    state.secondPanel = null;
    state.thirdPanel = null;
    state.fourthPanel = null;

    state.currentPanelNumber = 0;
    state.menuPanelIndex = 0;
    state.secondPanelIndex = 0;
    state.thirdPanelIndex = 0;
    state.fourthPanelIndex = 0;
    state.assignPanelOrderIndex = 0;
};

const menuStateResult = computed(() => {
    return {
        menuPosition: {
            x: `${(store.$state.menu.nodes[1].nodes![0].result as number / 100) * (240 - 0) + 0}px`,
            y: `${(store.$state.menu.nodes[1].nodes![1].result as number / 100) * (54 - 0) + 0}px`
        },
        menuTransparency: ((10 - (store.$state.menu.nodes[2].result as number)) / 10) + 0.2,
        menuTimeout: store.$state.menu.nodes[3].result,
    }
});

function menuTimeout() {
    setTimeout(() => {
        openAllMenu.value = false;
        openAssignButton.value = false;
    }, (menuStateResult.value.menuTimeout as number) * 1000);
}


</script>
<style lang="scss" scoped>
.menu-wrapper {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 782px;
    height: 428px;
}

.menus,
.assign-menu {
	position: absolute;
	top: v-bind("menuStateResult.menuPosition.y");
	left: v-bind("menuStateResult.menuPosition.x");
	background-color: #090909;
	width: 540px;
	height: 356px;

	.header,
	.footer {
		padding: 6px 12px;
		color: #ffffff;
		font-size: 10px;
	}

	.footer {
		position: absolute;
		bottom: 0;
		width: calc(100% - 24px);
		display: flex;
		justify-content: space-between;
	}

	.body {
		height: calc(100% - 44px);
		display: flex;
		color: #aaaaaa;
		font-size: 10px;

		.sidebar {
			width: 120px;
			height: 100%;
			background-color: #1c1c1c;

			.hp-icon {
				padding: 8px 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

        .options {
            .option {
                height: 26px;
                display: flex;
                align-items: center;
                padding: 0 10px;
                border: 1px solid transparent;

                &.disabled {
                    color: #444444;
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
}

.menus {
    opacity: v-bind("menuStateResult.menuTransparency");
}

.assign-menu {
    position: absolute;
    top: unset;
    left: unset;
	bottom: 54px;
	right: 92px;
    background-color: #161616;
    width: 200px;
	height: 282px;

    &.Information {
        width: 300px;
    }

    .header {
        padding: 6px 12px;
		color: #ffffff;
		font-size: 10px;
        background-color: #090909;
    }
    .body {
        height: 100%;
    }
}

.controller-menus {
	position: absolute;
	display: flex;
	bottom: 0px;
	right: 62px;

	.menu-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28px;
		height: 16px;
		background-color: #323232;
		border: 0.8px solid #000000;

		img {
            width: 16px;
		}
	}
}

.controller {
	position: absolute;
	bottom: -86px;
	right: 12px;

	.controller-btn,
	:deep(.controller-btn) {
		width: 40px;
		height: 40px;
        border: 1px solid blue;

		&.controller-menus-btn {
			position: absolute;
			width: 160px;
			bottom: 1px;
			right: 39px;
		}
	}
}
</style>
