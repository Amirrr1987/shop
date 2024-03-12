<template>
  <form class="p-4" @submit.prevent="submitHandler">
    {{ categoryStore.category }}
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
      <label for="children" class="form-label">Parent</label>
      <select
        class="form-select"
        aria-label="childrenHelp"
        aria-describedby="childrenHelp"
        id="children"
        v-model="categoryStore.category.parent_id"
      >
        <option selected>Open this select menu</option>
        <option :value="item._id" v-for="item in categoryStore.categories" :key="item._id">
          {{ item.title }}
        </option>
      </select>
      <div id="childrenHelp" class="form-text">We'll never share your label with anyone else.</div>
    </div>

    <button type="submit" class="btn btn-primary" :disabled="categoryStore.isLoading">
      <template v-if="categoryStore.isLoading">
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
      </template>
      <template v-else>
        <!-- <template v-if="categoryId">Edit</template> -->
        <!-- <template v-else>Submit</template> -->
      </template>
    </button>
  </form>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { useRoute, useRouter } from 'vue-router'

const categoryStore = useCategoryStore()
const route = useRoute()
const router = useRouter()

// Create a computed property to watch route.params.id
const routeParamsId = computed(() => route.params.id)

watch(
  () => route.name,
  () => {
    if (route.name === 'TheCategoryEdit') {
      console.log(1)
    }
  }
)

onMounted(async () => {
  await categoryStore.getAll()
})

const submitHandler = async () => {
  if (categoryStore.isEdit) {
    await categoryStore.updateOne()
  } else {
    await categoryStore.addOne()
  }
  await categoryStore.getAll()
  router.push({ name: 'TheCategoryList' })
}
</script>
