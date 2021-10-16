<template>
    <nav class=" w-full h-72 bg-buffett">
        <div class=" grid grid-cols-2 ">
            <div class="content-main p-12 flex justify-center">
                <img src="../assets/buffett.png" alt="">
            </div>
            <div class="content-side text-left text-white text-2xl p-12 mr-12">
                <transition  
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="alterEnter"
                >
                    <h1>123</h1>
                    <!-- <span class="font-bold pt-4">每個時代，獲得的方法不同</span> <br> -->
                </transition>
                                    <span class="pb-2">巴菲特曾說過:「如果我生在一個獵人部落，我的天賦將毫無價值。因為我跑不快，也沒特別強壯，最後應該會成為野生動物的晚餐。」</span><br>
                    <p class="bg-white p-2 text-buffett">生在這個時代的我們，「自媒體是這個世界給予我們最佳的禮物!」</p> <br>

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
                duration: 5,
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