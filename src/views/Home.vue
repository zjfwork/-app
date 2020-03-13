<template>
    <div class="home-wrapper">
        <!-- 导航栏 搜索框 -->
        <div class="home-a" ref="header" :style="bgcolor">
            <van-row>
                <van-col span="4">
                    <span class="a-left">
                        <van-icon name="wap-nav" @click="tocategory"/>
                    </span>
                </van-col>
                <van-col span="16">
                    <van-search label="" placeholder="请输入搜索关键词" v-model="value" @click="gosearch" shape="round" />
                    <!-- <img class="a-img" src="../assets/img/jd.png" alt=""> -->
                    <!-- <van-icon class="a-search" name="search" /> -->
                    <!-- <input class="a-inp" type="text"  placeholder="请输入搜索关键词" v-model="value" @click="gosearch"> -->
                </van-col>
                <van-col span="4">
                    <span class="a-right" @click="godenglu" v-show="!islogin">登录</span>
                    <span class="a-right" @click="gomy" v-show="islogin">我的</span>
                </van-col>
            </van-row>
        </div>
        <!-- 轮播图 -->
        <div class="home-b">
            <van-swipe :autoplay="5000" indicator-color="white">
                <van-swipe-item>
                    <div class="home-bb">
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/l1.jpg" alt />
                        </router-link>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="home-bb">
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/l2.jpg" alt />
                        </router-link>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="home-bb">
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/l3.jpg" alt />
                        </router-link>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="home-bb">
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/l4.jpg" alt />
                        </router-link>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 宫格 -->
        <div class="home-c">
            <van-swipe indicator-color="red">
                <van-swipe-item>
                    <van-grid :border="false" :column-num="5">
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/chaoshi.jpg" alt />
                            </router-link>
                            <span>京东超市</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/shumadianji.jpg" alt />
                            </router-link>
                            <span>数码电竞</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/jdfushi.jpg" alt />
                            </router-link>
                            <span>京东服饰</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/jdshengxian.jpg" alt />
                            </router-link>
                            <span>京东生鲜</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/jddaojia.jpg" alt />
                            </router-link>
                            <span>京东到家</span>
                        </van-grid-item>
                    </van-grid>
                    <van-grid :border="false" :column-num="5">
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/chongzhijiaofei.jpg" alt />
                            </router-link>
                            <span>充值缴费</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/pingou.jpg" alt />
                            </router-link>
                            <span>9.9元拼</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/lingquan.jpg" alt />
                            </router-link>
                            <span>领券</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/shengqian.jpg" alt />
                            </router-link>
                            <span>省钱</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/plushuiyuan.jpg" alt />
                            </router-link>
                            <span>会员</span>
                        </van-grid-item>
                    </van-grid>
                </van-swipe-item>
                <van-swipe-item>
                    <van-grid :border="false" :column-num="5">
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/quanqiugou.jpg" alt />
                            </router-link>
                            <span>海囤全球</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/jdpaimai.jpg" alt />
                            </router-link>
                            <span>京东拍卖</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/weipinhui.jpg" alt />
                            </router-link>
                            <span>唯品会</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/wan3c.jpg" alt />
                            </router-link>
                            <span>玩3C</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/woerma.jpg" alt />
                            </router-link>
                            <span>沃尔玛</span>
                        </van-grid-item>
                    </van-grid>
                    <van-grid :border="false" :column-num="5">
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/meizhuangguan.jpg" alt />
                            </router-link>
                            <span>美妆馆</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/lvxing.jpg" alt />
                            </router-link>
                            <span>京东旅行</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/paipaiershou.jpg" alt />
                            </router-link>
                            <span>拍拍二手</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/wuliuchaxun.jpg" alt />
                            </router-link>
                            <span>物流查询</span>
                        </van-grid-item>
                        <van-grid-item>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/quanbu.jpg" alt />
                            </router-link>
                            <span>全部</span>
                        </van-grid-item>
                    </van-grid>
                </van-swipe-item>
            </van-swipe>
        </div>

        <!-- 图片 -->
        <div class="home-img">
            <van-row>
                <van-col span="8"><img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/101189/23/2645/51045/5dd4ae2aEaa48301f/67127f1640257998.jpg!q70.jpg.dpg" alt=""></van-col>
                <van-col span="8"><img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/58305/7/16263/67108/5dd4b0e0Ee733f997/5041a71c35dbdcea.jpg!q70.jpg.dpg" alt=""></van-col>
                <van-col span="8"><img src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/98260/13/2658/42564/5dd4b191Eb507cf7c/db1f654c390dde9b.jpg!q70.jpg.dpg" alt=""></van-col>
            </van-row>
        </div>
                
        <!-- 秒杀 -->
        <div class="home-d">
            <div class="d-top">
                <van-row>
                    <van-col span="12">
                       <div class="time-box1">
                            <span>秒杀</span>
                            <span>0</span>
                            <span>0</span>
                            <span>点场</span>
                        </div>
                        <div class="time-box2">
                            <span>0</span>
                            <span>0</span>
                            <span class="cur">:</span>
                            <span>0</span>
                            <span>0</span>
                            <span class="cur">:</span>
                            <span>0</span>
                            <span>0</span>
                        </div>
                    </van-col>
                    <van-col span="12">
                         <a href="javascript:;">更多秒杀</a> 
                         <span><van-icon name="arrow" /></span>
                    </van-col>
                </van-row>
            </div>
            <div class="d-bottom">
                <div class="swiper-container">
                    <div class="swiper-wrapper swiper-img">
                        <div class="swiper-slide" v-for="(v, i) in msarr" :key="i">
                            <router-link to="/detail?id=0">
                                <img :src=v.img alt="">
                                <span>￥{{v.m1}}</span>
                                <span>￥{{v.m2}}</span>
                            </router-link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 东家小院 -->
        <div class="home-e">
            <img src="../assets/img/dongjiaxiaoyuan.jpg" alt />
            <div class="home-ee-top">
                <van-row>
                    <van-col span="12">
                        <div class="ee-left">
                            <span>极客密所</span>
                            <p>打造极客style</p>
                        </div>
                        <div class="ee-right">
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/mrg1.jpg" alt />
                            </router-link>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/mrg2.jpg" alt />
                            </router-link>
                        </div>
                    </van-col>
                    <van-col span="12">
                        <div class="ee-left">
                            <span>品质生活</span>
                            <p>音乐品质生活</p>
                        </div>
                        <div class="ee-right">
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/mrg3.jpg" alt />
                            </router-link>
                            <router-link to="/detail?id=0">
                                <img src="../assets/img/mrg4.jpg" alt />
                            </router-link>
                        </div>
                    </van-col>
                </van-row>
            </div>
            <div class="home-ee-bottom">
                <van-row>
                    <van-col span="6">
                        <div>
                            <strong>机惠来了</strong>
                            <p>低价手机</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg5.jpg" alt />
                        </router-link>
                    </van-col>
                    <van-col span="6">
                        <div>
                            <strong>职场精英</strong>
                            <p>办公室装备</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg6.jpg" alt />
                        </router-link>
                    </van-col>
                    <van-col span="6">
                        <div>
                            <strong>极客视界</strong>
                            <p>必备清单</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg7.jpg" alt />
                        </router-link>
                    </van-col>
                    <van-col span="6">
                        <div>
                            <strong>数码宝贝</strong>
                            <p>数码小达人</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg8.jpg" alt />
                        </router-link>
                    </van-col>
                </van-row>
            </div>
        </div>

        <!-- 每日逛 -->
        <div class="home-f">
            <img src="../assets/img/meiriguang.jpg" alt />
            <div class="home-ff">
                <van-grid :border="false" :column-num="4">
                    <van-grid-item>
                        <div>
                            <strong>免息星球</strong>
                            <p>白条免息购</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img//mrg9.jpg" alt />
                        </router-link>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <strong>品牌闪购</strong>
                            <p>享品质好物</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg10.jpg" alt />
                        </router-link>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <strong>品牌秒杀</strong>
                            <p>低价抢大牌</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg11.jpg" alt />
                        </router-link>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <strong>京东直播</strong>
                            <p>好货即刻买</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg12.jpg" alt />
                        </router-link>
                    </van-grid-item>
                </van-grid>
                <van-grid :border="false" :column-num="4">
                    <van-grid-item>
                        <div>
                            <strong>排行榜</strong>
                            <p>热销推荐</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg13.jpg" alt />
                        </router-link>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <strong>拍拍好物</strong>
                            <p>iphone 5折起</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg14.jpg" alt />
                        </router-link>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <strong>新品首发</strong>
                            <p>京东小魔方</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg15.jpg" alt />
                        </router-link>
                    </van-grid-item>
                    <van-grid-item>
                        <div>
                            <strong>发现好货</strong>
                            <p>发现品质生活</p>
                        </div>
                        <router-link to="/detail?id=0">
                            <img src="../assets/img/mrg16.jpg" alt />
                        </router-link>
                    </van-grid-item>
                </van-grid>
            </div>
        </div>

        <!-- 通知栏 -->
        <div class="home-g">
            <van-notice-bar
                text="最新双十一游戏本看暗影精灵5，总有一款适合你的配置 
            推荐结实耐用的笔记本，该怎么挑选
            热门全新升级的三星笔记本电脑，一定不要错过"
                left-icon="volume-o"
            />
        </div>

        <!-- 为你推荐 -->
        <tabh></tabh>
        
    </div>
