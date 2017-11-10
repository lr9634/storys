<template>
  <div class="home-page">
    <Response class="scene">
      <img src="../../static/images/scene@2x.png" />
    </Response>
    <div class="content">
      <UserBox></UserBox>
      <StoryMsg></StoryMsg>
      <template>
        <div class="erweima" v-if="follow == 1">
          <img src='//qr.api.cli.im/qr?data=https%253A%252F%252Fcli.im%252F&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=8a615f67ca33d3cb30e220c8e22e6bb3' />
          <p>关注21天表达训练营</p>
          <p>专注提高儿童表达能力</p>
        </div>
        <button class='btn' v-else @click="mAlert">参加故事大赛</button>
      </template>
    </div>
  </div>
</template>

<script>
import Response from '@/components/Response'
import Login from '@/components/Login'
import UserBox from './component/UserBox'
import StoryMsg from './component/StoryMsg'

export default {
  name: 'Home',
  data () {
    return {
      follow: 1,
      isLogin: 1
    }
  },
  created () {
    this.getFollow()
  },
  mounted () {
    // this.$mLayer.msg('沙生沙穗所')
  },
  methods: {
    getRandom (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    getFollow () {
      this.follow = this.getRandom(1, 2)
      this.isLogin = this.getRandom(1, 2)
    },
    mAlert () {
      this.$mLayer.open({
        title: '登录',
        type: 1,
        time: 0,
        content: Login,
        okFn: () => {
          console.log(this)
          this.$router.push('/upload_video')
        }
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
  padding-bottom: 20px;
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
    .erweima{
      text-align: center;
      color: #999999;
      font-size: 14px;
      line-height: 2;
      img {
        display: block;
        width: 40%;
        margin: 0 auto;
      }
    }
  }
}
</style>
