import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import CKEditor from 'ckeditor4-vue'
// import VueFbCustomerChat from 'vue-fb-customer-chat'
// Vue.use(VueFbCustomerChat, {
//   page_id: 109177601492079, // change 'null' to your Facebook Page ID,
//   theme_color: '#333333', // theme color in HEX
//   locale: 'zh_TW' // default 'en_US'
// })

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
Vue.use(CKEditor)

new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
