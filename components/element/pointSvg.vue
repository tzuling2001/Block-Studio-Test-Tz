<template>
  <div class="w-[145px] h-[200px]" ref="iconWrapper">
    <!-- 原始 SVG 貼進來（已處理 fill / stroke） -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 210"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="w-[145px] h-[200px] text-green"
      ref="svgRef"
    >
      <path
        d="M96.582 85.4C96.582 85.4 96.582 71.33 96.582 60.275M96.582 60.275C96.582 48.215 96.582 32.135 96.582 20.075C96.582 12.035 103.629 5 111.683 5C119.737 5 126.784 12.035 126.784 20.075V105.5L146.918 132.635C152.959 140.675 151.952 150.725 145.912 158.765L107.656 199.97C103.629 203.99 98.5955 206 92.5551 206C81.4811 206 63.36 206 46.2456 206C22.0842 206 10.0035 179.87 5.97656 166.805V165.8C5.97656 158.765 5.97656 96.455 5.97656 80.375C5.97656 57.26 36.1784 57.26 36.1784 80.375C36.1784 84.395 36.1784 86.405 36.1784 86.405C36.1784 86.405 36.1784 71.33 36.1784 69.32C36.1784 46.205 66.3802 46.205 66.3802 69.32C66.3802 78.365 66.3802 86.405 66.3802 86.405V60.275C66.3802 37.16 96.582 37.16 96.582 60.275Z"
        stroke="#288E3E"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const svgRef = ref(null);
const iconWrapper = ref(null);

onMounted(() => {
  const path = svgRef.value.querySelector("path");
  const length = path.getTotalLength();

  // 初始化路徑長度（隱藏路徑）
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  // ScrollTrigger 控制動畫執行
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: iconWrapper.value,
      start: "top 80%",
      toggleActions: "play none none none",
      scrub: true,
    },
  });
});
</script>
