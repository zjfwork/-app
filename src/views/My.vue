<template>
    <div class="my-wrapper">
        <!-- 头部 -->
        <div class="my-a">
            <van-row>
                <van-col span="4">
                    <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
                </van-col>
                <van-col span="16">我的</van-col>
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
        <!-- <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"> -->
        <!-- 信息 -->
        <div class="my-b">
            <van-icon name="setting"><span>账号管理</span></van-icon> 
            <div class="b-content">
                <div class="b-left" @click="gologin">
                    <!-- <img src="../assets/img/guanggao1.jpg" alt=""> -->
                    <img :src="info.img" alt="">
                </div>
                <div class="b-right">
                    <span>昵称：{{info.name}}</span>
                    <p>用户名：{{info.username}}</p>
                </div>
            </div>
            
        </div>
        <div class="my-c">
            <van-row class="user-links">
                <van-col span="6">
                    <van-icon name="pending-payment" color="#DD9E58" @click="goorder"/>待付款
                </van-col>
                <van-col span="6">
                    <van-icon name="logistics" color="#DD9E58" @click="goorder"/>待收货
                </van-col>
                <van-col span="6">
                    <van-icon name="gold-coin-o" color="#DD9E58" />退换/售后
                </van-col>
                <van-col span="6">
                    <van-icon name="column" color="red" @click="goorder"/>全部订单
                </van-col>
            </van-row>
        </div>
        <!-- 收藏 -->
        <div class="my-d">
            <van-row>
                <van-col span="8">
                    <p>{{collectionNum}}</p>
                    <p @click="gocollection">商品收藏</p>
                </van-col>
                <van-col span="8">
                    <p>0</p>
                    <p @click="gocollection">店铺收藏</p>
                </van-col>
                <van-col span="8">
                    <p>0</p>
                    <p>我的足迹</p>
                </van-col>
            </van-row>
        </div>

        <div class="my-address">
            <van-cell title="收货地址管理" value="管理我的地址" is-link @click="goaddress"/>
        </div>

        <div class="my-e">
            <van-cell-group>
                <van-cell icon="points" title="我的积分" is-link />
                <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
                <van-cell icon="gift-o" title="我收到的礼物" is-link />
                <van-cell icon="balance-pay" title="我的资产" is-link />
            </van-cell-group>
        </div>
        <div class="my-f">
            <van-row class="user-links">
                <van-col span="6">
                    <van-icon name="medel" color="#DD9E58"/>我的预约
                </van-col>
                <van-col span="6">
                    <van-icon name="new-arrival" color="red" />新品
                </van-col>
                <van-col span="6">
                    <van-icon name="thumb-circle" color="#518AE8"/>推荐
                </van-col>
                <van-col span="6">
                    <van-icon name="point-gift" color="red"/>用户福利
                </van-col>
            </van-row>
            <van-row class="user-links">
                <van-col span="6">
                   <van-icon name="vip-card" color="red" />VIP
                </van-col>
                <van-col span="6">
                <van-icon name="graphic" color="#518AE8"/>订购火车票
                </van-col>
                <!-- <van-col span="6">
                    <van-icon name="thumb-circle" />推荐
                </van-col>
                <van-col span="6">
                    <van-icon name="point-gift" />用户福利
                </van-col> -->
            </van-row>
        </div>
        <div class="my-g">
            <van-cell  title="客户服务" is-link />
        </div>
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
                            <router-link to="/detail?id=0"><img :src="item.img" alt="" ></router-link>
                            <span>{{item.m1}}</span>
                            <p>￥<span>{{item.m2}}</span><span>看相似</span></p>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show:false,
            info:{},
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
            collectionNum: this.$store.state.Cart.collectionGoods.length,
        }
    },
    methods:{
        pathgo(){
            this.$router.go(-1);
        },
        showPopup(){
            this.show = !this.show;
        },
        gologin(){
            this.$router.push("/login");
        },
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
        godetail(i){
            this.$router.push({path:"/detail", query:{id:i}});
        },
        goorder(){
            this.$router.push("/order");
        },
        gocollection(){
            this.$router.push("/collection");
        },
        goaddress(){
            this.$router.push("/address");
        }
    },
    created(){
        // window.console.log("登录")
        // if(!localStorage.login){
        //     this.$router.push("/login");
        // }else{
        //     // this.$axios.get("http://192.168.54.65:3000/getdata",{
        //     this.$axios.get("http://192.168.54.22:3000/getdata",{
        //         params:{
        //             token:localStorage.login
        //         }
        // }).then((req)=>{
        //     console.log(req);
        //     this.info = req.data.result
        // })
        // }
        window.console.log("登录")
        if(localStorage.login){
            // this.$axios.get("http://192.168.54.65:3000/getdata",{
            // this.$axios.get("http://192.168.54.22:3000/getdata",{
            this.$axios.get("/getdata",{
                params:{
                    token:localStorage.login
                }
        }).then((req)=>{
            console.log(req);
            this.info = req.data.result
        })
        }
    }
};
</script>

<style lang="scss">
.my-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 44px 0;
    background: #f0f0f0;
    // 头部
    .my-a{
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
    // 信息
    .my-b{
        width: 100%;
        height: 130px;
        // background: #ED413F;
        background-image: linear-gradient(to right, #EB3D3C, #ED413F, #FB6953);
        position: relative;
        font-size: 14px;
        .van-icon-setting{
            width: 65px;
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 12px;
            span{
                display: block;
                position: absolute;
                top: -2px;
                right: 0;
            }
        }
        .b-content{
            width: 100%;
            height: 60px;
            position: absolute;
            top: 30px;
            left: 20px;
            .b-left{
                width: 60px;
                height: 60px;
                border: 1px solid #cccccc;
                border-radius: 50%;
                img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }
            .b-right{
                height: 60px;
                font-size: 12px;
                padding: 5px 0 0 0; 
                position: absolute;
                top: 0px;
                left: 70px;
                span{
                    font-size: 14px;
                    color: white;
                }
                p{
                    color: #ccc;
                }
            }
        }
        
    }
    // 收藏
    .my-d{
        width: 100%;
        background: white;
        text-align: center;
        font-size: 14px;
        margin: 10px 0;
        p:nth-child(1){
            height: 20px;
            color: red;
            line-height: 50px;
            font-weight: bold;
        }
        p:nth-child(2){
            height: 20px;
            font-size: 12px;
        }
    }
    .my-address{
        margin-bottom: 10px; 
        .van-cell__value{
            font-size: 12px;
        }
    }
    .my-f{
        margin: 10px 0;
        width: 100%;
        .my-wrapper,
        .user-links{
            padding: 5px 0;
            .van-col--6{
                padding: 0 10px;
            }
        }
    }
    // 为你服务
    .my-g{
        margin: 10px 0;
    }
    // 为你推荐
    .home-h{
        width: 100%;
        background: white;
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
    .user {
        &-poster {
            width: 100%;
            height: 53vw;
            display: block;
        }

        &-group {
            margin-bottom: 15px;
        }

        &-links {
            padding: 15px 0;
            font-size: 12px;
            text-align: center;
            background-color: #fff;

            .van-icon {
                display: block;
                font-size: 24px;
            }
        }
    }
}
</style>
