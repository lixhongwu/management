<style scoped>
    .home{
        width: 100%;
        height: 100%;
        background: url("../../images/weclome.jpg") no-repeat;
        background-size: 100% 100%;
    }
</style>

<template>

    <div class="home">
        <!--<img src="../images/weclome.jpg" style="width: 100%;"/>-->
    </div>

</template>

<script>
    export default {
        created: function () {
            $(".console-body").css({top:70})
        }

    }

</script>
