import Vue from 'vue'
import App from "./step01/App"
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
