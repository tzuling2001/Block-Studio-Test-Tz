<template>
  <div ref="cardRef" class="card inline-block overflow-hidden group opacity-0">
    <div ref="imageRef" class="overflow-hidden relative">
      <img
        :src="image"
        class="transition-transform duration-500 group-hover:scale-110"
        alt=""
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
          gsap.fromTo(
            textRef.value,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
          );
          gsap.fromTo(
            cardRef.value,
            { y: -100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              delay: Math.random() * 0.5,
              ease: "power2.out",
            }
          );
          observer.unobserve(entry.target); // 僅觸發一次
        }
      });
    },
    {
      threshold: 0.8, // 元素可見超過一半才觸發動畫
    }
  );

  if (textRef.value) {
    observer.observe(textRef.value);
  }
});

onUnmounted(() => {
  if (observer && textRef.value) {
    observer.unobserve(textRef.value);
    observer.disconnect();
  }
});
</script>