</template>

<script>
import Swiper from "swiper";
import tabh from "@/components/Home/tabh.vue";

// import homeImg from "../assets/static/home/homeImg.json";
// import "swiper/dist/js/swiper.js";
export default {
    data() {
        return {
            value: "",
            effect: 0,
            islogin:false,
            //秒杀
            msarr:[
                {"m1":"99", "m2":"130", "img":require('../assets/img/detail01.jpg')},
                {"m1":"4999", "m2":"5500", "img":require('../assets/img/detail02.jpg')},
                {"m1":"199", "m2":"300", "img":require('../assets/img/detail03.jpg')},
                {"m1":"4399", "m2":"5199", "img":require('../assets/img/detail04.jpg')},
                {"m1":"2999", "m2":"3999", "img":require('../assets/img/detail05.jpg')},
                {"m1":"1099", "m2":"1300", "img":require('../assets/img/detail06.jpg')},
                {"m1":"8269", "m2":"9499", "img":require('../assets/img/detail07.jpg')},
            ],
            //为你推荐
            // wntjarr:[
            //     // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":"https://img11.360buyimg.com/mobilecms/s372x372_jfs/t1/90139/34/1379/180822/5dbe8875E02dc2e95/c78c80a4116ee57d.jpg!q70.dpg.webp"},
            //     {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../assets/img/home-hh1.jpg')},
            //     {"m1":"SanDisk闪迪CZ880128G SSD固态优盘", "m2":"199", "img":require('../assets/img/home-hh2.jpg')},
            //     {"m1":"Apple iPhone苹果XS Max[3期免息0首付]", "m2":"6899", "img":require('../assets/img/home-hh3.jpg')},
            //     {"m1":"联想威6 2020款十代英特尔酷睿i5/i7四核14.", "m2":"4899", "img":require('../assets/img/home-hh4.jpg')},
            //     {"m1":"男士纯棉长袖t恤秋季男装翻领衬衫领薄款体...", "m2":"99", "img":require('../assets/img/home-hh5.jpg')},
            //     {"m1":"AMD R5/R7 2600X 3600X 3700X..", "m2":"1899", "img":require('../assets/img/home-hh6.jpg')},
            //     {"m1":"自营微星(msi)GF63 15 6英寸轻薄窄边框.", "m2":"8899", "img":require('../assets/img/home-hh7.jpg')},
            //     {"m1":"联想L340 2019全新款八代酷睿i5/i7.", "m2":"3899", "img":require('../assets/img/home-hh8.jpg')},

            // ],
            // finished: false,
            // loading: false,
            // num:1,
            bgcolor: "background-color: rgba(228, 49, 48, 0);",
        };
    },
    methods: {
        // 加载图片
        // onLoad() {
        //     setTimeout(() => {
        //         let item =  {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../assets/img/home-hh1.jpg')};
        //         for (var i = 0; i < 4; i++) {
        //             this.wntjarr.push(item);
        //         }
        //         this.num++;
        //         // 加载状态结束
        //         this.loading = false;
        //         // 数据全部加载完成
        //         if (this.num > 3) {
        //             this.finished = true;
        //         }
        //     }, 2000);
        // },

        tocategory(){
            this.$router.push("/category");
        },
        gosearch(){
            this.$router.push('/search');
        },
        godenglu(){
            this.$router.push('/login');
        },
        gomy(){
            this.$router.push('/my');
        },
        // godetail(i){
        //     console.log(i)
        //     this.$router.push({path:'/detail',query:{id:i}}) 
        // }
    },
    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        // console.log(this.$refs.header);
        // console.log(this.$refs.header.offsetHeight);
        // this.$refs.header.style.backgroundColor = 'rgba(201, 21, 35, 1)';
        var hh = this.$refs.header.offsetHeight;

        //  ！！！注意！！！  ==== 要使用 箭头函数才行
        window.onscroll = () => {
            var ttop = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(ttop);
            if( ttop > hh ){
                console.log("aaaa")
                this.bgcolor = "background-color: rgba(228, 49, 48, 1);";
            }else{
                console.log("bbbb")
                this.bgcolor = "background-color: rgba(228, 49, 48, 0);";
            }
        }


    },
    created(){
        if(localStorage.login){
            this.islogin = true;
        }else{
            this.islogin = false;
        }
    },
    components:{
        tabh,
    }
};
</script>

