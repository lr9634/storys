<template>
  <div class='video-box'>
    <video :src="'http://39.106.70.14:3000/'+src" ref="video" playsinline="isiPhoneShowPlaysinline" webkit-playsinline="isiPhoneShowPlaysinline" x-webkit-airplay="" preload="none" data-role="txp_video_tag"></video>
    <a href="javascript:;" class="play-btn" @click="play" v-show="playBtn"></a>
    <div class="controls">
      <a href="javascript:;"></a>
      <div>
        <span>0:00</span>
        <div><b></b></div>
        <span>5:00</span>
      </div>
      <a href="javascript:;"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Video',
  props: {
    src: {
      default: ''
    }
  },
  data () {
    return {
      playBtn: true
    }
  },
  methods: {
    play () {
      this.$refs.video.play()
      this.playBtn = false
    }
  }
}
</script>
<style scoped lang='less'>
  .video-box{
    width: 100%;
    background: #000;
    position: relative;
    video {
      width: 100%;
      display: block;
      max-height: 240px;
    }
    .play-btn{
      width: 23px;
      height: 23px;
      background-image: url(../static/images/play.png);
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -12px;
      margin-left: -12px;
    }
    .controls {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30px;
      background: rgba(000, 000, 000, 0.5);
      display: -webkit-box;
      line-height: 30px;
      a {
        display: block;
        width: 23px;
        height: 23px;
        margin: 0 10px;
      }
      & > div{
        display: block;
        -webkit-box-flex: 1;
        display: -webkit-box;
        span{
          display: block;
          color: #fff;
        }
        div {
          -webkit-box-flex: 1;
        }
      }
    }
  }
</style>
