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
                    <template  v-for="menu in menus" v-text="getLanguageText(menu.language)">
                        <div :class="['option', { selected: state.currentMenu == menu }]"
                            v-if="isEnable(menu)" v-text="getLanguageText(menu.language)">
                        </div>
                    </template>
                </div>
            </div>
            <div :class="['setting', { 'two-columns': state.currentFunction }]">
                <template v-if="state.currentMenu && state.currentMenu.mode != ModeType.image">
                    <div class="function">
                        <template v-if="state.currentMenu" v-for="funItem in state.currentMenu.nodes">
                            <div :class="['setting-item', funItem.key, { 'unset-grid': state.currentFunction }]" v-if="isEnable(funItem)">
                                <!-- button -->
                                <div :class="['item', {
                                        selected: state.currentFunction == funItem,
                                        'merge-grid': funItem.mergeGrid
                                    }]"
                                    v-if="funItem.mode != ModeType.radio" v-text="getLanguageText(funItem.language)">
                                </div>
                                <!-- button -->
    
                                <!-- radio -->
                                <div :class="['item customize-radio', {
                                    selected: state.currentFunction == funItem,
                                    'merge-grid': funItem.mode == ModeType.radio && !funItem.nodes
                                }]" v-else-if="funItem.mode == ModeType.radio">
                                    <div :class="['round', { selected: funItem.value == state.currentMenu?.value }]"></div>
                                    <div v-text="getLanguageText(funItem.language)"></div>
                                </div>
                                <!-- radio -->
    
                                <!-- value -->
                                <template v-if="!state.currentFunction">
                                    <div class="item item-value"
                                        v-if="funItem.value && funItem.mode == ModeType.button
                                            || funItem.value && !funItem.nodes && funItem.mode == ModeType.info
                                            || funItem.value && funItem.nodes && funItem.mode == ModeType.radio">
                                        <span v-text="funItem.value"></span>
                                        <span v-if="funItem.unit" v-text="getLanguageText(funItem.unit)"></span>
                                    </div>
                                </template>
                                <!-- value -->
                                
                            </div>
                        </template>
                    </div>
                    <div :class="['function-setting', { 'customRGB-range-section': state.currentFunction.key == 'CustomRGB' }]"
                            v-if="state.currentMenu && state.currentFunction && state.currentFunction.nodes">
                        <template v-for="setItem in state.currentFunction.nodes">

                            <div :class="['setting-item unset-grid', setItem.key]"
                                v-if="isEnable(setItem) && setItem.mode != ModeType.verticalRange
                                    && isEnable(setItem) && setItem.mode != ModeType.horizontalRange">
                                <!-- button -->
                                <div :class="['item', { selected: state.currentSettingValue == setItem, 'merge-grid': setItem.mergeGrid }]"
                                    v-if="setItem.mode == ModeType.button || setItem.mode == ModeType.info" v-text="getLanguageText(setItem.language)">
                                </div>
                                <!-- button -->
                                
                                <!-- radio -->
                                <div :class="['item customize-radio', { selected: state.currentSettingValue == setItem,  'merge-grid': setItem.mergeGrid }]"
                                    v-else-if="setItem.mode == ModeType.radio">
                                    <div :class="['round', { selected: setItem.value == state.currentFunction.value }]"></div>
                                    <div v-text="getLanguageText(setItem.language)"></div>
                                </div>
                                <!-- radio -->

                                <!-- checkbox -->
                                <div :class="['item customize-checkbox', { selected: state.currentSettingValue == setItem, 'merge-grid': setItem.mergeGrid }]"
                                    v-else-if="setItem.mode == ModeType.checkBox">
                                    <div :class="['box', { selected: setItem.value == state.currentFunction.value }]"></div>
                                    <div v-text="getLanguageText(setItem.language)"></div>
                                </div>
                                <!-- checkbox -->
                            </div>
                            <!-- 一般縱向 range -->
                            <verticalRange v-else-if="isEnable(setItem) && setItem.mode == ModeType.verticalRange && state.currentFunction.key != 'CustomRGB'"
                                :setItem="setItem"
                                :selected="state.currentSettingValue == setItem">
                            </verticalRange>
                            <!-- 一般縱向 range -->
                            <!-- 縱向 color range -->
                            <template v-else-if="isEnable(setItem) && setItem.mode == ModeType.verticalRange && state.currentFunction.key == 'CustomRGB'">
                                <verticalRange v-if="isEnable(setItem) && setItem.mode == ModeType.verticalRange"
                                    :setItem="setItem"
                                    :selected="state.currentSettingValue == setItem"
                                    :isColor="true">
                                </verticalRange>
                            </template>
                            <!-- 縱向 color range -->
                            <!-- 橫向 range -->
                            <horizontalRange v-else-if="isEnable(setItem) && setItem.mode == ModeType.horizontalRange"
                                :setItem="setItem"
                                :selected="state.currentSettingValue == setItem">
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
            <div class="menu-item" v-if="!state.currentFunction">
                <img src="@/assets/icons/icon-close.svg" alt="">
            </div>
            <div class="menu-item" v-else-if="state.currentFunction">
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
            <button class="controller-btn close" v-if="!state.currentFunction" @click="handleClose"></button>
            <button class="controller-btn close" v-else-if="state.currentFunction" @click="handlePrevious"></button>
        </template>
        <slot name="openMonitor"></slot> 
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';
import verticalRange from './_vertical-range.vue';
import horizontalRange from './_horizontal-range.vue';

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

