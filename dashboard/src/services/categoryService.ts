import type { Category } from '@/types/CategoryModel'
import { _axios } from './axios'

export const getCategoriesService = async () => {
  return await _axios.get('/categories')
}
export const addCategoriesService = async (data: Category) => {
  return await _axios.post('/categories', data)
}
export const updateCategoriesService = async (id: string, data: Category) => {
  return await _axios.patch(`/categories/${id}`, data)
}
export const deleteCategoriesService = async (id: string) => {
  return await _axios.delete(`/categories/${id}`)
}
