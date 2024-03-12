export interface Category {
  _id: string
  value: string
  title: string
  description: string
  parent_id?: string
}
export interface Req extends Omit<Category, '_id'> {}
export interface Res extends Category {}
