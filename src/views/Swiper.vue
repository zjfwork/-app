<template>
    <div>
          <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="animated bounceIn" v-show="flag" src="../assets/img/yindaoye1.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="animated"  src="../assets/img/yindaoye2.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img class="animated" src="../assets/img/yindaoye3.jpg" alt />
                </div>
                <div class="swiper-slide">
                    <img class="animated"  src="../assets/img/yindaoye4.jpg" alt />
                    <button @click="go" class="animated fadeInUp delay-1s" v-show="flag">立即体验</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data() {
            return {
                flag:true
            }
        },
        methods: {
            go() {
                localStorage.one = true;
                this.$router.push("/home");
            }
        },
        created() {
            // 首次 进入 引导页

            //执行一次过后， Application 里的 local Storage 会存在 one

            // 判断是否执行引导页
            if (localStorage.one) {
                this.$router.push("/gg");
            } else {
                localStorage.one = true;
            }
        },
        mounted() {
            // new Swiper('.swiper-container')

            let _this = this;
            new Swiper('.swiper-container', {
                on: {
                    slideChangeTransitionStart: function(){
                        _this.flag = false;
                    },
                    slideChangeTransitionEnd: function(){
                        _this.flag = true;
                        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    },
                },
            });
        },      
    }
</script>

<style lang="scss" scoped>
.swiper-wrapper{
    position: fixed;
    top: 0;
    bottom: 0;
    .swiper-slide{
        img{
            width: 100%;
            height: 100%;
        }
        button {
            width: 100px;
            height: 30px;
            line-height: 30px;
            border: 1px solid #c8efd4;
            background: transparent;
            color: yellow;
            position: absolute;
            left: 50%;
            right: 0px;
            bottom: 60px;
            margin-left: -60px;
        }
    }
}
</style>
