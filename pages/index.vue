<template>
  <clientOnly>
    <div
      class="index w-full flex flex-col justify-center relative overflow-hidden"
    >
      <section id="home">
        <homeBanner />
        <!-- viewAll -->
        <div
          class="viewAll w-full h-[320px] bg-black flex items-center relative mt-[25px]"
        >
          <viewAll />
          <!-- p-content -->
          <div
            class="font-content text-D/B2 text-white w-[474px] absolute top-[30px] left-[50px]"
          >
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam
            amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation
            ea esse velit tempor culpa.
          </div>
          <!-- title-second-line -->
          <div
            class="title-third-line absolute top-[20px] right-[-80px] font-content text-D/DIS0 text-red"
          >
            Movie
          </div>
        </div>
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
    </div>
  </clientOnly>
</template>
