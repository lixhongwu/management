<style scoped >
    /*底部*/
    .layout-footer{
        width: 100%;
        text-align: center;
        line-height: 54px;
        text-align: center;
        position: absolute;
        bottom: 0;
        background: #ecf1f2;
    }
    /*底部*/


</style>
<template>
    <div class="console-product">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item>首页</Breadcrumb-item>
              <Breadcrumb-item>页面</Breadcrumb-item>
              <Breadcrumb-item>{{this.$route.name.replace('/','')}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">
              <transition mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
          </div>
                <div class="layout-footer">
                    2017  © 库特智能股份有限公司
                </div>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 21,
                show:true
            }
        },
        created: function () {
            $(".console-body").css({top:70})
        },
        methods: {
            toggleClick () {
                this.show = !this.show;
                if (this.spanLeft === 3) {
                    this.spanLeft = 0;
                    this.spanRight = 24;
                    } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            },

        }
    }
</script>
