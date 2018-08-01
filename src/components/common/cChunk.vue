<template>
    <div class= "wrap">
        <c-button :coms= "coms"></c-button>
        <Table class='table'
         border
         >
        </Table>
        <Page class='pager'
              show-total
              inline>
              <Button type="primary">刷新</Button>
        </Page>      
    </div>
</template>

<script>
import CButton from './cButton'
export default {
    props: {
        coms:{
            type: Array,
            default: ()=> {
                return [
                    {
                        render: (h,params) =>{
                            return h('Button',{
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                }
                            }, 'xxxdd')
                        }
                    }
                ]
            }
        }
    },
    data () {
        return {}
    },
    created () {},
    mounted () {},
    methods: {
        subRowClick () {
            this.$emit('subRowClick',this)
        }
    },
    components: {
        CButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>