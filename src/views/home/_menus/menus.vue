<template>
    <div class="menus" v-if="openAllMenu">
        <div class="header">
            <p>HP 322pe OSD simulator</p>
        </div>

        <div class="body">
            <div class="sidebar">
                <div class="hp-icon">
                    <img src="@/assets/images/logo.png" alt="">
                </div>
                <div class="options">
                    <template  v-for="menu in menus" v-text="toLanguageText(menu.language)">
                        <div :class="['option', { selected: state.currentMenu == menu }]"
                            v-if="isEnableInput(menu)" v-text="toLanguageText(menu.language)">
                        </div>
                    </template>
                </div>
            </div>
            <div :class="['setting', { 'two-columns': state.secondPanel }]">
                <template v-if="state.currentMenu && state.currentMenu.mode != ModeType.exit">
                    <div class="function">
                        <template v-if="state.currentMenu" v-for="secondNodes in state.currentMenu.nodes">
                            <div :class="['setting-item', secondNodes.key, { 'unset-grid': state.secondPanel }]" v-if="isEnableInput(secondNodes)">
                                <!-- button -->
                                <div :class="['item', {
                                        selected: state.secondPanel == secondNodes,
                                        'merge-grid': secondNodes.mergeGrid
                                    }]"
                                    v-if="secondNodes.mode != ModeType.radio" v-text="toLanguageText(secondNodes.language)">
                                </div>
                                <!-- button -->
    
                                <!-- radio -->
                                <customizeRadio v-else-if="secondNodes.mode == ModeType.radio"
                                    :nodes="secondNodes"
                                    :isChecked="state.currentMenu.value == secondNodes.value"
                                    :selected="state.secondPanel == secondNodes">
                                </customizeRadio>
                                <!-- radio -->
    
                                <!-- value -->
                                <template v-if="!state.secondPanel">
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
                    <div :class="['function-setting', { 'customRGB-range-section': state.secondPanel.key == 'CustomRGB' }]"
                            v-if="state.currentMenu && state.secondPanel && state.secondPanel.nodes">
                        <template v-for="thirdNodes in state.secondPanel.nodes">
                            <div :class="['setting-item unset-grid', thirdNodes.key]"
                                v-if="isEnableInput(thirdNodes) && thirdNodes.mode != ModeType.verticalRange
                                    && isEnableInput(thirdNodes) && thirdNodes.mode != ModeType.horizontalRange">
                                <!-- button -->
                                <div :class="['item', { selected: state.thirdPanel == thirdNodes, 'merge-grid': thirdNodes.mergeGrid }]"
                                    v-if="thirdNodes.mode == ModeType.button || thirdNodes.mode == ModeType.info" v-text="toLanguageText(thirdNodes.language)">
                                </div>
                                <!-- button -->
                                
                                <!-- radio -->
                                <customizeRadio v-else-if="thirdNodes.mode == ModeType.radio"
                                    :nodes="thirdNodes"
                                    :isChecked="state.secondPanel.value == thirdNodes.value"
                                    :selected="state.thirdPanel == thirdNodes">
                                </customizeRadio>
                                <!-- radio -->

                                <!-- checkbox -->
                                <customizeCheckbox v-else-if="thirdNodes.mode == ModeType.checkBox"
                                    :nodes="thirdNodes"
                                    :previousNodes="state.secondPanel"
                                    :selected="state.thirdPanel == thirdNodes">
                                </customizeCheckbox>
                            </div>
                            <!-- 一般縱向 range -->
                            <verticalRange v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange && state.secondPanel.key != 'CustomRGB'"
                                :nodes="thirdNodes"
                                :selected="state.thirdPanel == thirdNodes">
                            </verticalRange>
                            <!-- 一般縱向 range -->
                            <!-- 縱向 color range -->
                            <template v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange && state.secondPanel.key == 'CustomRGB'">
                                <verticalRange v-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.verticalRange"
                                    :nodes="thirdNodes"
                                    :selected="state.thirdPanel == thirdNodes"
                                    :isColor="true">
                                </verticalRange>
                            </template>
                            <!-- 縱向 color range -->
                            <!-- 橫向 range -->
                            <horizontalRange v-else-if="isEnableInput(thirdNodes) && thirdNodes.mode == ModeType.horizontalRange"
                                :nodes="thirdNodes"
                                :selected="state.thirdPanel == thirdNodes">
                            </horizontalRange>
                            <!-- 橫向 range -->
                        </template>
                    </div>
                </template>
                <template v-if="state.currentMenu && state.currentMenu.mode == ModeType.exit">
                    <div class="full-image">
                        <img src="@/assets/icons/logo.svg" alt="">
                    </div>
                </template>
            </div>
        </div>

        <div class="footer">
            <div class="current-mode">
                Current Mode: 1920x1080 100Hz
            </div>
            <div class="current-input">
                {{ toLanguageText(inputEnum.language) }}: {{ inputEnum.value }}
            </div>
        </div>
    </div>

    <div class="controller-menus" v-if="openControllerMenus">
        <template v-for="currentButton in handleControllerButtonList">
            <div class="menu-item" v-if="currentButton.image">
                <img :src="currentButton?.image" alt="">
            </div>
        </template>
    </div>

    <div class="controller">
        <button v-if="openMonitor && !openControllerMenus" class="controller-btn controller-menus" @click="handleControllerMenus"></button>
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
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { isEnableInput, toLanguageText, toDisplayValueLanguageText } from '@/service/service';
// components
import verticalRange from './_vertical-range.vue';
import horizontalRange from './_horizontal-range.vue';
import customizeCheckbox from './_customize-checkbox.vue';
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

