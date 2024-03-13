export interface Category {
  _id: string;
  title: string;
  value: string;
  description: string;
  parent_id: string;
}
export interface Menu extends Category {
  children: Menu[];
}
