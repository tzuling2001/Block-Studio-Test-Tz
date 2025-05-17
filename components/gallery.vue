<template>
  <div class="w-[1300px] relative bg-black">
    <!-- section 01 -->
    <div
      class="sectionTitle font-content text-D/H3 text-white absolute top-[100px] left-[50px]"
    >
      <subTitle text="SUMMER" />
      <subTitle text="COLLECTION" />
    </div>

    <!-- title -->
    <div class="sectionBox w-full relative">
      <div class="w-full pr-[350px] pb-10 text-end mt-[100px]">
        <subTitle text="SECTION 01" />
      </div>
      <div ref="photoBox" class="w-full flex gap-5 items-end justify-end">
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

    <!-- main Gallery title -->
    <div class="w-full py-5 flex justify-center">
      <titleText text="Gallery" textColor="text-red" />
    </div>

    <!-- section 02 -->
    <div class="sectionBox w-full mt-[60px] relative">
      <div class="w-full pr-[350px] pb-10 text-end">
        <subTitle text="SECTION 02" />
      </div>
      <div class="photoBoxRight w-full flex gap-5 items-start justify-end">
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
      </div>
      <div class="photoBoxLeft absolute left-0 top-[-70px]">
        <card
          image="/image/D:Gallery-girl.png"
          year="1997"
          author="christopher fairbank"
        />
      </div>
    </div>

    <!-- section 03 -->
    <div class="sectionBox w-full mt-[20px]">
      <div class="w-full pl-[280px] pb-10 text-start">
        <subTitle text="SECTION 03" />
      </div>
      <div class="photoBox w-full flex gap-5 items-end justify-end pr-[360px]">
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
    <div class="sectionBox w-full mt-[120px]">
      <div class="w-full pl-[280px] pb-10 text-start">
        <subTitle text="SECTION 04" />
      </div>
      <div class="photoBox w-full flex gap-5 items-end justify-end">
        <card
          image="/image/D:Gallery-boy.png"
          year="1997"
          author="christopher fairbank"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>
