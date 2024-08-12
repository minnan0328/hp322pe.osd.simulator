<template v-if="modelValue">
    <Transition name="initial">
        <div class="screen-initial" v-show="screenInitial">
            <img src="@/assets/images/screen-initial.png" alt="">
        </div>
    </Transition>

    <monitorStatus v-model="showMonitorStatus"></monitorStatus>

    <div class="screen" v-show="showScreen">
        <img src="@/assets/images/screen.png" alt="">
    </div>
</template>
<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import monitorStatus from '@/views/home/_monitor-status/monitor-status.vue';

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        }
    });

    const screenInitial = ref(false);
    const showMonitorStatus = ref(false);
    const showScreen = ref(false);

    function handleScreen() {
        if(props.modelValue) {
            setTimeout(() => {
                showMonitorStatus.value = true;
                showScreen.value = true;
                handleMonitorStatus();
            }, 2000);
        }
    };

    function handleMonitorStatus() {
        if(props.modelValue) {
            setTimeout(() => {
                showMonitorStatus.value = false;
            }, 5000);
        }
    };

    onMounted(() => {
        if(props.modelValue && !screenInitial.value ) {
            screenInitial.value = true;

            setTimeout(() => {
                screenInitial.value = false;
                handleScreen();
            }, 2000);
        } 
    });


</script>
<style lang="scss" scoped>

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
            // filter: brightness(v-bind(setCSSBrightness));
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