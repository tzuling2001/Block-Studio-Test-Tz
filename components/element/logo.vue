<template>
  <div class="logo">
    <button
      class="font-logo text-D/H3 transition-colors duration-300"
      :class="[textColor, hoverColor]"
    >
      ZOENW
    </button>
  </div>
</template>

<script setup>
defineProps({
  textColor: {
    type: String,
    default: "text-white",
  },
  hoverColor: {
    type: String,
    default: "hover:text-green",
  },
});
</script>
