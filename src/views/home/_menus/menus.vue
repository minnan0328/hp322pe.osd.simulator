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
                    <div :class="['option', { selected: currentMenu == menu, disabled: isDisabled(menu) }]" v-for="menu in menus" v-text="getLanguageText(menu)"></div>
                </div>
            </div>
            <div :class="['setting', { 'two-columns': currentFunction }]">
                <div class="function">
                    <template v-if="currentMenu" v-for="funItem in currentMenu.nodes">
                        <div :class="['setting-item', funItem.key, { 'unset-grid': currentFunction, disabled: isDisabled(funItem) }]">
                            <!-- button -->
                            <div :class="['item', {
                                    selected: currentFunction == funItem,
                                    'merge-grid': funItem.mergeGrid
                                }]"
                                v-if="funItem.mode != ModeType.radio" v-text="getLanguageText(funItem)">
                            </div>
                            <!-- button -->

                            <!-- radio -->
                            <div :class="['item customize-radio', {
                                selected: currentFunction == funItem,
                                'merge-grid': funItem.mode == ModeType.radio
                            }]" v-else-if="funItem.mode == ModeType.radio">
                                <div :class="['round', { selected: funItem.value == currentMenu.value }]"></div>
                                <div v-text="getLanguageText(funItem)"></div>
                            </div>
                            <!-- radio -->

                            <!-- value -->
                            <template v-if="!currentFunction">
                                <div class="item item-value"
                                    v-if="funItem.value && funItem.mode != ModeType.radio" 
                                    v-text="funItem.value">
                                </div>
                            </template>
                            <!-- value -->
                        </div>
                    </template>
                </div>
                <div class="function-setting">
                    <template v-if="currentMenu && currentFunction && currentFunction.nodes" v-for="setItem in currentFunction.nodes">
                        <div :class="['setting-item unset-grid', setItem.key, { disabled: isDisabled(setItem) }]">
                            <!-- button -->
                            <div :class="['item', {
                                    selected: currentSettingValue == setItem,
                                    'merge-grid': setItem.mergeGrid
                                }]"
                                v-if="setItem.mode != ModeType.radio" v-text="getLanguageText(setItem)">
                            </div>
                            <!-- button -->
                            
                            <!-- radio -->
                            <div :class="['item customize-radio', {
                                selected: currentSettingValue == setItem,
                                'merge-grid': setItem.mergeGrid
                            }]" v-else-if="setItem.mode == ModeType.radio">
                                <div :class="['round', { selected: setItem.value == currentFunction.value }]"></div>
                                <div v-text="getLanguageText(setItem)"></div>
                            </div>
                        </div>
                        <!-- radio -->
                    </template>
                </div>
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
            <div class="menu-item" v-if="!currentFunction">
                <img src="@/assets/icons/icon-close.svg" alt="">
            </div>
            <div class="menu-item" v-else-if="currentFunction">
                <img src="@/assets/icons/icon-previous.svg" alt="">
            </div>
        </template>
    </div>

    <div class="controller">
        <button v-if="!openControllerMenus" class="controller-btn controller-menus" @click="handleControllerMenus"></button>
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
            <button class="controller-btn close" v-if="!currentFunction" @click="handleClose"></button>
            <button class="controller-btn close" v-else-if="currentFunction" @click="handlePrevious"></button>
        </template>
        <slot name="openMonitor"></slot> 
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/types';
import { ModeType } from '@/types';

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

function getLanguageText(funItem: Nodes) {
    const langKey = currentLanguage.value as keyof typeof funItem.language;
    return funItem.language[langKey];
}

watch(() => props.openMonitor, (newVal, oldVal) => {
    if(newVal == false) {
        handleClose();
    }
});

