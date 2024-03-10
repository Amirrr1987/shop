import { ref } from 'vue'
import { defineStore } from 'pinia'
import { categoryService } from '@/services/categoryService'
import type { Category } from '@/types/CategoryModel'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const category = ref<Category>({} as Category)

  const getAll = async () => {
    try {
      const { data } = await categoryService.getAll()
      categories.value = data
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const addOne = async () => {
    try {
      const { data } = await categoryService.addOne(category.value)
      categories.value = data
    } catch (error: any) {
      throw new Error(error)
    }
  }
  const findOne = (id: string) => {
    const itemIndex = categories.value.findIndex((item) => item._id === id)
    if (!itemIndex) return
    return categories.value[itemIndex]
  }

  const updateOne = async (category: Category) => {
    try {
      const res = await categoryService.updateOne(category)
      console.log('🚀 ~ deleteOne ~ res:', res)
    } catch (error: any) {
      throw new Error(error)
    }
  }
  const deleteOne = async (id: string) => {
    try {
      const res = await categoryService.deleteOne(id)
      console.log('🚀 ~ deleteOne ~ res:', res)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return { category, categories, getAll, addOne, findOne, deleteOne, updateOne }
})
