<template>
  <div class="overflow-hidden" ref="wrapper">
    <h2
      class="font-content lg:text-D/NAV text-[12px] leading-relaxed"
      :class="textColor"
    >
      <span
        v-for="(word, i) in splitText"
        :key="i"
        class="inline-block opacity-0 translate-y-5"
        :class="{ 'whitespace-pre': !(i === 0 && word === ' ') }"
        :ref="(el) => el && (charRefs[i] = el)"
      >
        {{ word }}
      </span>
    </h2>
  </div>
</template>

<script setup>
import { ref, onMounted, useSlots, computed, nextTick } from "vue";
import gsap from "gsap";

const props = defineProps({
  textColor: {
    type: String,
    default: "text-white",
  },
});

const wrapper = ref(null);
const charRefs = [];
const slots = useSlots();

const splitText = computed(() => {
  const defaultSlot = slots.default?.() || [];
  let rawText = "";
  for (const vnode of defaultSlot) {
    if (typeof vnode.children === "string") {
      rawText += vnode.children;
    }
  }
  // split 單字並保留空格
  const words = rawText.split(/(\s+)/);

  if (words[0] && words[0].trim() === "") {
    words.shift();
  }

  return words;
});

onMounted(() => {
  gsap.to(charRefs, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: wrapper.value,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
    },
  });
});
</script>
