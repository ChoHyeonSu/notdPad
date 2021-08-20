import Vue from 'vue'
import App from './App.vue'
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

Vue.config.productionTip = false
Vue.component("HeaderComponent", HeaderComponent);
Vue.component("FooterComponent", FooterComponent);
new Vue({
  render: h => h(App),
}).$mount('#app')
