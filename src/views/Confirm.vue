<template>
    <div class="confirm-wrapper">
        <!-- 头部 -->
        <div class="confirm-a">
            <van-row>
                <van-col span="4">
                    <span class="left">
                        <van-icon name="arrow-left" @click="pathgo" />
                    </span>
                </van-col>
                <van-col span="16">确认订单</van-col>
                <van-col span="4"></van-col>
            </van-row>
        </div>
        <!-- 信息 地址-->
        <div class="confirm-b" @click="goaddress">
            <span>姓名：{{name}}</span>
            <span>手机：{{tel}}</span>
            <span>地址：{{address}}</span>
        </div>
        <!--  店铺 商品信息  {{v.shopname}}-->
        <div class="confirm-c" v-for="(v, i) in this.$store.state.confirmgoods" :key="i">
            <div class="c-top">
                <van-icon name="shop-o" /><span>{{v.shopname}}</span>
            </div>
            <div class="c-bottom" >
                <van-row>
                    <van-col span="6">
                        <!-- <img src="https://img10.360buyimg.com/mobilecms/s100x100_jfs/t20908/290/105205133/190165/304ce34/5afbd93aNea2c3949.jpg!q70.dpg.webp" alt=""> -->
                        <img :src="v.thumb" alt="">
                    </van-col>
                    <van-col span="18">
                        <div class="cc-right">
                           <!-- <strong>迹邦折叠桌餐桌电脑桌麻将桌家用简易小桌子方桌吃饭桌便携学生宿舍写字桌深木纹黑腿方桌80*80*74</strong>   
                            <p>深木纹黑腿方桌80*80*74</p> -->
                            <strong>{{v.title}}</strong>
                            <p>{{v.desc}}</p>
                            <div class="c-jiage"><span>￥{{v.price}}</span><span>x<span class="c-shuliang">{{v.num}}</span></span></div>
                        </div>
                    </van-col>
                </van-row>
                <p><span>⑦</span> 支持7天无理由退货 <span>①</span> 价格说明</p>
            </div>
        </div>
        <!--  -->
        <div class="confirm-d">
            <van-cell class="d-cell" title="配送服务" is-link value="快递运输">
            </van-cell>
            <p>中小件送货时间工作日、 双休日与节假日均可送货</p>
        </div>
        <!--  -->
        <div class="confirm-e">
            <van-cell title="退换无忧"  label="7天内退货，15天内换货，可享一次运费赔付到小金库①">
               <span class="e-sjzs">商家赠送</span> <van-checkbox v-model="checked" checked-color="red" slot="right-icon"></van-checkbox>
            </van-cell>
        </div>
        <!--  -->
        <div class="confirm-f">
            <van-cell-group>
                <van-field
                    v-model="message"
                    rows="1"
                    autosize
                    label="店铺备注"
                    type="textarea"
                    maxlength="45"
                    placeholder="选填,给商家留言"
                    show-word-limit
                />
            </van-cell-group>
        </div>
        <!--  -->
        <div class="confirm-g">
            <van-cell-group>
                <van-cell title="发票信息" is-link value="个人商品明细"/>
                <van-cell title="礼品卡" is-link value="无可用"/>
                <van-cell title="红包①" is-link value="无可用"/>
                <van-cell title="京豆①" is-link value="无可用"/>
            </van-cell-group>
        </div>
        <!--  -->
        <div class="confirm-h">
            <div class="h-left">
                <van-cell-group>
                    <van-cell title="商品金额"><span class="h-spje">￥{{this.$store.state.totalPrice}}</span></van-cell>
                    <van-cell title="运费"><span class="h-yf">￥00.00</span></van-cell>
                </van-cell-group>
            </div>
            <div class="h-right">
                <p>实付金额：<span>￥{{this.$store.state.totalPrice}}</span></p>
            </div>
        </div>
        <div class="confirm-i">
            <van-button type="info" size="large" @click="aaa" to="/pay">在线支付</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // list:this.$store.state.list,

                //confirm-e
                checked:true,
                //confirm-f
                message:'',
                chosenAddressId:0,
                name:"",
                tel:"",
                address:"", 
                // name:this.$store.state.list[this.$store.state.chosenAddressId-1].name,
                // tel:this.$store.state.list[this.$store.state.chosenAddressId-1].tel,
                // address:this.$store.state.list[this.$store.state.chosenAddressId-1].address,
            }
        },
        methods:{
            goaddress(){
                this.$router.push("/address");
            },
           
            pathgo(){
                this.$router.go(-1);
            },
            aaa(){
                console.log("test");
                console.log(this.$store.state.goods);
            } 

        },
        created(){
            // this.chosenAddressId = this.$store.state.chosenAddressId;
            // console.log(this.chosenAddressId )
            console.log(this.$store.state.chosenAddressId)
            
            if(this.$store.state.chosenAddressId != 0){
                this.name = this.$store.state.list[this.$store.state.chosenAddressId-1].name;
                this.tel = this.$store.state.list[this.$store.state.chosenAddressId-1].tel;
                this.address = this.$store.state.list[this.$store.state.chosenAddressId-1].address;
            }else{
                this.name = this.tel = this.address = "";
            }
        }
    }
