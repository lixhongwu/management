<style scoped>
  /*@media only screen and (min-width: 1600px) {*/
    /*.menuleft{width:4.16666667%;}*/
    /*.layout-menu-right{width: 95.83333333%}*/
  /*}*/
  .layout-menu-left{
    background: #2a3c50;
  }
  .layout-menu-right{
    height: 100%;
    background: #ecf1f2;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
  }
</style>
<!-- index.vue -->
<template>
  <div style="height: 100%">
    <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
    <Row type="flex"  style="height: 100%">
      <i-col :xs="5" :sm="4" :md="3" :lg="2"  class="layout-menu-left menuleft">
        <left-bar></left-bar>
      </i-col>
      <i-col :xs="19" :sm="20" :md="21" :lg="22"  class="layout-menu-right">
        <router-view></router-view>
      </i-col>
    </Row>
  </div>
</template>
<script>
    // 导入要用到的子组件
    import LeftBar from './home/leftbar'
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    export default {
        data () {
            return {

            }
        },
        // 在components字段中，包含导入的子组件
        components: {
            ICol, LeftBar
        },
        methods: {

        }
    }
</script>
