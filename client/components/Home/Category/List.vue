<template>
  <section class="py-12">
    <UContainer :ui="{ ...uiConfigStore.container, ...uiConfig.container }">
      <div v-for="category in productStore.categories" class="flex flex-col items-center">
        <img
          class="w-1/2 mx-auto"
          :src="category.img"
          :title="category.label"
          :alt="category.label"
        />
        <h3>{{ category.label }}</h3>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const productStore = useProductStore();
const uiConfigStore = useUiConfigStore();

const uiConfig = reactive({
  container: {
    base: "grid grid-cols-4 gap-4 md:flex",
  },
});
</script>
