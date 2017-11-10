<template>
  <button class="btn file-btn">
    <input type="file" ref="file" @change="changeFile" v-if="capture == ''" />
    <input type="file" accept="video/*" ref="file" @change="changeFile" v-else :capture="capture" />
    <slot>上传文件</slot>
  </button>
</template>
<script>
export default {
  props: {
    capture: {
      default: ''
    }
  },
  methods: {
    changeFile () {
      let file = this.$refs.file.files[0]
      let newFile = new FormData()
      newFile.append('test-upload', file)
      this.$mLayer.loading()
      this.$fetch.POST('http://39.106.70.14:3000/api/upload', {
        file: newFile
      }).then((data) => {
        this.$emit('uploadOk', data)
        this.$mLayer.close()
      })
    }
  },
  name: 'UploadBtn'
}
</script>
<style lang="less">
.file-btn{
  input{
    opacity: 0;
    position: absolute;
  }
}
</style>

