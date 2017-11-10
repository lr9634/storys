<template>
  <div class="recording-video-page">
    <VideoComponent :src="src"></VideoComponent>
    <div class="content">
      <template v-if='status == 1'>
        <textarea placeholder="请输入视频名称（在读年级+姓名）" v-model="name"></textarea>
        <button class="btn" @click="sendVideo">提交</button>
      </template>
      <template v-else>
        <h2>{{name}}</h2>
        <img src="../../static/images/ok.png" />
        <p>上传成功！</p>
        <p>活动初赛结果将于11月13日公布，敬请期待！</p>
      </template>
    </div>
  </div>
</template>

<script>
import VideoComponent from '@/components/Video'
export default {
  name: 'RecordingVideo',
  data () {
    return {
      src: this.$route.query.video_src,
      name: '',
      status: 1
    }
  },
  components: {
    VideoComponent
  },
  methods: {
    sendVideo () {
      this.$fetch.POST('http://39.106.70.14:3000/api/addVideo', {
        name: this.name,
        video_src: this.src
      }).then((res) => {
        this.status = 2
      })
    }
  }
}
</script>

<style scoped lang="less">
.recording-video-page {
  min-height: 100%;
  
  .content{
    padding: 20px;
    textarea{
      display: block;
      width: 100%;
      height: 120px;
      border: 0;
      border-bottom: 1px solid #E0E0E0;
      font-size: 14px;
    }
    .btn {
      width: 90%;
      margin: 20px auto;
      display: block;
      margin-top: 160px;
    }
    img{
      width: 100px;
      margin: 10px auto;
      margin-top: 120px;
      display: block;
    }
    p {
      text-align: center;
      font-size: 14px;
      color: #454545;
      letter-spacing: 0;
      line-height: 2;
    }
  }
}
</style>