interface ControllerButtonList {
    image: string | null,
    event: (() => void) | null,
    stopEvent: (() => void) | null,
    type: string
};

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


const openControllerMenus = ref(false);
const openAllMenu = ref(false);
const openSecondAssignButton = ref(false);
const openThirdAssignButton= ref(false);
const openFourthAssignButton= ref(false);

// 開啟選單
function handleControllerMenus() {
    if(props.openMonitor) {
        openControllerMenus.value = true;
    }
};

// 是否啟用選單控制按鈕
const isControllerMenusButton = computed(() => {
    if(openControllerMenus.value) {
        return !openAllMenu.value && !openSecondAssignButton.value && !openThirdAssignButton.value && !openFourthAssignButton.value;
    }
});

// 是否啟用選單選擇按鈕
const isSelectedButton = computed(() => {
    if(openControllerMenus.value) {
        return openAllMenu.value;
    }
});

// 開啟全部選單
function handleAllMenu() {
    openAllMenu.value = true;
    openSecondAssignButton.value = false;
    openThirdAssignButton.value = false;
    openFourthAssignButton.value = false;
};
// 開啟第二個選單按鈕
function handleSecondAssignButton() {
    openAllMenu.value = false;
    openSecondAssignButton.value = true;
    openThirdAssignButton.value = false;
    openFourthAssignButton.value = false;
};
// 開啟第三個選單按鈕
function handleThirdAssignButton() {
    openAllMenu.value = false;
    openSecondAssignButton.value = false;
    openThirdAssignButton.value = true;
    openFourthAssignButton.value = false;
};
// 開啟第四個選單按鈕
function handleFourthAssignButton() {
    openAllMenu.value = false;
    openSecondAssignButton.value = false;
    openThirdAssignButton.value = false;
    openFourthAssignButton.value = true;
};

