<template>
  <!-- cursor -->
  <div
    v-if="showCursor"
    :style="cursorStyle"
    class="pointer-events-none fixed py-14 px-10 rounded-full bg-white opacity-70 transition-opacity duration-300 z-50"
  >
    SCROLL
  </div>

  <!-- main - content -->
  <div
    ref="bannerBox"
    class="bannerBox w-full relative flex flex-col min-h-[780px] justify-end"
    @mousemove="handleMouse"
    @mouseenter="showCursor = true"
    @mouseleave="showCursor = false"
  >
    <!-- sliderBox - sub -->
    <div ref="subSlider" class="absolute right-[70px] top-[120px]">
      <subBannerSlider />
    </div>

    <!-- title-first-line -->
    <div ref="titleFirst" class="w-full flex absolute top-[140px] left-[-41px]">
      <titleText text="1976" textColor="text-red" />
      <span class="absolute right-[-70px]">
        <titleText text="Mazda" textColor="text-red" />
      </span>
    </div>

    <!-- sliderBox - main -->
    <div ref="mainSlider" class="relative w-full flex justify-center">
      <bannerSlider />
    </div>

    <!-- title-second-line -->
    <div ref="titleSecond" class="w-full absolute top-[390px] left-[-41px]">
      <titleText text="RX7s" textColor="text-red" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bannerBox = ref(null);
const subSlider = ref(null);
const titleFirst = ref(null);
const mainSlider = ref(null);
const titleSecond = ref(null);
const showCursor = ref(false);
const cursorStyle = ref({});

// =======
// cursor
// =======

const handleMouse = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - 100; // 100 = radius
  const y = e.clientY - rect.top - 100;

  cursorStyle.value = {
    top: `${y}px`,
    left: `${x}px`,
  };
};

// =======
// 入場動畫
// =======

onMounted(() => {
  gsap.from(titleFirst.value, {
    x: -100,
    opacity: 0,
    duration: 1,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: bannerBox.value,
      start: "top top",
      end: "+=1000", // 滾動區間長度
      pin: true,
      scrub: true,
    },
    defaults: { ease: "power2.out" },
  });

  tl.from(
    mainSlider.value,
    {
      opacity: 0,
      y: 50,
      duration: 1,
    },
    "0.5"
  )
    .from(
      titleSecond.value,
      {
        opacity: 0,
        y: 30,
        duration: 1,
      },
      "<0.4"
    )
    .from(
      subSlider.value,
      {
        opacity: 0,
        scale: 1.1,
        duration: 1,
      },
      ">0.6"
    );
});
</script>

<style scoped></style>
