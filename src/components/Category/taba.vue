<template>
    <div class="taba-wrapper">
        <van-row>
            <!-- 热门分类 -->
            <van-col span="24">
                <div class="taba-a">
                    <div class="a-top">
                        <h4>热门分类</h4>
                        <span>排行榜<span><van-icon name="arrow" /></span></span>
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

            <!-- 家电热搜 -->
            <van-col span="24">
                <div class="taba-a">
                    <div class="a-top">
                        <h4>家电热搜</h4>
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
        </van-row>
        
       
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flarr1:[
                    {"m1":"手机", "img":require('../../assets/img/rementuijian1.png')},
                    {"m1":"耳机", "img":require('../../assets/img/rementuijian2.png')},
                    {"m1":"华为", "img":require('../../assets/img/rementuijian3.png')},
                    {"m1":"电饭煲", "img":require('../../assets/img/rementuijian4.png')},
                    {"m1":"电磁炉", "img":require('../../assets/img/rementuijian5.png')},
                    {"m1":"路由器", "img":require('../../assets/img/rementuijian6.png')},
                    {"m1":"避孕套", "img":require('../../assets/img/rementuijian7.png')},
                    {"m1":"口红", "img":require('../../assets/img/rementuijian8.png')},
                    {"m1":"吹风机", "img":require('../../assets/img/rementuijian9.png')},
                    {"m1":"三只松鼠", "img":require('../../assets/img/rementuijian10.png')},
                    {"m1":"洗衣液", "img":require('../../assets/img/rementuijian11.png')},
                    {"m1":"保温杯", "img":require('../../assets/img/rementuijian12.png')},
                    {"m1":"微波炉", "img":require('../../assets/img/rementuijian13.png')},
                    {"m1":"洗发水", "img":require('../../assets/img/rementuijian14.png')},
                    {"m1":"卫生巾", "img":require('../../assets/img/rementuijian15.png')},
                ],
                flarr2:[
                    {"m1":"家电热搜", "img":require('../../assets/img/rementuijian16.png')},
                    {"m1":"冰箱", "img":require('../../assets/img/rementuijian17.png')},
                    {"m1":"洗衣机", "img":require('../../assets/img/rementuijian18.png')},
                ],
            }
        },
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
