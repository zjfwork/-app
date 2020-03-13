import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Swiper from "../views/Swiper.vue";
import Gg from "../views/Gg.vue";
import Cart from "../views/Cart.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import Detail from "../views/Detail.vue";
import My from "../views/My.vue";
import Confirm from "../views/Confirm.vue";
import Search from "../views/Search.vue";
import Register from "../views/Register.vue";
import Pay from "../views/Pay.vue";
import Order from "../components/My/Order.vue";
import Collection from "../components/My/Collection.vue";
import Address from "../components/My/Address.vue";
import Add from "../components/My/Add.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "引导页",
    component: Swiper
  },
  {
    path: "/gg",
    name: "广告",
    component: Gg
  },
  {
    path: "/home",
    name: "首页",
    component: Home
  },
  {
    path: "/category",
    name: "分类",
    component: Category
  },
  {
    path: "/cart",
    name: "购物车",
    component: Cart
  },
  {
    path: "/login",
    name: "未登录",
    component: Login
  },
  {
    path: "/detail",
    name: "详情页",
    component: Detail
  },
  {
    path: "/my",
    name: "我的",
    component: My
  },
  {
    path: "/confirm",
    name: "确认订单",
    component: Confirm
  },
  {
    path: "/search",
    name: "确认订单",
    component: Search
  },
  {
    path: "/register",
    name: "注册",
    component: Register
  },
  {
    path: "/pay",
    name: "支付",
    component: Pay
  },
  {
    path: "/order",
    name: "我的订单",
    component: Order
  },
  {
    path: "/collection",
    name: "我的收藏",
    component: Collection
  },
  {
    path: "/address",
    name: "收货地址",
    component: Address
  },
  {
    path: "/add",
    name: "添加修改地址",
    component: Add
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});

export default router;
