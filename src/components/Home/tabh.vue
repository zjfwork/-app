<template>
    <div>
        <!-- 为你推荐 -->
        <div class="home-h">
            <img src="../../assets/img/weinituijian.png" alt />
            <div class="home-hh">
                <van-row>
                    <van-col span="12" v-for="(v, i) in wntjarr" :key="i" @click="godetail(i)">
                        <!-- <router-link to="/detail?id=1"><img :src="v.img" alt="" ></router-link> -->
                        <a><img :src="v.img" alt="" ></a>
                        <span>{{v.m1}}</span>
                        <p>￥<span>{{v.m2}}</span><span>看相似</span></p>
                        <!-- <van-button type="danger" to="/detail?id=i" size="small">立即购买</van-button> -->
                    </van-col>
                </van-row>

                <!-- 加载图片 -->
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-row>
                        <van-col span="12" class="wntjarritem" v-for="(item,i) in wntjarr" :key="i">
                            <!-- <a><img :src="item.img" alt="" ></a> -->
                            <router-link to="/detail?id=0"><img :src="item.img" alt="" ></router-link>
                            <span>{{item.m1}}</span>
                            <p>￥<span>{{item.m2}}</span><span>看相似</span></p>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //为你推荐
                wntjarr:[
                    // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":"https://img11.360buyimg.com/mobilecms/s372x372_jfs/t1/90139/34/1379/180822/5dbe8875E02dc2e95/c78c80a4116ee57d.jpg!q70.dpg.webp"},
                    {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../../assets/img/home-hh1.jpg')},
                    {"m1":"SanDisk闪迪CZ880128G SSD固态优盘", "m2":"199", "img":require('../../assets/img/home-hh2.jpg')},
                    {"m1":"Apple iPhone苹果XS Max[3期免息0首付]", "m2":"6899", "img":require('../../assets/img/home-hh3.jpg')},
                    {"m1":"联想威6 2020款十代英特尔酷睿i5/i7四核14.", "m2":"4899", "img":require('../../assets/img/home-hh4.jpg')},
                    {"m1":"男士纯棉长袖t恤秋季男装翻领衬衫领薄款体...", "m2":"99", "img":require('../../assets/img/home-hh5.jpg')},
                    {"m1":"AMD R5/R7 2600X 3600X 3700X..", "m2":"1899", "img":require('../../assets/img/home-hh6.jpg')},
                    {"m1":"自营微星(msi)GF63 15 6英寸轻薄窄边框.", "m2":"8899", "img":require('../../assets/img/home-hh7.jpg')},
                    {"m1":"联想L340 2019全新款八代酷睿i5/i7.", "m2":"3899", "img":require('../../assets/img/home-hh8.jpg')},

                ],
                // 加载图片
                finished: false,
                loading: false,
                num:1,
            }
        },
        methods:{
            // 加载图片
            onLoad() {
                setTimeout(() => {
                    let item =  {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../../assets/img/home-hh1.jpg')};
                    for (var i = 0; i < 4; i++) {
                        this.wntjarr.push(item);
                    }
                    this.num++;
                    // 加载状态结束
                    this.loading = false;
                    // 数据全部加载完成
                    if (this.num > 3) {
                        this.finished = true;
                    }
                }, 2000);
            },
            godetail(i){
                console.log(i)
                this.$router.push({path:'/detail',query:{id:i}}) 
            }
        }
    }
</script>


<style lang="scss" scoped>
 // 为你推荐
    .home-h{
        width: 100%;
        img{
            width: 100%;
            height: 30px;
        }
        .home-hh{
            width: 100%;
            position: relative;
            .van-col{
                padding: 5px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;                
                }
                span{
                    font-size: 14px;
                }
                p{
                    color: red;
                    font-size: 12px;
                    padding: 0 10px;
                    position: relative;
                    >span:nth-child(1){
                        color: red;
                        font-size: 16px;
                    }
                    >span:nth-child(2){
                        color: black;
                        font-size: 12px;
                        position: absolute;
                        top: 3px;
                        right: 10px;
                    }
                    >span:nth-child(2)::after{
                        content: "";
                        display:block;
                        clear: both;
                        width: 40px;
                        height: 20px;
                        background: transparent;
                        border:solid 1px #ccc;
                        position: absolute;
                        top: -1px;
                        left: -1px;
                    }
                }
                .van-button {
                    position: relative;
                }
            }
            
        }
    }
</style>
