import { computed } from 'vue';
import { useStore } from '@/stores/index';
import { OffNodes, TopNodes, MediumNodes, BottomNodes } from '@/models/class/_utilities';

const store = useStore();
const OffNodesEnum = new OffNodes();
const TopNodesEnum = new TopNodes();
const MediumNodesEnum = new MediumNodes();
const BottomNodesEnum = new BottomNodes();

export const monitorResult = computed(() => {
    return {
        brightness: `${store.$state.brightness.nodes[0].result}%`,
        contrast: `${store.$state.brightness.nodes[1].result}%`,
    }
});

export const toImageColor = computed(() => {
    const RGB = {
        r: (store.$state.color.result == "CustomRGB" && store.$state.color.nodes[7].nodes) ? store.$state.color.nodes[7].nodes[0].result as number : 255,
        g:(store.$state.color.result == "CustomRGB" && store.$state.color.nodes[7].nodes) ? store.$state.color.nodes[7].nodes[1].result as number : 255,
        b: (store.$state.color.result == "CustomRGB" && store.$state.color.nodes[7].nodes) ? store.$state.color.nodes[7].nodes[2].result as number : 255
    }

    const combinedHue = (RGB.r + RGB.g + RGB.b) / -2.125;

    return `${combinedHue}deg`;
});

export const menuStateResult = computed(() => {
    return {
        menuPosition: {
            x: `${(store.$state.menu.nodes[1].nodes![0].result as number / 100) * (240 - 0) + 0}px`,
            y: `${(store.$state.menu.nodes[1].nodes![1].result as number / 100) * (54 - 0) + 0}px`
        },
        menuTransparency: ((10 - (store.$state.menu.nodes[2].result as number)) / 10) + 0.2,
        menuTimeout: store.$state.menu.nodes[3].result,
        OSDMessage: {
            powerOnLogo: (store.$state.menu.nodes[4].result as string).includes(store.$state.menu.nodes[4].nodes![0].result as string),
            noInputSignalWarning: (store.$state.menu.nodes[4].result as string).includes(store.$state.menu.nodes[4].nodes![1].result as string),
            confirmMessage: (store.$state.menu.nodes[4].result as string).includes(store.$state.menu.nodes[4].nodes![2].result as string),
        },
        monitorStatus: {
            show: store.$state.menu.nodes[4].nodes![3].result != OffNodesEnum.result ? true : false,
            nodes: store.$state.menu.nodes[4].nodes![3]
        },
        input: store.$state.input,
        autoSwitchInput: {
            name: store.$state.input.nodes[2],
            state: store.$state.input.nodes[2].nodes?.find(n => n.result == store.$state.input.nodes[2].result)
        },
        color: {
            name: store.$state.information.nodes[2],
            state: store.$state.color.nodes?.find(n => n.result == store.$state.information.nodes[2].result)
        },
        information: {
            currentMode: store.$state.information.nodes[0],
            optimalMode: store.$state.information.nodes[1]
        }
    }
});

export const monitorStatusResult = computed(() => {
    return {
        show: store.$state.menu.nodes[4].nodes![3].result != OffNodesEnum.result ? true : false,
        nodes: store.$state.menu.nodes[4].nodes![3]
    }
});

