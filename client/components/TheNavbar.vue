<template>
  <UHorizontalNavigation class="bg-red" :links="links" :ui="config" />
</template>
<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "About",
    icon: "i-heroicons-user",
    to: "/about",
  },
  {
    label: "Shop",
    icon: "i-heroicons-building-storefront",
    to: "/shop",
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
