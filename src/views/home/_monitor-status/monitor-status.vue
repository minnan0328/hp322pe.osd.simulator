<template>
    <div :class="['monitor-status', position]" v-show="show">
        <div class="monitor-status-title">Monitor Status</div>
        <div class="monitor-status-info input">
            <p class="action">HDNL:</p>
            <p class="action">Active</p>
            <p>VGA:</p>
            <p>Inactive</p>
        </div>

        <div class="monitor-status-info setting">
            <p>Auto-Switch Input:</p>
            <p>On</p>
            <p>Color-Setting:</p>
            <p>Neutral</p>
        </div>

        <div class="monitor-status-info mode">
            <p>Current Mode:</p>
            <p>1920x1080 60Hz</p>
            <p>Optimal Mode:</p>
            <param>1920x1080 100Hz</param>
        </div>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps({
    show: {
        type: Boolean,
        default: true
    },
    position: {
        type: String,
        default: "Top"
        
    }
});

</script>
<style lang="scss" scoped>
    .monitor-status {
        position: absolute;
        top: 32px;
        left: calc((100% - 268px) / 2);
        width: 240px;
        color: #FFFFFF;
        background-color: #161616;
        border: 2px solid  #AAAAAA;
        padding: 12px 12px 20px;
        font-size: 10px;
        font-weight: bold;
        z-index: 1;
        width: 240px;
        height: 134px;

        &.Top {
            top: 32px;
            left: 281px; 
        }
        &.Medium {
            top: calc((100% - 170px) / 2);
        }
        &.Bottom {
            top: unset;
            bottom: 32px;
        }

        .monitor-status-title {
            padding-bottom: 8px;
            margin-bottom: 12px;
            border-bottom: 1px solid #AAAAAA;;
        }

        .monitor-status-info {
            display: grid;
            grid-template-columns: max-content max-content;
            gap: 0 16px;

            &.input {
                margin-bottom: 14px;

                .action {
                    color: #6895D1;
                }
            }

            &.setting {
                margin-bottom: 24px;
            }
        }
    }
</style>