<template>
    <div class="detail-wrapper">
        <div class="detail-a">
            <van-button class="arrowbtn" icon="arrow-left" type="info" color="#666666" @click="pathgo"/>
            <van-button class="ellipsisbtn" icon="ellipsis" type="info" color="#666666" @click="showPopup"/>
             <!-- 二级菜单 -->
            <div v-show="show" class="a-show">
                <ul>
                    <li><span><van-icon name="wap-home-o"/></span><router-link to="/home" >首页</router-link></li>
                    <li><span><van-icon name="search"/></span><a>分类搜索</a></li>
                    <li><span><van-icon name="user-o" /></span><router-link to="/my">我的</router-link></li>
                    <li><span class="iconfont icon-zuji"></span><router-link to="/cart">浏览记录</router-link></li>
                    <li><span><van-icon name="like-o" /></span><a>我的关注</a></li>
                    <li><span><van-icon name="share" /></span><a>分享</a></li>
                </ul>
            </div>
        </div>
        <div class="goods">
            <!-- 图片 -->
            <div class="goods-a">
                <van-swipe class="goods-swipe" :autoplay="3000">
                    <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                        <img :src=thumb />
                        <!-- <img :src="thumb"/> -->
                        <!-- {{thumb}} -->
                    </van-swipe-item>
                </van-swipe>
            </div>
            
            <!-- 信息 运费 剩余-->
            <div class="goods-b">
               <!-- <van-cell-group>
                    <van-cell>
                        <div class="goods-title">{{ goods.title }}</div>
                        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
                    </van-cell>
                    <van-cell class="goods-express">
                        <van-col span="10">运费：{{ goods.express }}</van-col>
                        <van-col span="14">剩余：{{ goods.remain }}</van-col>
                    </van-cell>
                </van-cell-group> -->
                <div class="b-top">
                    <div class="b-left">
                        <!-- <div class="goods-price">{{ formatPrice(goods.price) }}</div> -->
                        <div class="goods-price"><span>￥</span>{{ goods.price }}</div>
                    </div>
                    <div class="b-right">
                        <div class="jjtx">
                            <van-icon name="gold-coin-o" />
                            <p>降价提醒</p>
                        </div>
                        <div class="sc" @click="addcollection" >
                            <van-icon name="star-o"/>
                            <!-- <van-icon name="star-o" v-show="this.$store.state.Cart.iscollection"/>
                            <van-icon name="star" v-show="!this.$store.state.Cart.iscollection"/> -->
                            <p>收藏</p>
                        </div>
                    </div>
                </div>
                <div class="b-bottom">
                    <div class="bb-top">
                        <div class="goods-title">{{ goods.title }}</div>
                        <div class="goods-title1">{{ goods.title1 }}</div>
                    </div>
                     <van-cell-group>
                        <!-- <van-cell class="goods-express">
                            <van-col span="10">运费：{{ goods.express }}</van-col>
                            <van-col span="14">剩余：{{ goods.remain }}</van-col>
                        </van-cell> -->
                    </van-cell-group>
                </div>
            </div>
            
            <!-- 优惠 白条 -->
            <div class="goods-c">
                <van-cell-group>
                    <van-cell title="优惠" label="体验卡免费领，超大流量任性用 该商品共有2款优惠套装" value="..."/>
                    <van-cell title="白条" label="12期免息" value="..."/>
                </van-cell-group>
            </div>
            
            <div class="goods-d">
                <van-cell-group>
                    <van-cell title="已选" label="亮黑色,8GB+256GB,5G  本商品支持保障服务、京东服务，点击可选服务" value="..."></van-cell>
                    <van-cell title="送至" label="北京朝阳区三环到四环之间 11:10前下单， 预计今天送达" value="..."/>
                    <van-cell title="重量" label="0.55kg" value="..."/>
                </van-cell-group>
            </div>
            
            <div class="goods-e">
                <van-cell-group class="goods-cell-group"><van-cell title="评价" value="共2万+条" is-link  /></van-cell-group>
            </div>

            <!-- 商品详情 -->
            <!-- <aa></aa> -->
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
            
            <div>
                <a href="javascript:scroll(0,0)">返回顶部</a>
            </div>

            <van-goods-action>
                <!-- <van-goods-action-icon icon="chat-o" @click="sorry">联系客服</van-goods-action-icon>
                <van-goods-action-icon icon="shop-o" text="进店" /> -->
                <!-- <van-goods-action-icon icon="cart-o" @click="onClickCart" :info="this.num" >购物车</van-goods-action-icon> -->
                <van-goods-action-icon icon="cart-o" @click="onClickCart" :info="num" >购物车</van-goods-action-icon>
                <van-goods-action-button type="warning" @click="addCar">加入购物车</van-goods-action-button>
                <van-goods-action-button type="danger" @click="addconfirm">立即购买</van-goods-action-button>
            </van-goods-action>
        </div>
    </div>
