<template>
  <TheNavbar />
  <slot></slot>
  <TheFooter />
</template>
<script setup lang="ts">
const route = useRoute();
</script>
