<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">_id</th>
        <th scope="col">title</th>
        <th scope="col">description</th>
        <th scope="col">children</th>
        <th scope="col">action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in categoryStore.categories" :key="item._id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item._id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.children_id }}</td>
        <td class="d-flex gap-2">
          <button class="btn btn-info">edit</button>
          <button class="btn btn-danger" @click="deleteHandler(item._id)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
const categoryStore = useCategoryStore()
onMounted(async () => await categoryStore.getAll())

const deleteHandler = async (id: string) => {
  await categoryStore.deleteOne(id)
  await categoryStore.getAll()
}
</script>
