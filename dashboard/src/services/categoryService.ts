import type { Category } from '@/types/CategoryModel'
import { _axios } from './axios'

const getAll = async () => {
  return await _axios.get('/categories')
}
const addOne = async (data: Category) => {
  return await _axios.post('/categories', data)
}
const addOneChildren = async (id: string,data: Category) => {
  return await _axios.patch(`/categories/children/${id}`, data)
}
const updateOne = async (category: Category) => {
  return await _axios.patch(`/categories/${category._id}`, category)
}
const deleteOne = async (id: string) => {
  return await _axios.delete(`/categories/${id}`)
}

export const categoryService = { getAll, addOne, addOneChildren, updateOne, deleteOne }
