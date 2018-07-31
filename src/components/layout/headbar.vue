<style scoped  lang="less">
  .topback{
    width: 100%;
    background: url("../../images/topbg.png") no-repeat;
    background-size: 100% 86px;
    color: #fff;
    height:70px;
    line-height:70px;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .topback img.logo{
    width: 385px;
    height: 35px;
    margin: 17px 0px 0px 15px;
  }
  .topright{
    float: right;
    width: 100px;
  }
  .ivu-dropdown a{
    color: #fff;
    margin-top: 15px;
  }
  .ivu-dropdown a i{
    margin-top: 20px;
  }
  .topbar-info {
    float: right;
    margin-top: 9px;
    width: 100px;
    line-height: 50px;
    padding: 0 10px;
    height: 50px;
    display: block;
    z-index: 2;
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    .user-name {
      display: block;
      width: 100%;
      color: #fff;
      font-size: 14px;
    }
    .ivu-select-dropdown {
      padding: 0 !important;
      .ivu-dropdown-item {
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .code-row-bg .code-row-bg-right{
    height: 70px;
    line-height: 70px;
  }
  .code-row-bg .code-row-bg-right .head{
    margin-top: 10px;
    width: 50px ;
    border-radius:50%

  }
</style>
<template>
  <Row class="topback" type="flex">
    <i-col :xs="12" :sm="12" :md="12" :lg="12">
      <div class="logo">
      你好</div>
    </i-col>
    <i-col :xs="12" :sm="12" :md="12" :lg="12">
      <Row type="flex" justify="end" class="code-row-bg">
        <i-col style="width: 50px" class="code-row-bg-right"><img class="head" src="../../images/admin.jpg" alt=""></i-col>
        <i-col  style="width: 120px;margin-right: 10px" class="code-row-bg-right">
          <Dropdown trigger="click" class="topbar-info">
            <a href="javascript:void(0)">
              系统管理员
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>4444444</Dropdown-item>
              <Dropdown-item>6666666</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </i-col>
        <i-col style="width: 40px;margin-right: 10px" class="code-row-bg-right">
          <Badge  count="3">
            <Icon type="ios-bell" size="30" ></Icon>
          </Badge>
        </i-col>
        <i-col  style="width: 30px;margin-right: 10px" class="code-row-bg-right" >
          <Icon type="information-circled" size="28"></Icon>
        </i-col>
      </Row>
    </i-col>
  </Row>
</template>
<script>
    import ICol from "../../../node_modules/iview/src/components/grid/col";
    export default {
        components: {ICol}

    }
</script>
