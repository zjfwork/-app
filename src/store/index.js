import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import { Toast } from "vant";
// Vue.use(Toast);

import Home from "./modules/Home.js";
import Cart from "./modules/Cart.js";

export default new Vuex.Store({
  state: {
    oldurl: "/home", //返回路由上一级
    goods: [],
    totalPrice: 0,
    confirmgoods: [],
    orderGoods: [],

    list: [
      {
        id: "1",
        name: "张三",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000",
        address: "浙江省杭州市拱墅区莫干山路 50 号"
      }
    ],
    ismodify: true,
    list2: [],
    modifyid: 0,
    chosenAddressId: 0
    // list3: []
  },
  mutations: {
    addconfirm(state, obj) {
      console.log(obj);
      state.confirmgoods.push(obj);
      state.totalPrice = obj.price;
    },

    //添加 ，修改地址
    edit(state, obj) {
      console.log(obj);
      //   if (obj.name == "" || obj.tel == "" || obj.address == "") {
      if (
        obj.name == undefined ||
        obj.tel == undefined ||
        obj.address == undefined
      ) {
        return;
        // Toast("kkkk");
      }
      state.list.push(obj);
    },
    modify1(state, index) {
      state.list2 = state.list[index];
      state.modifyid = index;
      console.log(state.list2, state.modifyid);
    },
    //选择配送地址
    getid(state, id) {
      console.log("aa", id);
      state.chosenAddressId = id;
      //   console.log(state.chosenAddressId);
    },
    setid(state, length) {
      console.log("aa", state, length);
      if (length > 0) {
        state.chosenAddressId = length;
      }
    }
  },
  actions: {},
  modules: {
    Home,
    Cart
  }
});
