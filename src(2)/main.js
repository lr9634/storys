// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mLayer from './plugns/mLayer'

import fetch from './utils/fetch'

Vue.config.productionTip = false

Vue.prototype.$fetch = fetch
Vue.use(mLayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
/**
 * 公共组件
 *  按钮
 *  场景动画
 *  弹框
 *  登录
 *  视屏播放器
 *  上传
 *  状态
 */
