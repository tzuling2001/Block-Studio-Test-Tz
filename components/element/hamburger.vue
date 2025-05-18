<template>
  <div>
    <button
      class="group w-[48px] h-[42px] rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300"
      :class="isOpen ? 'bg-green' : 'bg-white'"
      @click="isOpen = !isOpen"
    >
      <!-- 關閉 -->
      <div
        v-show="!isOpen"
        class="flex h-2/6 w-2/5 flex-col items-end justify-between"
      >
        <span
          class="bg-black block h-0.5 w-full duration-300 group-hover:w-3/5"
        ></span>
        <span
          class="bg-black block h-0.5 w-full duration-300 group-hover:w-4/5"
        ></span>
        <span
          class="bg-black block h-0.5 w-3/5 duration-300 group-hover:w-full"
        ></span>
      </div>

      <!-- 開啟：叉叉 -->
      <div v-show="isOpen" class="relative w-5 h-5 rotate-45">
        <span
          class="absolute left-[0.5px] top-1/2 h-0.5 w-full bg-white"
        ></span>
        <span
          class="absolute top-[0.5px] left-1/2 h-full w-0.5 bg-white"
        ></span>
      </div>
    </button>

    <!-- 展開選單內容 -->
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const items = [
  { text: "About" },
  { text: "Story" },
  { text: "Gallery" },
  { text: "Contact" },
];
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
