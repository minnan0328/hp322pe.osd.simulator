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
                    <div :class="['option', { selected: currentMenu == menu }]" v-for="menu in menus" v-text="menu.key"></div>
                </div>
            </div>
            <div class="setting">
                <div class="function">
                    <div :class="['setting-item', { selected: currentFunction == funItem }]" v-for="funItem in currentMenu.nodes" v-text="funItem.key"></div>
                </div>
                <div :class="['set-value', { focus: !currentFunction }]">
                    <template v-if="!currentFunction">
                        <div class="setting-item" v-for="node in currentMenu.nodes" v-text="node.value"></div>
                    </template>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="current-mode">
                Current Mode:
            </div>
            <div class="current-input">
                Input:
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
                <img src="@/assets/icons/icon-arrow-up.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-arrow-bottom.svg" alt="">
            </div>
            <div class="menu-item">
                <img src="@/assets/icons/icon-close.svg" alt="">
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
            <button class="controller-btn next" @click="handleNext"></button>
            <button class="controller-btn up" @click="handleBrightness"></button>
            <button class="controller-btn bottom" @click="handleColor"></button>
            <button class="controller-btn close" @click="handleInput"></button>
        </template>
        <slot name="openMonitor"></slot> 
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, computed } from 'vue';
import { useStore } from '@/stores/index';
import type { Nodes } from '@/interface';

const store = useStore();

const props = defineProps({
    openMonitor: {
        type: Boolean,
        default: false
    }
});


/* 選單控制 start  */

const openControllerMenus = ref(false);

watch(() => props.openMonitor, (newVal, oldVal) => {
    closeControllerMenus();
});

function handleControllerMenus() {
    if(props.openMonitor) {
        openControllerMenus.value = true;
    }
};
function closeControllerMenus() {
    openControllerMenus.value = false;
};

const isControllerMenusButton = computed(() => {
    if(openControllerMenus.value) {
        return !openAllMenu.value && !openBrightness.value && !openColor.value && !openInput.value;
    }
});

const isSelectedButton = computed(() => {
    if(openControllerMenus.value) {
        return openAllMenu.value;
    }
});


/* 選單控制 end  */

const menus = ref([
    store.$state.brightness,
    store.$state.color
]);

let currentMenu = ref(menus.value[0]);
let currentFunction = ref<Nodes | null>(null);

console.log(menus);

const openAllMenu = ref(false);
const openBrightness= ref(false);
const openColor= ref(false);
const openInput= ref(false);

function handleAllMenu() {
    openAllMenu.value = true;
    openBrightness.value = false;
    openColor.value = false;
    openInput.value = false;
};
function handleBrightness() {
    openAllMenu.value = false;
    openBrightness.value = true;
    openColor.value = false;
    openInput.value = false;
};
function handleColor() {
    openAllMenu.value = false;
    openBrightness.value = false;
    openColor.value = true;
    openInput.value = false;
};
function handleInput() {
    openAllMenu.value = false;
    openBrightness.value = false;
    openColor.value = false;
    openInput.value = true;
};

function handleNext() {
    if(currentMenu.value.nodes) {
        currentFunction.value = currentMenu.value.nodes[0];
    }
};





</script>
<style lang="scss" scoped>
    .menus {
        position: absolute;
        bottom: 252px;
        right: 62px;
        background-color: #090909;
        width: 475px;
        height: 326px;

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
                        padding: 4px 10px;
                        border: 1px solid transparent;

                        &.selected {
                            background-color: #000000;
                            border: 1px solid #0083ca;
                        }
                    }
                }



            }

            .setting {
                width: 100%;
                background-color: #161616;
                display: flex;
                margin-top: 2px;

                .function,
                .set-value {
                    width: 50%;
                }

                .set-value {
                    width: 50%;
                    border-left: 1px solid transparent;

                    &.focus {
                        border-left: 1px solid #202020;
                    }
                }

                .function,
                .set-value {
                    .setting-item {
                        padding: 6px 10px;
                        border: 1px solid transparent;

                        &.selected {
                            background-color: #000000;
                            border: 1px solid #0083ca;
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
            opacity: .5;

            &.controller-menus {
                position: absolute;
                width: 160px;
                bottom: 1px;
                right: 39px;
            }
        }
    }
</style>