<template>
    <nav class="w-full bg-class-pattern h-screen">
        <div class="content-center">
            <h2 v-scrollanimation class="text-center text-6xl pt-12">這堂講座，特別適合</h2>

            <div class="grid  grid-rows-2 grid-flow-col gap-4 p-72 pt-12 pb-6">
                <div class="box">
                    <div class="pb-20">
                        <img src="../assets/class_1.png" alt="">
                        <div class="z-40 -mt-28 2xl:-mt-40 md:pl-8 2xl:pl-12  text-left">
                            <h2 class=" md:text-base 2xl:text-3xl text-gray-700">想透過媒體賺錢者、網路賺錢者</h2>
                            <p class="text-xl">四位實戰級講師，用自身經驗帶領你開始實做</p>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div>
                        <img src="../assets/class_1.png" alt="">
                            <div class="-mt-28 2xl:-mt-40 md:pl-8 2xl:pl-12 text-left">
                            <h2 class=" md:text-base 2xl:text-3xl text-gray-700">想建立專業形象者</h2>
                            <p class="text-xl">專家運用自媒體將大幅度提升影響力，更能抓到精準客戶</p>
                        </div>
                    </div>

                </div>
                <div class="box">
                    <img src="../assets/class_1.png" alt="">
                        <div class="z-40 -mt-28 2xl:-mt-40 md:pl-8 2xl:pl-12 text-left">
                            <h2 class=" md:text-base 2xl:text-3xl text-gray-700">想推廣服務或產品者</h2>
                            <p class="text-xl">建立自媒體，該如何變現?專家經驗揭密!</p>
                        </div>
                </div>
                <div class="box pt-0">
                    <img src="../assets/class_1.png" alt="">
                        <div class="z-40 -mt-28 2xl:-mt-40 md:pl-8 2xl:pl-12 text-left">
                            <h2 class="md:text-base 2xl:text-3xl text-gray-700">想創造第二、第三份收入者</h2>
                            <p class="text-xl">上班族、小資族也能運用自媒體打造多元收入!</p>
                        </div>
                </div>
            </div>
            <div class="flex justify-center mb-36">
                <img src="../assets/class_2.png" alt="">
            </div>

            
        </div>

    </nav>

</template>

<style lang="scss">
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