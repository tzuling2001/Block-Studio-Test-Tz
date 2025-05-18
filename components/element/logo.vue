<template>
  <div class="logo">
    <button
      class="font-logo lg:text-D/H3 text-D/B2 transition-colors duration-300"
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
