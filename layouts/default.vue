<template>
  <div
    class="default-layout w-full flex flex-col items-center relative bg-black"
  >
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
