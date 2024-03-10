<template>
  <form class="p-4" @submit.prevent="categoryStore.addCategories">
    <div class="mb-3">
      <label for="label" class="form-label">Label</label>
      <input
        type="text"
        class="form-control"
        id="label"
        aria-describedby="labelHelp"
        v-model="categoryStore.category.label"
      />
      <div id="labelHelp" class="form-text">We'll never share your label with anyone else.</div>
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
      <label for="parent" class="form-label">Parent</label>
      <select
        class="form-select"
        aria-label="parentHelp"
        aria-describedby="parentHelp"
        id="parent"
        v-model="categoryStore.category.parent"
      >
        <option selected>Open this select menu</option>
        <option :value="item" v-for="item in categoryStore.categories" :key="item._id">{{ item.label }}</option>
      </select>
      <div id="parentHelp" class="form-text">We'll never share your label with anyone else.</div>
    </div>

    <div class="mb-3">
      <label for="parent" class="form-label">Child</label>
      <select
        class="form-select"
        aria-label="parentHelp"
        aria-describedby="parentHelp"
        id="parent"
        v-model="categoryStore.category.child"
      >
        <option selected>Open this select menu</option>
        <option :value="item" v-for="item in categoryStore.categories" :key="item._id">
          {{ item.label }}
        </option>
      </select>
      <div id="parentHelp" class="form-text">We'll never share your label with anyone else.</div>
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
