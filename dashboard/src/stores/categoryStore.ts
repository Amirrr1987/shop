import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { addCategoriesService, getCategoriesService } from '@/services/categoryService'
import type { Category } from '@/types/CategoryModel'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const category = ref<Category>({} as Category)

  const getCategories = async () => {
    try {
      const { data } = await getCategoriesService()
      categories.value = data
    } catch (error: any) {
      console.log('🚀 ~ getCategories ~ error:', error)
    }
  }

  const addCategories = async () => {
    try {
      const { data } = await addCategoriesService(category.value)
      categories.value = data
    } catch (error: any) {
      console.log('🚀 ~ getCategories ~ error:', error)
    }
  }

  return { category, categories, getCategories, addCategories }
})
