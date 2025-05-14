<template>
  <div class="default-layout w-full flex flex-col items-center relative">
    <bar />
    <main class="w-full">
      <slot></slot>
    </main>
    <img
      src="../assets/img/design.png"
      class="absolute t-0 w-full opacity-30 pointer-events-none"
    />
  </div>
</template>
