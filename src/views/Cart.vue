<template>
    <div class="cart-wrapper">
        <!-- 头部 -->
        <div class="cart-a">
            <van-row>
                <van-col span="4">
                    <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
                </van-col>
                <van-col span="16">购物车</van-col>
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
        
        <div class="cart-b" v-show="islogin">
            <span>登录后可同步账户购物车中的商品</span>
            <button @click="gologin">登录</button>
        </div>

        <div class="cart-c" v-show="islogin">
            <img src="../assets/img/empty-gwc.png" alt="">
            <span>登录后可同步购物车中商品</span>
        </div>
        <!-- <div class="cart-c" v-show="flag">
            <img src="../assets/img/empty-gwc.png" alt="">
            <span>购物车空空如也，去逛逛吧~</span>
        </div> -->
        <!-- 秒杀 -->
        <div class="home-d" v-show="flag">
            <div class="d-top">
                <van-row>
                    <van-col span="12">
                       <div class="time-box1">
                            <span>秒杀</span>
                            <span>0</span>
                            <span>0</span>
                            <span>点场</span>
                        </div>
                        <div class="time-box2">
                            <span>0</span>
                            <span>0</span>
                            <span class="cur">:</span>
                            <span>0</span>
                            <span>0</span>
                            <span class="cur">:</span>
                            <span>0</span>
                            <span>0</span>
                        </div>
                    </van-col>
                    <van-col span="12">
                         <a href="javascript:;">更多秒杀</a> 
                         <span><van-icon name="arrow" /></span>
                    </van-col>
                </van-row>
            </div>
            <div class="d-bottom">
                <div class="swiper-container">
                    <div class="swiper-wrapper swiper-img">
                        <div class="swiper-slide" v-for="(v, i) in msarr" :key="i">
                            <router-link to="/detail?id=0">
                                <img :src=v.img alt="">
                                <span>￥{{v.m1}}</span>
                                <span>￥{{v.m2}}</span>
                            </router-link>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品列表 -->
        <!-- <van-checkbox-group class="card-goods" v-model="checkedGoods"> -->
        <van-checkbox-group class="card-goods" checked-color="red" v-model="checkedGoods" v-for="(item, i) in goods" :key="item.id">
            <van-checkbox
                class="card-goods__item"
                :name="item.id"
            >
            <van-card
                :title="item.title"
                :desc="item.desc"
                :num="item.num"
                :price="item.price*item.num"
                :thumb="item.thumb"
            />
            </van-checkbox>

            <span class="btn1" @click="item.num <= 1 ? 1 : item.num--">-</span>
            <span class="btn2" @click="item.num++">+</span>
            <span class="btn3" @click="del(i)">删除</span>
        </van-checkbox-group>

        <!-- 为你推荐 -->
        <div class="home-h">
            <img src="../assets/img/weinituijian.png" alt />
            <div class="home-hh">
                <van-row>
                    <van-col span="12" v-for="(v, i) in wntjarr" :key="i" @click="godetail(i)">
                        <a><img :src="v.img" alt="" ></a>
                        <span>{{v.m1}}</span>
                        <p>￥<span>{{v.m2}}</span><span>看相似</span></p>
                    </van-col>
                </van-row>

                <!-- 加载图片 -->
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-row>
                        <van-col span="12" class="wntjarritem" v-for="(item,i) in wntjarr" :key="i">
                            <!-- <a><img :src="item.img" alt="" ></a> -->
                            <router-link to="/detail?id=0"><img :src="item.img" alt="" ></router-link>
                            <span>{{item.m1}}</span>
                            <p>￥<span>{{item.m2}}</span><span>看相似</span></p>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>

        <!-- 底部导航  "isabled是否禁用按钮"-->
        <van-submit-bar
            :price="totalPrice"
            :disabled="!checkedGoods.length"
            :button-text="submitBarText"
            @submit="onSubmit"
            v-show="!flag"
        >

        <!-- <input type="checkbox"  :checked="truet" @click="selectfun(isselectlist)" />全选 -->
        <!-- <input type="checkbox"  :checked="isselectall" />全选 -->
        <van-checkbox v-model="isselectall" @click="selectall(isselectall)"  checked-color="red">全选</van-checkbox>
        </van-submit-bar>
    </div>
    <!-- :checked="isselectall"  
     v-model="isselectall"-->
