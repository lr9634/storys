<template>
  <div class="user-box">
    <dl>
      <dt><img src="../../../static/images/user.jpg" /></dt>
      <dd>周嘉骏</br><label>2岁</label></dd>
    </dl>
    <div>
      <b>1111人</b>
      <b>已参加</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserBox'
}
</script>

<style scoped lang="less">
.user-box {
  width: 100%;
  display:-webkit-box;
  -webkit-box-pack: justify;
  border-bottom:1px solid #E0E0E0;
  padding:0.25rem 0;
  dl {
    display:-webkit-box;
    dt{
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
      overflow: hidden;
      margin-right: 5px;
      img{
        display: block;
        width: 100%;
      }
    }
    dd{
      color: #454545;
      font-size: 0.2rem;
      label {
        color: #fff;
        background: #FD911F;
        padding:0 7px;
        font-size: 0.12rem;
        border-radius: 50px;
        display:inline-block;
        text-align:center;
      }
    }
  }
  div{
    b{
      color: #333333;
      font-size: 0.14rem;
      display:block;
    }
  }
}
</style>
