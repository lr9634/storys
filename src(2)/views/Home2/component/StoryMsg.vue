<template>
  <div class="story-msg">
    <h1>活动介绍</h1>
    <ul>
      <li>活动时间：11月6日-11月10日，请在11月10日 24</li>
      <li>故事题材不限，内容应积极向上，富有童趣；</li>
      <li>11月13日，关注公众号内容查询老师点评及分数。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StoryMsg'
}
</script>

<style scoped lang="less">
.story-msg {
  h1 {
    font-size: 14px;
    color: #454545;
    letter-spacing: 0;
    line-height: 14px;
    line-height: 40px;
  }
  li{
    font-size: 14px;
    color: #454545;
    letter-spacing: 0;
    line-height: 14px;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: inline-block;
      background: #DEDEDE;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}
</style>