</template> 

<script>
import Swiper from "swiper";
import { mapState } from "vuex";
import { Dialog } from 'vant';
export default {
    data() {
        return {
            checkedGoods: this.$store.state.Cart.checkedGoods,
            show:false,
            islogin:true,
            flag:true,
            //秒杀
            msarr:[
                {"m1":"99", "m2":"130", "img":require('../assets/img/detail01.jpg')},
                {"m1":"4999", "m2":"5500", "img":require('../assets/img/detail02.jpg')},
                {"m1":"199", "m2":"300", "img":require('../assets/img/detail03.jpg')},
                {"m1":"4399", "m2":"5199", "img":require('../assets/img/detail04.jpg')},
                {"m1":"2999", "m2":"3999", "img":require('../assets/img/detail05.jpg')},
                {"m1":"1099", "m2":"1300", "img":require('../assets/img/detail06.jpg')},
                {"m1":"8269", "m2":"9499", "img":require('../assets/img/detail07.jpg')},
            ],
            //为你推荐
            wntjarr:[
                // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":"https://img11.360buyimg.com/mobilecms/s372x372_jfs/t1/90139/34/1379/180822/5dbe8875E02dc2e95/c78c80a4116ee57d.jpg!q70.dpg.webp"},
                {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../assets/img/home-hh1.jpg')},
                {"m1":"SanDisk闪迪CZ880128G SSD固态优盘", "m2":"199", "img":require('../assets/img/home-hh2.jpg')},
                {"m1":"Apple iPhone苹果XS Max[3期免息0首付]", "m2":"6899", "img":require('../assets/img/home-hh3.jpg')},
                {"m1":"联想威6 2020款十代英特尔酷睿i5/i7四核14.", "m2":"4899", "img":require('../assets/img/home-hh4.jpg')},
                {"m1":"男士纯棉长袖t恤秋季男装翻领衬衫领薄款体...", "m2":"99", "img":require('../assets/img/home-hh5.jpg')},
                {"m1":"AMD R5/R7 2600X 3600X 3700X..", "m2":"1899", "img":require('../assets/img/home-hh6.jpg')},
                {"m1":"自营微星(msi)GF63 15 6英寸轻薄窄边框.", "m2":"8899", "img":require('../assets/img/home-hh7.jpg')},
                {"m1":"联想L340 2019全新款八代酷睿i5/i7.", "m2":"3899", "img":require('../assets/img/home-hh8.jpg')},

            ],
            finished: false,
            loading: false,
            num:1,
            count:0,
            // checked:false,
            isselectall:true,
            // goods:[]
        };
    },
    computed: {
        ...mapState({
            // goods: state => state.Cart.goodslists
            goods:function(state){
                return state.Cart.goodslists;//数组[{},{},{}]
            }
        }),
        submitBarText() {
            // const count = this.checkedGoods.length;
            var count = 0;
            console.log(this.checkedGoods )//数组 [商品id, 商品id, ]
            console.log(this.goods)//数组[{},{},{}]
            
            // // // for(let i = 0; i < this.goods.length; i++ ){
            // for(var i = 0; i < this.checkedGoods.length; i++ ){
            //     var index = this.checkedGoods[i];
            //     var t = 0;
            //     t = this.goods[index].num;
            //     // console.log("商品的id:",index)
            //     // console.log("商品数组:",this.goods[index])
            //     // console.log("商品数组里的num:",t)
            //     // console.log("---------")
            //     for(var j = 0; j < this.goods.length; j++ ){
            //         if(this.goods[j].id == index){
            //             t = this.goods[j].num;
            //             count += t;
            //         }
            //     }
            // }
            return "结算" + (count ? `(${count})` : "");
        },
        totalPrice() {
            return this.goods.reduce((total, item) =>
            total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num*100 : 0),0);
            
        },
        
    },
    methods: {
        // 加载图片
        onLoad() {
            setTimeout(() => {
                let item =  {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../assets/img/home-hh1.jpg')};
                for (var i = 0; i < 4; i++) {
                    this.wntjarr.push(item);
                }
                this.num++;
                // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                if (this.num > 3) {
                    this.finished = true;
                }
            }, 2000); 
        },
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        onSubmit() {
            console.log("点击结算");
            this.$store.commit("setid", this.$store.state.list.length);
            if(localStorage.login){
                this.$router.push("/confirm")
            }else{
                this.$router.push("/login")
            }
            // this.$router.push("/confirm")
            // this.$router.push({path:'/confirm',query:{id:this.$store.state.chosenAddressId}}) 
            // this.$store.state.goods = this.goods;
            // this.$store.state.totalPrice = this.totalPrice;
            // console.log(this.goods);
            // console.log(this.$store.state.goods);
            // console.log(this.totalPrice);
            // console.log(this.$store.state.totalPrice);
            for(var i = 0; i < this.checkedGoods.length; i++ ){
                var index = this.checkedGoods[i];
                //  this.$store.state.confirmgoods.push(this.goods[i]); 
                console.log("index:",index)
                for(var j = 0; j < this.goods.length; j++ ){
                    if(this.goods[j].id == index){
                        // console.log("aaa:",this.goods[j])
                        // console.log("bbb:",this.$store.state.confirmgoods)
                        this.$store.state.confirmgoods.push(this.goods[j]); 
                        // this.$store.state.confirmgoods = this.goods; 
                    }
                }

            }

        },
        pathgo() {
            this.$router.go(-1); //返回上一级
        },
        showPopup(){
            this.show = !this.show;
        },
        gologin(){
            this.$router.push("/login");
        },
        godetail(i){
            console.log(i)
            this.$router.push({path:'/detail',query:{id:i}}) 
        },
        // 删除
        del(i){
            // console.log(i);
            // console.log(this.$store.state.goods);
            // console.log(this.goods);
            // this.$store.state.goods.splice(i, 1)
            Dialog.confirm({
                // title: '标题',
                message: '是否确认删除此商品?',
                confirmButtonText:'删除',
                confirmButtonColor:'red',
                cancelButtonText:'返回'
                }).then(() => {
                // on confirm
                    this.goods.splice(i, 1);
                    this.checkedGoods.splice(i, 1);
                    // if(this.$store.state.goods.length == 0){
                    //     this.flag = true;
                    // }else{
                    //     this.flag = false;
                    // }
                }).catch(() => {
                // on cancel
            });
        },
        // 全选
        selectall(data){
            console.log(data)
            if(!data){
                for(let i = 0; i < this.goods.length; i++){
                     this.checkedGoods.push(this.goods[i].id)
                }
            }else{
                this.checkedGoods = [];
            }
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            });
    },
    created(){
        if(localStorage.login){
            this.islogin = false;
        }else{
            this.islogin = true;
        }

        if(this.checkedGoods.length == 0 ){
            this.flag = true;
        }else{
            this.flag = false;
        }
        
        this.$store.state.goods = this.goods;
        this.$store.state.totalPrice = this.totalPrice;
        this.$store.state.confirmgoods = [];

    },
    watch:{
        //全选
        "checkedGoods":function(){
            if(this.checkedGoods.length == this.goods.length){
                this.isselectall = true;
            }else{
                this.isselectall = false;
            }
        },
        
    }
};
</script>

