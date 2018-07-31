<style scoped>
    /*****样式****/
    .wrapper{
        position: relative;
        padding-top: 150px;
        padding-bottom: 200px;
        text-align: center;
        background: url(../images/back.jpg) no-repeat;
        background-size:100%;
    }
    .wrapper .login h4{
        color: #333;
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        font-weight: normal;
    }
    .wrapper .login form{
        width: 376px;
        background: #f9fafc;
        padding:30px 0px;
        margin: 44px auto 0;
        border-radius: 10px;
    }
    input{
        border: 0px;
        background: #f9fafc;
        text-align: center;
        color: #555 !important;
        list-style-type: none;
        outline: none;
        box-shadow:none;
        width: 200px;
        height: 32px;
        line-height: 32px;
    }
    .wrapper .login .tip{
        color: #d60000;
        font-size: 12px;
        margin-top: 10px;
    }
    .wrapper .login .tip span{
        margin-left: 5px;
    }
    #use,#paw{
        width: 100%;
        display: inline-block;
        position: absolute;
        z-index: 99;
        left: 0;
        color: #36b3b3;
        font-size: 16px;
        bottom: 0px;
        line-height: 32px;
        height: 32px;
    }
    .focus{
        font-size: 12px !important;
        bottom: 25px !important;
        color: #36b3b3 !important;
        height:16px !important;
        line-height: 16px !important;
        transition: all 0.2s ease 0s;
    }
    .wrapper .login form button{
        width: 248px;
        border-radius: 0;
        background-color: #36b3b3;
        padding: 0;
        margin-top: 12px;
        height: 44px;
        line-height: 44px;
        border-color:#36b3b3;
        color: #fff;
        /******按钮渐变效果*****/
        /* border: 1px #1c8bf5 solid;
         FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#b8c4cb,endColorStr=red); /*IE 6 7 8*/
        /*background: -ms-linear-gradient(top, #47aeff,  #3093ff,#2a88ff);        /* IE 10 */
        /*background:-moz-linear-gradient(top,#47aeff,  #3093ff,#2a88ff);/*火狐*/
        /*background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#47aeff), to(#2a88ff));/*谷歌*/
        /*background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#47aeff), to(#2a88ff));      /* Safari 4-5, Chrome 1-9*/
        /*background: -webkit-linear-gradient(top, #47aeff,  #3093ff,#2a88ff);   /*Safari5.1 Chrome 10+*/
        /*background: -o-linear-gradient(top, #47aeff,  #3093ff,#2a88ff);  /*Opera 11.10+*/
    }
    .wrapper .login form  button  span{
        padding: 2px;
        width: 172px;
        display: block;
        line-height: 29px;
        /*    border: 1px #98d3ff solid;
            border-radius: 4px;
            box-shadow: 0px 2px 0px 0px #A1A1AF;*/
        font-size: 14px;
    }
    .user,.password{
        position: relative;
        border-bottom: 1px solid #36b3b3;
        height: 56px;
        line-height: 78px;
        width: 218px;
        display: inline-block;
    }
    .user i,.password i{
        color: #36b3b3;
        position: absolute;
        left: 0;
        top:30px;
    }
</style>

<template>
    <div class="wrapper" v-bind:style="{height: heightval + 'px' }">>
        <div class="login">
        <img  src="../images/logo1.png"/>
        <form>
            <h4>欢迎登录</h4>
            <div class="user">
                <lable  id="use" v-bind:class="{ focus: userfocus }" @click="toggleUserLable">用户名</lable>
                <Icon type="person" size="18"></Icon>
                <input id="username" type="text" v-model="formInline.user" v-focus value @click="toggleUser" v-on:blur="blurInput"/>
            </div>
            <div class="password">
                <lable id="paw" v-bind:class="{ focus: pawfocus }" @click="togglePawLable">密码</lable>
                <Icon type="locked" size="18"></Icon>
                <input id="password" type="password" v-model="formInline.password" value @click="togglePaw" v-on:blur="blurInput"/>
            </div>
            <div class="tip"><Icon v-show="isshow" type="information-circled"></Icon><span>{{error}}</span></div>
            <Button  @click="handleSubmit">登录</Button>
        </form>
    </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                formInline:{user:"",password:""},
                error:"",
                isshow:false,
                userfocus:true,
                pawfocus:false,
                heightval:""

            }
        },
        created: function () {
            $(".console-body").css({top:0})
            this.heightval=window.innerHeight;
            if(this.formInline.password != ""){
                this.pawfocus=true;
            }
        },
        methods: {
            handleSubmit(){
                if(this.formInline.user == ""){
                    this.$Message.error('表单验证失败!');
                    this.error="请填写用户名和密码 ";
                    this.isshow=true;
                }else if(this.formInline.password == ""){
                    this.$Message.error('表单验证失败!');
                    this.error="请填写密码 ";
                    this.isshow=true;
                }else if(this.formInline.password.length < 6){
                    this.$Message.error('表单验证失败!');
                    this.error="密码长度不能小于6";
                    this.isshow=true;
                }else{
                    this.isshow=false;
                    this.$Message.success('提交成功!');
                    this.$router.push('/index');
                }
            },
            toggleUserLable:function (el) {
                if(this.formInline.user == "" && this.formInline.password == "" &&  this.pawfocus == true){
                    this.userfocus = !this.userfocus;
                    this.pawfocus = !this.pawfocus;
                }else if(this.formInline.user == ""){
                    this.userfocus = !this.userfocus;
                }
                if(this.userfocus == true){
                    $("#username").focus();
                }
            },
            togglePawLable:function () {
                if(this.formInline.user == "" && this.formInline.password == ""  &&  this.userfocus == true){
                    this.userfocus = !this.userfocus;
                    this.pawfocus = !this.pawfocus;
                }else if(this.formInline.password == ""){
                    this.pawfocus = !this.pawfocus;
                }
                if(this.pawfocus == true){
                    $("#password").focus();
                }
            },
            toggleUser:function () {
                if(this.formInline.password == ""){
                    this.pawfocus = false;
                    this.userfocus = true;
                }else{
                    this.userfocus = true;
                }
            },
            togglePaw:function () {
                if(this.formInline.user == ""){
                    this.userfocus = false;
                    this.pawfocus = true;
                }else{
                    this.pawfocus = true;
                }
            },
            blurInput:function () {
                if(this.formInline.user == "" && this.formInline.password == ""){
                    this.userfocus = false;
                    this.pawfocus = false;
                }else if(this.formInline.user == "" ){
                    this.userfocus = false;
                }else if(this.formInline.password == ""){
                    this.pawfocus = false;
                }
            }
        }
    }
</script>
