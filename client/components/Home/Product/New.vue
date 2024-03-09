<template>
  <section class="py-12">
    <UContainer :ui="uiConfigStore.container">
      <div class="">
        <h3 class="text-lg font-medium capitalize">best visitors</h3>
        <UDivider class="my-4" />
        <UCarousel
          :ui="uiConfig.carousel"
          ref="carouselRef"
          v-slot="{ item }"
          :items="productStore.products"
          autoplay
          arrows
        >
          <UCard
            class="w-56 h-auto"
            :ui="{
              base: 'overflow-hidden',
              header: {
                padding: '',
              },
            }"
          >
            <template #header>
              <img :src="item.img" :title="item.title" :alt="item.title" />
            </template>
            <h4 class="font-medium capitalize">{{ item.title }}</h4>
            <p class="text-sm leading-6 font-light text-gray-500">
              {{ item.caption }}
            </p>
            <template #footer>
              <UButton to="/compare">compare</UButton>
            </template>
          </UCard>
        </UCarousel>
      </div>
    </UContainer>
  </section>
</template>
<script setup lang="ts">
const productStore = useProductStore();
const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

const uiConfig = reactive({
  carousel: {
    container: "gap-x-8",
    default: {
      prevButton: {
        class: "-translate-x-16",
      },
      nextButton: {
        class: "translate-x-16",
      },
    },
  },
});

const uiConfigStore = useUiConfigStore();
</script>
