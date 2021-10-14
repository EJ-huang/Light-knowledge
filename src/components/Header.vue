<template>
     <nav class=" bg-bg_header  bg-no-repeat">
        <div class="items-center h-screen flex flex-wrap">

            <div class=" md:w-5/12  px-4">
                <div class="md:pr-24">
                    <div class="circle mb-10">
                        <div class="text-red-600 border-double border-8 ml-10 text-center inline-flex items-center justify-center w-28 h-28 mb-6 shadow-lg rounded-full bg-red-300 mt-8">
                            <i class="fas skew-x-0 text-white text-xl">引流</i>
                            <div class="close"></div>
                        </div>
                        <div class="text-red-600 border-double border-8 ml-10 text-center inline-flex items-center justify-center w-28 h-28 mb-6 shadow-lg rounded-full bg-red-300 mt-8">
                            <i class="fas fa-rocket  text-white text-xl">養粉</i>
                            <div class="close"></div>
                        </div>
                        <div class="text-red-600 border-double border-8 ml-10 text-center inline-flex items-center justify-center w-28 h-28 mb-6 shadow-lg rounded-full bg-red-300 mt-8">
                            <i class="fas fa-rocket  text-white text-xl">變現</i>
                        </div>
                    </div>

                    <h3 class="text-5xl font-semibold">如何用三大自媒體</h3>
                    <h3 class="text-5xl font-semibold">低成本創造收入!?</h3>
                    <p class="mt-4 text-lg pr-36  leading-relaxed text-blueGray-500">
                        4位實戰講師 x 4大系列內容
                    </p>
                    <p class="mt-4 text-md  text-blueGray-500">
                        幫助你從ip定位開始，運用三大渠道打造 <span class="text-red-300">自媒體收入</span>
                    </p>
                </div>
            </div>
            <div class="header-teacher flex">
                <div class="img-teacher">
                    <img src="../assets/teacher1.png" alt="">
                    
                    <div class="teacher-content bg-light-blue-600 w-6/12">
                        <div class="teacher-name bg-white-500 text-white pl-28 -mt-36 text-4xl ">Wawa</div>
                    </div>
                </div>
                <div class="img-teacher pt-20">
                    <img src="../assets/teacher2.png" alt="">
                    <div class="teacher-content flex   bg-green-500">
                        <div class="teacher-name  text-white pl-24 -mt-36 text-4xl ">江仕超</div>
                    </div>
                </div>
                <div class="img-teacher">
                    
                    <div class="teacher-content bg-light-blue-600">
                        <img src="../assets/teacher3.png" alt="">
                        <div class="teacher-name bg-white-500 text-white pl-12 -mt-36 text-4xl ">冒牌生</div>
                    </div>
                </div>
                <div class="img-teacher pt-20">
                    <img src="../assets/teacher4.png" alt="">
                    <div class="teacher-content bg-light-blue-600">
                        <div class="teacher-name bg-white-500 text-white pl-12 -mt-36 text-4xl ">李勛</div>
                    </div>
                </div>
            </div>
        </div>
        
    </nav>
    
</template>

<style lang="scss">
.circle{
    transform: skew(10deg,-10deg);
}
.close {
    position: relative;
    border-radius: 5px;
    margin-bottom: 50px;
    // padding-left: 20px;
  &:after {
    position: absolute;
    // top: 0;
    // bottom: 0;
    left: 40px;
    // right: 0;
    content: "\274c";
    font-size: 30px;
    color: #a0a0a0;
    text-align: center;
  }
}
.close:after {
  content: "\d7";
}
</style>