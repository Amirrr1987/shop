export interface Category {
  _id: string
  value: string
  title: string
  description: string
  parent_id?: string
  children_id?: string[]
}
export interface Req extends Omit<Category, 'title'> {}
export interface Res extends Pick<Category, 'title'> {}

const x: Res = {
  
}
