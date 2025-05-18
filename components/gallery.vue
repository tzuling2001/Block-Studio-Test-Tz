<template>
  <div class="lg:w-[1300px] w-full relative bg-black lg:flex flex-col px-5">
    <!-- title -->
    <div ref="titleBox" class="lg:absolute top-[100px] left-[50px]">
      <subTitle text="SUMMER" />
      <subTitle text="COLLECTION" />
    </div>

    <!-- main Gallery title -->
    <div
      ref="mainTitle"
      class="lg:absolute top-[750px] w-full py-5 flex justify-center"
    >
      <titleText text="Gallery" textColor="text-red" fontSize="text-M/DIS1" />
    </div>

    <!-- D-photoGroup -->
    <div class="D-photoGroup flex flex-col items-center mt-[100px] gap-10">
      <!-- section 01 -->
      <div class="w-full relative flex flex-col">
        <div class="lg:pr-[310px] pb-10 lg:text-end text-start">
          <subTitle text="SECTION 01" />
        </div>
        <div
          class="flex flex-wrap gap-5 lg:items-end lg:justify-end justify-center"
        >
          <card
            image="/image/D:Gallery-car.png"
            year="1997"
            author="christopher fairbank"
          />
          <card
            image="/image/D:Gallery-statue.png"
            year="1997"
            author="christopher fairbank"
          />
        </div>
      </div>

      <!-- section 02 -->
      <div class="w-full lg:mt-[350px] relative">
        <div class="lg:pr-[350px] pb-10 lg:text-end">
          <subTitle text="SECTION 02" />
        </div>
        <div
          class="rightBox flex flex-wrap gap-5 lg:items-start lg:justify-end justify-center"
        >
          <card
            image="/image/D:Gallery-book.png"
            year="1997"
            author="christopher fairbank"
          />
          <card
            image="/image/D:Gallery-tv.png"
            year="1997"
            author="christopher fairbank"
          />
          <div class="leftBox lg:absolute left-0 top-[-70px]">
            <card
              image="/image/D:Gallery-girl.png"
              year="1997"
              author="christopher fairbank"
            />
          </div>
        </div>
      </div>

      <!-- section 03 -->
      <div class="w-full lg:mt-[20px]">
        <div class="lg:pl-[240px] pb-10 text-start">
          <subTitle text="SECTION 03" />
        </div>
        <div
          class="flex flex-wrap gap-5 lg:items-end lg:justify-end lg:pr-[360px] justify-center"
        >
          <card
            image="/image/D:Gallery-heel.png"
            year="1997"
            author="christopher fairbank"
          />
          <card
            image="/image/D:Gallery-mouse.png"
            year="1997"
            author="christopher fairbank"
          />
        </div>
      </div>

      <!-- section 04 -->
      <div class="w-full lg:mt-[120px]">
        <div class="w-full lg:pl-[240px] pb-10 text-start">
          <subTitle text="SECTION 04" />
        </div>
        <div class="w-full flex gap-5 items-end lg:justify-end justify-center">
          <card
            image="/image/D:Gallery-boy.png"
            year="1997"
            author="christopher fairbank"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mainTitle = ref(null);
const titleBox = ref(null);

onMounted(async () => {
  await nextTick();

  gsap.from(mainTitle.value, {
    opacity: 0,
    scale: 0.3,
    scrollTrigger: {
      trigger: mainTitle.value,
      start: "top 80%",
      end: "top center",
      scrub: true,
    },
  });
});
</script>
