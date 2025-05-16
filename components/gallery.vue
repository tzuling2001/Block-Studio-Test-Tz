<template>
  <div class="w-[1300px] relative bg-black">
    <!-- title -->
    <div
      class="font-content text-D/H3 text-white absolute top-[200px] left-[50px]"
    >
      <h1>SUMMER</h1>
      <h1>COLLECTION</h1>
    </div>

    <!-- section 01 -->
    <section class="w-full mt-[200px]">
      <h1
        class="font-content text-D/H3 text-white w-full pr-[350px] pb-10 text-end"
      >
        SECTION 01
      </h1>
      <div class="photoBox w-full flex gap-5 items-end justify-end">
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
    </section>

    <!-- main Gallery title -->
    <div class="w-full py-5 flex justify-center">
      <titleText text="Gallery" textColor="text-red" />
    </div>

    <!-- section 02 -->
    <section class="w-full mt-[60px] relative">
      <h1
        class="font-content text-D/H3 text-white w-full pr-[350px] pb-10 text-end"
      >
        SECTION 02
      </h1>
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
    </section>

    <!-- section 03 -->
    <section class="w-full mt-[20px]">
      <h1
        class="font-content text-D/H3 text-white w-full pl-[280px] pb-10 text-start"
      >
        SECTION 03
      </h1>
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
    </section>

    <!-- section 04 -->
    <section class="w-full mt-[120px]">
      <h1
        class="font-content text-D/H3 text-white w-full pl-[280px] pb-10 text-start"
      >
        SECTION 04
      </h1>
      <div class="photoBox w-full flex gap-5 items-end justify-end">
        <card
          image="/image/D:Gallery-boy.png"
          year="1997"
          author="christopher fairbank"
        />
      </div>
    </section>
  </div>
</template>
