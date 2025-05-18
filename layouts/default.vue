<template>
  <div
    class="default-layout w-full flex flex-col items-center relative bg-black"
  >
    <!-- 導入 -->
    <div
      v-if="isLoading"
      class="fixed z-[999] w-full h-screen flex flex-col gap-5 items-center justify-center bg-black"
    >
      <logo
        textColor="text-red"
        hoverColor="hover:text-green"
        class="lg:scale-1 scale-125"
      />
      <div class="w-[120px] h-0.5 bg-white mt-4 relative overflow-hidden">
        <div
          class="absolute left-0 top-0 h-full bg-red animate-loading"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>
    <!-- 主內容-->
    <Header />
    <main class="w-full">
      <slot></slot>
    </main>
    <Footer />

    <!-- <img
      src="../assets/img/design.png"
      class="absolute t-0 w-full opacity-30 pointer-events-none"
    /> -->
    <!-- <img
      src="../assets/img/v1.png"
      class="absolute t-0 w-full lg:opacity-0 opacity-30 display-none pointer-events-none"
    /> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);
const progress = ref(0);

onMounted(() => {
  // 模擬資源載入進度
  const interval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        isLoading.value = false;
      }, 300); // 延遲淡出動畫
    } else {
      progress.value += 2;
    }
  }, 20);
});
</script>

<style scoped>
@keyframes loadingBar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-loading {
  transition: width 0.2s ease-in-out;
}
</style>
