import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//ui框架 --- vant
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

//数据请求
import axios from "axios";
// 统一配置全局路径
// axios.defaults.baseURL = "http://192.168.54.65:3000";
axios.defaults.baseURL = "http://106.12.175.46:8080";
Vue.prototype.$axios = axios; //将axios改写为Vue的原型属性
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);

import "./assets/dist/css/bootstrap.css";

import "animate.css"; //动画插件

// $cnpm i swiper@4.5.0 -S
import "swiper/dist/css/swiper.css";

import "./assets/font/iconfont.css";
// import "amfe-flexible";
import "jquery/dist/jquery.js";
// import { Button } from "vant";
// Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
