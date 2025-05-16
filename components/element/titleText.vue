<template>
  <h1
    class="font-content text-D/DIS0 transition-colors duration-300 pointer-events-none"
    :class="[textColor]"
  >
    {{ text }}
  </h1>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "text",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
});
</script>
