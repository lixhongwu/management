<style scoped>
  @import 'styles/common.css';
  .console-body {
    position: absolute;
    width: 100%;
    top:86px;
    bottom: 0px;
    background-color: #fff;
    z-index: 100;
  }
</style>
<template>
  <div class="console-body">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {

    },
    beforeDestroy () {

    },
    components: {

    },
    methods: {

    }
  }
</script>
