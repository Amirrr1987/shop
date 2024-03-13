<template>
  <nav class="shadow bg-primary py-4">
    <div class="container mx-auto">
      <ul class="flex gap-x-4 text-white">
        <li><ULink to="/">Home</ULink></li>

        <template v-for="one in categoryStore.menus" :key="one._id">
          <li v-if="one.parent_id === null" class="one">
            <ULink :to="one.value" >{{ one.title }}</ULink>
            <ul class="one-content p-4 rounded flex flex-col gap-y-2">
              <li v-for="two in one.children" class="two">
                <ULink class="text-gray-800 py-2  w-full text-left px-0">{{ two.title }}</ULink>
                <ul class="two-content p-4 rounded flex flex-col gap-y-2">
                  <li v-for="single in two.children">
                    <ULink class="text-gray-800 py-2  w-full text-left px-0">{{ single.title }}</ULink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </template>
        <li><ULink to="/contact">Contact</ULink></li>
      </ul>
    </div>
  </nav>
</template>
<script setup lang="ts">
const categoryStore = useCategoryStore();

onMounted(async () => {
  await categoryStore.getCategories();
});
</script>
<style>
.one {
  position: relative;
}
.one-content {
  display: none;
  position: absolute;
  background-color: white;
  width: 200px;
}

.one:hover .one-content {
  display: flex;
}
</style>
