<template>
  <h1 ref="subTitle" class="font-content text-D/H3 text-white">
    {{ text }}
  </h1>
</template>

<script setup>
import { onMounted, nextTick, onUnmounted, ref } from "vue";
import gsap from "gsap";

defineProps({
  text: {
    type: String,
    default: "text",
  },
});

const subTitle = ref(null);
let observer;

onMounted(async () => {
  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            subTitle.value,
            { x: -200, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            }
          );

          observer.unobserve(entry.target); // 只跑一次，避免閃屏
        }
      });
    },
    { threshold: 0.5 }
  );

  if (subTitle.value) {
    observer.observe(subTitle.value);
  }
});
</script>
