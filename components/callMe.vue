<template>
  <div class="flex flex-col justify-center items-center bg-black mt-32">
    <titleText text="Contact" textColor="text-white" />
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

      <div class="w-[1326px] h-[445px] relative">
        <img
          src="../public/images/callMe.png"
          class="relative z-10 w-[1326px] h-[480px] mix-blend-difference"
        />
      </div>
    </div>

    <!-- contentBox -->
    <div class="contentBox relative w-full flex justify-center">
      <div ref="contentRef" class="w-[474px] pt-[20px] pb-[120px] text-center">
        <AnimatedText>
          Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet
          ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse
          velit tempor culpa.
        </AnimatedText>
      </div>
      <div class="absolute right-[-110px] top-[-210px] z-10">
        <titleText text="CALL" textColor="text-white" />
      </div>
      <div class="absolute left-[-20px] bottom-[-15px]">
        <titleText text="ME" textColor="text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
</script>
