<template v-if="modelValue">
    <Transition name="initial">
        <div class="screen-initial" v-show="screenInitial">
            <img src="@/assets/images/screen-initial.png" alt="">
        </div>
    </Transition>

    <monitorStatus v-model="showMonitorStatus"></monitorStatus>

    <div class="screen" v-show="showScreen">
        <!-- <div class="image">
        </div> -->
        <img src="@/assets/images/screen.png" alt="">
    </div>
</template>
<script lang="ts" setup>
    import { ref, computed, reactive, onMounted } from 'vue';
    import { useStore } from '@/stores/index';
    import monitorStatus from '@/views/home/_monitor-status/monitor-status.vue';

    const store = useStore();

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        }
    });

    const screenInitial = ref(false);
    const showMonitorStatus = ref(false);
    const showScreen = ref(false);

    const monitorResult = computed(() => {
        return {
            brightness: `${store.$state.brightness.nodes[0].result}%`,
            contrast: `${store.$state.brightness.nodes[1].result}%`,
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
        width: 782px;
        height: 428px;
        top: 9px;
        left: 9px;

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