<template>
  <div
    class="w-full bg-white py-20 px-10 flex lg:flex-row flex-col gap-2 justify-between items-center"
  >
    <!-- lineBox  -->
    <div class="lineBox w-full flex gap-2 w-max items-center order-2">
      <button class="font-logo text-red text-D/B2 hover:text-green">
        Privacy Policy
      </button>
      <span class="font-logo text-red text-D/B2">/</span>
      <button class="font-logo text-red text-D/B2 hover:text-green">
        Brand Site
      </button>
    </div>
    <!-- logo -->
    <logo
      textColor="text-red"
      hoverColor="hover:text-green"
      class="order-1 lg:scale-1 scale-125"
    />
    <!-- original -->
    <h2 class="font-logo text-red text-D/B2 order-2">
      © original COSME JAPAN CO.,LTD
    </h2>
  </div>
</template>
