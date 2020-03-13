<template>
    <div class="login-wrapper">
        <!-- 头部 -->
        <div class="login-a"> 
            <van-row>
                <van-col span="4">
                    <span class="left">
                        <van-icon name="arrow-left" @click="pathgo"/>
                    </span>
                </van-col>
                <van-col span="16">登录注册</van-col>
                <van-col span="4"></van-col>
            </van-row>
        </div>
        <!-- 信息 -->
        <div class="login-b"> 
            <van-cell-group>
                <van-field v-model="username" placeholder="用户名/邮箱/手机号" />
                <van-field v-model="password" type="password" placeholder="请输入密码" />
                <span class="iconfont icon-yincang" v-show="!ishiden" @click="ishiden = !ishiden"></span>
                <span class="iconfont icon-xianshi" v-show="ishiden" @click="ishiden= !ishiden"></span>
                <span class="wjmm">忘记密码</span>
            </van-cell-group>
        </div>
        <!--  登录按钮 -->
        <div class="login-c">
            <van-button round type="info" size="large" @click="getlogin">登录</van-button>
            <van-button round type="info" size="large" @click="login">一键登录</van-button>
        </div>
        <!-- 手机注册, 短信验证-->
        <div class="login-d">
            <span>短信验证码登录</span>
            <span @click="goregister">手机快速注册</span>
        </div>
        <!-- 底部栏 -->
        <div class="login-e ">
            <van-divider  :style="{ color: '#ccc', borderColor: '#ccc'}">其他登录方式</van-divider>
            <van-row>
                <van-col span="12">
                    <!-- <img src="../assets/img/QQ.png" alt=""> -->
                    <img src="../assets/img/qq.jpg" alt="">
                    <p>QQ</p>
                </van-col>
                <van-col span="12">
                    <!-- <img src="../assets/img/wx.png" alt=""> -->
                    <img src="../assets/img/wx.jpg" alt="">
                    <p>微信</p>
                </van-col>
            </van-row>
        </div>
        <p>登录即代表您已同意我方公司<a href="javascript:;">隐私协议</a></p>
    </div>
</template>

<script>
import { Notify } from 'vant';
export default {
    data() {
        return {
            username:null,
            password:null,
            ishiden:false,
        }
    },
    methods:{
        pathgo() {
            this.$router.go(-1); //返回上一级
        },
        // 登录
        getlogin(){
            window.console.log("登录成功");
            // ajax请求后台登录API功能
            // this.$axios.get('http://192.168.54.65:3000/login', {
            // this.$axios.get('http://192.168.54.22:3000/login', {
            this.$axios.get('/login', {
                params: {
                    username:this.username,
                    password:this.password
                }
            })
            .then((response)=>{
                console.log(response);
                // 1.把token存储cookie或localStorage
                if(response.data.code ==200){
                    let token = response.data.result.token;
                    console.log("令牌：",token);
                    localStorage.login = token;
                    this.$router.push("/my");
                    Notify({ type: 'success', message: '登录成功',duration:1000 });
                }else{
                    
                    Notify({  type: 'danger', message: '登录失败',duration: 1000 });
                }
            })
        },
        // 一键登录
        login(){
            this.$router.push("/my");
        },
        goregister(){
            this.$router.push("/register");
        }
    }
};
</script>

<style lang="scss" scoped>
    .login-wrapper{
        position: relative;
        padding:  0 20px 50px 20px;
        // 头部
        .login-a {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            color: black;
            background: white;
            text-align: center;
            line-height: 44px;
            font-size: 18px;
            .left {
                display: block;
                text-align: center;
                line-height: 44px;
                font-size: 22px;
            }
        }
        // 信息
        .login-b{
            position: relative;
            padding: 44px 0 20px 0;
            .van-field{
                margin: 10px 0;
                border-bottom: .01rem solid #efefef;
                position: relative;
            }
            .iconfont{
                position: absolute;
                right: 100px;
                bottom: 10px;
                color: #CCCCCC;
            }
            .wjmm{
                display: block;
                width: 80px;
                position: absolute;
                right: 0;
                bottom: 10px;
            }
            .wjmm::after{
                content: "";
                display: block;
                clear: both;
                width: 1px;
                height: 20px;
                background: #CCCCCC;
                position: absolute;
                top: 2px;
                left: -10px;
                z-index: 999;
            }
        }
        //按钮
        .login-c{
            position: relative;
            .van-button{
                margin-bottom: 10px;
                border: none;
            }
            .van-button:nth-child(1){
                background: #FCB7B3;
            }
            .van-button:nth-child(2){
                background: white;
                color: red;
                border: solid 1px #FCB7B3;
            }
        }
         // 手机注册, 短信验证
        .login-d{
            position: relative;
            font-size: 14px;
            color: #cccccc;
            margin-top: 10px;
            >span:nth-child(1){
                position: absolute;
                left: 0;
            }
            >span:nth-child(2){
                position: absolute;
                right: 0;
            }
        }
         //底部栏
        .login-e {
            width: 100%;
            position: relative;
            color: #CCCCCC;
            font-size: 12px;
            .van-divider{
                margin-top: 100px;
                font-size: 12px;
            }
             // qq,微信 图片
            .van-col{
                text-align: center;
                img{
                    width: 60px;   
                    height: 60px;
                }
                
            }
        }
        p{
            font-size: 12px;
            color: #CCCCCC;
            text-align: center;
            a{
                font-size: 14px;
                color: blue !important;
            }
        }

    }
</style>