<style lang="scss">
.home-wrapper {
    position: relative;
    padding-bottom: 50px;
    /* 导航栏 搜索框 */
    .home-a {
        width: 100%;
        // background: rgba(201, 21, 35, 0) ;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        color: white;
        .a-left {
            display: block;
            text-align: center;
            line-height: 50px;
            font-size: 30px;
        }
        .a-right {
            display: block;
            text-align: center;
            line-height: 44px;
        }
        .van-search,
        .van-search--show-action {
            background: transparent !important;
            padding:  6px ;
        }
        
    }
    /* 轮播图 */
    .home-b {
        position: relative;
        .home-bb {
            width: 100%;
            height: 200px;
            /* background:#ccc; */
            /* text-align: center; */
            img {
                width: 100%;
                height: 200px;
            }
        }
    }
    /*  宫格  */
    .home-c {
        font-size: 11px;
        text-align: center;
        padding: 5px 0 7px 0;
        img {
            width: 35px;
            height: 35px;
        }
        .van-grid-item__content,
        .home-c .van-grid-item__content--center {
            padding: 5px !important;
        }
        .van-swipe__indicators {
            margin-bottom: -12px !important;
            z-index: 1000;
        }
        .van-swipe__indicator {
            width: 10px;
            height: 4px;
        }
    }
    // 图片
    .home-img{
        width: 100%;
        img{
            width: 100%;
        }
    }
    /* 秒杀 */
    .home-d {
        width: 100%;
        background-color: #f0f0f0;
        // background-color: white;
        font-size: 12px;
        padding: 5px 0;
        position: relative;
        .d-top{
            position: relative;
            .van-col:nth-child(1){
                position: relative;
                .time-box1{
                    display: inline-block;
                    font-weight: bold;
                    position: absolute;
                    left: 10px;
                }
                .time-box2{
                    display: inline-block;
                    margin-left: 80px;
                }
            }
            .van-col:nth-child(2){
                position: relative;
                color: red;
                >a{
                    display: block;
                    position: absolute;
                    right: 20px;
                    color: red !important;
                }
                span{
                    display: block;
                    position: absolute;
                    right: 10px;
                    top: 2px;
                }
            }
            
        }
        .d-bottom{
            width: 100%;
            padding: 5px 10px 0 10px;
            .swiper-img{
                width: 100%;
                .swiper-slide{
                    a{
                        // text-align: center;
                        padding: 5px;
                        img{
                            width: 100%;
                            margin-right: 10px;
                        }
                        span:nth-child(2){
                            width: 100%;
                            text-align: center;
                            display: inline-block;
                            color: red;
                            font-size: 14px;
                        }
                        span:last-child{
                            width: 100%;
                            text-align: center;
                            display: inline-block;
                            font-size: 12px;
                            text-decoration: line-through;
                            margin-top: -15px;
                        }
                    }
                }
            }
        }
    }
    /* 东家小院 */
    .home-e {
        position: relative;
        padding: 10px;
        img {
            width: 100%;
            height: 30px;
        }
        .home-ee-top{
            .ee-left {
                padding: 0 0 0 10px;
                span {
                    display: block;
                    font-size: 16px;
                    color: #1777fb;
                    font-weight: bold;
                }
                p {
                    font-size: 10px;
                }
            }
            .ee-right {
                display: flex;
                text-align: center;
                a {
                    display: block;
                    flex: auto;
                    img {
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
        .home-ee-bottom {
            position: relative;
            text-align: center;
            > div {
                margin-top: 10px;
                strong{
                    font-size: 14px;
                }
                p {
                    font-size: 12px;
                    line-height: 20px;
                }
            }
            a {
                display: block;
                margin-top: -10px;
                img {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
    /* 每日逛 */
    .home-f {
        img {
            width: 100%;
            height: 30px;
        }
        .home-ff {
            .van-grid-item__content,
            .van-grid-item__content--center {
                padding: 5px !important;
                > div {
                    strong {
                        color: #f96ba6;
                        font-size: 14px;
                    }
                    p {
                        font-size: 10px;
                    }
                }
                a {
                    img {
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
    }
    // 通知栏
    .home-g{

    }
    // 为你推荐
    // .home-h{
    //     width: 100%;
    //     img{
    //         width: 100%;
    //         height: 30px;
    //     }
    //     .home-hh{
    //         width: 100%;
    //         position: relative;
    //         .van-col{
    //             padding: 5px;
    //             position: relative;
    //             img{
    //                 width: 100%;
    //                 height: 100%;                
    //             }
    //             span{
    //                 font-size: 14px;
    //             }
    //             p{
    //                 color: red;
    //                 font-size: 12px;
    //                 padding: 0 10px;
    //                 position: relative;
    //                 >span:nth-child(1){
    //                     color: red;
    //                     font-size: 16px;
    //                 }
    //                 >span:nth-child(2){
    //                     color: black;
    //                     font-size: 12px;
    //                     position: absolute;
    //                     top: 3px;
    //                     right: 10px;
    //                 }
    //                 >span:nth-child(2)::after{
    //                     content: "";
    //                     display:block;
    //                     clear: both;
    //                     width: 40px;
    //                     height: 20px;
    //                     background: transparent;
    //                     border:solid 1px #ccc;
    //                     position: absolute;
    //                     top: -1px;
    //                     left: -1px;
    //                 }
    //             }
    //             .van-button {
    //                 position: relative;
    //             }
    //         }
            
    //     }
    // }
    
}

</style>