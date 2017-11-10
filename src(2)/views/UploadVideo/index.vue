<template>
  <div class="upload-page">
    <Response class="scene"><img src="../../static/images/scene@2x.png" /></Response>
    <div class="content">
      <StoryMsg></StoryMsg>
      <div class="btn-group">
        <UploadBtn @uploadOk="uploadOk">上传视频</UploadBtn>
        <UploadBtn capture="camcorder" @uploadOk="uploadOk">录制视频</UploadBtn>
      </div>
    </div>
  </div>
</template>

<script>
import Response from '@/components/Response'
import StoryMsg from './components/StoryMsg'
import UploadBtn from '@/components/UploadBtn'

export default {
  name: 'NotConcern',
  components: {
    Response,
    StoryMsg,
    UploadBtn
  },
  methods: {
    uploadOk (data) {
      console.log(data)
      this.$router.push({
        path: '/recording_video',
        query: {
          video_src: data.data.url
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '../../static/less/base.less';
.upload-page {
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
    .btn-group {
      display: -webkit-box;
      overflow: hidden;
      .btn {
        display: block;
        -webkit-box-flex: 1;
        margin: 30px 10px;
        width: auto;
      }
    }
  }
}
</style>
