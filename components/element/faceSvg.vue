<template>
  <div class="w-[200px] h-[200px]" ref="iconWrapper">
    <!-- 原始 SVG 多 path，將分別動畫 -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 210"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="w-full h-full text-green"
      ref="svgRef"
    >
      <path
        d="M149.444 61.0555V83.2778"
        stroke="#288E3E"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M60.5557 61.0555V83.2778"
        stroke="#288E3E"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M105.001 61.0555V116.611L71.6672 149.944C71.6672 149.944 82.7783 161.056 105.001 161.056C127.223 161.056 138.334 149.944 138.334 149.944"
        stroke="#288E3E"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.4444 205.5H27.2222C15 205.5 5 195.5 5 183.278V27.7222C5 15.5 15 5.5 27.2222 5.5H49.4444"
        stroke="#288E3E"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M160.556 205.5H182.778C195 205.5 205 195.5 205 183.278V27.7222C205 15.5 195 5.5 182.778 5.5H160.556"
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
  const paths = svgRef.value.querySelectorAll("path");

  paths.forEach((path, i) => {
    const length = path.getTotalLength();

    // 初始化路徑長度（隱藏每一段線條）
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // 每條線段用同一個 ScrollTrigger 一起控制
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.2,
      delay: i * 0.5, // 輕微交錯出現
      ease: "power2.out",
      scrollTrigger: {
        trigger: iconWrapper.value,
        start: "top 100%",
        end: "top 20%",
        scrub: true,
      },
    });
  });
});
</script>
