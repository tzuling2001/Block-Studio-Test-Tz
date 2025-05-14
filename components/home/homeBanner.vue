<template>
  <div class="bannerBox w-full h-screen relative flex flex-col pt-[100px]">
    <!-- sliderBox - back -->
    <div class="subSlider w-full absolute flex justify-end">
      <div class="mask relative mr-[70px] mt-[20px]">
        <subBannerSlider />
      </div>
    </div>
    <!-- title-first-line -->
    <div class="title-first-line w-full flex relative pt-[45px] left-[-41px]">
      <div class="font-content text-D/DIS0 text-red">1976</div>
      <div class="absolute right-[-55px] font-content text-D/DIS0 text-red">
        Mazda
      </div>
    </div>

    <!-- sliderBox - main -->
    <div
      class="mainSlider w-full h-[519px] absolute flex justify-center top-[260px]"
    >
      <bannerSlider />
    </div>

    <!-- title-second-line -->
    <div
      class="title-second-line w-full relative pt-[30px] left-[-41px] font-content text-D/DIS0 text-red"
    >
      RX7s
    </div>
  </div>
</template>
