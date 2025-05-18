<template>
  <div
    ref="cardRef"
    class="card lg:w-auto lg:h-auto w-[323px] overflow-hidden group opacity-0"
  >
    <div ref="imageRef" class="lg:h-auto h-[319px] overflow-hidden relative">
      <img
        :src="image"
        class="lg:w-auto lg:h-auto lg:object-none w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <p ref="textRef" class="font-content text-D/B1 text-green mt-5">
      {{ year }} {{ author }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
  image: String,
  year: String,
  author: String,
});

// ====
// 動畫
// ====

const cardRef = ref(null);
const textRef = ref(null);
const imageRef = ref(null);

let observer;

onMounted(async () => {
  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(cardRef.value, { y: -100, opacity: 0 });
          gsap.set(textRef.value, { x: -200, opacity: 0 });

          gsap.to(cardRef.value, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: Math.random() * 0.5,
            ease: "power2.out",
          });

          gsap.to(textRef.value, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // 進場比例
    }
  );

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect(); // 清除 observer
  }
});
</script>
