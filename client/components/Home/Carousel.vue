<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="uiConfig.carousel"
    arrows
  >
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>

<script setup lang="ts">
const items = reactive([
  "/assets/images/carousel/aura-studio-4-banner.jpg",
  "/assets/images/carousel/citation-oasis-2.jpg",
  "/assets/images/carousel/JBL-L75ms.jpg",
]);
const uiConfig = {
  carousel: {
    item: "w-full h-72 md:h-96 lg:h-[34rem] object-cover",
    container: "container-full mx-auto",
  },
};
</script>
