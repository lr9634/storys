import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import UploadVideo from '@/views/UploadVideo'
import RecordingVideo from '@/views/RecordingVideo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/upload_video',
      component: UploadVideo
    },
    {
      path: '/recording_video',
      component: RecordingVideo
    }
  ]
})
