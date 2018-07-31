<style scoped>

.about {
  margin: 10px 20px 0 30px;
  color: black;
}

</style>

<template>

<div class="about">
    <vue-markdown># 目前实现的功能及用到的组件</vue-markdown>
    <vue-markdown>-------------------</vue-markdown>
    <vue-markdown>### 页面： [iView2.0](https://github.com/iview/iview)</vue-markdown>
    <vue-markdown>### Markdown显示： [VueMarkdown](https://github.com/miaolz123/vue-markdown)</vue-markdown>
    <vue-markdown>### Markdown编辑器： [MarkdownEditor](https://github.com/alecgorge/MarkdownEditor)&amp[Vue-SimpleMDE](https://github.com/F-loat/vue-simplemde)</vue-markdown>
    <vue-markdown>### 富文本框： [quillEditor](https://github.com/surmon-china/vue-quill-editor)</vue-markdown>
    <vue-markdown>### 图表： [百度Echarts](http://echarts.baidu.com)&amp[Vue-Echarts](https://github.com/xlsdg/vue-echarts-v3)</vue-markdown>
    <vue-markdown>### 文件上传： [使用iView自带的文件上传组件](https://www.iviewui.com/components/upload)</vue-markdown>
    <vue-markdown>### 其他：less jquery</vue-markdown>

</div>

</template>

<script>

import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown
    }
}

</script>
