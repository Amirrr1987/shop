<template>
  <UCard v-for="item in productStore.products" :ui="uiCard">
    <template #header>
      <img
        class="w-full h-40 object-cover"
        :src="item.img"
        alt=""
      />
    </template>
    <RouterLink
      :to="`products/${item.id}`"
      class="text-2xl capitalize font-medium mb-2"
      >title</RouterLink
    >
    <p class="text-sm text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.
    </p>

    <template #footer>
      <UButton>
        <UIcon name="i-heroicons-home" />
      </UButton>
    </template>
  </UCard>
</template>
<script setup lang="ts">
import { uiCard } from "~/utils";
definePageMeta({
  layout: "product",
});
const productStore = useProductStore();
</script>
