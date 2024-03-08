<template>
  <section class="py-12">
    <UContainer :ui="uiContainer"> {{ 234 }} </UContainer>
  </section>
</template>
<script setup lang="ts">
import { uiContainer } from "../../../utils";
definePageMeta({
  layout: "product",
});
</script>
