<template>
  <section class="py-12">
    <UContainer :ui="{ ...uiConfigStore.container, ...uiConfig.container }">
      <ULink
        @click="goToCategory(category)"
        v-for="category in productStore.categories"
        class="flex flex-col items-center"
      >
        <img
          class="w-1/2 mx-auto"
          :src="category.img"
          :title="category.label"
          :alt="category.label"
        />
        <h3>{{ category.label }}</h3>
      </ULink>
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
const router = useRouter();
const goToCategory = (category: any) => {
  router.push({
    name: "products-category",
    params: { category: category.category },
  });
};
</script>
