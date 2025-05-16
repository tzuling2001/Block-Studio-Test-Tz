<template>
  <div ref="header" class="w-full h-[86.55px] fixed top-0 left-0 z-50">
    <div class="absolute bottom-[15px] left-[55px]">
      <logo textColor="text-white" hoverColor="hover:text-green" />
    </div>
    <Menu />
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
