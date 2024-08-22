<template v-if="modelValue">
    <Transition name="initial">
        <div class="screen-initial" v-show="screenInitial && menuStateResult.OSDMessage.powerOnLogo">
            <img src="@/assets/images/screen-initial.png" alt="">
        </div>
    </Transition>

    <monitorStatus 
        v-model:position="(menuStateResult.monitorStatus.position as string)"
        :showMonitorStatus="showMonitorStatus">
    </monitorStatus>

    <!-- <monitorStatus v-if="showMonitorStatus" v-model:show="menuStateResult.monitorStatus.show"
        v-model:position="(menuStateResult.monitorStatus.position as string)"
        :showMonitorStatus="showMonitorStatus">
    </monitorStatus> -->

    <div class="screen" v-show="showScreen">
        <img src="@/assets/images/screen.png" alt="">
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, inject, onMounted, watch } from 'vue';
import { useStore } from '@/stores/index';
import monitorStatus from '@/views/home/_monitor-status/monitor-status.vue';
import { OffNodes, TopNodes, MediumNodes, BottomNodes } from '@/models/class/_utilities';

const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const MediumNodesEnum = new MediumNodes();
const BottomNodesEnum = new BottomNodes();
const store = useStore();
let updateFinish = inject('updateFinish') as ((value: boolean) => void);;

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    showMonitorStatus: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:showMonitorStatus'])

const screenInitial = ref(false);
const showScreen = ref(false);

const monitorResult = computed(() => {
    return {
        brightness: `${store.$state.brightness.nodes[0].result}%`,
        contrast: `${store.$state.brightness.nodes[1].result}%`,
    }
});

const menuStateResult = computed(() => {
    return {
        OSDMessage: {
            powerOnLogo: (store.$state.menu.nodes[4].result as string).includes(store.$state.menu.nodes[4].nodes![0].result as string),
            noInputSignalWarning: (store.$state.menu.nodes[4].result as string).includes(store.$state.menu.nodes[4].nodes![1].result as string),
            confirmMessage: (store.$state.menu.nodes[4].result as string).includes(store.$state.menu.nodes[4].nodes![2].result as string),
        },
        monitorStatus: {
            show: store.$state.menu.nodes[4].nodes![3].result != OffNodesEnum.result ? true : false,
            position: store.$state.menu.nodes[4].nodes![3].result
        },
    }
});

const toImageColor = computed(() => {
    const RGB = {
        r: (store.$state.color.result == "CustomRGB" && store.$state.color.nodes[7].nodes) ? store.$state.color.nodes[7].nodes[0].result as number : 255,
        g:(store.$state.color.result == "CustomRGB" && store.$state.color.nodes[7].nodes) ? store.$state.color.nodes[7].nodes[1].result as number : 255,
        b: (store.$state.color.result == "CustomRGB" && store.$state.color.nodes[7].nodes) ? store.$state.color.nodes[7].nodes[2].result as number : 255
    }

    const combinedHue = (RGB.r + RGB.g + RGB.b) / -2.125;

    return `${combinedHue}deg`;
});

function handleScreen() {
    if(props.modelValue) {
        setTimeout(() => {
            emit('update:showMonitorStatus', true);
            showScreen.value = true;
            handleMonitorStatus();
        }, 2000);
    }
};

function handleMonitorStatus() {
    if(props.modelValue) {
        setTimeout(() => {
            emit('update:showMonitorStatus', false);
            updateFinish(true);
        }, 5000);
    }
};

onMounted(() => {
    if(props.modelValue) {

        if(menuStateResult.value.OSDMessage.powerOnLogo) {
            screenInitial.value = true;
    
            setTimeout(() => {
                screenInitial.value = false;
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