// 開啟選單
function handleControllerMenus() {
    if(props.openMonitor) {
        openControllerMenus.value = true;
    }
};
// 關閉選單
function closeControllerMenus() {
    openControllerMenus.value = false;
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

const menus = ref([
    store.$state.brightness,
    store.$state.color,
    store.$state.image,
    store.$state.input,
    store.$state.power,
    store.$state.menu,
    store.$state.management,
    store.$state.information,
    store.$state.exit,
]);

let currentMenuIndex = ref(0);
let currentMenu = ref<Nodes | null>(menus.value[0]);
let currentFunction = ref<Nodes | null>(null);
let currentFunctionIndex = ref(0);
let currentSettingValueIndex = ref(0);
let currentSettingValue = ref<Nodes | null>(null);


console.log(menus);

function isDisabled(item: Nodes) {
    return !item.only?.includes(props.currentInput)
};

function handleTarget() {
    if(currentMenu.value?.nodes && !currentFunction.value) {
        currentFunction.value = currentMenu.value.nodes[0];
    } else if(currentFunction.value?.nodes && !currentSettingValue.value) {
        currentSettingValue.value = currentFunction.value.nodes[0];
    }
};

function handleUp() {
    if(currentMenu.value?.nodes) {
        if(!currentFunction.value) {
            currentMenuIndex.value = currentMenuIndex.value == 0
                ? menus.value.length - 1
                : currentMenuIndex.value - 1

                if(isDisabled(menus.value[currentMenuIndex.value])) {
                    handleUp();
                } else {
                    currentMenu.value = menus.value[currentMenuIndex.value];
                }

        } else if (currentFunction.value && !currentSettingValue.value) {
            currentFunctionIndex.value = currentFunctionIndex.value == 0
                ? currentMenu.value.nodes.length - 1
                : currentFunctionIndex.value - 1

            if(isDisabled(currentMenu.value.nodes[currentFunctionIndex.value])) {
                handleUp();
            } else {
                currentFunction.value = currentMenu.value.nodes[currentFunctionIndex.value];
            }
        } else if(currentFunction.value && currentFunction.value.nodes && currentSettingValue.value) {
            currentSettingValueIndex.value = currentSettingValueIndex.value == 0
                ? currentFunction.value.nodes.length - 1
                : currentSettingValueIndex.value - 1

            if(isDisabled(currentFunction.value.nodes[currentSettingValueIndex.value])) {
                handleUp();
            } else {
                currentSettingValue.value = currentFunction.value.nodes[currentSettingValueIndex.value];
            }
        }
    }
};
function handleBottom() {
    if(currentMenu.value?.nodes) {
        if(!currentFunction.value) {
            currentMenuIndex.value = currentMenuIndex.value == menus.value.length - 1
                ? 0
                : currentMenuIndex.value + 1

                if(isDisabled(menus.value[currentMenuIndex.value])) {
                    handleBottom();
                } else {
                    currentMenu.value = menus.value[currentMenuIndex.value];
                }

        } else if (currentFunction.value && !currentSettingValue.value) {
            currentFunctionIndex.value = currentFunctionIndex.value == currentMenu.value.nodes.length - 1
                ? 0
                : currentFunctionIndex.value + 1
            
                if(isDisabled(currentMenu.value.nodes[currentFunctionIndex.value])) {
                    handleBottom();
                } else {
                    currentFunction.value = currentMenu.value.nodes[currentFunctionIndex.value];
                }
        } else if(currentFunction.value && currentFunction.value.nodes && currentSettingValue.value) {
            currentSettingValueIndex.value = currentSettingValueIndex.value == currentFunction.value.nodes.length - 1
                ? 0
                : currentSettingValueIndex.value + 1

            if(isDisabled(currentFunction.value.nodes[currentSettingValueIndex.value])) {
                handleUp();
            } else {
                currentSettingValue.value = currentFunction.value.nodes[currentSettingValueIndex.value];
            }
        }
    }
};

// 關閉全部選單，包含
function handleClose() {
    closeControllerMenus();
    openAllMenu.value = false;
    openBrightness.value = false;
    openColor.value = false;
    openInput.value = false;
};

// 上一步
function handlePrevious() {
    if(currentFunction.value && !currentSettingValue.value) {
        currentFunction.value = null;
        currentFunctionIndex.value = 0;
    } 

    if(currentSettingValue.value) {
        currentSettingValue.value = null;
        currentSettingValueIndex.value = 0;
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
	height: 328px;

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
		font-size: 12px;

		.sidebar {
			width: 120px;
			height: 100%;
			background-color: #1c1c1c;

			.hp-icon {
				padding: 4px 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.options {
				.option {
					height: 24px;
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

			&.two-columns {
				display: grid;
				grid-template-columns: 1fr 1fr;
			}

			.function-setting {
                position: relative;
				border-left: 1px solid #202020;
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

					&.customize-radio {
						display: flex;
						align-items: center;
						flex-wrap: nowrap;

						.round {
							position: relative;
							width: 10px;
							height: 10px;
							background-color: #000000;
							border: 1px solid #444444;
							border-radius: 50%;
							margin-right: 4px;

							&.selected::before {
								position: absolute;
								content: "";
								width: 6px;
								height: 6px;
								background-color: #aaaaaa;
								border-radius: 50%;
								left: 2px;
								top: 2px;
							}
						}
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
