<template>
  <div
    ref="viewRef"
    class="w-full lg:h-[340px] h-[300px] flex flex-col relative px-8 justify-center"
  >
    <!-- rightBox -->
    <div
      ref="titleRef"
      class="absolute lg:top-[20px] lg:right-[-80px] top-0 right-0"
    >
      <titleText text="Movie" textColor="text-red" />
    </div>

    <!-- leftBox -->
    <div class="lg:w-1/2 lg:p-16 w-full flex flex-col gap-10">
      <!-- p-content -->
      <div ref="contentRef">
        <AnimatedText>
          Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet
          ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse
          velit tempor culpa.
        </AnimatedText>
      </div>
      <!-- viewAll -->
      <div ref="btnRef">
        <viewAll />
      </div>
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
