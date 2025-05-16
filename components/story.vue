<template>
  <div
    ref="story"
    class="w-full bg-brown overflow-hidden flex items-center justify-center"
  >
    <div
      class="wrapper w-[2000px] py-[100px] flex items-center justify-center gap-36"
    >
      <!-- Story -->
      <div ref="topStory">
        <titleText text="Story" textColor="text-green" />
      </div>

      <!-- contentBox -->
      <div ref="contentBox" class="contentBox flex flex-col gap-5 items-center">
        <h3 class="font-logo text-D/H2 text-green">Story</h3>

        <p class="text-center w-[460px]">
          <AnimatedText>
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam
            amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation
            ea esse velit tempor culpa.
          </AnimatedText>
        </p>
      </div>

      <!-- Story -->
      <div ref="bottomStory">
        <titleText text="Story" textColor="text-green" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, useSlots, computed, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topStory = ref(null);
const bottomStory = ref(null);
const contentBox = ref(null);
const story = ref(null);

onMounted(async () => {
  await nextTick();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: story.value,
      start: "top 70%",
      end: "+=600", // 滾動區間長度
      scrub: true,
    },
    defaults: { ease: "power2.out" },
  });

  tl.fromTo(
    topStory.value,
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
    }
  ).fromTo(
    bottomStory.value,
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
    },
    0
  );
});
</script>