</template>

<script>
require("../assets/img/cp1.jpg")
// import aa from "./aa.vue"

export default {
    data() {
        return {
            goods: {
                // title: '美国伽力果（约680g/3个）',
                // price: 2680,
                // express: '免运费',
                // remain: 19,
                // thumb: [
                // 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                // 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                // ]
            },
            
            ajaxgoodslists: [
                {
                    title: '华为Mate30pro 5G版手机亮黑全网通(8G+256G)',
                    title1: '[华为官方直供，全国联保]全系现货当天发! [赠]品牌无线充电器+双耳真无线蓝牙耳机',
                    price: 4899.00,//
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        // "../assets/img/cp1.jpg",
                        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/49790/10/15656/156597/5dc9862aEf26fc821/8f0fff0e91ffecf2.jpg!q80.dpg.webp',
                        'https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/75813/23/13543/43128/5dafce28E225ff800/db0ee928d4915e1e.jpg!q70.dpg.webp',
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/56087/40/14266/32756/5dafce29E7caa8d7e/7985422c83778329.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/58497/16/14139/119658/5dafce29E4fcdf038/a6a3b848b1d6d034.jpg!q70.dpg.webp"
                    ],
                    shopname:"华为专营店",
                }, 
                {
                    title: '闪迪(SanDisk) 128GB USB3.1 U盘CZ880至尊超极速黑色读速420MB/s写380MB/s固态',
                    title1: '此商品将于2019-11-24,00点结束闪购特卖',
                    price: 199.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/67080/19/12824/402147/5da03cebE45b62004/8f5cf3da40c69a8f.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t3853/22/1743411711/120403/4d6e33f0/5899832bN01606f69.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t3295/66/5954538934/95294/b89fad77/5899834cNafc75e1c.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t27580/365/1058692657/105264/79b331e6/5bc056fdNbd0a3721.jpg!q80.dpg.webp"
                    ],
                    shopname:"闪迪专营店",

                }, 
                {
                    title: 'Apple iPhone XS (A2100) 256GB金色移动联通电信4G手机',
                    title1: 'iPhoneXS系列性能强劲，样样出色，现特惠来袭',
                    price: 6899.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/2909/16/3487/660545/5b99722aE698d1604/1a71d0139f672b3c.png!q80.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t25537/106/1333713647/149005/7969cf69/5baddb39N3a44fca3.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t27031/150/416637491/46106/66bd66f/5baddb3bNc9c7582c.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t26437/194/425174553/250855/8838fdcb/5baddb40Nb3c78056.jpg!q70.dpg.webp",
                    ],
                    shopname:"Apple专营店",

                }, 
                {
                    title: '联想威6 2020款十代英特尔酷睿i5/i7四核14英寸全面屏游戏办公设计制图轻薄笔记本电脑标配版i5-10210U 8G 512G固态',
                    title1: '威6酷睿十代爆款新品!十代酷睿，14英寸 高清微边框屏幕，超轻薄金属外壳，开机指纹二合一',
                    price: 4899.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/89802/20/2088/90831/5dcaddd7Ea94d201f/0cb3031a5653deff.jpg!q80.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/67626/36/15821/116844/5dd4c1a3E5cb49563/34e05e3450899a0a.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/48644/26/14675/87124/5db90083E93c91ef8/904a634966e09dc0.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/80739/24/14222/139475/5db9211dE93825ed5/48b57f6474234a6d.jpg!q70.dpg.webp",
                    ],
                    shopname:"联想专营店",

                }, 
                {
                    title: '秋冬季加绒加厚男土长袖翻领T恤纯棉商务休闲POLO衫中青年保罗男装秋',
                    title1: '新款加绒不加价，赠送运费险，十五天无理由退换货[支持货到付款]',
                    price: 99.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/102607/11/2669/185900/5dd41008E943870d9/5b27cb809a9665f4.jpg!q80.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/104329/39/1487/113876/5dbfd518E8c401ba8/e314711a770eea5c.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/84089/28/14601/113622/5dbfd517E1107e4ea/687b767fc07ddae9.jpg!q70.dpg.webp",
                    ],
                    shopname:"秋雅专营店",

                }, 
                {
                    title: 'AMD R5/R7 2600X/3600X/3700X搭微星B450 MORTAR cpu主板套装微星B450MMORTAR迫击炮R5 3600',
                    title1: '所有CPU主板套装质保三年，官方可查防伪，全新未拆',
                    price: 1899.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/67654/18/6335/128572/5d49424bEae120e0f/1d05056a640df7fb.jpg!q80.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/45052/8/7100/186415/5d494251Ed52d571e/d6d38fa09de71fa7.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/44680/3/6902/194331/5d494253E1462f51d/8158772a41db259f.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/57162/9/7057/51154/5d494256E3a14f7d5/3fad0265bd2c55e9.jpg!q70.dpg.webp",
                    ],
                    shopname:"AMD专营店",

                }, 
                {
                    title: '微星(msi)GF63 15.6英寸轻薄窄边框游戏笔记本(九代i5-9300H 8G 512GNVMe SSD GTX1650MQ加购可享上门服',
                    title1: '[.上门服务限时优惠] GF63搭载九代酷睿5,1650MQ显卡,紅色背光键盘， 铝合金拉丝设计咨',
                    price: 8899.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/54302/28/8387/456480/5d5fbca0E2f1f2589/f5125fad16296330.jpg!q80.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/36634/38/1224/53125/5cb059f7E092a65bf/8cb1dd2c10cf7413.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/21056/34/15711/89034/5cb059feE82a41b00/115ace84711ed97f.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/22826/38/15443/82633/5cb05a08Ea1aa6f31/aeccef5ac9d4ab61.jpg!q70.dpg.webp",
                    ],
                    shopname:"微星专营店",
                }, 
                {
                    title: '联想L 3402019全新款八代酷睿i5/i7四核超高性能笔记本电脑游戏本轻薄本设计师办公商务本八代四核i7 | 8G 1T+512G固态精装升级新MX230 2G独显曜光银2019秒杀款',
                    title1: '19年爆款全能本|全新L领航高端系列I高颜值窄边框近3万热评保障',
                    price: 3899.00,
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/51788/10/16116/225174/5dd43228E0c4c98d7/0da678dfd8ea1dd3.jpg!q80.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/14659/18/14681/132759/5ca9c89fE903524bf/64fb64cf4f6e86fe.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/32945/24/9911/119783/5ca9da76Ef55d0764/1504459fa602eafd.jpg!q70.dpg.webp",
                        "https://m.360buyimg.com/mobilecms/s720x720_jfs/t1/24795/15/14781/118860/5ca9de06Eca8ae361/b753beca30861419.jpg!q70.dpg.webp",
                    ],
                    shopname:"联想专营店",

                },
                {
                    title: '商品aaa',
                    price: 4999.99,// ￥4999.99
                    express: '免运费',
                    remain: 19,
                    thumb: [
                        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/90139/34/1379/180822/5dbe8875E02dc2e95/c78c80a4116ee57d.jpg!q80.dpg.webp",
                        // 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                        // 'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                    ],
                    shopname:"hahaha专营店",
                },
            ],
            show:false,
            num:"",
            // 商品详情
            detail1:[
                // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":"https://img11.360buyimg.com/mobilecms/s372x372_jfs/t1/90139/34/1379/180822/5dbe8875E02dc2e95/c78c80a4116ee57d.jpg!q70.dpg.webp"},
                // {"m1":"华为HUAWEI Mate30 Pro 5G版手机", "m2":"4899", "img":require('../assets/img/home-hh1.jpg')},
                {"img":"https://img10.360buyimg.com/imgzone/jfs/t1/67576/35/12586/352179/5d9f0a05Ecf32441e/2933902231a0715e.jpg!q70.dpg.webp"},
                {"img":"https://img14.360buyimg.com/imgzone/jfs/t1/73867/32/14896/129861/5dc69b43E718c067a/1d797a78c2939f6c.jpg!q70.dpg.webp"},
                {"img":"https://img20.360buyimg.com/vc/jfs/t1/87361/11/552/496868/5dafc681Ed711a611/dcd8cedeed011025.jpg!q70.dpg.webp"},
                {"img":"https://img20.360buyimg.com/vc/jfs/t1/67260/20/13600/215718/5dafce70Ed0dde6b8/dc588e74fdf570b7.jpg!q70.dpg.webp"},
                {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/56162/16/13970/133421/5dafc377Eb9e4e57a/2359877cfb54b49d.jpg!q70.dpg.webp"},
                {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/106717/11/540/87398/5dafc377E31187424/5daa44cff7ef9c25.jpg!q70.dpg.webp"},
                {"img":"https://img30.360buyimg.com/popWaterMark/jfs/t1/69264/11/13633/67023/5dafc377E4169b3fb/0f59c4824d0f72db.jpg!q70.dpg.webp"},
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
            active:0,
            // iscollection:,//是否收藏
            // iscollection:true,//是否收藏
            collectionGoods: this.$store.state.Cart.collectionGoods,

        };
    },

    methods: {
        formatPrice() {
            return '¥' + (this.goods.price / 100).toFixed(2);
        },
        onClickCart() {
            this.$router.push('cart');
        },
        
        addCar() {
            this.num++;
            this.$store.commit('add', {
                id: this.$route.query.id,
                title: this.goods.title,
                desc: '亮黑色，全网通',
                price: this.goods.price,
                num: 1,
                thumb: this.goods.thumb[0],
                shopname: this.goods.shopname,
            });
        },
        addconfirm(){
            this.$store.commit('addconfirm', {
                id: this.$route.query.id,
                title: this.goods.title,
                desc: '亮黑色，全网通',
                price: this.goods.price,
                num: 1,
                thumb: this.goods.thumb[0],
                shopname: this.goods.shopname,
            });

            this.$router.push("/confirm");
        },
        //加入收藏 
        addcollection(){
            this.$store.commit('addcollection', {
                id: this.$route.query.id,
                title: this.goods.title,
                desc: '亮黑色，全网通',
                price: this.goods.price,
                num: 1,
                thumb: this.goods.thumb[0],
                shopname: this.goods.shopname,
            });
        },

        pathgo() {
            this.$router.go(-1); //返回上一级
        },
        showPopup(){ 
            this.show = !this.show;
        }
    },
    created() {
        window.console.log(this.$route.query.id);//要传id， 不然出错
        //   ajax请求数据
        this.goods = this.ajaxgoodslists[this.$route.query.id];
    },
    computed:{
        
    },
    watch:{
        // newObj(newValue){
        //     this.name = newValue.name;
        //     this.school = newValue.school ;
        //     this.zy = newValue.zy;
        // }
    },
    components:{
        // aa,
    }
};
</script>

