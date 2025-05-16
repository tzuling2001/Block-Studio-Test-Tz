<template>
  <clientOnly>
    <div
      class="index w-full flex flex-col justify-center relative overflow-hidden"
    >
      <section id="home">
        <homeBanner />
        <viewBox />
      </section>

      <section id="story">
        <story />
      </section>

      <section id="service">
        <service />
      </section>

      <section id="marquee">
        <marquee />
      </section>

      <section id="gallery" class="w-full flex justify-center">
        <gallery />
      </section>

      <section id="callMe">
        <callMe />
      </section>
    </div>
  </clientOnly>
</template>
