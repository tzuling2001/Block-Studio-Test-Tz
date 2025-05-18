<template>
  <div
    ref="contactRef"
    class="flex flex-col justify-center items-center bg-black mt-32"
  >
    <titleText text="Contact" textColor="text-white" fontSize="text-M/DIS1" />
    <h2 class="font-logo text-D/H2 text-red mt-10">+339 566 789</h2>

    <!-- photoBox -->
    <div
      class="w-full flex justify-center py-10 relative group"
      @mousemove="handleMouse"
      @mouseenter="showCursor = true"
      @mouseleave="showCursor = false"
      ref="photoBox"
    >
      <!-- cursor -->
      <div
        v-if="showCursor"
        :style="cursorStyle"
        class="pointer-events-none absolute w-[200px] h-[200px] rounded-full bg-white opacity-70 transition-opacity duration-300 delay-0.5 z-0"
      ></div>

      <div
        class="lg:w-[1326px] lg:h-[445px] w-[360px] h-[276px] relative overflow-hidden"
      >
        <img
          src="/image/callMe.png"
          class="relative z-10 w-full h-full object-cover mix-blend-difference"
        />
      </div>
    </div>

    <!-- contentBox -->
    <div class="contentBox relative w-full flex justify-center">
      <div class="w-[474px] pt-[20px] pb-[120px] text-center">
        <AnimatedText>
          Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet
          ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse
          velit tempor culpa.
        </AnimatedText>
      </div>
      <div
        ref="callRef"
        class="absolute lg:right-[-110px] lg:top-[-210px] right-[-50px] top-[-150px] z-10"
      >
        <titleText text="CALL" textColor="text-white " fontSize="text-M/DIS1" />
      </div>
      <div ref="meRef" class="absolute left-[-20px] bottom-[-15px]">
        <titleText text="ME" textColor="text-white" fontSize="text-M/DIS1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showCursor = ref(false);
const cursorStyle = ref({});
const photoBox = ref(null);

const handleMouse = (e) => {
  const box = photoBox.value.getBoundingClientRect();
  const x = e.clientX - box.left - 100; // 100 = radius
  const y = e.clientY - box.top - 100;

  cursorStyle.value = {
    top: `${y}px`,
    left: `${x}px`,
  };
};

// ======
// 動畫
// ======

const contactRef = ref(null);
const callRef = ref(null);
const meRef = ref(null);

onMounted(async () => {
  await nextTick();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactRef.value,
      start: "top 80%",
      end: "+=800",
      scrub: true,
    },
    defaults: { ease: "power2.out" },
  });
  tl.from(contactRef.value, {
    opacity: 0,
    y: 100,
  })
    .from(
      callRef.value,
      {
        opacity: 0,
        x: 100,
      },
      "+1"
    )
    .from(
      meRef.value,
      {
        opacity: 0,
        y: 100,
      },
      "+1"
    );
});
</script>
