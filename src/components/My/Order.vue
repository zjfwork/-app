<template>
    <div class="order-wrapper">
        <!-- 头部 -->
        <div class="my-a">
            <van-row>
                <van-col span="4">
                    <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
                </van-col>
                <van-col span="16">我的订单</van-col>
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

        <div class="order-b">
            <van-tabs title-inactive-color="black" title-active-color="red" line-height="0px">
                <van-tab title="全部">
                    <!-- 商品列表 orderGoods-->
                    <div class="order-bb" v-show="flag1">
                        <img src="../../assets/img/order1.png" alt="">
                        <span>您暂时没有相关订单!</span>
                    </div>
                    <div v-for="(item, i) in orderGoods" :key="i">
                        <van-card
                            :title="item.title"
                            :desc="item.desc"
                            :num="item.num"
                            :price="item.price*item.num"
                            :thumb="item.thumb"
                        >
                        <div slot="footer">
                            <!-- <van-button size="mini">看相似</van-button> -->
                            <van-button size="mini" @click="godetail(item.id)">再次购买</van-button>
                        </div>
                        </van-card>
                    </div>
                </van-tab>
                <van-tab title="待付款">
                    <div class="order-bb" v-show="flag">
                        <img src="../../assets/img/order1.png" alt="">
                        <span>您暂时没有相关订单!</span>
                    </div>
                </van-tab>
                <van-tab title="待收货">
                    <div class="order-bb" v-show="flag">
                        <img src="../../assets/img/order1.png" alt="">
                        <span>您暂时没有相关订单!</span>
                    </div>
                </van-tab>
                <van-tab title="已完成">
                    <div class="order-bb" v-show="flag">
                        <img src="../../assets/img/order1.png" alt="">
                        <span>您暂时没有相关订单!</span>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:false,
                orderGoods:this.$store.state.orderGoods,
                flag:true,
                flag1:true,
            }
        },
        methods: {
            pathgo(){
                // this.$router.go(-1);
                this.$router.push("/my");
            },
            showPopup(){
                this.show = !this.show;
            },
            godetail(i){
                this.$router.push({path:'/detail', query:{id:i}});
            }
        },
        created(){
            if(this.orderGoods.length == 0){
                this.flag1 = true;
            }else{
                this.flag1 = false;
            }
        },
    }
</script>

<style lang="scss" scoped>
.order-wrapper {
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
    .order-b{
        // width: 100%;
        .order-bb{
            text-align: center;
            img{
                width: 90px;
                height: 90px;
            }
            span{
                display: block;
            }
        }
    }
}
</style>