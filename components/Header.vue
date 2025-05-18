<template>
  <div
    ref="header"
    class="w-full lg:h-[86.55px] h-[58px] fixed top-0 left-0 z-50 flex justify-between items-end lg:px-[48px] px-[24px]"
  >
    <div class="py-1">
      <logo textColor="text-white" hoverColor="hover:text-green" />
    </div>
    <div class="">
      <Menu />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = ref(null);

onMounted(() => {
  gsap.from(header.value, {
    y: -100,
    opacity: 1,
  });
});
</script>
