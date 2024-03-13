<template>
  <TheSection>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <UCard v-for="item in productStore.products" :ui="uiConfigStore.card">
        <template #header>
          <img
            class="w-full"
            :src="item.img"
            :title="item.title"
            :alt="item.title"
          />
        </template>
        <ULink @click="goToDetail(item._id)">
          <h3>
            {{ item.title }}
          </h3>
        </ULink>
        <p>
          {{ item.caption }}
        </p>
      </UCard>
    </div>
  </TheSection>
</template>
<script setup lang="ts">
const categoryStore = useCategoryStore();
const productStore = useProductStore();
const uiConfigStore = useUiConfigStore();

const goToDetail = (id: string) => {
  const item = productStore.findOne(id);
  console.log("🚀 ~ goToDetail ~ item:", item);
  console.log(categoryStore.categories);
};
</script>