<template>
  <div class="inline-block overflow-hidden group">
    <div class="overflow-hidden relative">
      <img
        :src="image"
        class="transition-transform duration-500 group-hover:scale-110"
        alt=""
      />
    </div>
    <p class="font-content text-D/B1 text-green mt-5">
      {{ year }} {{ author }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, useSlots, computed, nextTick } from "vue";
import gsap from "gsap";

const topStory = ref(null);
const bottomStory = ref(null);
const contentBox = ref(null);
const story = ref(null);
defineProps({
  image: String,
  year: String,
  author: String,
});
</script>
