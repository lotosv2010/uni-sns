import App from './App'

// uview-ui
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 引入公用的组件 uni-nav-bar
import uniNavBar from "@/components/uni-nav-bar/index.vue"
Vue.component("uni-nav-bar", uniNavBar);

// 引入公用组件 登陆模块
import login from "@/components/login/login.vue";
Vue.component("login", login);

// 引入公用组件 分享组件
import gotoShare from "@/components/gotoShare/gotoShare.vue";
Vue.component("goto-share", gotoShare);

// 设置文件访问基础地址
Vue.prototype.BaseFileURL = `http://ts.lagou.uieee.com/api/v2/files/`

// 引入 store 
import store from '@/store/index.js'
Vue.prototype.$store = store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})

// 引入请求封装，将app参数传递到配置中
import interceptor from '@/common/http.interceptor.js'
interceptor(app)

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif