<template>
    <div class="register-wrapper">
        <!-- 头部 -->
        <div class="register-a">
            <van-row>
                <van-col span="4">
                    <span class="left">
                        <van-icon name="arrow-left" @click="pathgo" />
                    </span>
                </van-col>
                <van-col span="16">注册</van-col>
                <van-col span="4"></van-col>
            </van-row>
        </div>
        <van-cell-group>
            <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
            <van-field v-model="password1" type="password" label="确认密码" placeholder="请输入密码" required/>
            <van-field v-model="iphone" required clearable label="手机号码" placeholder="请输入手机号码" />
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <van-button type="primary" size="large" @click="getdata">注册</van-button>
    </div>
</template>

<script>
import { Notify } from "vant";
export default {
    data() {
        return {
            username: null,
            password: null,
            password1: null,
            iphone: null,
            sms: null
        };
    },
    methods: {
        getdata() {
            if (this.password == this.password1) {
                this.$axios
                    .get("/register", {
                        params: {
                            username: this.username,
                            password: this.password,
                            iphone: this.iphone
                        }
                    })
                    .then(data => {
                        window.console.log(data);
                        if (data.data.code == 200 && this.username != null && this.password != null && this.iphone != null) {
                            Notify({
                                message: "注册成功",
                                type: "success",
                                duration: 1000,
                                onOpened: () => {
                                    this.$router.push("/login");
                                }
                            });
                        }else{
                            Notify({
                                message: "注册失败",
                                type: "danger",
                                duration: 1000,
                                
                            });
                        }
                    });
            }
        },
        pathgo() {
            this.$router.go(-1); //返回上一级
        }
    }
};
</script>

<style lang="scss" scoped>
.register-wrapper {
    position: relative;
    padding: 44px 20px 50px 20px;
    // 头部
    .register-a {
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
}
</style>