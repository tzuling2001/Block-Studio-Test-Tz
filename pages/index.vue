<template>
  <clientOnly>
    <div
      class="index w-full flex flex-col justify-center relative overflow-hidden"
    >
      <section id="top" class="scroll-mt-[80px]">
        <homeBanner />
        <viewBox />
      </section>

      <section id="story" class="scroll-mt-[80px]">
        <story />
      </section>

      <section id="service" class="scroll-mt-[80px]">
        <service />
      </section>

      <section id="marquee">
        <marquee />
      </section>

      <section id="gallery" class="w-full flex justify-center scroll-mt-[80px]">
        <gallery />
      </section>

      <section id="contact" class="scroll-mt-[80px]">
        <callMe />
      </section>
    </div>
  </clientOnly>
</template>
