<template>
  <div ref="service" class="w-full h-[603px] flex">
    <!-- leftBox -->
    <div
      ref="leftBox"
      class="w-1/2 h-full bg-black flex flex-col py-[40px] gap-[24px] justify-center"
    >
      <!-- svg -->
      <div class="svg w-full py-[10px] flex justify-center">
        <pointSvg />
      </div>
      <!-- textBox -->
      <div class="textBox">
        <h4
          class="font-content text-D/H1 text-green whitespace-nowrap text-end"
        >
          Cinquième Élément
        </h4>
        <p
          class="font-content text-D/B2 text-green pl-[80px] pt-5 whitespace-nowrap"
        >
          Its plot occurs out of chronological order.
        </p>
      </div>
      <!-- btn -->
      <div class="btnBox w-full pl-[40px]">
        <fullBtn />
      </div>
    </div>

    <!-- rightBox -->
    <div
      ref="rightBox"
      class="w-1/2 h-full bg-black flex flex-col py-[40px] gap-[28px] justify-center border-l border-green"
    >
      <!-- textBox -->
      <div class="textBox">
        <h4
          class="font-content text-D/H1 text-green whitespace-nowrap text-end"
        >
          Cinquième Élément
        </h4>
        <p
          class="font-content text-D/B2 text-green pl-[80px] pt-5 whitespace-nowrap"
        >
          Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes
          that Avary originally wrote for <br />
          True Romance (1993). Do et reprehenderit exercit reprehendetation
          excepteur aliqua duis culpa.
        </p>
      </div>
      <!-- btn -->
      <div class="btnBox w-full pl-[40px]">
        <fullBtn />
      </div>
      <!-- svg -->
      <div class="svg w-full flex justify-center">
        <!-- <div class="w-[200px] h-[200px] bg-green"></div> -->
        <faceSvg />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const service = ref(null);
const leftBox = ref(null);
const rightBox = ref(null);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: service.value,
      start: "top 80%",
      end: "top center", // 滾動區間長度
      scrub: true,
    },
    defaults: { ease: "power2.out" },
  });

  tl.from(leftBox.value, {
    opacity: 0,
  }).from(rightBox.value, {
    x: 100,
    opacity: 0,
  });
});
</script>
