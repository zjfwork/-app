<template>
    <div class="address-wrapper">
        <!-- 头部 -->
        <div class="my-a">
            <van-row>
                <van-col span="4">
                    <span class="left"><van-icon name="arrow-left" @click="pathgo"/></span>
                </van-col>
                <van-col span="16">我的收货地址</van-col>
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
            
            <!-- <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" @click-item="dzid" /> -->
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                @add="onAdd"
                @edit="onEdit"
                @click-item="getid"
            />
        </div>
    </div>
</template>

<script>
// import { AddressList } from 'vant';
// import { Toast } from "vant";
    export default {
        data() {
            return {
                show:false,
                chosenAddressId: "1",
                list: [],
            }
        },
        methods: {
            pathgo(){
                this.$router.go(-1);
                // this.$router.push("/my");
            },
            showPopup(){
                this.show = !this.show;
            },
            // godetail(i){
            //     this.$router.push({path:'/detail', query:{id:i}});
            // }

            onAdd() {
                this.$store.state.ismodify = true;
                this.$store.state.list2 = [];
                this.$router.push("/add");
            },
            onEdit(item, index) {
                // Toast("编辑地址:" + index);
                this.$store.commit('modify1',index);
                this.$store.state.ismodify = false;
                this.$router.push('/add');
            },
            getid(){
                this.$store.commit("getid", this.chosenAddressId);
            }
            // dzid(){
            //     // console.log(this.chosenAddressId);
            //     this.$store.commit("dzstrfun", this.chosenAddressId);
            // }
        },
        created() {
            this.list = this.$store.state.list;
            // this.$store.state.chosenAddressId = this.chosenAddressId
        }
    }
</script>

<style lang="scss" scoped>
.address-wrapper {
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
}
</style>