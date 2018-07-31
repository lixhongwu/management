<style scoped>



</style>
<template>
  <Row type="flex" >
    <Menu  theme="dark" width="100%" @on-select="routeTo">
      <div class="layout-logo-left">
        <h3>后台管理</h3></div>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper" />
          内容管理
        </template>
        <MenuItem name="1-1">文章管理</MenuItem>
        <MenuItem name="1-2">评论管理</MenuItem>
        <MenuItem name="1-3">举报管理</MenuItem>
      </Submenu>
      <Menu-item name="form">
        <Icon type="document" ></Icon>
        <span class="layout-text">表单</span>
      </Menu-item>
      <Menu-item name="table">
        <Icon type="navicon" ></Icon>
        <span class="layout-text">表格</span>
      </Menu-item>
      <Menu-item name="markdown-viewer">
        <Icon type="social-markdown" ></Icon>
        <span class="layout-text">Markdown</span>
      </Menu-item>
      <Menu-item name="markdown-editor-1">
        <Icon type="edit"></Icon>
        <span class="layout-text">Md编辑器(1)</span>
      </Menu-item>
      <Menu-item name="markdown-editor-2">
        <Icon type="edit" ></Icon>
        <span class="layout-text">Md编辑器(2)</span>
      </Menu-item>
      <Menu-item name="rtf">
        <Icon type="document-text" ></Icon>
        <span class="layout-text">富文本框</span>
      </Menu-item>
      <Menu-item name="upload">
        <Icon type="ios-cloud-upload-outline" ></Icon>
        <span class="layout-text">文件上传</span>
      </Menu-item>

    </Menu>
  </Row>
</template>

<script>

    export default {

        data() {
            return {
                page: ['home','business','logistics','collaboration', 'system', 'people','parameter']
            }
        },
        computed: {

        },
        methods: {
            routeTo(e) {
                this.$router.push(e);
            }
        }
    }
</script>
