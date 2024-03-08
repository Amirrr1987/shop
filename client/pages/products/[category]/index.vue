<template>
  <UCard v-for="item in products" :ui="uiCard">
    <template #header>
      <img
        class="w-full h-40 object-cover"
        src="https://picsum.photos/300/176?random=1"
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
const products = reactive([

]);
</script>
