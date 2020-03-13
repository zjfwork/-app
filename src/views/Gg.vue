<template>
    <div class="gg-wrapper">
        <div class="gg-a">
            <a href="javascript:;">
                <img src="../assets/img/guanggao1.jpg" alt="">
                <span><button @click="go">跳过</button> 0{{num}} </span>
            </a>
        </div>
        
    </div>
</template>
 
<script>
    export default {    
        data() {
            return {
                num:5,
                cleardata:null
            }
        },
        methods: {
            go() {
                this.$router.push("/home");
            }
        },
        created() {
            this.cleardata = setInterval(()=>{
                this.num--;
                if(this.num == 0){
                    this.$router.push("/home");
                }
            },1000)
        },
        beforeDestroy() {
            //  页面跳转先销毁在跳转
            clearInterval(this.cleardata)
        },
    }
</script>

<style lang="scss" scoped>
    .gg-wrapper{
        position: fixed;
        top: 0;
        bottom: 0;
        .gg-a{
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            a{
                img{
                    width: 100%;
                    height: 100%;
                }
                span{
                    display: block;
                    width: 70px;
                    height: 25px;
                    font-size: 12px;
                    border-radius: 15px;
                    background: rgba(255,255,255,0.5);
                    color: white;
                    padding: 3px 0 0 5px;

                    position: absolute;
                    top: 10px;
                    right: 10px;
                    button{
                        border: 0;
                        background: transparent;
                    }
                }
            }
        }
    }
</style>