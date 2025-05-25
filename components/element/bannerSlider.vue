<template>
  <div
    class="bannerSlider relative lg:w-[746px] lg:h-[519px] w-[333px] h-[338px] overflow-hidden"
  >
    <div
      v-for="(image, i) in images"
      :key="i"
      ref="slides"
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <img :src="image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const images = ["/image/banner-boy.png", "/image/banner-car.png"];
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

<style scoped></style>
