<template>
  <UCarousel v-slot="{ item }" :items="items" :ui="uiConfig" arrows indicators>
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
  <section class="py-12 bg-gray-50">
    <UContainer>
      <div class=""></div>
    </UContainer>
  </section>

  <section class="py-12 bg-gray-50">
    <UContainer>
      <div class=""></div>
    </UContainer>
  </section>

  <section class="py-12 bg-gray-50">
    <UContainer>
      <div class=""></div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/576?random=1",
  "https://picsum.photos/1920/576?random=2",
  "https://picsum.photos/1920/576?random=3",
  "https://picsum.photos/1920/576?random=4",
  "https://picsum.photos/1920/576?random=5",
  "https://picsum.photos/1920/576?random=6",
];
const uiConfig = {
  item: "object-cover w-full h-[36rem]",
  container: "container-full mx-auto",
};
</script>
