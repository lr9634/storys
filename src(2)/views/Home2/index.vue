<template>
  <div class="home-page">
    <Response class="scene">
      <img src="../../static/images/scene@2x.png" />
    </Response>
    <div class="content">
      <UserBox></UserBox>
      <StoryMsg></StoryMsg>
      <template>
        <div class="erweima" v-if="!follow">
          <p>关注21天表达训练营</p>
          <p>专注提高儿童表达能力</p>
        </div>
        <button class='btn' v-else>参加故事大赛</button>
      </template>
      <input type="file" @change="changeFile" ref="file" />
    </div>
  </div>
</template>

<script>
import Response from '@/components/Response'
import UserBox from './component/UserBox'
import StoryMsg from './component/StoryMsg'

export default {
  name: 'Home',
  data () {
    return {
      follow: false
    }
  },
  created () {
    this.getFollow()
  },
  methods: {
    getFollow () {
      this.follow = true
    },
    changeFile () {
      let file = this.$refs.file.files[0]
      var formData = new FormData()
      formData.append('test-upload', file)
      console.log(formData)
      this.$fetch.POST('http://39.106.70.14:3000/api/upload', {
        file: formData
      }).then((res) => {
        console.log(res)
      })
    }
  },
  components: {
    Response,
    UserBox,
    StoryMsg
  }
}
</script>

<style scoped lang="less">
@import '../../static/less/base.less';

.home-page {
  min-height: 100%;
  .gradient(top);
  .scene{
    padding:0 15px;
    box-sizing: border-box;
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
    }
  }
  .content{
    margin: 0 15px;
    padding: 0 0.12rem;
    background: #fff;
    min-height:200px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}
</style>
