<template>
  <div class="Marquee w-full lg:py-10 py-1 bg-cream overflow-hidden">
    <div ref="topRef" class="py-5 whitespace-nowrap flex">
      <div
        v-for="i in 2"
        :key="i"
        class="flex gap-10 font-content lg:text-D/DIS2 text-M/DIS2 text-yellow"
      >
        <div v-for="(word, j) in words" :key="j" class="flex gap-5">
          <h1>{{ word }}</h1>
          <span class="border border-yellow rotate-[35deg] mx-10"></span>
        </div>
      </div>
    </div>
    <div ref="bottomRef" class="py-5 whitespace-nowrap flex">
      <div
        v-for="i in 2"
        :key="i"
        class="flex gap-10 font-content lg:text-D/DIS2 text-M/DIS2 text-yellow"
      >
        <div v-for="(word, j) in words" :key="j" class="flex gap-5">
          <h1>{{ word }}</h1>
          <span class="border border-yellow rotate-[35deg] mx-10"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ========
gsap.registerPlugin(ScrollTrigger);
const words = ["PURE", "ORGANIC", "TRUE  ROMANCE"];
const topRef = ref(null);
const bottomRef = ref(null);

// ========
// 動畫
// ========

onMounted(() => {
  gsap.set(topRef.value, { xPercent: 0 });
  gsap.set(bottomRef.value, { xPercent: -50 });
  gsap.to(topRef.value, {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: topRef.value,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  // 下方往右滑動（反方向）
  gsap.to(bottomRef.value, {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: bottomRef.value,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});
</script>
