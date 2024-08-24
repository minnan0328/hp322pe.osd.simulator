<template v-if="modelValue">
    <Transition name="initial">
        <div class="screen-initial" v-show="screenInitial && menuStateResult.OSDMessage.powerOnLogo">
            <img src="@/assets/images/screen-initial.png" alt="">
        </div>
    </Transition>

    <monitorStatus v-if="showMonitorStatus" v-model:show="monitorStatusResult.show"
        v-model:position="(monitorStatusResult.nodes.result as string)"
        :showMonitorStatus="showMonitorStatus">
    </monitorStatus>

    <div class="screen" v-show="showScreen">
        <img src="@/assets/images/screen.png" alt="">
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from '@/stores/index';
import monitorStatus from '@/views/home/_monitor-status/monitor-status.vue';
import { menuStateResult, monitorResult, toImageColor, monitorStatusResult } from '@/views/home/_menuStateResult';

const store = useStore();

const props = defineProps({
    openMonitor: {
        type: Boolean,
        default: false
    },
    screenInitial: {
        type: Boolean,
        default: false
    },
    showMonitorStatus: {
        type: Boolean,
        default: false
    },
    showScreen: {
        type: Boolean,
        default: false
    },
    startUpFinish: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:screenInitial', 'update:showMonitorStatus', 'update:showScreen', 'update:startUpFinish']);

function handleScreen() {
    setTimeout(() => {
        emit('update:showScreen', true);
        emit('update:showMonitorStatus', true);
        handleMonitorStatus();
    }, 2000);
};

function handleMonitorStatus() {
    setTimeout(() => {
        emit('update:showMonitorStatus', false);
        emit('update:startUpFinish', true);
    }, 5000);
};

onMounted(() => {
    if(props.openMonitor) {
        if(menuStateResult.value.OSDMessage.powerOnLogo) {
            emit('update:screenInitial', true);

            setTimeout(() => {
                emit('update:screenInitial', false);

                handleScreen();
            }, 2000);
        } else {
            handleScreen();
        }
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
        width: 782px;
        height: 428px;
        top: 0px;
        left: 0px;

        img {
            width: 100%;

            filter: 
                hue-rotate(v-bind("toImageColor"))
                brightness(v-bind("monitorResult.brightness"))
                contrast(v-bind("monitorResult.contrast"));
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