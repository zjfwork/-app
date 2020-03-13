<template>
    <div>
        <!-- 商品详情 -->
            <div class="goods-details">
                <van-tabs animated title-inactive-color="black" title-active-color="red" line-height="0px">
                    <van-tab title="商品介绍">
                        <van-row>
                            <van-col span="24" v-for="(v, i) in detail1" :key="i">
                                <img :src="v.img" alt="">
                            </van-col>
                        </van-row>
                    </van-tab>
                    <van-tab title="规格参数">
                        <van-row>
                            <van-col span="24" v-for="(v, i) in detail1" :key="i">
                                <img :src="v.img" alt="">
                            </van-col>
                        </van-row>
                    </van-tab>
                    <van-tab title="售后保障">
                        <van-row>
                            <van-col span="24" v-for="(v, i) in detail1" :key="i">
                                <img :src="v.img" alt="">
                            </van-col>
                        </van-row>
                    </van-tab>
                </van-tabs>
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 商品详情
                detail1:[
                    // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":"https://img11.360buyimg.com/mobilecms/s372x372_jfs/t1/90139/34/1379/180822/5dbe8875E02dc2e95/c78c80a4116ee57d.jpg!q70.dpg.webp"},
                    // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../assets/img/home-hh1.jpg')},
                    // {"img":"https://img10.360buyimg.com/imgzone/jfs/t1/67576/35/12586/352179/5d9f0a05Ecf32441e/2933902231a0715e.jpg!q70.dpg.webp"},
                    // {"img":"https://img14.360buyimg.com/imgzone/jfs/t1/73867/32/14896/129861/5dc69b43E718c067a/1d797a78c2939f6c.jpg!q70.dpg.webp"},
                    // {"img":"https://img20.360buyimg.com/vc/jfs/t1/87361/11/552/496868/5dafc681Ed711a611/dcd8cedeed011025.jpg!q70.dpg.webp"},
                    // {"img":"https://img20.360buyimg.com/vc/jfs/t1/67260/20/13600/215718/5dafce70Ed0dde6b8/dc588e74fdf570b7.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/56162/16/13970/133421/5dafc377Eb9e4e57a/2359877cfb54b49d.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/106717/11/540/87398/5dafc377E31187424/5daa44cff7ef9c25.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/69264/11/13633/67023/5dafc377E4169b3fb/0f59c4824d0f72db.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/79281/4/13642/143395/5dafc379E2e55e25f/28042c7e69a54eee.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/89866/33/561/93119/5dafc378E8d058c8e/3669e3d4e815b24c.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/72366/17/13572/192702/5dafc378Eafe7e326/c7565222bc76b9e9.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/80581/37/13748/189519/5dafc378Ee64a5e81/7236c00a11df89ee.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/84417/30/14030/100562/5dafc379E6ae50b2f/4df34229a5fac5f1.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/105794/26/516/91587/5dafc379E6fc199b2/f5a7b44c20609f4c.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/66423/22/13633/127560/5dafc379Ea6d44b5d/32b121563b97d324.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/75565/35/13629/119465/5dafc379E5eed9fed/f8b66afa2363c680.jpg!q70.dpg.webp"},
                    {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/72906/12/13510/123362/5dafc37aE6ae128d0/9189834e82346654.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/75854/12/13697/134385/5dafc37aEe6d27121/658eebdd12708c58.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/56542/31/14013/89222/5dafc37aE97715748/d1b93290983d2ba2.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/90570/18/547/99838/5dafc37aE5a95eb63/f928f0cb08fa4152.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/53888/4/13902/83609/5dafc37aEddaa81c4/a8af652bf24d5f5c.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/86574/5/526/83934/5dafc3fbEe6698bb9/cce43aa1c4d2d5d7.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/91506/17/544/134869/5dafc3fbEdc59f005/1a79c999c1064e29.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/87571/5/580/93457/5dafc3fbEc70b27c4/4452922a5f43e498.jpg!q70.dpg.webp"},
                    // {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/95883/6/536/195287/5dafc3fbE34a69fc1/589d579c613bcd71.jpg!q70.dpg.webp"},
                    // {"img":"https://img11.360buyimg.com/imgzone/jfs/t1/44529/13/13140/500914/5d971fdeE6dd8825c/492a2250eedec7ac.jpg!q70.dpg.webp"},

                ],
            }
        },

        methods: {
            name() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
// 商品详情
        .goods-details{
            width: 100%;
            padding: 10px 0;
            // .van-tabs-card{
            //     width: 100% !important;
            //     color: black;
            //     .van-tabs__wrap{
            //         width: 100% !important;
            //         .van-tab--active{
            //             .van-ellipsis{
            //                 display: inline-block;
            //                 color: black !important;
            //             }
            //         }
            //     }
            // }
            
            img{
                width: 100%;
            }
        }
</style>
