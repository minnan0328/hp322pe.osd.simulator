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
                            v-if="isEnable(menu)" v-text="toLanguageText(menu.language)">
                        </div>
                    </template>
                </div>
            </div>
            <div :class="['setting', { 'two-columns': state.secondPanel }]">
                <template v-if="state.currentMenu && state.currentMenu.mode != ModeType.image">
                    <div class="function">
                        <template v-if="state.currentMenu" v-for="funItem in state.currentMenu.nodes">
                            <div :class="['setting-item', funItem.key, { 'unset-grid': state.secondPanel }]" v-if="isEnable(funItem)">
                                <!-- button -->
                                <div :class="['item', {
                                        selected: state.secondPanel == funItem,
                                        'merge-grid': funItem.mergeGrid
                                    }]"
                                    v-if="funItem.mode != ModeType.radio" v-text="toLanguageText(funItem.language)">
                                </div>
                                <!-- button -->
    
                                <!-- radio -->
                                <customizeRadio v-else-if="funItem.mode == ModeType.radio"
                                    :setItem="funItem"
                                    :isChecked="state.currentMenu.value == funItem.value"
                                    :selected="state.secondPanel == funItem">
                                </customizeRadio>
                                <!-- radio -->
    
                                <!-- value -->
                                <template v-if="!state.secondPanel">
                                    <div class="item item-value"
                                        v-if="funItem.value && funItem.displayValue
                                                || funItem.value == 0 && funItem.displayValue">
                                        <span v-text="funItem.value"></span>
                                        <span v-if="funItem.unit" v-text="toLanguageText(funItem.unit)"></span>
                                    </div>
                                </template>
                                <!-- value -->
                            </div>
                        </template>
                    </div>
                    <div :class="['function-setting', { 'customRGB-range-section': state.secondPanel.key == 'CustomRGB' }]"
                            v-if="state.currentMenu && state.secondPanel && state.secondPanel.nodes">
                        <template v-for="setItem in state.secondPanel.nodes">
                            <div :class="['setting-item unset-grid', setItem.key]"
                                v-if="isEnable(setItem) && setItem.mode != ModeType.verticalRange
                                    && isEnable(setItem) && setItem.mode != ModeType.horizontalRange">
                                <!-- button -->
                                <div :class="['item', { selected: state.thirdPanel == setItem, 'merge-grid': setItem.mergeGrid }]"
                                    v-if="setItem.mode == ModeType.button || setItem.mode == ModeType.info" v-text="toLanguageText(setItem.language)">
                                </div>
                                <!-- button -->
                                
                                <!-- radio -->
                                <customizeRadio v-else-if="setItem.mode == ModeType.radio"
                                    :setItem="setItem"
                                    :isChecked="state.secondPanel.value == setItem.value"
                                    :selected="state.thirdPanel == setItem">
                                </customizeRadio>
                                <!-- radio -->

                                <!-- checkbox -->
                                <customizeCheckbox v-else-if="setItem.mode == ModeType.checkBox"
                                    :setItem="setItem"
                                    :selectedItem="state.secondPanel"
                                    :selected="state.thirdPanel == setItem">
                                </customizeCheckbox>
                            </div>
                            <!-- 一般縱向 range -->
                            <verticalRange v-else-if="isEnable(setItem) && setItem.mode == ModeType.verticalRange && state.secondPanel.key != 'CustomRGB'"
                                :setItem="setItem"
                                :selected="state.thirdPanel == setItem">
                            </verticalRange>
                            <!-- 一般縱向 range -->
                            <!-- 縱向 color range -->
                            <template v-else-if="isEnable(setItem) && setItem.mode == ModeType.verticalRange && state.secondPanel.key == 'CustomRGB'">
                                <verticalRange v-if="isEnable(setItem) && setItem.mode == ModeType.verticalRange"
                                    :setItem="setItem"
                                    :selected="state.thirdPanel == setItem"
                                    :isColor="true">
                                </verticalRange>
                            </template>
                            <!-- 縱向 color range -->
                            <!-- 橫向 range -->
                            <horizontalRange v-else-if="isEnable(setItem) && setItem.mode == ModeType.horizontalRange"
                                :setItem="setItem"
                                :selected="state.thirdPanel == setItem">
                            </horizontalRange>
                            <!-- 橫向 range -->
                        </template>
                    </div>
                </template>
                <template v-if="state.currentMenu && state.currentMenu.mode == ModeType.image">
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
                Input: {{ currentInput }}
            </div>
        </div>
    </div>

    <div class="controller-menus" v-if="openControllerMenus">
        <template v-if="isControllerMenusButton">
            <div class="menu-item">
                <img src="@/assets/icons/icon-menu.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-brightness.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-color.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-input.svg" alt="">
            </div>
        </template>
        <template v-else-if="isSelectedButton">
            <div class="menu-item">
                <img src="@/assets/icons/icon-next.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-arrow-bottom.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-arrow-up.svg" alt="">
            </div>
            <div class="menu-item" v-if="!state.secondPanel">
                <img src="@/assets/icons/icon-close.svg" alt="">
            </div>
            <div class="menu-item" v-else-if="state.secondPanel">
                <img src="@/assets/icons/icon-previous.svg" alt="">
            </div>
        </template>
    </div>

    <div class="controller">
        <button v-if="openMonitor && !openControllerMenus" class="controller-btn controller-menus" @click="handleControllerMenus"></button>
        <template v-else-if="isControllerMenusButton">
            <button class="controller-btn all" @click="handleAllMenu"></button>
            <button class="controller-btn brightness" @click="handleBrightness"></button>
            <button class="controller-btn color" @click="handleColor"></button>
            <button class="controller-btn input" @click="handleInput"></button>
        </template>

        <template v-else-if="isSelectedButton">
            <button class="controller-btn next" @click="handleTarget"></button>
            <button class="controller-btn bottom" @click="handleBottom()"></button>
            <button class="controller-btn up" @click="handleUp()"></button>
            <button class="controller-btn close" v-if="!state.secondPanel" @click="handleClose"></button>
            <button class="controller-btn close" v-else-if="state.secondPanel" @click="handlePrevious"></button>
        </template>
        <slot name="openMonitor"></slot> 
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import { toLanguageText } from '@/service/service';
import verticalRange from './_vertical-range.vue';
import horizontalRange from './_horizontal-range.vue';
import customizeCheckbox from './_customize-checkbox.vue';
import customizeRadio from './_customize-radio.vue';