<style lang="scss">
.cart-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 44px 0;
    // 头部
    .cart-a {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        color: black;
        background: white;
        line-height: 44px;
        font-size: 18px;
        .van-col{
            text-align: center;
        }
        .left {
            display: block;
            line-height: 44px;
            font-size: 22px;
        }
        .right {
            display: block;
            line-height: 44px;
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
    .cart-b{
        width: 100%;
        padding: 5px 15px;
        span{
            font-size: 14px;
        }
        button{
            width: 70px;
            height: 30px;
            background: red;
            border-radius: 5px;
            color: white;
            border: 0;
            outline: none;
            margin-left: 10px
        }
    }

    /* 秒杀 */
    .home-d {
        width: 100%;
        background-color: #f0f0f0;
        // background-color: white;
        font-size: 12px;
        padding: 5px 0;
        position: relative;
        .d-top{
            position: relative;
            .van-col:nth-child(1){
                position: relative;
                .time-box1{
                    display: inline-block;
                    font-weight: bold;
                    position: absolute;
                    left: 10px;
                }
                .time-box2{
                    display: inline-block;
                    margin-left: 80px;
                }
            }
            .van-col:nth-child(2){
                position: relative;
                color: red;
                >a{
                    display: block;
                    position: absolute;
                    right: 20px;
                    color: red !important;
                }
                span{
                    display: block;
                    position: absolute;
                    right: 10px;
                    top: 2px;
                }
            }
            
        }
        .d-bottom{
            width: 100%;
            padding: 5px 10px 0 10px;
            .swiper-img{
                width: 100%;
                .swiper-slide{
                    a{
                        // text-align: center;
                        padding: 5px;
                        img{
                            width: 100%;
                            margin-right: 10px;
                        }
                        span:nth-child(2){
                            width: 100%;
                            text-align: center;
                            display: inline-block;
                            color: red;
                            font-size: 14px;
                        }
                        span:last-child{
                            width: 100%;
                            text-align: center;
                            display: inline-block;
                            font-size: 12px;
                            text-decoration: line-through;
                            margin-top: -15px;
                        }
                    }
                }
            }
        }
    }

    // 商品列表
    .card-goods {
        position: relative;
        padding: 0 0 50px 0;
        background-color: #fff;
        &__item {
            position: relative;
            background-color: #fafafa;
            .van-checkbox__label {
                width: 100%;
                height: auto; // temp
                padding: 0 10px 0 15px;
                box-sizing: border-box;
            }
            .van-checkbox__icon {
                top: 50%;
                left: 10px;
                z-index: 1;
                position: absolute;
                margin-top: -10px;
            }
            
           
        } 
        .van-card__price {
            color: #f44;
        }
        .van-card__num {
            margin-right: 10px;
        }
        >span{
            display: block;
            width: 20px;
            height: 20px;
            background: red;
            line-height: 16px;
            text-align: center;
            border: none;
            outline: none;
            background: transparent;
            position: absolute;
        }
        // 减
        .btn1{
            right: 55px;
            top: 60px;
        }
        // 加
        .btn2{
            right: 10px;
            top: 60px;
        }
        //删除
        .btn3{
            width: 30px;
            height: 15px;
            font-size: 10px;
            color: gray;
            right: 10px;
            top: 80px;
        }
    }
    .cart-c{
        width: 100%;
        padding: 70px 0;
        text-align: center;
        img{
            width: 90px;
            height: 90px;
        }
        span{
            font-size: 14px;
            display: block;
            margin-top: 10px;
        }
    }
    // 为你推荐
    .home-h{
        width: 100%;
        img{
            width: 100%;
            height: 30px;
        }
        .home-hh{
            width: 100%;
            position: relative;
            .van-col{
                padding: 5px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;                
                }
                span{
                    font-size: 14px;
                }
                p{
                    color: red;
                    font-size: 12px;
                    padding: 0 10px;
                    position: relative;
                    >span:nth-child(1){
                        color: red;
                        font-size: 16px;
                    }
                    >span:nth-child(2){
                        color: black;
                        font-size: 12px;
                        position: absolute;
                        top: 3px;
                        right: 10px;
                    }
                    >span:nth-child(2)::after{
                        content: "";
                        display:block;
                        clear: both;
                        width: 40px;
                        height: 20px;
                        background: transparent;
                        border:solid 1px #ccc;
                        position: absolute;
                        top: -1px;
                        left: -1px;
                    }
                }
                .van-button {
                    position: relative;
                }
            }
            
        }
    }
    .van-checkbox-group {
    }
    // .van-submit-bar {
    //     position: fixed;
    //     bottom: 50px !important;
    // }
    .van-submit-bar__bar{
        .van-checkbox{
            margin-left: 10px;
        }
    }
}
</style>
