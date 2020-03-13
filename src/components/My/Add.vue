<template>
  <div class="add">
    <!-- 头部 -->
    <div class="my-a">
        <van-row>
            <van-col span="4">
                <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
            </van-col>
            <van-col span="16">添加修改信息</van-col>
            <van-col span="4">
                <span class="right"><van-icon name="ellipsis" @click="showPopup"/></span>
            </van-col>
        </van-row>
        <!-- 二级菜单 -->
        <div v-show="show" class="a-show">
            <ul>
                <li><span><van-icon name="wap-home-o"/></span><router-link to="/home" >首页</router-link></li>
                <li><span><van-icon name="search"/></span><router-link to="/category">分类搜索</router-link></li>
                <li><span><van-icon name="shopping-cart-o" /></span><router-link to="/cart">购物车</router-link></li>
                <li><span><van-icon name="user-o" /></span><router-link to="/my">我的</router-link></li>
                <li><span class="iconfont icon-zuji"></span><a>浏览记录</a></li>
            </ul>
        </div>
    </div>

    <div class="form container">
      <div class="form-group">
        <div class="col-sm-10">
          姓名:
          <input type="text" id="inputEmail3" placeholder="收货人姓名" v-model="name" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10">
          电话:
          <input type="text" id="inputEmail3" placeholder="收货人手机号"  v-model="tel" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10">
          详细地址:
          <input type="text" id="inputEmail3" placeholder="街道门牌、楼层房间号等信息"  v-model="address" />
        </div>
      </div>
      <van-button type="primary" size="large" @click="Onsubmit" v-show="ismodify">确认</van-button>
      <van-button type="primary" size="large" @click="modify2" v-show="!ismodify">修改</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        id:'',
        name:'',
        tel:'',
        address:'',
        ismodify:this.$store.state.ismodify, 
        modifyid:this.$store.state.modifyid,
        show:""
    };
  },
  methods:{
    pathgo(){
        this.$router.go(-1);
      this.$store.state.list2 = [];
    },
    showPopup(){
        this.show = !this.show;
    },
    Onsubmit(){
    //   var obj = {
    //     id:this.id,
    //     name:this.name,
    //     tel:this.tel,
    //     address:this.address,
    //   }
        this.id = this.$store.state.list.length + 1;
        this.$store.commit('edit',{
            id:this.id,
            name:this.name,
            tel:this.tel,
            address:this.address,
        });
            
        this.$router.go(-1);
    },
    modify2(){
        console.log("aaa");
         this.$store.state.list2.name = this.name;
         this.$store.state.list2.tel = this.tel;
         this.$store.state.list2.address = this.address;
        this.$router.go(-1);
    }
  },
  created(){
      this.name = this.$store.state.list2.name;
      this.tel = this.$store.state.list2.tel;
      this.address = this.$store.state.list2.address;
  }
//   mounted(){
//     if (this.$store.state.updzlist.length > 0) {
//       this.id = this.$store.state.updzlist[0].id;
//       this.name = this.$store.state.updzlist[0].name;
//       this.tel = this.$store.state.updzlist[0].tel;
//       this.dz = this.$store.state.updzlist[0].address;
//     }
//     // console.log(this.$store.state.updzlist);
//   }
};
</script>

<style lang="scss">
.add {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 54px 0;
    // 头部
    .my-a{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        color: black;
        background: white;
        line-height: 54px;
        font-size: 18px;
        .van-col{
            text-align: center;
        }
        .left {
            display: block;
            line-height: 54px;
            font-size: 22px;
        }
        .right {
            display: block;
            line-height: 54px;
            font-size: 20px;
        }
        //二级菜单
        .a-show{
            width: 125px;
            height: 200px;
            background: rgba(0,0,0,0.85);
            position: absolute;
            top: 63px;
            right: 10px;
            ul{
                width: 100%;
                li{
                    width: 100%;
                    height: 40px;
                    border-bottom: 1px solid #ccc;
                    line-height: 40px;
                    position: relative;
                    >a{
                        color: white !important;
                        font-size: 14px;
                        text-decoration: none;
                    }
                    >span{
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        text-align: center;
                        color: white;
                    }
                }
            }
        }
        .a-show::after{
            content: "";
            display: block;
            clear: both;
            width: 10px;
            height: 10px;
            background: rgba(0,0,0,0.85);
            transform: rotate(45deg);
            position: absolute;
            top: -5px;
            right: 10px;
        }
    }
  .form {
    padding-top: 30px;
    .form-group {
      border-bottom: 1px solid #eee;
      margin: 0;
      padding: 10px 0;
      .col-sm-10 {
        padding: 10px 0px;
      }
      input {
        float: right;
        width: 70%;
        outline: none;
        border: none;
      }
      input::-webkit-input-placeholder {
        color: #ccc;
      }
      input:-moz-placeholder {
        color: #ccc;
      }
    }
    .van-button {
      margin-top: 15px;
      background: #00c3f3;
    }
  }
}
</style>