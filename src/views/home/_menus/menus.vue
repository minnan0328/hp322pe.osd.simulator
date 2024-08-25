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
                    {{ toLanguageText(informationEnum.nodes[0].language) }}: {{ informationEnum.nodes[0].selected }}
                </div>
                <div class="current-input">
                    {{ toLanguageText(inputEnum.language) }}: {{ inputEnum.selected }}
                </div>
            </div>
        </div>
        <div :class="['menu assign-menu', state.menuPanel.key]" v-if="openAssignButton && state.menuPanel">
            <div class="header">
                <p>{{ toLanguageText(state.menuPanel.language!) }}</p>
            </div>
            <div class="body">
                <assignMenu
                    v-model:mainSectionNodes="state.menuPanel"
                    v-model:secondarySectionNodes="state.secondPanel">
                </assignMenu>
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
                <button v-if="currentButton.type == 'Button'" class="controller-btn" @click="currentButton.event"></button>
                <button v-if="currentButton.type == 'RangeButton'" class="controller-btn"
                    @mousedown="currentButton.event"
                    @mouseup="currentButton.stopEvent"
                    @mouseleave="currentButton.stopEvent">
                </button>
            </template>
            <slot name="openMonitor"></slot> 
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed, inject } from 'vue';
import { useStore } from '@/stores/index';
import type { StoreState } from '@/stores/index';
import type { Nodes, ControllerButtonList, ControlScreen } from '@/types';
import { ModeType } from '@/types';
import { isEnableInput, toLanguageText } from '@/service/service';
// components
import settingSection from './_setting-section.vue';
import assignMenu from './_assign-menu.vue';
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
import iconAssignAutoAdjustment from '@/assets/icons/icon-auto-adjustment.svg';

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

import { DefaultNodes, BackNodes, ResetNodes, ExitNodes, OnNodes, OffNodes } from '@/models/class/_utilities';
import { BrightnessDefaultValueEnum, setBrightnessDefaultValue } from '@/models/enum/brightnessDefaultValue/brightnessDefaultValue';

import { menuStateResult } from '@/views/home/_menuStateResult';

const DefaultNodesEnum = new DefaultNodes();
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

const autoAdjustment = inject("autoAdjustment") as () => void;

const { restartScreen } = inject("controlScreen") as ControlScreen;

