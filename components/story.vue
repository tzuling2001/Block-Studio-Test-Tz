<template>
  <div
    ref="story"
    class="w-full lg:h-[417px] h-[680px] bg-brown overflow-hidden flex items-center justify-center relative"
  >
    <!-- apple -->
    <div
      ref="appleRef"
      class="w-full absolute lg:top-0 lg:left-0 top-20 z-50 mix-blend-color flex items-center justify-center"
    >
      <Apple />
    </div>

    <!-- contentBox -->
    <div
      ref="contentBox"
      class="contentBox flex flex-col gap-5 items-center lg:pt-0 pt-60"
    >
      <h3 class="font-logo text-D/H2 text-green">Story</h3>

      <p class="text-center lg:w-[460px] w-full lg:px-0 px-10">
        <AnimatedText textColor="text-green">
          Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet
          ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse
          velit tempor culpa.
        </AnimatedText>
      </p>
    </div>

    <!-- Story wrapper -->
    <div class="wrapper absolute flex items-center lg:w-[2000px] w-full h-full">
      <div
        ref="topStory"
        class="w-full h-full flex items-center justify-center relative lg:flex flex-warp"
      >
        <div class="absolute lg:left-0 lg:top-[100px] -top-16" ref="topStory">
          <titleText
            text="Story"
            textColor="text-green"
            fontSize="text-M/DIS1"
          />
        </div>
        <div
          class="absolute lg:right-0 lg:bottom-[100px] -bottom-10"
          ref="bottomStory"
        >
          <titleText
            text="Story"
            textColor="text-green"
            fontSize="text-M/DIS1"
          />
        </div>
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
const appleRef = ref(null);

onMounted(async () => {
  await nextTick();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: story.value,
      start: "top 70%",
      end: "top center", // 滾動區間長度
      scrub: true,
    },
    defaults: { ease: "power2.out" },
  });

  tl.from(topStory.value, { x: -200, opacity: 0 })
    .from(bottomStory.value, { x: 400, opacity: 0 }, 0)
    .from(appleRef.value, { opacity: 0, y: 100 }, 0.4);
});
</script>
