<template>
    <div id="app">
        <router-view />
        <!-- 底部导航栏 -->
        <van-tabbar v-model="active" v-show="showactiove" active-color="black" inactive-color="#333">
            <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="bars"  to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
            <!-- <van-tabbar-item icon="manager" to="/unlogin">未登录</van-tabbar-item> -->
            <van-tabbar-item icon="manager" to="/my">我的</van-tabbar-item>
        </van-tabbar>

    </div>
</template> 
<script>
export default {
    data() {
        return {
            active: 0,
            showactiove: false,
            num:""
        };
    },
    methods:{
        
    },
    watch: {
        // 如果 数  广告页 和 引导页
        "$route.path": function(newValue, oldValue) {
            if (newValue == "/gg" || newValue == "/" || newValue == "/search" || newValue == "/detail" || newValue == "/confirm" || newValue  == "/register" || newValue  == "/login" || newValue  == "/cart"  || newValue  == "/pay" ) {
                this.showactiove = false;
            } else {
                this.showactiove = true;
            }
            window.console.log(newValue);
            window.console.log(oldValue);
        }
    },
    created() {
        // 首次进入，都进入首页
        // this.$router.push("/");
    }
};
</script>

<style lang="scss">
    html {
        overflow-y: scroll;
        padding: 0;
        margin: 0;
        position: relative;
    }
    //解决移动端页面 出现的 横向滚动条
    :root {
    overflow-y: auto;
    overflow-x: hidden;
    }
    :root body {
    position: absolute;
    }
    body {
    width: 100vw;
    overflow: hidden;
    }

    // html,body{
    //     padding: 0;
    //     margin: 0;
    //     position: relative;
    // }
    a{
        color: black !important;
    }
    #app {
        
        // text-align: center;
        // color: #2c3e50;
        .van-tabbar{

        }
    }
   
  
</style>
