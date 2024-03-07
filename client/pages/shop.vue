<template>
  <section class="py-12">
    <div class="container mx-auto"></div>
  </section>
  <section class="py-12">
    <div class="container mx-auto grid grid-cols-4 gap-12">
      <div class="flex items-center space-x-4" v-for="item in 12" :key="item">
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  </section>
  <section class="py-12">
    <div class="container mx-auto grid grid-cols-4 gap-12">
      <UCard v-for="item in 12" :key="item">
        <template #header>
          <!-- <Placeholder class="h-8" /> -->
          sdf
        </template>

        <!-- <Placeholder class="h-32" /> -->
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />

        <template #footer>
          <!-- <Placeholder class="h-8" /> -->
          sdf
        </template>
      </UCard>
    </div>
  </section>
</template>
