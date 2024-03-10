<template>
  <form class="p-4" @submit.prevent="categoryStore.addCategories">
    <div class="mb-3">
      <label for="label" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        aria-describedby="titleHelp"
        v-model="categoryStore.category.title"
      />
      <div id="titleHelp" class="form-text">We'll never share your label with anyone else.</div>
    </div>

    <div class="mb-3">
      <label for="value" class="form-label">Value</label>
      <input
        type="text"
        class="form-control"
        id="value"
        aria-describedby="valueHelp"
        v-model="categoryStore.category.value"
      />
      <div id="valueHelp" class="form-text">We'll never share your value with anyone else.</div>
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        rows="5"
        type="text"
        class="form-control"
        id="description"
        aria-describedby="descriptionHelp"
        v-model="categoryStore.category.description"
      />
      <div id="descriptionHelp" class="form-text">
        We'll never share your description with anyone else.
      </div>
    </div>

    <div class="mb-3">
      <label for="children" class="form-label">children</label>
      <select
        class="form-select"
        aria-label="childrenHelp"
        aria-describedby="childrenHelp"
        id="children"
        v-model="categoryStore.category.children"
      >
        <option selected>Open this select menu</option>
        <option :value="item" v-for="item in categoryStore.categories" :key="item._id">
          {{ item.title }}
        </option>
      </select>
      <div id="childrenHelp" class="form-text">We'll never share your label with anyone else.</div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
onMounted(async () => await categoryStore.getCategories())
</script>
