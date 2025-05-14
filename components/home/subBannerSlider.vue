<template>
  <div
    class="bannerSlider relative w-[503px] h-[417px] overflow-hidden flex content-center"
  >
    <div
      v-for="(image, i) in images"
      :key="i"
      ref="slides"
      class="absolute w-full h-full"
    >
      <img
        :src="image"
        class="w-full scale-[2] -translate-x-[-40px] -translate-y-[250px]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const images = ["/images/carBIG.jpg", "/images/peopleBIG.jpg"];
const slides = ref([]);
const currentImg = ref(0);
let intervalId = null;

// ===========
// 切換動畫
// ===========
const showSlide = (i) => {
  gsap.to(slides.value[currentImg.value], {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });
  // 將下一張圖片從上方滑入並淡入
  gsap.fromTo(
    slides.value[i],
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
  );
  currentImg.value = i;
};

onMounted(() => {
  slides.value.forEach((el, i) => {
    gsap.set(el, { opacity: i === 0 ? 1 : 0 });
  });
  //  設定切換秒數
  intervalId = setInterval(() => {
    const next = (currentImg.value + 1) % images.length;
    showSlide(next);
  }, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* img {
  transition: opacity 0.5s; // 散爍問題
} */
</style>
