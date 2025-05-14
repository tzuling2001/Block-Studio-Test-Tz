<template>
  <div
    class="menu w-[408px] h-[54.55px] border rounded-full absolute bottom-0 right-[70px] content-center flex justify-center"
  >
    <template v-for="(item, i) in items" :key="item.text">
      <button class="font-content text-D/NAV text-black hover:text-green">
        <span v-if="item.icon === 'phone'">📞</span>
        <span class="px-3">{{ item.text }}</span>
        <span v-if="i === items.length - 2" class="text-yellow px-3">/</span>
      </button>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = [
  { text: "About" },
  { text: "Story" },
  { text: "Gallery" },
  { text: "Contact", icon: "phone" },
];
</script>
