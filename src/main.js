import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import VueAnime from "vue-animejs";
import router from './router'
import store from './store'

Vue.use(VueAnime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
