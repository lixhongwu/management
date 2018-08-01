<template>
    <div class= "wrap">
        <div :content= 'coms'>

        </div>
    </div>
</template>

<script>
export default {
    props: {
      coms: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    create () {},
    methods: {

    }
}
</script>

<style scoped lang="less">

</style>