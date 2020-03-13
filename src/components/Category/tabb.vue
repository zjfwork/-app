<template>
    <div class="taba-wrapper">
        <van-row>
            <!-- 热门品牌 -->
            <van-col span="24">
                <div class="taba-a">
                    <div class="a-top">
                        <h4>热门品牌</h4>
                    </div>
                    <div class="a-bottom">
                        <van-row>
                            <van-col span="8" v-for="(v, i) in flarr1" :key="i">
                                <router-link to="/detail?id=0">
                                    <img :src="v.img" alt="" class="img">
                                    <span>{{v.m1}}</span>
                                </router-link>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </van-col>

            <!-- 手机通讯 -->
            <van-col span="24">
                <div class="taba-a">
                    <div class="a-top">
                        <h4>手机通讯</h4>
                    </div>
                    <div class="a-bottom">
                        <van-row>
                            <van-col span="8" v-for="(v, i) in flarr2" :key="i">
                                <router-link to="/detail?id=0">
                                    <img :src="v.img" alt="">
                                    <span>{{v.m1}}</span>
                                </router-link>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </van-col>
            <!-- 运营商 -->
            <van-col span="24">
                <div class="taba-a">
                    <div class="a-top">
                        <h4>运营商</h4>
                    </div>
                    <div class="a-bottom">
                        <van-row>
                            <van-col span="8" v-for="(v, i) in flarr3" :key="i">
                                <router-link to="/detail?id=0">
                                    <img :src="v.img" alt="">
                                    <span>{{v.m1}}</span>
                                </router-link>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </van-col>
            <!-- 手机配件-->
            <van-col span="24">
                <div class="taba-a">
                    <div class="a-top">
                        <h4>手机配件</h4>
                    </div>
                    <div class="a-bottom">
                        <van-row>
                            <van-col span="8" v-for="(v, i) in flarr4" :key="i">
                                <router-link to="/detail?id=0">
                                    <img :src="v.img" alt="">
                                    <span>{{v.m1}}</span>
                                </router-link>
                            </van-col>
                        </van-row>
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flarr1:[
                    {"m1":"小米", "img":require('../../assets/img/remenpinpai1.png')},
                    {"m1":"华为", "img":require('../../assets/img/remenpinpai2.png')},
                    {"m1":"荣耀", "img":require('../../assets/img/remenpinpai3.png')},
                    {"m1":"iPhone", "img":require('../../assets/img/remenpinpai4.png')},
                    {"m1":"vivo", "img":require('../../assets/img/remenpinpai5.png')},
                    {"m1":"OPPO", "img":require('../../assets/img/remenpinpai6.png')},
                    {"m1":"魅族", "img":require('../../assets/img/remenpinpai7.png')},
                    {"m1":"三星", "img":require('../../assets/img/remenpinpai8.png')},
                    {"m1":"一-加", "img":require('../../assets/img/remenpinpai9.png')},
                    {"m1":"360手机", "img":require('../../assets/img/remenpinpai10.png')},
                    {"m1":"锤子手机", "img":require('../../assets/img/remenpinpai11.png')},
                    {"m1":"努比亚", "img":require('../../assets/img/remenpinpai12.png')},
                ],
                flarr2:[
                    {"m1":"老人机", "img":require('../../assets/img/remenpinpai13.png')},
                    {"m1":"手机", "img":require('../../assets/img/remenpinpai14.png')},
                    {"m1":"全面屏手机", "img":require('../../assets/img/remenpinpai15.png')},
                    {"m1":"游戏手机", "img":require('../../assets/img/remenpinpai16.png')},
                    {"m1":"拍照手机", "img":require('../../assets/img/remenpinpai17.png')},
                    {"m1":"手对讲机", "img":require('../../assets/img/remenpinpai18.png')},
                    {"m1":"京东回收", "img":require('../../assets/img/remenpinpai19.png')},
                    {"m1":"女性手机", "img":require('../../assets/img/remenpinpai20.png')},
                    {"m1":"手京东维修", "img":require('../../assets/img/remenpinpai21.png')},
                ],
                flarr3:[
                    {"m1":"合约机", "img":require('../../assets/img/remenpinpai22.png')},
                    {"m1":"选号卡", "img":require('../../assets/img/remenpinpai23.png')},
                    {"m1":"女办套餐", "img":require('../../assets/img/remenpinpai24.png')},
                    {"m1":"京东网厅", "img":require('../../assets/img/remenpinpai25.png')},
                ],
                flarr4:[
                    {"m1":"数据线", "img":require('../../assets/img/remenpinpai26.png')},
                    {"m1":"手机储存卡", "img":require('../../assets/img/remenpinpai27.png')},
                    {"m1":"充电宝", "img":require('../../assets/img/remenpinpai28.png')},
                    {"m1":"手机贴膜", "img":require('../../assets/img/remenpinpai29.png')},
                    {"m1":"手机耳机", "img":require('../../assets/img/remenpinpai30.png')},
                    {"m1":"蓝牙耳机", "img":require('../../assets/img/remenpinpai31.png')},
                    {"m1":"手机支架", "img":require('../../assets/img/remenpinpai32.png')},
                    {"m1":"手机饰品", "img":require('../../assets/img/remenpinpai33.png')},
                    {"m1":"车载配件", "img":require('../../assets/img/remenpinpai34.png')},
                    {"m1":"充电器", "img":require('../../assets/img/remenpinpai35.png')},
                ],
            }
        },
        props:["arrson"],
    }
</script>

<style lang="scss" scoped>
    .taba-wrapper{
        font-size: 12px;
        position: relative;
        .taba-a{
            width: 100%;
            padding: 15px 0 0 0;
            position: relative;
            .a-top{
               position: relative;
               height: 30px;
               padding: 0 10px 0 0;
                h4{
                    font-size: 14px;
                    font-weight: bold;
                    float: left;
                }
                span{
                    float: right;
                    display: inline-block;
                    span{

                    }
                }
            }
            .a-bottom{
                padding: 0 5px 0 0;
                a{
                    display: block;
                    text-align: center;
                    margin: 0 2px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
