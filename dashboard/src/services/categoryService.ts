import type { Category } from '@/types/CategoryModel'
import { _axios } from './axios'

const getAll = async () => {
  return await _axios.get('/categories')
}
const addOne = async (category: Category) => {
  return await _axios.post('/categories', category)
}
const getOne = async (categoryId: string) => {
  return await _axios.get(`/categories/${categoryId}`)
}
const updateOne = async (category: Category) => {
  return await _axios.patch(`/categories/${category._id}`, category)
}
const deleteOne = async (categoryId: string) => {
  return await _axios.delete(`/categories/${categoryId}`)
}

export const categoryService = { getOne, getAll, addOne, updateOne, deleteOne }