<style lang="scss">

.detail-wrapper{
    position: relative;
    background: #f0f0f0;
    // 头部
    .detail-a{
        position: fixed;
        width: 100%;
        height: 45px;
        z-index: 999;
        .arrowbtn{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            top: 7.5px;
            left: 10px;
            .van-icon-arrow-left{
                position: absolute;
                top: -7px;
                left: 7px;
            }
        }
        .ellipsisbtn {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            top: 5px;
            right: 10px;
            .van-icon-ellipsis{
                position: absolute;
                top: -7px;
                left: 7px;
            }
        }
        //二级菜单
        .a-show{
            width: 125px;
            height: 240px;
            background: rgba(0,0,0,0.85);
            position: absolute;
            top: 53px;
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
    
    .goods {
        position: relative;
        padding-bottom: 90px;
        .van-cell{
            color: gray;
            font-size: 12px;
        }
        .goods-a{
            
        }
        .goods-b{
            position: relative;
            background: white;
            // padding: 5px 0;
            width: 100%;
            // .goods-title {
            //     font-size: 16px;
            // }
            
            // .goods-price{
            //     color: red;
            //     font-size: 16px;
            // }
            // .goods-express {
            //     color: #999;
            //     font-size: 12px;
            //     padding: 5px 15px;
            // }
            .b-top{
                position: relative;
                width: 100%;
                height: 50px;
                // background: white;
                .b-left{
                    position: absolute;
                    top: 0;
                    left: 10px;
                    color: red;
                    font-size: 24px;
                    line-height: 50px;
                    .goods-price{
                        span{
                            font-size: 16px;
                        }
                    }
                }
                .b-right{
                    width: 80px;
                    height: 50px;
                    position: absolute;
                    top:0;
                    right: 10px;
                    text-align: center;
                    // line-height: 20px;
                    color: gray;
                    padding: 5px 0 0 0 ;
                    .jjtx{
                        width: 40px;
                        height: 40px;
                        float: left;
                        p{
                            font-size: 10px;
                        }
                    }
                    .sc{
                        width: 40px;
                        height: 40px;
                        float: right;
                        p{
                            font-size: 10px;
                        }
                    }
                }
            }
            .b-bottom{
                // position: absolute;
                // top: 10px;
                // margin-top: 30px;
                // .goods-title{
                //     padding: 0;
                // }
                .bb-top{
                    width: 100%;
                    padding: 0 10px 10px 10px;
                    .goods-title{
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .goods-title1{
                        font-size: 12px;
                        color: gray;
                    }
                }
            }
            
        }
        .goods-c{
            position: relative;
            margin-top: 10px;
            // 优惠
            .van-cell:nth-child(1){
                position: relative;
                .van-cell__label{
                    width: 170px;
                    color: black;
                    position: absolute;
                    top: 5px;
                    left: 60px;
                }
            }
            // 白条
            .van-cell:nth-child(2){
                position: relative;
                .van-cell__label{
                    color: black;
                    position: absolute;
                    top: 10px;
                    left: 60px;
                }
            }
        }
        .goods-d{
            margin-top: 10px;
            // 已选
            .van-cell:nth-child(1){
                position: relative;
                .van-cell__label{
                    width: 170px;
                    color: black;
                    position: absolute;
                    top: 5px;
                    left: 60px;
                }
                
            }
            // 送至
            .van-cell:nth-child(2){
                position: relative;
                .van-cell__label{
                    width: 170px;
                    color: black;
                    position: absolute;
                    top: 5px;
                    left: 60px;
                }
            }
            //重量
            .van-cell:nth-child(3){
                position: relative;
                .van-cell__label{
                    color: black;
                    font-size: 14px;
                    position: absolute;
                    top: 10px;
                    left: 60px;
                }
            }
        }
        .goods-e{
            //评价
            .van-cell__value{
                position: relative;
               span{
                   font-size: 12px;
                   display: block;
                    position: absolute;
                    top: 0;
               }
            }
        }
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
        //图片
        .goods-swipe {
            img {
                width: 100%;
                display: block;
            }
        }
        // 右边3个点
        .van-cell__value{
            position: relative;
            span{
                display: block;
                font-size: 30px;
                position: absolute;
                top: -10px;
                right: 0;
            }
        }

        // &-cell-group {
        //     margin: 15px 0;
        //     .van-cell__value {
        //         color: #999;
        //     }
        // }
        // &-tag {
        //     margin-left: 5px;
        // }
    }
}

</style>