const currentLanguage = computed(() => {
    let language = store.$state.menu.nodes.find(n => n.key == 'Language');
    return language?.value ?? "English";
});

function getLanguageText(langItem: { [key: string]: string; }) {
    const langKey = currentLanguage.value as keyof typeof langItem;
    return langItem[langKey];
};

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
    currentMenuIndex: 0,
    currentMenu: null as Nodes | null,
    currentFunction: null as Nodes | null,
    currentFunctionIndex: 0,
    currentSettingValueIndex: 0,
    currentSettingValue: null as Nodes | null
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
    if (state.currentMenu?.nodes && !state.currentFunction) {
        selectEnabledItem(state.currentMenu.nodes, state.currentFunctionIndex, (item, index) => {
            state.currentFunction = item;
            state.currentFunctionIndex = index;
        });
    } else if (state.currentFunction?.nodes && !state.currentSettingValue) {
        selectEnabledItem(state.currentFunction.nodes, state.currentSettingValueIndex, (item, index) => {
            state.currentSettingValue = item;
            state.currentSettingValueIndex = index;
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
        if (!state.currentFunction) {
            state.currentMenuIndex = updateIndex(state.currentMenuIndex, menus.value.length);

            if (!isEnable(menus.value[state.currentMenuIndex])) {
                handleNavigation(direction);
            } else {
                state.currentMenu = menus.value[state.currentMenuIndex];
            }
        } else if (state.currentFunction && !state.currentSettingValue) {
            state.currentFunctionIndex = updateIndex(state.currentFunctionIndex, state.currentMenu.nodes.length);

            if (!isEnable(state.currentMenu.nodes[state.currentFunctionIndex])) {
                handleNavigation(direction);
            } else {
                state.currentFunction = state.currentMenu.nodes[state.currentFunctionIndex];
            }
        } else if (state.currentFunction && state.currentFunction.nodes && state.currentSettingValue) {
            state.currentSettingValueIndex = updateIndex(state.currentSettingValueIndex, state.currentFunction.nodes.length);

            if (!isEnable(state.currentFunction.nodes[state.currentSettingValueIndex])) {
                handleNavigation(direction);
            } else {
                state.currentSettingValue = state.currentFunction.nodes[state.currentSettingValueIndex];
            }
        }
    }
};

function handleUp() {
    handleNavigation('up');
};

function handleBottom() {
    handleNavigation('down')
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
    state.currentFunctionIndex = 0;
    state.currentSettingValueIndex = 0;

};

// 上一步
function handlePrevious() {
    if(state.currentFunction && !state.currentSettingValue) {
        state.currentFunction = null;
        state.currentFunctionIndex = 0;
    } 

    if(state.currentSettingValue) {
        state.currentSettingValue = null;
        state.currentSettingValueIndex = 0;
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

						&.customize-radio {
							.round {
								&.selected::before {
									background-color: #ffffff;
								}
							}
						}
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
