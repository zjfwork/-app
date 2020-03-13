<template>
    <div class="category-wrapper">
        <!-- 导航栏 -->
        <div class="category-a">
            <van-row>
                <van-col span="4"><span class="a-left"><van-icon name="arrow-left" @click="pathgo"/></span></van-col>
                <van-col span="16"><van-search placeholder="请输入搜索关键词" v-model="value" shape="round" @click="gosearch"/></van-col>
                <van-col span="4" ><span class="a-right"><van-icon name="ellipsis" @click="showPopup"/></span></van-col>
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
        <!-- 侧边栏 -->
        <div class="category-b">
            <!-- <van-sidebar v-model="activeKey">
                <van-sidebar-item v-for="(v, i) in arr" :title="v.name" :key="i" @click="aa(i)"/>
                <taba  v-if="num == 0" :arrson = "arr"/>
                <tabb  v-if="num == 1" :arrson = "arr"/>
            </van-sidebar> -->
            <van-tree-select
                height="100%"
                :items="items"
                :main-active-index.sync="activeIndex"
                >
                <template slot="content">
                    <taba  v-if="activeIndex == 0" />
                    <tabb  v-if="activeIndex == 1" />
                    <tabc  v-if="activeIndex == 2" />
                    <tabd  v-if="activeIndex == 3" />

                    <taba  v-if="activeIndex == 4" />
                    <tabb  v-if="activeIndex == 5" />
                    <tabc  v-if="activeIndex == 6" />
                    <tabd  v-if="activeIndex == 7" />

                    <taba  v-if="activeIndex == 8" />
                    <tabb  v-if="activeIndex == 9" />
                    <tabc  v-if="activeIndex == 10" />
                    <tabd  v-if="activeIndex == 11" />

                    <taba  v-if="activeIndex == 12" />
                    <tabb  v-if="activeIndex == 13" />
                    <tabc  v-if="activeIndex == 14" />
                    <tabd  v-if="activeIndex == 15" />
                </template>
            </van-tree-select>
        </div>
       
    </div>
</template>

<script>
    // import Swiper from "swiper";
    import taba from "@/components/Category/taba.vue";
    import tabb from "@/components/Category/tabb.vue";
    import tabc from "@/components/Category/tabc.vue";
    import tabd from "@/components/Category/tabd.vue";
    export default {
        data() {
            return {
                activeIndex: 0,
                items: [
                    { text: '热门推荐' }, 
                    { text: '手机数码' }, 
                    { text: '家用电器' }, 
                    { text: '电脑办公' }, 
                    { text: '计生情趣' }, 
                    { text: '美妆护肤' }, 
                    { text: '个护清洁' }, 
                    { text: '汽车生活' }, 
                    { text: '京东超市' },
                    { text: '男装' },
                    { text: '女装' },
                    { text: '童装' },
                    { text: '球鞋' },
                    { text: '装机' },
                    { text: '家具' },
                    { text: '生鲜' },
                    ],
                num:0,
                value:"",
                activeKey:0,
                arr:["热门推荐","手机数码","家用电器","电脑办公","计生情趣","美妆护肤","个护清洁","汽车生活","京东超市","男装"],
                show:false,
            }
        },
        methods: {
            aa(i){
                this.num = i;
            },
            onSearch(){

            },
            pathgo() {
                this.$router.go(-1); //返回上一级
            },
            gosearch(){
                this.$router.push("/search");
            },
             showPopup() {
                this.show = !this.show;
            }
        },
        mounted(){
            
            
        },
        components:{
            taba,
            tabb,
            tabc,
            tabd,
        }
    }
</script>

<style lang="scss" scoped>
    .category-wrapper{
        position: relative;
        //导航栏 搜索框
        .category-a{
            width: 100%;
            height: 44px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            color: black;
            background: white;
            border-bottom: #ccc 1px solid;
            .a-left{
                display: block;
                text-align: center;
                line-height: 44px;
                font-size: 22px;
            }
            .a-right{
                display: block;
                text-align: center;
                line-height: 44px;
                font-size: 20px;
            }
            .van-search {
                padding: 4px 6px;
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
                            text-decoration: none;
                        }
                        span{
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
        // 侧边栏
        .category-b{
            position: fixed;
            width: 100%;
            top:44px;
            bottom:50px;
            .van-tree-select_nav{
                width: 100%;
                .van-tree-select__nav-item{
                    width: 85px;
                    padding: 12px 0px;
                }
            }
        }
    }
    
</style>