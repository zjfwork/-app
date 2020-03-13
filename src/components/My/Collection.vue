<template>
    <div class="collection-wrapper">
        <!-- 头部 -->
        <div class="my-a">
            <van-row>
                <van-col span="4">
                    <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
                </van-col>
                <van-col span="16">我的收藏</van-col>
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

        <div>
            <van-tabs title-inactive-color="black" title-active-color="red" line-height="0px">
                <van-tab title="商品">
                    <!-- 商品列表 -->
                    <h3 v-show="flag">您还没有关注商品</h3>
                    <div v-for="(item, i) in collectionGoods" :key="i">
                        <van-swipe-cell>
                            <van-card
                                :title="item.title"
                                :desc="item.desc"
                                :price="item.price*item.num"
                                :thumb="item.thumb"
                            />
                            <template slot="right">
                                <van-button square type="danger" text="删除" @click="delcollection(i)"/>
                            </template>
                        </van-swipe-cell>
                    </div>
                    
                    <!-- <span class="btn3" @click="del(i)">删除</span> -->
                </van-tab>
                <van-tab title="店铺">
                    <h3>您还没有关注店铺</h3>
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
                collectionGoods: this.$store.state.Cart.collectionGoods,
                flag:true
            }
        },
        methods: {
            pathgo(){
                this.$router.go(-1);
                // console.log(this.collectionGoods);
            },
            showPopup(){
                this.show = !this.show;
            },
            //删除
            delcollection(i){
                this.$store.state.Cart.collectionGoods.splice(i, 1);
                this.$store.state.Cart.iscollection = true;
            }
        },
        created(){
            if(this.collectionGoods.length == 0){
                this.flag = true;
            }else{
                this.flag = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
.collection-wrapper {
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
    //删除
    .van-button{
        height: 106px;
    }
}
</style>