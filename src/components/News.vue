<template>
    <nav class=" bg-class2-pattern h-screen">
        <h2 class="text-center text-6xl text-white pt-12">課程資訊</h2>
        <div class="content-center flex justify-center  pt-5">
            

            <div class="main pt-36">
                <ul class="flex">
                    <div id="triangle"></div>
                    <li class="text-left pl-4 pb-24">
                        <p class="text-white text-2xl pb-4">活動日期</p>
                        <p class="text-4xl">2021/10/27(三) 17:00-22:00</p>
                    </li>
                </ul>
                <ul class="flex">
                    <div id="triangle"></div>
                    <li class="text-left pl-4">
                        <p class="text-white text-2xl pb-4">參與方式</p>
                        <p class="text-4xl pb-4">Zoom Video Webinar線上串流直播</p>
                        <small class="text-left text-lg text-gray-500">※提醒你!本課程為「線上直播」<br>為維護你的權益<br>請勿與他人共用你的專屬連結!</small>
                    </li>
                </ul>
            </div>
            <div class="aside pt-36">
                <div class="flex ml-6">
                    <div id="triangle"></div>
                    <div class="pl-4 flex">
                        <p class="text-white text-lg ">票價費用</p>
                        <img src="../assets/ticket1.png" alt="">
                        <img src="../assets/ticket2.png" alt="">
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    .main, .aside  {
        #triangle{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 20px 20px;
            border-color: transparent transparent #fff transparent;
        }
    }   
</style>