const store = useStore();

const props = defineProps({
    openMonitor: {
        type: Boolean,
        default: false
    },
    currentInput: {
        type: String,
        default: "HDMI"
    }
});

const openControllerMenus = ref(false);
const openAllMenu = ref(false);
const openBrightness= ref(false);
const openColor= ref(false);
const openInput= ref(false);

// 開啟選單
function handleControllerMenus() {
    if(props.openMonitor) {
        openControllerMenus.value = true;
    }
};

// 是否啟用選單控制按鈕
const isControllerMenusButton = computed(() => {
    if(openControllerMenus.value) {
        return !openAllMenu.value && !openBrightness.value && !openColor.value && !openInput.value;
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
    openBrightness.value = false;
    openColor.value = false;
    openInput.value = false;
};
// 開啟亮度
function handleBrightness() {
    openAllMenu.value = false;
    openBrightness.value = true;
    openColor.value = false;
    openInput.value = false;
};
// 開啟 color
function handleColor() {
    openAllMenu.value = false;
    openBrightness.value = false;
    openColor.value = true;
    openInput.value = false;
};
// 開啟 input
function handleInput() {
    openAllMenu.value = false;
    openBrightness.value = false;
    openColor.value = false;
    openInput.value = true;
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
});

function isEnable(item: Nodes): boolean {
    return item.only?.includes(props.currentInput) ?? false;
};

function handleTarget() {
    if (state.currentMenu?.nodes && !state.secondPanel) {
        selectEnabledItem(state.currentMenu.nodes, state.secondPanelIndex, (item, index) => {
            state.secondPanel = item;
            state.secondPanelIndex = index;
        });
    } else if (state.secondPanel?.nodes && !state.thirdPanel) {
        selectEnabledItem(state.secondPanel.nodes, state.thirdPanelIndex, (item, index) => {
            state.thirdPanel = item;
            state.thirdPanelIndex = index;
        });
    }
}

function selectEnabledItem(nodes: Nodes[], startIndex: number, setValue: (item: Nodes, index: number) => void) {
    let index = startIndex;
    const length = nodes.length;

    do {
        if (isEnable(nodes[index])) {
            setValue(nodes[index], index);
            return;
        }
        index = (index + 1) % length;
    } while (index !== startIndex);
}

function handleNavigation(direction: 'up' | 'down') {
    const step = direction === 'up' ? -1 : 1;

    const updateIndex = (index: number, length: number) => {
        return (index + step + length) % length;
    };

    if (state.currentMenu?.nodes) {
        if (!state.secondPanel) {
            state.currentMenuIndex = updateIndex(state.currentMenuIndex, menus.value.length);

            if (!isEnable(menus.value[state.currentMenuIndex])) {
                handleNavigation(direction);
            } else {
                state.currentMenu = menus.value[state.currentMenuIndex];
            }
        } else if (state.secondPanel && !state.thirdPanel) {
            state.secondPanelIndex = updateIndex(state.secondPanelIndex, state.currentMenu.nodes.length);

            if (!isEnable(state.currentMenu.nodes[state.secondPanelIndex])) {
                handleNavigation(direction);
            } else {
                state.secondPanel = state.currentMenu.nodes[state.secondPanelIndex];
            }
        } else if (state.secondPanel && state.secondPanel.nodes && state.thirdPanel) {
            state.thirdPanelIndex = updateIndex(state.thirdPanelIndex, state.secondPanel.nodes.length);

            if (!isEnable(state.secondPanel.nodes[state.thirdPanelIndex])) {
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

// 關閉全部選單，包含
function handleClose() {
    openControllerMenus.value = false;
    state.currentMenu = null;
    openAllMenu.value = false;
    openBrightness.value = false;
    openColor.value = false;
    openInput.value = false;

    state.currentMenuIndex = 0;
    state.secondPanelIndex = 0;
    state.thirdPanelIndex = 0;

};

// 上一步
function handlePrevious() {
    if(state.secondPanel && !state.thirdPanel) {
        state.secondPanel = null;
        state.secondPanelIndex = 0;
    } 

    if(state.thirdPanel) {
        state.thirdPanel = null;
        state.thirdPanelIndex = 0;
    }
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
