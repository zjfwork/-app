<template>
    <div class="pay-wrapper">
        <!-- 头部 -->
        <div class="pay-a">
            <van-row>
                <van-col span="4">
                    <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
                </van-col>
                <van-col span="16">收银台</van-col>
                <van-col span="4">
                    <span class="right"><van-icon name="ellipsis" @click="showPopup"/></span>
                </van-col>
            </van-row>
            <!-- 二级菜单 -->
            <div v-show="show" class="a-show">
                <ul>
                    <li><span><van-icon name="wap-home-o"/></span><router-link to="/home" >首页</router-link></li>
                    <li><span><van-icon name="search"/></span><router-link to="/category">分类搜索</router-link></li>
                    <li><span><van-icon name="shopping-pay-o" /></span><router-link to="/pay">购物车</router-link></li>
                    <li><span><van-icon name="user-o" /></span><router-link to="/my">我的</router-link></li>
                    <li><span class="iconfont icon-zuji"></span><a>浏览记录</a></li>
                </ul>
            </div>
        </div>

        <div class="pay-b">
            <p>需支付:<span>￥{{this.$store.state.totalPrice}}</span></p>
        </div>

        <div class="pay-c">
            <!-- 通过v-model控制展开的面板列表，activeNames为数组格式 -->
            <van-collapse v-model="activeNames">
                <div class="c-top">
                    <van-cell-group>
                        <van-cell icon="points" title="农业银行" label="储蓄卡(7077)">
                            <van-checkbox v-model="checked1" checked-color="red" @click="a"></van-checkbox>
                        </van-cell>
                    </van-cell-group>
                </div>
                <van-collapse-item title="其他银行卡" name="1">
                    <div>
                        <van-cell-group>
                            <van-cell icon="points" title="白条支付" label="一键激活并支付可享立减优惠">
                                <van-checkbox v-model="checked2" checked-color="red" @click="b"></van-checkbox>
                            </van-cell>
                            <van-cell icon="points" title="小金库" label="未开通小金库">
                                <van-checkbox v-model="checked3" checked-color="red" @click="c"></van-checkbox>
                            </van-cell>
                        </van-cell-group>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>

        <div class="pay-d">
            <div class="d-top">其他支付方式</div>
            <div class="d-bottom">
                <van-cell-group>
                    <van-cell icon="points" title="微信支付" label="仅安装微信6.0.2级以上版本客户端使用">
                        <van-checkbox v-model="checked4" checked-color="red" @click="d"></van-checkbox>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>

        <div class="pay-e">
            <van-button type="danger" size="large" @click="goorder">
                <span>需支付</span><span>￥{{this.$store.state.totalPrice}}</span>
            </van-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:false,
                activeNames:["1"],
                checked1: true,
                checked2: false,
                checked3: false,
                checked4: false,

            }
        },
        methods: {
            pathgo() {
                this.$router.go(-1); //返回上一级
            },
            showPopup(){
                this.show = !this.show;
            },
            a(){
                this.checked1 = true;
                this.checked2 = false;
                this.checked3 = false;
                this.checked4 = false;
            },
            b(){
                this.checked1 = false; 
                this.checked2 = true;
                this.checked3 = false;
                this.checked4 = false;
            },
            c(){
                this.checked1 = false; 
                this.checked2 = false; 
                this.checked3 = true;
                this.checked4 = false;
            },
            d(){
                this.checked1 = false; 
                this.checked2 = false;
                this.checked3 = false;
                this.checked4 = true;
            },
            goorder(){
                this.$router.push("/order");
                for(var i = 0; i < this.$store.state.goods.length; i++){
                    this.$store.state.orderGoods.push(this.$store.state.goods[i])
                }
                this.$store.state.Cart.goodslists = [];
            }
        },
        created(){
            // if(this.checked1 == true){
            //     this.checked2 = false;
            //     this.checked3 = false;
            //     this.checked4 = false;
            //     console.log(this.checked1,this.checked2,this.checked3,this.checked4)
            // }
           
        },
        watch:{
           
        }
    }
</script>

<style lang="scss" scoped>
.pay-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 44px 0;
    background: #f0f0f0;

    // 头部
    .pay-a {
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
    .pay-b{
        height: 30px;
        background: white;
        position: relative;
        padding: 0 20px;
        margin-bottom: 5px;
        p{
            float: right;
            span{
                color: red;
            }
        }
    }

    .pay-c{
        position: relative;
        background: white;
        .c-top{
            padding: 16px;
        }
    }

    .pay-d{
        position: relative;
        background: white;
        .d-top{
            padding: 0 16px;
            color: gray;
        }
        .d-bottom{
            padding: 16px;
        }
    }
    //pay-c,pay-d公用部分
    .van-checkbox{
        position: absolute;
        right: 0;
        top: 12px;
    }
    .van-cell{
        padding: 0;
        margin-bottom: 10px;
        .van-icon{
            height: 45px;
            line-height: 45px;
        }
        .van-cell__title{
            span{
                font-size: 16px;
            }
            .van-cell__label{
                width: 210px;
            }
        }
    }
    .pay-e{
        margin-top: 10px;
        padding: 0 16px;
    }
    
}
</style>