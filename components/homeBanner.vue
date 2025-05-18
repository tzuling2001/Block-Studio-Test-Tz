<template>
  <!-- cursor -->
  <div
    v-if="showCursor"
    :style="cursorStyle"
    class="pointer-events-none fixed lg:py-14 lg:px-10 py-10 px-6 rounded-full bg-white opacity-70 transition-opacity duration-300 z-50"
  >
    SCROLL
  </div>

  <!-- main - content -->
  <div
    ref="bannerBox"
    class="bannerBox w-full relative flex flex-col lg:min-h-[780px] min-h-[516px] justify-end"
    @mousemove="handleMouse"
    @mouseenter="showCursor = true"
    @mouseleave="showCursor = false"
  >
    <!-- sliderBox - main -->
    <div
      ref="mainSlider"
      class="relative w-full flex lg:justify-center -left-[50px] z-10"
    >
      <bannerSlider />
    </div>

    <!-- sliderBox - sub -->
    <div
      ref="subSlider"
      class="absolute lg:right-[70px] lg:top-[120px] -right-[50px] top-[80px] z-0"
    >
      <subBannerSlider />
    </div>

    <!-- D / title-first-line -->
    <div
      ref="titleFirst"
      class="w-full lg:flex hidden absolute lg:top-[140px] lg:left-[-41px]"
    >
      <titleText text="1976--" textColor="text-red" />
      <span class="lg:absolute right-[-70px]">
        <titleText text="Mazda" textColor="text-red" />
      </span>
    </div>

    <!-- D / title-second-line -->
    <div
      ref="titleSecond"
      class="w-full lg:flex hidden absolute top-[390px] left-[-41px] z-20"
    >
      <titleText text="RX7s" textColor="text-red" />
    </div>

    <!-- M / titleLine -->
    <div
      ref="titleBox"
      class="w-full flex flex-col lg:hidden absolute top-[75px] left-[20px] z-20"
    >
      <titleText text="1976--" textColor="text-red" />
      <titleText text="Mazda" textColor="text-red" />
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
const mainSlider = ref(null);
const subSlider = ref(null);
const titleFirst = ref(null);
const titleSecond = ref(null);
const titleBox = ref(null);
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
      [titleSecond.value, titleBox.value],
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
