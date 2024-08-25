import { ref, computed, onUnmounted, nextTick } from 'vue';
import type { Nodes } from '@/types';
import { useStore } from '@/stores/index';
import { OffNodes, TopNodes, MediumNodes, BottomNodes, LowNodes, HighNodes } from '@/models/class/_utilities';
import screenOff from '@/assets/images/screen-off.jpg';
import screenLow from '@/assets/images/screen-low.jpg';
import screenMedium from '@/assets/images/screen-medium.jpg';
import screenHigh from '@/assets/images/screen-high.jpg';

const store = useStore();
const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const BottomNodesEnum = new BottomNodes();
const LowNodesEnum = new LowNodes();
const MediumNodesEnum = new MediumNodes();
const HighNodesEnum = new HighNodes();

const brightness = computed(()=> store.$state.brightnessPlus);
const color = computed(()=> store.$state.color);
const image = computed(()=> store.$state.image);
const input = computed(()=> store.$state.input);
const menu = computed(()=> store.$state.menu);
const management = computed(()=> store.$state.management);

export const monitorScreenResult = computed(() => {
    return {
        brightness: `${brightness.value.nodes[0].result}%`,
        contrast: `${brightness.value.nodes[1].result}%`,
        RGB: toImageColor.value,
        blackStretchImage: getBlackStretchImage.value,
        sharpness: getSharpness.value,
        diagnosticPatterns: {
            start: store.$state.isDiagnosticPatterns,
            patterns:  store.$state.currentDiagnosticPatterns
        },
        imagePosition: {
            x: input.value.result == "VGA" ? `${(((image.value.nodes[2].nodes![0].result as number) / 100) * (20 - (-20)) - 20)}px` : 0,
            y: input.value.result == "VGA" ? `${(((image.value.nodes[2].nodes![1].result as number) / 100) * (20 - (-20)) - 20)}px` : 0
        }
    }
});

const toImageColor = computed(() => {
    const RGB = {
        r: (color.value.result == "CustomRGB" && color.value.nodes[7].nodes) ? color.value.nodes[7].nodes[0].result as number : 255,
        g:(color.value.result == "CustomRGB" && color.value.nodes[7].nodes) ? color.value.nodes[7].nodes[1].result as number : 255,
        b: (color.value.result == "CustomRGB" && color.value.nodes[7].nodes) ? color.value.nodes[7].nodes[2].result as number : 255
    }

    const combinedHue = (RGB.r + RGB.g + RGB.b) / -2.125;

    return `${combinedHue}deg`;
});

const getBlackStretchImage = computed(() => {
    if(brightness.value.nodes[3].result == LowNodesEnum.result) {
        return screenLow
    } else if(brightness.value.nodes[3].result == MediumNodesEnum.result) {
        return screenMedium
    } else if(brightness.value.nodes[3].result == HighNodesEnum.result) {
        return screenHigh
    } else {
        return screenOff
    }
});

const getSharpness = computed(() => {
    if(image.value.nodes[4].result == image.value.nodes[4].nodes![0].result) {
        return "0.7px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![1].result) {
        return "0.6px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![2].result) {
        return "0.5px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![3].result) {
        return "0.4px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![4].result) {
        return "0.3px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![5].result) {
        return "0.2px";
    } else if(image.value.nodes[4].result == image.value.nodes[4].nodes![6].result) {
        return "0px";
    } else {
        return "0.4px"
    }
});

export const menuStateResult = computed(() => {
    return {
        menuPosition: {
            x: `${(menu.value.nodes[1].nodes![0].result as number / 100) * (240 - 0) + 0}px`,
            y: `${(menu.value.nodes[1].nodes![1].result as number / 100) * (54 - 0) + 0}px`
        },
        menuTransparency: ((10 - (menu.value.nodes[2].result as number)) / 10) + 0.2,
        menuTimeout: menu.value.nodes[3].result,
        OSDMessage: {
            powerOnLogo: (menu.value.nodes[4].result as string).includes(menu.value.nodes[4].nodes![0].result as string),
            noInputSignalWarning: (menu.value.nodes[4].result as string).includes(menu.value.nodes[4].nodes![1].result as string),
            confirmMessage: (menu.value.nodes[4].result as string).includes(menu.value.nodes[4].nodes![2].result as string),
        },
        monitorStatus: {
            show: menu.value.nodes[4].nodes![3].result != OffNodesEnum.result ? true : false,
            nodes: menu.value.nodes[4].nodes![3]
        },
        input: store.$state.input,
        autoSwitchInput: {
            name: store.$state.input.nodes[2],
            state: store.$state.input.nodes[2].nodes?.find((node: Nodes) => node.result == store.$state.input.nodes[2].result)
        },
        color: {
            name: store.$state.information.nodes[2],
            state: store.$state.color.nodes.find(n => n.result == store.$state.information.nodes[2].result)
        },
        information: {
            currentMode: store.$state.information.nodes[0],
            optimalMode: store.$state.information.nodes[1]
        }
    }
});

export const monitorStatusResult = computed(() => {
    return {
        show: menu.value.nodes[4].nodes![3].result != OffNodesEnum.result ? true : false,
        nodes: menu.value.nodes[4].nodes![3]
    }
});

// 函數表達式
const removeAndLowercase = (str: string): string => {
    // 移除指定的子字符串
    const removedString = str.replace("Full Screen", '').trim();
    // 轉小寫
    return removedString.toLowerCase();
};

const intervalId = ref<number | null>(null);
const patternsIndex = ref(0);
const patterns = ref([
    removeAndLowercase(management.value.nodes[2].nodes![1].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![2].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![3].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![4].result as string),
    removeAndLowercase(management.value.nodes[2].nodes![5].result as string)
]);

// 診斷模式需要透過監聽 store
store.$subscribe((mutation, state) => {
    if(state.isDiagnosticPatterns) {
        const resultIndex = management.value.nodes[2].nodes!.findIndex((node: Nodes) => node.result === management.value.nodes[2].result);
        if(resultIndex == 0 && intervalId.value == null) {
            if(intervalId.value) {
                return
            }
            patternsIndex.value = resultIndex;
            store.currentDiagnosticPatterns = patterns.value[patternsIndex.value];
            intervalId.value = setInterval(() => {
                patternsIndex.value = (patternsIndex.value + 1) % patterns.value.length;
                store.currentDiagnosticPatterns = patterns.value[patternsIndex.value];
            }, 3000);

        } else if(resultIndex >= 1) {
            if (intervalId.value !== null) {
                clearInterval(intervalId.value);
                intervalId.value = null;
            };
            patternsIndex.value = resultIndex - 1;
            store.currentDiagnosticPatterns = patterns.value[patternsIndex.value];
        }
    } else {
        if (intervalId.value !== null) {
            clearInterval(intervalId.value);
            intervalId.value = null;
        }
    }
});

