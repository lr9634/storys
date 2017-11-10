import mLayerComponent from '@/components/mLayer'
export default {
  install (Vue, config) {
    let MLayerCpnt = Vue.extend(mLayerComponent)
    let component = new MLayerCpnt()
    Vue.prototype.$mLayer = {
      getLayerComponent () {
        return component
      },
      close () {
        component.close()
      },
      open (opt) {
        Object.assign(component, opt)
        document.body.appendChild(component.$mount().$el)
      },
      alert (content) {
        Object.assign(component, {
          type: 1,
          title: '信息',
          content: content,
          btns: '确定',
          shadowClose: false
        })
        document.body.appendChild(component.$mount().$el)
      },
      confirm (content, opts = {}) {
        Object.assign(component, {
          type: 1,
          title: '信息',
          content: content,
          btns: ['确定', '取消'],
          shadowClose: false,
          ...opts
        })
        document.body.appendChild(component.$mount().$el)
      },
      msg (content = '', time = 4000) {
        Object.assign(component, {
          type: 2,
          shadowClose: false,
          content: content,
          time: time,
          shadow: false
        })
        document.body.appendChild(component.$mount().$el)
      },

      loading () {
        Object.assign(component, {
          type: 3
        })
        document.body.appendChild(component.$mount().$el)
      }
    }
  }
}
