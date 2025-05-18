<template>
  <Swiper
    :slides-per-view="1.2"
    :space-between="10"
    :centered-slides="true"
    @slideChange="handleSlideChange"
    class="w-full h-[680px]"
  >
    <SwiperSlide
      v-for="(item, index) in items"
      :key="index"
      class="w-80 h-full !flex flex-col justify-end gap-6 bg-black p-14 border-r border-green"
    >
      <!-- layout top -->
      <div
        v-show="item.layout === 'top'"
        class="svg w-full flex justify-center scale-110"
      >
        <component :is="item.icon" />
      </div>

      <!-- 文字 -->
      <div class="textBox">
        <h4 class="font-content text-M/H1 text-green text-start">
          {{ item.title }}
        </h4>
        <p class="font-content text-D/B2 text-green pt-5">
          {{ item.text }}
        </p>
      </div>

      <!-- layout bottom -->
      <div
        v-show="item.layout === 'bottom'"
        class="svg w-full flex justify-center"
      >
        <component :is="item.icon" />
      </div>

      <!-- 按鈕 -->
      <div class="btnBox w-full">
        <fullBtn />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import pointSvg from "../components/element/pointSvg.vue";
import faceSvg from "../components/element/faceSvg.vue";

const items = [
  {
    title: "Cinquième Élément",
    text: "Its plot occurs out of chronological order.",
    icon: pointSvg,
    layout: "top",
  },
  {
    title: "Cinquième Élément",
    text: "Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.",
    icon: faceSvg,
    layout: "bottom",
  },
  {
    title: "Cinquième Élément",
    text: "Its plot occurs out of chronological order.",
    icon: pointSvg,
    layout: "top",
  },
  {
    title: "Cinquième Élément",
    text: "Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.",
    icon: faceSvg,
    layout: "bottom",
  },
];

function handleSlideChange(swiper) {
  const activeIndex = swiper.activeIndex;
  console.log("目前顯示第幾個 slide：", activeIndex);
  // 可以在這裡用 GSAP 或其他動畫套件觸發對應動畫
}
</script>

<style scoped>
.swiper-slide {
  transition: transform 0.3s ease;
}
.swiper-slide-active {
  transform: scale(1.05);
}
</style>
