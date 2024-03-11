import { ref } from 'vue'
import { defineStore } from 'pinia'
import { categoryService } from '@/services/categoryService'
import type { Category } from '@/types/CategoryModel'
import clg from '@/utils'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const category = ref<Category>({} as Category)

  const getAll = async () => {
    try {
      const { data } = await categoryService.getAll()

      clg.logger({
        name: 'data',
        value: data,
        path: 'dashboard\\src\\stores\\categoryStore.ts',
        line: '15',
        date: '2024-March-11',
        time: '14:31:33',
        comment: `comment`
      })
      console.log('🚀 ~ getAll ~ data:', data)
      categories.value = data
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const addOne = async () => {
    try {
      await categoryService.addOne(category.value)
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
