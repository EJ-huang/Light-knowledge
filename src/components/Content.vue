<template>
    <nav class=" w-full h-72 bg-buffett">
        <div class=" grid grid-cols-2 ">
            <div class="content-main p-12 hidden md:flex justify-center">
                <img src="../assets/buffett.png" alt="">
            </div>
            <div class="content-side  float-right md:float-left text-white text-2xl md:p-12 md:mr-12">
                <transition  
                    appear=""
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="alterEnter"
                >
                    <h1>123</h1>
                </transition>
                    <span class="pb-2 ">巴菲特曾說過:「如果我生在一個獵人部落，我的天賦將毫無價值。因為我跑不快，也沒特別強壯，最後應該會成為野生動物的晚餐。」</span><br>
                    <p v-scrollanimation class="bg-white p-2 text-buffett">生在這個時代的我們，「自媒體是這個世界給予我們最佳的禮物!」</p> <br>

            </div>
        </div>
        <div class="flex  md:hidden ">

            <div class="content-side pt-8 text-white text-sm md:p-12 md:mr-12">
                <transition  
                    
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="alterEnter"
                >
                    <h1>123</h1>
                    <!-- <span class="font-bold pt-4">每個時代，獲得的方法不同</span> <br> -->
                </transition>
                    <span class="pb-2 ">巴菲特曾說過<br>如果我生在一個獵人部落，我的天賦將毫無價值。因為我跑不快，也沒特別強壯，最後應該會成為野生動物的晚餐。</span><br>
                    <p class="bg-white p-2 text-buffett">生在這個時代的我們，「自媒體是這個世界給予我們最佳的禮物!」</p> <br>

            </div>
            <div class="content-main w-4/6 md:p-12 pt-8 md:flex justify-center">
                <img src="../assets/buffett.png" alt="">
            </div>
        </div>

    </nav>
</template>

<script>
// import { ref } from 'vue';
import { gsap } from "gsap";

export default {
    setup(){
        const beforeEnter = (el) => {
            console.log('before')
            el.style.transform = 'translateY(-180px)'
            el.style.opacity = 0

        }
        const enter = (el, done) => {
            gsap.to(el, {
                duration: 2,
                y: 0,
                opacity: 1,
                ease: 'bounce.out',
                onComplete: done
            })
        }
        const alterEnter = () => {
            console.log('after')
        }

        return { beforeEnter, enter, alterEnter }
    }
}
</script>

<style lang="scss">
    // .fade-enter-from{
    //     opacity: 0;
    // }
    // .fade-enter-active{
    //     transition: opacity 3s ease;
    // }
    // .fade-leave-to{
    //     opacity: 0;
    // }
    // .fade-leave-active{
    //     transition: opacity 3s ease;
    // }

    .before-enter{
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
    }
    .enter{
        opacity: 1;
        transform: translateY(0px);

    }
</style>