const menus = computed(() => {
    return [
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
});

const state = reactive({
    currentPanelNumber: 0,
    currentMenu: null as Nodes | null,
    secondPanel: null as Nodes | null,
    thirdPanel: null as Nodes | null,
    fourthPanel: null as Nodes | null,
    currentMenuIndex: 0,
    secondPanelIndex: 0,
    thirdPanelIndex: 0,
    fourthPanelIndex: 0
});


watch(() => props.openMonitor, (newVal, oldVal) => {
    if(newVal == false) {
        handleClose();
    }
});

watch(() => openAllMenu.value, (newVal, oldVal) => {
    state.currentMenu = menus.value[0];
    state.currentPanelNumber = 1;
});

const handleControllerButtonList = computed<ControllerButtonList[] | null>(() => {
    if(props.openMonitor) {
        if(isControllerMenusButton.value) {
            return [
                { image: iconAllMenu, event: handleAllMenu, stopEvent: null, type: "Button" },
                { image: iconBrightness, event: handleSecondAssignButton , stopEvent: null, type: "Button"},
                { image: iconColor, event: handleThirdAssignButton, stopEvent: null, type: "Button" },
                { image: iconInput, event: handleFourthAssignButton, stopEvent: null, type: "Button" }
            ]
        } else if(openAllMenu.value && !state.secondPanel) {
            let buttonList: ControllerButtonList[] = [];

            if(state.currentMenu?.mode == ModeType.info) {
                buttonList = [
                    { image: null, event: null, stopEvent: null, type: "Button" },
                    { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
                    { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: null, type: "Button" }
                ];
            } else if(state.currentMenu?.mode == ModeType.exit) {
                buttonList = [
                    { image: iconCheck, event: handleClose, stopEvent: null, type: "Button" },
                    { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
                    { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: null, type: "Button" }
                ];
            } else {
                buttonList = [
                    { image: iconNext, event: handleTarget, stopEvent: null, type: "Button" },
                    { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
                    { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
                    { image: iconClose, event: handleClose, stopEvent: null, type: "Button" }
                ];
            }
            return buttonList;
        } else if(openAllMenu.value && state.currentMenu) {
            if(state.secondPanel && !state.thirdPanel) {
                return handleModeControllerButtonList(state.secondPanel, state.currentMenu);
            } else if(state.secondPanel && state.thirdPanel && !state.fourthPanel) {
                return handleModeControllerButtonList(state.thirdPanel, state.secondPanel);
            } else if(state.secondPanel && state.thirdPanel && state.fourthPanel) {
                return handleModeControllerButtonList(state.fourthPanel, state.thirdPanel);
            } else {
                return [];
            }
        } else {
            return [];
        }
    } else {
        return [];
    }
});

function handleModeControllerButtonList(nodes: Nodes, previousNodes: Nodes) {
    const nextButtonList: ControllerButtonList[] = [
        { image: iconNext, event: handleTarget, stopEvent: null, type: "Button" },
        { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
        { image: iconPrevious, event: handlePrevious, stopEvent: null, type: "Button" }
    ];

    const checkedButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: null, type: "Button"},
        { image: iconArrowButton, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconArrowUp, event: handleUp, stopEvent: null, type: "Button" },
        { image: iconPrevious, event: handlePrevious, stopEvent: null, type: "Button" }
    ];

    const rangeButtonList: ControllerButtonList[] = [
        { image: iconCheck, event: handleConfirmed , stopEvent: null, type: "Button"},
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconPrevious, event: handlePrevious , stopEvent: null, type: "Button"}
    ];

    const rangeNextButtonList: ControllerButtonList[] = [
        { image: iconNextRight, event: handleBottom, stopEvent: null, type: "Button" },
        { image: iconSubtract, event: handleRangeSubtract, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconAdd, event: handleRangeAdd, stopEvent: stopTrigger, type: "RangeButton" },
        { image: iconPrevious, event: handlePrevious, stopEvent: null, type: "Button" }
    ];
    
    if(
        nodes.key == "Reset" || nodes.key == "Back"
        || nodes.mode == ModeType.radio && !nodes.nodes
        || nodes.mode == ModeType.button && !nodes.nodes
    ) {
        return checkedButtonList;
    } else if(
        nodes.mode == ModeType.verticalRange && previousNodes.nodes?.length == 1
        || nodes.mode == ModeType.horizontalRange  && previousNodes.nodes?.length == 1
    ) {
        return rangeButtonList;
    } else if(
        nodes.mode == ModeType.verticalRange && previousNodes.nodes && previousNodes.nodes?.length > 1
        || nodes.mode == ModeType.horizontalRange && previousNodes.nodes && previousNodes.nodes?.length >  1
    ) {
        return rangeNextButtonList;
    } else {
        return nextButtonList;
    }
}

function handleTarget() {
    if (state.currentMenu?.nodes && !state.secondPanel) {
        selectEnabledItem(state.currentMenu.nodes, state.secondPanelIndex, (nodes, index) => {
            state.secondPanel = nodes;
            state.secondPanelIndex = index;
            state.currentPanelNumber = 2;
        });
    } else if (state.secondPanel?.nodes && !state.thirdPanel) {
        selectEnabledItem(state.secondPanel.nodes, state.thirdPanelIndex, (nodes, index) => {
            state.thirdPanel = nodes;
            state.thirdPanelIndex = index;
            state.currentPanelNumber = 3;
        });
    }
}

function selectEnabledItem(nodes: Nodes[], startIndex: number, setValue: (node: Nodes, index: number) => void) {
    let index = startIndex;
    const length = nodes.length;

    do {
        if (isEnableInput(nodes[index])) {
            setValue(nodes[index], index);
            return;
        }
        index = (index + 1) % length;
    } while (index !== startIndex);
};

function handleNavigation(direction: 'up' | 'down') {
    const step = direction === 'up' ? -1 : 1;

    const updateIndex = (index: number, length: number) => {
        return (index + step + length) % length;
    };

    if (state.currentMenu?.nodes) {
        if (!state.secondPanel) {
            state.currentMenuIndex = updateIndex(state.currentMenuIndex, menus.value.length);

            if (!isEnableInput(menus.value[state.currentMenuIndex])) {
                handleNavigation(direction);
            } else {
                state.currentMenu = menus.value[state.currentMenuIndex];
            }
        } else if (state.secondPanel && !state.thirdPanel) {
            state.secondPanelIndex = updateIndex(state.secondPanelIndex, state.currentMenu.nodes.length);

            if (!isEnableInput(state.currentMenu.nodes[state.secondPanelIndex])) {
                handleNavigation(direction);
            } else {
                state.secondPanel = state.currentMenu.nodes[state.secondPanelIndex];
            }
        } else if (state.secondPanel && state.secondPanel.nodes && state.thirdPanel) {
            state.thirdPanelIndex = updateIndex(state.thirdPanelIndex, state.secondPanel.nodes.length);

            if (!isEnableInput(state.secondPanel.nodes[state.thirdPanelIndex])) {
                handleNavigation(direction);
            } else {
                state.thirdPanel = state.secondPanel.nodes[state.thirdPanelIndex];
            }
        }
    }
};

function handleUp() {
    handleNavigation('up');
};

function handleBottom() {
    handleNavigation('down');
};

function handleRangeValue(step: string) {
    switch(state.currentPanelNumber) {
        case 2:
            if(state.currentMenu && state.secondPanel) { calculateValue(state.secondPanel, state.currentMenu); }
            break;
        case 3:
            if(state.secondPanel && state.thirdPanel) { calculateValue(state.thirdPanel, state.secondPanel); }
            break;
        case 4:
            if(state.thirdPanel && state.fourthPanel) { calculateValue(state.fourthPanel, state.thirdPanel); }
            break;
    };

    function calculateValue(nodes: Nodes, previousNodes: Nodes){
        if(nodes.mode == ModeType.verticalRange || nodes.mode == ModeType.horizontalRange) {
            if(step == "subtract" && (nodes.value as number) > nodes.rangeMin && (nodes.value as number) <= nodes.rangeMax) {
                (nodes.value as number) -= 1;
            } else if(step == "add" && (nodes.value as number) >= nodes.rangeMin && (nodes.value as number) < nodes.rangeMax) {
                (nodes.value as number) += 1;
            }

            previousNodes.value = nodes.value;
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

function handleRangeSubtract() {
    startTrigger("subtract");

};
function handleRangeAdd() {
    startTrigger("add");
};

function handleConfirmed() {
    switch(state.currentPanelNumber) {
        case 2:
            if(state.currentMenu && state.secondPanel) { setNodesValue(state.secondPanel, state.currentMenu); }
            break;
        case 3:
            if(state.secondPanel && state.thirdPanel) { setNodesValue(state.thirdPanel, state.secondPanel); }
            break;
        case 4:
            if(state.thirdPanel && state.fourthPanel) { setNodesValue(state.fourthPanel, state.thirdPanel); }
            break;
    };

    function setNodesValue(nodes: Nodes, previousNodes: Nodes) {
        if(nodes.key == "Back") {
            handlePrevious();
            return;
        } 
        
        if(nodes.key == "Reset") {
            return
        }

        previousNodes.value = nodes.value;
    };
};

// 上一步
function handlePrevious() {
    if(state.secondPanel && !state.thirdPanel) {
        state.secondPanel = null;
        state.secondPanelIndex = 0;
        state.currentPanelNumber = 1;
    }  else if(state.secondPanel && state.thirdPanel) {
        state.thirdPanel = null;
        state.thirdPanelIndex = 0;
        state.currentPanelNumber = 2;
    }
};

// 關閉全部選單，包含
function handleClose() {
    openControllerMenus.value = false;
    state.currentMenu = null;
    openAllMenu.value = false;
    openSecondAssignButton.value = false;
    openThirdAssignButton.value = false;
    openFourthAssignButton.value = false;
    
    state.currentPanelNumber = 0;
    state.currentMenuIndex = 0;
    state.secondPanelIndex = 0;
    state.thirdPanelIndex = 0;
};

</script>
<style lang="scss" scoped>
.menus {
	position: absolute;
	bottom: 252px;
	right: 62px;
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
					}
				}
			}
		}

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
					}
				}
			}
		}
	}
}

.controller-menus {
	position: absolute;
	display: flex;
	bottom: 218px;
	right: 62px;
	background-color: #090909;

	.menu-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28px;
		height: 16px;
		background-color: #323232;
		border: 0.8px solid #000000;

		img {
			height: 10px;
		}
	}
}

.controller {
    display: flex;
	position: absolute;
	bottom: 135px;
	right: 18px;

	.controller-btn,
	:deep(.controller-btn) {
		width: 40px;
		height: 40px;
		background-color: azure;
		border: 1px solid #0083ca;
		opacity: 0.5;

		&.controller-menus {
			position: absolute;
			width: 160px;
			bottom: 1px;
			right: 39px;
		}
	}
}
</style>
