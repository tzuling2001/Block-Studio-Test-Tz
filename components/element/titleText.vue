<template>
  <h1
    class="font-content lg:text-D/DIS0 text-M/DIS0 transition-colors duration-300 pointer-events-none"
    :class="[textColor, fontSize]"
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
  fontSize: {
    type: String,
    default: "",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
});
</script>
