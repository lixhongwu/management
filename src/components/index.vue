<style scoped>
    .console-sidebar-full{
        height: 100%
    }
</style>
<!-- index.vue -->
<template>
    <div class="console-sidebar-full">
        <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
        <head-bar></head-bar>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    // 导入要用到的子组件
    import HeadBar from '../components/layout/headbar'
    import BottomBar from '../components/layout/bottombar'
    export default {
        data () {
            return {

            }
        },
        created: function () {
            $(".console-body").css({top:70})
        },
        // 在components字段中，包含导入的子组件
        components: {
            HeadBar,
            BottomBar
        }
    }
</script>
<style scoped>

</style>
