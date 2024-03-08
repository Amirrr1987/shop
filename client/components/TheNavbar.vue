<template>
  <UHorizontalNavigation class="bg-red shadow" :links="links" :ui="config" />
</template>
<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },

  {
    label: "products",
    icon: "i-heroicons-building-storefront",
    to: "/products",
  },

  {
    label: "Contact",
    icon: "i-heroicons-phone",
    to: "/contact",
  },
];
const config = {
  container: "container mx-auto px-4",
};
</script>