const props = defineProps({
    openMonitor: {
        type: Boolean,
        default: false
    },
    startUpFinish: {
        type: Boolean,
        default: false
    },
    showMonitorStatus: {
        type: Boolean,
        default: false
    },
    isAutoAdjustment: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:showMonitorStatus', 'update:startUpFinish'])

const inputEnum = computed(() => {
    return store.$state.input;
});

const informationEnum = computed(() => {
    return store.$state.information;
});

const ColorNodesEnum = new Color();

const resetMenus: Record<keyof StoreState, StoreState[keyof StoreState]> = {
    brightnessPlus: new Brightness(),
    color: new Color(),
    image: new Image(),
    input: new Input(),
    power: new Power(),
    menu: new Menu(),
    management: new Management(),
    information: new Information(),
    exit: new Exit(),
	isDiagnosticPatterns: false,
	currentDiagnosticPatterns: "black"
};

const menus = computed(() => {
    return {
        ...DefaultNodesEnum,
        key: "menu",
        size: 9,
        page: 1,
        mode: ModeType.button,
        nodes: [
            store.$state.brightnessPlus,
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

// selected state and node
const state = reactive({
    menuPanel: null as Nodes | null,
    secondPanel: null as Nodes | null,
    thirdPanel: null as Nodes | null,
    fourthPanel: null as Nodes | null,
    temporaryStorage: null as Nodes | null, // node 的 livePreview 為 true 時才使用，紀錄上一次的設定
    currentPanelNumber: 0,
    menuPanelIndex: 0,
    secondPanelIndex: 0,
    thirdPanelIndex: 0,
    fourthPanelIndex: 0,
    assignPanelOrderIndex: 0
});

const displayCurrentNodes = computed(() => {
    // 當選擇第四層時
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

const assignMenus = computed(() => {
    return {
        [AssignAutoAdjustmentNodesEnum.key]: {
            key: AssignAutoAdjustmentNodesEnum.key,
            icon: iconAssignAutoAdjustment,
            node: AssignAutoAdjustmentNodesEnum
        },
        [AssignBrightnessNodesEnum.key]: {
            key: AssignBrightnessNodesEnum.key,
            icon: iconBrightness,
            node: store.$state.brightnessPlus.nodes[0]
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

const assignPanelOrder = reactive([
    AssignBrightnessNodesEnum.key, AssignColorNodesEnum.key,
    AssignDisplayInformationNodesEnum.key, AssignNextActiveInputNodesEnum.key
]);

const openControllerMenus = ref(false);
const openAllMenu = ref(false);
const openAssignButton = ref(false);

// 開啟選單
function handleControllerMenus() {
    if(props.openMonitor && props.showMonitorStatus && props.startUpFinish == false && !props.isAutoAdjustment) {
        emit("update:showMonitorStatus", false);
        emit("update:startUpFinish", true);
    }

    if(props.openMonitor && props.startUpFinish) {
        openControllerMenus.value = true;
    };
};

// 是否啟用選單控制按鈕
const isControllerMenusButton = computed(() => {
    if(openControllerMenus.value) {
        return !openAllMenu.value && !openAssignButton.value;
    }
});

// 開啟主要選單
function handleAllMenu() {
    openAllMenu.value = true;
    openAssignButton.value = false;
    selectedMenuPanel(menus.value.nodes[0]);

    menuTimeout();
};

// 開啟自訂選單按鈕
function handleAssignButton(key: string) {
    if(key == AssignEmptyNodesEnum.key) {
        return;
    }

    if(key == AssignNextActiveInputNodesEnum.key) {
        openAllMenu.value = true;
        selectedMenuPanel(assignMenus.value[key].node as Nodes);
        handleNextPanel();
    } else if(key == AssignAutoAdjustmentNodesEnum.key) {
        handleClose();
        autoAdjustment();
        return;
    } else {
        state.menuPanel = null;
        state.secondPanel = null;
        state.menuPanelIndex = 0;
        state.secondPanelIndex = 0;
        state.assignPanelOrderIndex = assignPanelOrder.findIndex(a => a == key);
        openAssignButton.value = true;
        selectedMenuPanel(assignMenus.value[key].node as Nodes);
        handleNextPanel();
    }

    menuTimeout();
};

watch(() => props.openMonitor, (newVal, oldVal) => {
    if(newVal == false) {
        handleClose();
    };
});

function selectedMenuPanel(nodes: Nodes) {
    state.menuPanel = state.menuPanel ? state.menuPanel : nodes;
    state.currentPanelNumber = state.currentPanelNumber > 0 ? state.currentPanelNumber : 1;

    if(openAssignButton.value && state.currentPanelNumber > 1) {
        handleNextPanel();
    }
};

// 控制選單按鈕組合列表
const handleControllerButtonList = computed<ControllerButtonList[] | null>(() => {
    if(props.openMonitor) {
        if(isControllerMenusButton.value) {
            // 開啟螢幕及開啟全部選單列表時候的組合
            return [
                { image: iconAllMenu, event: handleAllMenu, stopEvent: () => {}, type: "Button" },
                { image: getAssignButton.value[2].icon, event: () => handleAssignButton(getAssignButton.value[2].key), stopEvent: () => {}, type: "Button"},
                { image: getAssignButton.value[1].icon, event: () => handleAssignButton(getAssignButton.value[1].key), stopEvent: () => {}, type: "Button" },
                { image: getAssignButton.value[0].icon, event:() => handleAssignButton(getAssignButton.value[0].key), stopEvent: () => {}, type: "Button" }
            ]
        } else if(openAllMenu.value && !state.secondPanel) {
            // 第一層控制選單組合判斷
            let buttonList: ControllerButtonList[] = [];

            if(state.menuPanel?.mode == ModeType.info) {
                // 當選擇的節點為 info 時候的組合
                buttonList = [
                    { image: null, event: () => {}, stopEvent: () => {}, type: "Button" },
                    { image: iconArrowButton, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
                    { image: iconArrowUp, event: () => handleNavigation("up"), stopEvent: () => {}, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: () => {}, type: "Button" }
                ];
            } else if(state.menuPanel?.mode == ModeType.exit) {
                // 當選擇的節點為 exit 時候的組合
                buttonList = [
                    { image: iconCheck, event: handleClose, stopEvent: () => {}, type: "Button" },
                    { image: iconArrowButton, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
                    { image: iconArrowUp, event: () => handleNavigation("up"), stopEvent: () => {}, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: () => {}, type: "Button" }
                ];
            } else {
                // 當選擇的節點為 exit 時候的組合
                buttonList = [
                    { image: iconNext, event: handleNextPanel, stopEvent: () => {}, type: "Button" },
                    { image: iconArrowButton, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
                    { image: iconArrowUp, event: () => handleNavigation("up"), stopEvent: () => {}, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: () => {}, type: "Button" }
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
        { image: iconNext, event: handleNextPanel, stopEvent: () => {}, type: "Button" },
        { image: iconArrowButton, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
        { image: iconArrowUp, event: () => handleNavigation("up"), stopEvent: () => {}, type: "Button" },
        { image: iconPrevious, event: handlePrevious, stopEvent: () => {}, type: "Button" }
    ];
    // 確認選擇的按鈕組合
    const confirmedButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: () => {}, type: "Button"},
        { image: iconArrowButton, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
        { image: iconArrowUp, event: () => handleNavigation("up"), stopEvent: () => {}, type: "Button" },
        { image: iconPrevious, event: handlePrevious, stopEvent: () => {}, type: "Button" }
    ];
    // range value 組合
    const rangeButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: () => {}, type: "Button"},
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopRangeValueTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopRangeValueTrigger, type: "RangeButton" },
        { image: iconPrevious, event: handlePrevious , stopEvent: () => {}, type: "Button"}
    ];
    // 多個 range value 組合
    const rangeNextButtonList: ControllerButtonList[] = [
        { image: iconNextRight, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopRangeValueTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopRangeValueTrigger, type: "RangeButton" },
        { image: iconPrevious, event: handlePrevious, stopEvent: () => {}, type: "Button" }
    ];

        // assign button 確認選擇的按鈕組合
    const confirmedAssignButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: () => {}, type: "Button"},
        { image: iconArrowButton, event: () => handleNavigation("down"), stopEvent: () => {}, type: "Button" },
        { image: iconArrowUp, event: () => handleNavigation("up"), stopEvent: () => {}, type: "Button" },
        { image: iconNextRight, event: handleNext, stopEvent: () => {}, type: "Button" }
    ];

    // assign button range value 組合
    const rangeAssignButtonList: ControllerButtonList[] = [
        { image: iconClose, event: handleClose , stopEvent: () => {}, type: "Button"},
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopRangeValueTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopRangeValueTrigger, type: "RangeButton" },
        { image: iconNextRight, event: handleNext , stopEvent: () => {}, type: "Button"}
    ];

    // assign button info 組合
    const infoAssignButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: () => {}, type: "Button"},
        { image: null, event: () => {}, stopEvent: () => {}, type: "Button" },
        { image: null, event: () => {}, stopEvent: () => {}, type: "Button" },
        { image: iconNextRight, event: handleNext , stopEvent: () => {}, type: "Button"}
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

/* 選擇下一層 */
// 選擇下一層目標
function handleNextPanel() {
    if(state.menuPanel?.nodes) {
        if(!state.secondPanel) {
            // 第二層
            selectEnabledNode(state.menuPanel, state.secondPanelIndex, (nodes, index) => {
                state.secondPanel = nodes;
                state.secondPanelIndex = index;
                state.currentPanelNumber = 2;

                if(state.menuPanel!.mode == ModeType.radio && state.menuPanel!.nodes) {
                    handleConfirmed(1);
                }

                if(state.secondPanel!.livePreview) {
                    // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                    state.temporaryStorage = null;
                    state.temporaryStorage = JSON.parse(JSON.stringify(state.menuPanel));
                }

            });
        } else if(state.secondPanel?.nodes && !state.thirdPanel) {
            // 第三層
            selectEnabledNode(state.secondPanel, state.thirdPanelIndex, (nodes, index) => {
                state.thirdPanel = nodes;
                state.thirdPanelIndex = index;
                state.currentPanelNumber = 3;

                if(state.secondPanel!.mode == ModeType.radio && state.secondPanel!.nodes) {
                    handleConfirmed(2);
                }

                if(state.thirdPanel!.livePreview) {
                    // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                    state.temporaryStorage = null;
                    state.temporaryStorage = JSON.parse(JSON.stringify(state.secondPanel));
                }

                // 當為診斷模式時
                if(state.thirdPanel.parents == "DiagnosticPatterns") {
                    store.$state.isDiagnosticPatterns = true;
                }
            });
        } else if(state.secondPanel!.nodes && state.thirdPanel && state.thirdPanel.nodes && !state.fourthPanel) {
            // 第四層
            selectEnabledNode(state.thirdPanel, state.fourthPanelIndex, (nodes, index) => {
                state.fourthPanel = nodes;
                state.fourthPanelIndex = index;
                state.currentPanelNumber = 4;

                if(state.thirdPanel?.mode == ModeType.radio && state.thirdPanel.nodes) {
                    handleConfirmed(3);
                }

                if(state.secondPanel!.livePreview) {
                    // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                    state.temporaryStorage = null;
                    state.temporaryStorage = JSON.parse(JSON.stringify(state.thirdPanel));
                }
            });
        }
    }

    menuTimeout();
};

// 選擇啟用的節點
function selectEnabledNode(node: Nodes, startIndex: number, setValue: (node: Nodes, index: number) => void) {
    if (node.nodes) {
        let index = startIndex;
        const length = node.nodes.length;
        let attempts = 0; // 防止無窮迴圈

        do {
            // 檢查節點是否可用且未被禁用
            if (
                isEnableInput(node.nodes[index]) && !node.nodes[index].disabled &&
                (openAllMenu.value || (openAssignButton.value && node.nodes[index].mode !== ModeType.info))
            ) {
                let selectedIndex = (node.selected || node.selected === 0) ? node.nodes.findIndex(n => n.selected === node.selected) : index;
                index = selectedIndex >= 0 ? selectedIndex : index;
                setValue(node.nodes[index], index);
                return;
            }

            // 轉到下一個節點
            index = (index + 1) % length;
            attempts++;
        } while (index !== startIndex && attempts < length);

        // 如果無法找到有效的節點，可能需要處理錯誤情況或做一些預設處理
        console.warn("No enabled node found.");
    }
};
/* 選擇下一層 */


// 上一步
function handlePrevious() {
    // 目前只顯示英文，所以當切換語言時，返回上一步要恢復設定
    store.resetLanguage();

    if(state.secondPanel && !state.thirdPanel) {
        state.secondPanel = null;
        state.secondPanelIndex = 0;
        state.currentPanelNumber = 1;

        if(state.temporaryStorage) {
            state.menuPanel!.result = state.temporaryStorage.result;
            state.temporaryStorage = null;
            setBrightnessDefaultValue();
        };

    } else if(state.secondPanel && state.thirdPanel && !state.fourthPanel) {
        state.thirdPanel = null;
        state.thirdPanelIndex = 0;
        state.currentPanelNumber = 2;

        if(state.temporaryStorage) {
            state.secondPanel!.result = state.temporaryStorage.result;
            state.temporaryStorage = null;
        }

            // 當為診斷模式時
        if(state.secondPanel.key == "DiagnosticPatterns") {
            store.$state.isDiagnosticPatterns = false;
        }

    } else if(state.secondPanel && state.thirdPanel && state.thirdPanel.nodes && state.fourthPanel) {
        state.fourthPanel = null;
        state.fourthPanelIndex = 0;
        state.currentPanelNumber = 3;

        if(state.temporaryStorage) {
            state.thirdPanel!.result = state.temporaryStorage.result;
            state.temporaryStorage = null;
        }
    }

    menuTimeout();
};

/* 處理選單項目控制 */ 
// 控制上下一個項目
function handleNavigation(direction: 'up' | 'down') {
    const step = direction === 'up' ? -1 : 1;

    if (menus.value && state.menuPanel?.nodes) {
        if (!state.secondPanel) {
            updatePanelIndex(menus.value, state.menuPanelIndex, step, (page, index) => {
                if(state.menuPanel) {
                    menus.value.page = page;
                    state.menuPanelIndex = index;
                    state.menuPanel = menus.value.nodes[state.menuPanelIndex];

                    if(state.menuPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        if(state.temporaryStorage == null) {
                            state.temporaryStorage = JSON.parse(JSON.stringify(menus.value));
                        };

                        if(state.menuPanel.mode == ModeType.button || state.menuPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                            menus.value.result = state.menuPanel.result as null;
                        }
                    }
                }
            });
        } else if (state.secondPanel && !state.thirdPanel) {
            updatePanelIndex(state.menuPanel, state.secondPanelIndex, step, (page, index) => {
                if(state.menuPanel && state.menuPanel.nodes) {
                    state.menuPanel.page = page;
                    state.secondPanelIndex = index;
                    state.secondPanel = state.menuPanel.nodes[state.secondPanelIndex];
                    
                    if(state.secondPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        if(state.temporaryStorage == null) {
                            state.temporaryStorage = JSON.parse(JSON.stringify(state.menuPanel));
                        }

                        if(state.secondPanel.mode == ModeType.button || state.secondPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷

                            // 預覽所選擇顏色亮度
                            if(state.secondPanel.parents == ColorNodesEnum.key) {
                                menus.value.nodes[0].nodes![0].result = BrightnessDefaultValueEnum[state.secondPanel.result as string];
                            }
                            
                            state.menuPanel.result = state.secondPanel.result;
                        } 
                    } else if(
                        state.temporaryStorage && state.secondPanel.mode == ModeType.button && state.secondPanel.key == ExitNodesEnum.key
                        || state.temporaryStorage && state.secondPanel.mode == ModeType.button && state.secondPanel.key == ResetNodesEnum.key
                        || state.temporaryStorage && state.secondPanel.mode == ModeType.button && state.secondPanel.key == BackNodesEnum.key
                    ) {
                        state.menuPanel = state.temporaryStorage;
                        state.temporaryStorage = null;
                    }
                }
            });
        } else if (state.secondPanel && state.secondPanel.nodes && state.thirdPanel && !state.fourthPanel) {
            updatePanelIndex(state.secondPanel, state.thirdPanelIndex, step, (page, index) => {
                if(state.secondPanel && state.secondPanel.nodes) {
                    state.secondPanel.page = page;
                    state.thirdPanelIndex = index;
                    state.thirdPanel = state.secondPanel.nodes[state.thirdPanelIndex];

                    if(state.thirdPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        if(state.temporaryStorage == null) {
                            state.temporaryStorage = JSON.parse(JSON.stringify(state.secondPanel));
                        }
                        if(state.thirdPanel.mode == ModeType.button || state.thirdPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                            state.secondPanel.result = state.thirdPanel.result;
                        }
                    }
                }
            });
        } else if (state.secondPanel?.nodes && state.thirdPanel?.nodes && state.fourthPanel) {
            updatePanelIndex(state.thirdPanel, state.fourthPanelIndex, step, (page, index) => {
                if(state.thirdPanel && state.thirdPanel.nodes) {
                    state.thirdPanel.page = page;
                    state.fourthPanelIndex = index;
                    state.fourthPanel = state.thirdPanel.nodes[state.fourthPanelIndex];

                    if(state.fourthPanel.livePreview) {
                        // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
                        if(state.temporaryStorage == null) {
                            state.temporaryStorage = JSON.parse(JSON.stringify(state.thirdPanel));
                        };

                        if(state.fourthPanel.mode == ModeType.button || state.fourthPanel.mode == ModeType.radio) {
                            // 目前只有 button 及 radio 類型才需要，如有其他類型在進行判斷
                            state.thirdPanel.result = state.fourthPanel.result;
                        }
                    }
                }
            });
        }
    }

    menuTimeout();
};
/* 處理選單項目index */ 
function updatePanelIndex(node: Nodes, nodeIndex: number, step: number, send: (page: number, index: number) => void) {
    let index = nodeIndex;
    let page = node.page;
    
    const updateIndex = (idx: number, length: number) => {
        return (idx + step + length) % length;
    };

    if(node.nodes) {
        index = updateIndex(index, node.nodes.length);
        
        const oldNodes = JSON.parse(JSON.stringify(node));

        if (
            !isEnableInput(node.nodes[index]) || node.nodes[index].disabled
            || openAllMenu.value && node.nodes[index].key == ExitNodesEnum.key && node.nodes[index].mode != ModeType.exit
            || openAssignButton.value && node.nodes[index].key == ResetNodesEnum.key
            || openAssignButton.value && node.nodes[index].key == BackNodesEnum.key
            || openAssignButton.value && node.nodes[index].mode == ModeType.button && node.nodes[index].key != ExitNodesEnum.key
        ) {
            updatePanelIndex(node, index ,step, send);
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
/* 處理選單項目控制 */ 

// assign button next panel
function handleNext() {

    if(state.temporaryStorage) {
        state.menuPanel!.result = state.temporaryStorage.result;
        state.temporaryStorage = null;
        setBrightnessDefaultValue();
    };

    state.menuPanel = null;
    state.secondPanel = null;
    state.menuPanelIndex = 0;
    state.secondPanelIndex = 0;
    state.assignPanelOrderIndex += 1;
    state.assignPanelOrderIndex = state.assignPanelOrderIndex == 4 ? 0 : state.assignPanelOrderIndex;
    const key = assignPanelOrder[state.assignPanelOrderIndex];

    selectedMenuPanel(assignMenus.value[key].node as Nodes);
    handleNextPanel();
    menuTimeout();
};

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
            if(step == "subtract" && (nodes.selected as number) > nodes.rangeMin && (nodes.selected as number) <= nodes.rangeMax) {
                (nodes.selected as number) -= 1;
                (nodes.result as number) -= 1;
            } else if(step == "add" && (nodes.selected as number) >= nodes.rangeMin && (nodes.selected as number) < nodes.rangeMax) {
                (nodes.selected as number) += 1;
                (nodes.result as number) += 1;
            }

            if(previousNodes.key != "CustomRGB") {
                previousNodes.selected = nodes.selected;
                previousNodes.result = nodes.result;
            }

            if(previousNodes.key == "MenuPosition") {
                let menuPositionText = `H=${previousNodes.nodes![0].result}, V=${previousNodes.nodes![1].result}`
                previousNodes.selected = menuPositionText;
                previousNodes.result = menuPositionText;
            }
        };
    }
};

// 用於存儲計時器的引用
const intervalId = ref<number | null>(null);
const currentStep = ref<string | null>(null);

// 開始觸發
function startRangeValueTrigger(step: string) {
    currentStep.value = step;
    // 清除現有的計時器
    if (intervalId.value !== null) {
        clearInterval(intervalId.value);
    }
      // 設置新的計時器，每隔 100 毫秒觸發一次函式
    intervalId.value = window.setInterval(() => handleRangeValue(currentStep.value!), 100);
};

// 停止觸發
function stopRangeValueTrigger() {
    if (intervalId.value !== null) {
        clearInterval(intervalId.value);
        intervalId.value = null;
    }
    menuTimeout();
};

// 控制 range value 遞減
function handleRangeSubtract() {
    startRangeValueTrigger("subtract");

};
// 控制 range value 遞增
function handleRangeAdd() {
    startRangeValueTrigger("add");
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

    menuTimeout();
};

function setNodesValue(nodes: Nodes, previousNodes: Nodes) {
    // Exit
    if(nodes.key == ExitNodesEnum.key) {
        handleClose();
        return
    }

    // 回到上一步
    if(nodes.key == BackNodesEnum.key) {
        handlePrevious();
        return;
    };
    
    // 恢復當前 menu 預設值
    if(nodes.key == ResetNodesEnum.key) {
		const firstLetter = state.menuPanel!.key.charAt(0).toLowerCase();
        const restOfString = state.menuPanel!.key.slice(1);
        const key = firstLetter + restOfString as keyof StoreState;
        store.$patch({ [key]: { ...JSON.parse(JSON.stringify(resetMenus[key])) } });
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
    
    if(nodes.key == "AutoAdjustment") {
        handleClose();
        autoAdjustment();
        return;
    }

    // 下一頁 目前只處理 secondaryNodesPagination(右邊畫面)
    if(nodes && (nodes as Nodes) && previousNodes.nodes && nodes.mode == ModeType.paginationButton && nodes.key == 'NextPageButtons') {
        handleNavigation("down");
        return
    };
    // 上一頁 目前只處理 secondaryNodesPagination(右邊畫面)
    if(nodes && (nodes as Nodes) && previousNodes.nodes && nodes.mode == ModeType.paginationButton && nodes.key == 'PreviousPageButtons') {
        handleNavigation("up");
        return
    };

    // checkbox 處理只處理 string[]
    if(nodes.mode == ModeType.checkBox && typeof nodes.selected == "string" && Array.isArray(previousNodes.selected) && Array.isArray(previousNodes.result)) {
        let checked: boolean = (previousNodes.selected as string[]).includes(nodes.selected as string);
        checked ? previousNodes.selected.splice(previousNodes.selected.indexOf(nodes.selected), 1) : previousNodes.selected.push(nodes.selected);
        previousNodes.result = previousNodes.selected;
    } else {
        previousNodes.selected = nodes.selected;
        previousNodes.result = nodes.result;

        if(previousNodes.key == "Language") {
            openAllMenu.value = false;

            setTimeout(() => {
                openAllMenu.value = true;
            }, 1000);
        };

        if(previousNodes.key == "Input") {
            restartScreen();
            handleClose();
        };
        
        if(previousNodes.key == "Color") {
            setBrightnessDefaultValue();
        }

        if(nodes.livePreview) {
            // 即時預覽效果的時候，暫存原始的值，當沒確認時，反回上一步需要恢復為暫存的值
            state.temporaryStorage = null;
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

    // 關閉診斷模式
    store.$state.isDiagnosticPatterns = false;
};

defineExpose({
    handleClose
});

// 處理選單顯示時效
const menuTimeOutIntervalId = ref<number | null>(null);

function menuTimeout() {
    // 當為診斷模式時關閉倒數關閉
    if (menuTimeOutIntervalId.value != null && store.$state.isDiagnosticPatterns) {
        clearInterval(menuTimeOutIntervalId.value as number);
        menuTimeOutIntervalId.value = null;
    } else {
        clearInterval(menuTimeOutIntervalId.value as number);
        menuTimeOutIntervalId.value = null;
    } 

    // 當為診度模式時不自動關閉
    if(store.$state.isDiagnosticPatterns == false) {
        menuTimeOutIntervalId.value = setTimeout(() => {
            if(openAssignButton.value) {
                handleClose();
            }
    
            openAllMenu.value = false;
            openControllerMenus.value = false;
    
            if(state.menuPanel && state.secondPanel) {
                state.thirdPanel = null;
                state.thirdPanelIndex = 0;
                state.fourthPanel = null;
                state.fourthPanelIndex = 0;
                state.currentPanelNumber = 2;
            }
    
        }, (menuStateResult.value.menuTimeout as number) * 1000);
    }
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

		&.controller-menus-btn {
			position: absolute;
			width: 160px;
			bottom: 1px;
			right: 39px;
		}
	}
}
</style>../_menuStateResult
