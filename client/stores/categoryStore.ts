import { ref } from "vue";
import { defineStore } from "pinia";
import type { Category, Menu } from "~/types/CategoryModel";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref<Category[]>([]);
  const menus = ref<Menu[]>([]);
  const transformCategoriesToMenus = (categories: Category[]): Menu[] => {
    const categoryMap: Record<string, Menu> = {};

    // Step 1: Create a map of categories using _id as the key
    categories.forEach((category) => {
      categoryMap[category._id] = { ...category, children: [] };
    });

    // Step 2: Build the nested structure by linking parents to children
    categories.forEach((category) => {
      if (category.parent_id && categoryMap[category.parent_id]) {
        categoryMap[category.parent_id].children.push(
          categoryMap[category._id]
        );
      } else {
        // If no parent_id or parent not found, it's a top-level menu
        menus.value.push(categoryMap[category._id]);
      }
    });

    return menus.value;
  };
  const getCategories = async () => {
    try {
      const { data }: { data: Category[] } = await $fetch(
        "http://localhost:5000/api/categories",
        {
          method: "GET",
        }
      );
      const nestedMenus = transformCategoriesToMenus(data);
      console.log("🚀 ~ getCategories ~ nestedMenus:", nestedMenus);
    } catch (error) {
      console.log(error);
    }
  };

  return { menus, categories, getCategories };
});
