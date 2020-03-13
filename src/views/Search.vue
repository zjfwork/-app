<template>
    <div class="search-wrapper">
        <div class="search-a">
            <van-row>
                <van-col span="4"><span class="a-left"><van-icon name="arrow-left" @click="pathgo"/></span></van-col>
                <van-col span="16"><van-search placeholder="请输入搜索关键词" v-model="value" shape="round" @search="onSearch" @click="inp"/></van-col>
                <van-col span="4" ><span class="a-right"><van-button type="danger" slot="action" @click="onSearch">搜索</van-button></span></van-col>
            </van-row>
        </div>
        <div class="search-b" v-show="flag">
            <div class="b-top">
                <p>热门搜索</p>
                <span>隐藏</span>
            </div>
            <div class="b-bottom">
                <!-- <van-row v-for="(v, i) in arr" :key="i">
                    <van-col span="6"><span>{{v.a}}</span></van-col>
                    <van-col span="6"><span>{{v.b}}</span></van-col>
                    <van-col span="6"><span>{{v.c}}</span></van-col>
                    <van-col span="6"></van-col>
                </van-row> -->
                <ul v-for="(v, i) in arr" :key="i" >
                    <li>{{v.a}}</li>
                    <li>{{v.b}}</li>
                    <li>{{v.c}}</li>
                </ul>
            </div>
        </div>
        <div class="search-c"  v-show="!flag">
            <div class="content" v-for="(v, i) in searchArr" :key="i">
                <van-row>
                    <van-col span="10">
                        <a href="javascript:;">
                            <!-- <img src="../assets/img/guanggao1.jpg" alt=""> -->
                            <img :src="v.thumb[0]" alt="">
                        </a>
                    </van-col>
                    <van-col span="14">
                        <div class="title">{{v.title}}</div>
                        <div>￥<span>{{v.price}}</span></div>
                        <div>{{v.shopname}}</div>
                        <van-icon name="arrow" />
                    </van-col>
                </van-row>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value:"",
                arr:[
                    {a:"金士顿内存", b:"电脑散热架", c:"游戏本"},
                    {a:"游戏显卡", b:"不锈钢水壶", c:"防护眼镜"},
                    {a:"多层保温饭盒", b:"录音笔", c:"保温壶"},
                    {a:"唇彩唇蜜", b:"橄榄调和油", c:"乒乓球拍"},

                ],
                flag:true,
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
            searchArr:[]
            }
        },
        methods: {
            pathgo() {
                this.$router.go(-1);
            },
            inp(){
                this.flag = !this.flag;
            },
            onSearch(){
                console.log("-------")
                console.log(this.value)
                var data = this.ajaxgoodslists.filter(item =>{
                    if(item.title.includes(this.value)){
                        return item;
                    }
                })
                // console.log(data)
                this.searchArr = data;
                console.log(this.searchArr)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .search-wrapper{
        position: relative;
        //导航栏 搜索框
        .search-a{
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            color: black;
            background: white;
            .a-left{
                display: block;
                text-align: center;
                line-height: 44px;
                font-size: 22px;
            }
            .a-right{
                display: block;
                text-align: center;
                line-height: 44px;
                font-size: 12px;
                position: relative;
                .van-button--danger{
                    width: 40px;
                    height: 30px;
                    position: absolute;
                    top: 6px;
                    left: 0;
                }
                span{
                    display: block;
                    position: absolute;
                    top: -6px;
                    left: 5px;
                }

            }
            .van-search{
                padding: 5px 6px;
            }
        }
        .search-b{
            position: relative;
            width: 100%;
            height: 150px;
            margin-top: 44px;
            padding: 0 10px;
            .b-top{
                width: 100%;
                p{
                    position: absolute;
                    top: 0;
                    left: 10px;
                }
                span{
                    color: #cccccc;
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 10px;
                }
            }
            .b-bottom{
                width: 100%;
                font-size: 12px;
                position: absolute;
                top: 30px;
                left: 10px;
                text-align: center;
                ul{
                    width: 100%;
                    // float: left;
                    li{
                        height: 20px;
                        float: left;
                        padding: 0 10px;
                        background: #F0F2F5;
                        margin: 5px 10px;
                    }
                }
            }
        }
        .search-c{
            position: relative;
            width: 100%;
            margin-top: 50px;
            padding: 0 10px;
            color: black;
            .content{
                position: relative;
                width: 100%;
                height: 120px;
                margin-top: 10px;
                img{
                    width: 120px;
                    height: 120px;
                }
                div{
                    color: black;
                    // width: 100%;
                }
                .title{
                    // background: cyan;
                    line-height: 24px;
                    height: 48px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    // white-space: nowrap;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical; 

                    position: absolute;
                    top: 0px;
                }
               
                div:nth-child(2){
                    color: red;
                    margin-top: 30px;
                    >span{
                        font-size: 18px;
                        
                    }
                }
                div:nth-child(3){
                    position: absolute;
                    bottom: 4px;
                    font-size: 12px;
                    color: #cccccc;
                }
                .van-icon-arrow{
                    display: block;
                    position: absolute;
                    right: 10px;
                    bottom: 4px;
                    color: #cccccc;
                }
            }
        }
    }
</style>