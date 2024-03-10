export interface Category {
  _id: string;
  label: string;
  description: string;
  parent: Category;
  child: Category[];
}
