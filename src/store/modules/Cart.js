import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);

export default {
  state: {
    goodslists: [],
    checkedGoods: [],
    collectionGoods: []
    // iscollection: true
  },
  mutations: {
    add(state, obj) {
      // 如果添加商品id已经存在商品列表，不添加商品，添加数量
      let index = state.goodslists.findIndex(value => value.id == obj.id);
      if (index == -1) {
        state.goodslists.push(obj);
        state.checkedGoods = state.goodslists.map(value => value.id);
      } else {
        state.goodslists[index].num += 1;
      }
    },
    addcollection(state, obj) {
      //   console.log(state);
      //   console.log(obj);
      //   console.log(state.iscollection);
      //   console.log(obj.id);
      let index = state.collectionGoods.findIndex(value => value.id == obj.id);
      //   console.log(index); //不存在返回 -1，存在返回索引值
      if (index == -1) {
        state.collectionGoods.push(obj);
        // state.iscollection = false;
        Toast.success("成功收藏");
      } else {
        console.log("aaa");
        state.collectionGoods.splice(index, 1);
        // state.iscollection = true;
        Toast.success("取消收藏");
      }
    }
  }
};

//   ============================findIndex() ================================
//   findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。

//   findIndex() 方法为数组中的每个元素都调用一次函数执行：

//   当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
//   如果没有符合条件的元素返回 -1
//   注意: findIndex() 对于空数组，函数是不会执行的。

//   注意: findIndex() 并没有改变数组的原始值。

//   ============================map()  ================================
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

// map() 方法按照原始数组元素顺序依次处理元素。

// 注意： map() 不会对空数组进行检测。

// 注意： map() 不会改变原始数组。
