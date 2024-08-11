<template>
    <div class="container">
        <div class="curtain">
            <ribbon></ribbon>

            <div class="section">
                <div class="inner">
                    <div class="left">
                        <div class="input">
                            <div :class="['tab', { 'selected-tab': selectedTab ==  tab}]" v-for="tab in tabs" v-text="tab" @click="selectTad(tab)"></div>
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

                        <div class="power-light" v-if="openMonitor"></div>

                        <Transition name="initial">
                            <div class="screen-initial" v-show="screenInitial">
                                <img src="@/assets/images/screen-initial.png" alt="">
                            </div>
                        </Transition>

                        <monitorStatus v-model="showMonitorStatus"></monitorStatus>

                        <div class="screen" v-show="showScreen">
                            <img src="@/assets/images/screen.png" alt="">
                        </div>

                        <div class="menu-buttons">
                            <img src="@/assets/images/menu-buttons.png" alt="">
                        </div>

                        <div class="controller">
                            <button class="controller-btn more-btn"></button>
                            <button class="controller-btn brightness-btn"></button>
                            <button class="controller-btn color-btn"></button>
                            <button class="controller-btn input-btn"></button>
                            <button class="controller-btn open-btn" @click="handleMonitor"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue';
    import ribbon from './_ribbon/ribbon.vue';
    import monitorStatus from './_monitor-status/monitor-status.vue';

    const tabs = reactive(["HDMI", "VGA"]);

    const selectedTab = ref(tabs[0]);


    function selectTad(tab) {
        selectedTab.value = tab;
    };

    const openMonitor = ref(false);
    const screenInitial = ref(false);
    const showMonitorStatus = ref(false);
    const showScreen = ref(false);

    function handleMonitor() {
        openMonitor.value = !openMonitor.value;

        if(openMonitor.value && !screenInitial.value ) {
            screenInitial.value = true;
            setTimeout(() => {
                screenInitial.value = false;
                handleScreen();
            }, 2000);
        } 
        
        if(openMonitor.value == false) {
            showScreen.value = false;
            screenInitial.value = false;
            showMonitorStatus.value = false;
        }
    }

    function handleScreen() {
        if(openMonitor.value) {
            setTimeout(() => {
                showMonitorStatus.value = true;
                showScreen.value = true;
                handleMonitorStatus();
            }, 2000);
        }
    };

    function handleMonitorStatus() {
        if(openMonitor.value) {
            setTimeout(() => {
                showMonitorStatus.value = false;
            }, 5000);
        }
    };


</script>

<style lang="scss" scoped>
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
            
            .monitor {
                img {
                    height: 655px;
                }
            }

            .power-light {
                position: absolute;
                bottom: 198px;
                right: 68px;
                width: 4px;
                height: 4px;
                background-color: #0083ca;
                border-radius: 50%;
                box-shadow: 0px 0px 10px 2px rgba(#0083ca, 0.9);
            }

            .screen-initial {
                position: absolute;
                top: 8px;
                left: 8px;

                img {
                    width: 100%;
                }
            }

            .screen {
                position: absolute;
                top: 9px;
                left: 9px;

                img {
                    width: 100%;
                    filter: brightness(86%);
                }
            }

            .menu-buttons {
                position: absolute;
                bottom: 135px;
                right: 0;

                img {
                    width: 100%;
                }
            }

            .controller {
                position: absolute;
                bottom: 135px;
                right: 18px;

                .controller-btn {
                    width: 40px;
                    height: 40px;
                    background-color: azure;
                    border: 1px solid #0083ca;
                    opacity: .5;
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