</script>

<style lang="scss" scoped>
.confirm-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 44px 0;
    background: #f0f0f0;
    // 头部
    .confirm-a {
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
            font-size: 16px;
        }
        
    }
    .confirm-b{
        background: white;
        margin: 10px 0 ;
        padding: 0 10px;
        
        >span:nth-child(1){
            display: inline-block;
        }
        >span:nth-child(2){
            display: inline-block;
            float: right;
        }
        >span:nth-child(3){
            display: block;
        }
    }
    // 店铺 商品信息
    .confirm-c{
        width: 100%;
        background: white;
        border-bottom: #cccccc 1px solid;
        .c-top{
            width: 100%;
            border-bottom: #cccccc 1px solid;
            position: relative;
            .van-icon-shop-o{
                // margin: 5px 0 0 10px;
                position: absolute;
                top: 2px;
                left: 0;
            }
            .van-icon-shop-o::before{
                font-size: 18px;
                position: absolute;
                top: 2px;
                left:10px;
            }
            span{
                font-weight: bold;
                margin-left: 40px;
            }
        }
        .c-bottom{
            width: 100%;
            position: relative;
            padding: 10px 10px 0 10px;
            img{
                width: 75px;
                height: 75px;
            }
            .cc-right{
                margin-left: 10px;
                 
                strong{
                    font-size: 14px;
                }
                p{
                    color: #cccccc;
                    font-size: 12px;
                }
                .c-jiage{
                    position: relative;
                    span:nth-child(1){
                        color: red;
                    }
                    span:nth-child(2){
                        float: right;
                        color: #cccccc;
                    }
                    .c-shuliang{
                        float: right;
                        color: #cccccc !important;
                    }
                }
            }
            >p{
                color: #cccccc;
                font-size: 12px;
                margin: 0 auto;
                text-align: center;
                span{
                    color: skyblue;
                }
            }
        }
    }
    
    .confirm-d{
        width: 100%;
        border-bottom: solid 1px #cccccc;
        position: relative;
        .d-cell{
            height: 50px;
            position: relative;
            .van-cell__title{
                color: black;
            }
            .van-cell__value{
                font-size: 12px;
                color: #cccccc;
            }
        }
        p{
            font-size: 10px;
            color: #cccccc;
            position: absolute;
            bottom: -15px;
            left: 14px;
        }
    }
    .confirm-e{
        // margin: 10px 0;
        position: relative;
        border-bottom: #cccccc 1px solid;
        .e-sjzs{
            display: block;
            position: absolute;
            top: 27px;
            right: 7px;
        }
    }
    .confirm-f{
        position: relative;
        margin-bottom: 10px;
    }
    
    .confirm-g{
        margin: 10px 0;
    }
    .confirm-h{
        .h-left{
            //商品金额
            .h-spje{
                color: red;
            }
            // 运费
            .h-yf{
                color: red;
            }
        }
        .h-right{
            width: 100%;
            height: 44px;
            background: white;
            position: relative;
            line-height: 44px;
            p{
                font-size: 16px;
                font-weight: bold;

                position: absolute;
                right: 15px;

                span{
                    color: red;
                }
            }
        }
    }
    .confirm-i{
        padding: 10px;
    }
}
</style>