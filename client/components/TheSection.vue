<template>
    <section class="py-12">
        <UContainer :ui="uiConfigStore.container">
        <slot></slot>
    </UContainer>
    </section>
</template>
<script setup lang="ts">

const uiConfigStore = useUiConfigStore()

</script>