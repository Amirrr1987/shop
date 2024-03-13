import { ref } from 'vue'
import { defineStore } from 'pinia'
import { categoryService } from '@/services/categoryService'
import type { Category } from '@/types/CategoryModel'
import clg from '@/utils'
import { AxiosError } from 'axios'
export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const category = ref<Category>({} as Category)
  const isEdit = ref<boolean>(false)
  const isLoading = ref<boolean>(false)

  const resetCategory = () => (category.value = {} as Category)

  const getAll = async () => {
    try {
      const { data } = await categoryService.getAll()
      categories.value = data
    } catch (error) {
      const message = (error as AxiosError).message
      throw new Error(message)
    }
  }

  const addOne = async () => {
    try {
      isLoading.value = true
      await categoryService.addOne(category.value)
    } catch (error) {
      const message = (error as AxiosError).message
      throw new Error(message)
    } finally {
      isLoading.value = false
      category.value = {} as Category
    }
  }
  const getOne = async (categoryId: string) => {
    try {
      isLoading.value = true
      const { data } = await categoryService.getOne(categoryId)
      category.value = data
    } catch (error) {
      const message = (error as AxiosError).message
      throw new Error(message)
    } finally {
      isLoading.value = false
    }
  }
  const findOne = (categoryId: string): Category => {
    const categoryIndex = categories.value.findIndex(
      (category: Category) => category._id === categoryId
    )
    if (categoryIndex < 0) return {} as Category
    return categories.value[categoryIndex]
  }

  const updateOne = async () => {
    try {
      isLoading.value = true
      await categoryService.updateOne(category.value)
    } catch (error) {
      const message = (error as AxiosError).message
      throw new Error(message)
    } finally {
      isLoading.value = false
      category.value = {} as Category
    }
  }
  const deleteOne = async (id: string) => {
    try {
      isLoading.value = true
      await categoryService.deleteOne(id)
    } catch (error) {
      const message = (error as AxiosError).message
      throw new Error(message)
    } finally {
      isLoading.value = false
    }
  }

  return {
    category,
    categories,
    getAll,
    addOne,
    getOne,
    findOne,
    deleteOne,
    updateOne,
    isEdit,
    isLoading,
    resetCategory
  }
})
