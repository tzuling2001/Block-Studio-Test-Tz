<template>
  <div ref="viewRef" class="w-full h-[340px] flex items-center relative">
    <div ref="btnRef">
      <viewAll />
    </div>

    <!-- p-content -->
    <div ref="contentRef" class="w-[474px] absolute top-[50px] left-[70px]">
      <AnimatedText>
        Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet
        ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse
        velit tempor culpa.
      </AnimatedText>
    </div>

    <!-- title-third-line -->
    <div
      ref="titleRef"
      class="title-third-line absolute top-[20px] right-[-80px]"
    >
      <titleText text="Movie" textColor="text-red" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const viewRef = ref(null);
const titleRef = ref(null);
const btnRef = ref(null);

onMounted(async () => {
  await nextTick();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: viewRef.value,
      start: "top 80%",
      end: "top center", // 滾動區間長度
      scrub: true,
    },
    defaults: { ease: "power2.out" },
  });

  tl.from(btnRef.value, {
    y: 100,
    opacity: 0,
  }).from(titleRef.value, {
    x: 100,
    opacity: 0,
  });
});
</script>
