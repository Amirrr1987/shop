import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "~/types/ProductModel";
import type { Category } from "~/types/CategoryModel";

export const useCategoryStore = defineStore("category", () => {
  const generateCategories = (parentId: string, level: number): Category[] => {
    if (level === 0) {
      return [];
    }

    const categories: Category[] = [];

    for (let i = 1; i <= 5; i++) {
      const categoryId = `${parentId}-${i}`;
      categories.push({
        // _id: categoryId,
        title: `Category ${categoryId}`,
        caption: `Description for Category ${categoryId}`,
        category: generateCategories(categoryId, level - 1),
      });
    }

    return categories;
  };

  const categories: Category[] = [];

  for (let i = 1; i <= 4; i++) {
    const rootCategoryId = `Root-${i}`;
    categories.push({
      // _id: rootCategoryId,
      title: `Root Category ${rootCategoryId}`,
      caption: `Description for Root Category ${rootCategoryId}`,
      category: generateCategories(rootCategoryId, 4),
    });
  }



  return { categories };
});
