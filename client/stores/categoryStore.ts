import { ref } from "vue";
import { defineStore } from "pinia";
import type { Category } from "~/types/CategoryModel";

export const useCategoryStore = defineStore("category", () => {
  const categories = ref<Category[]>([]);

  const getCategories = async () => {
    try {
      const data: Category[] = await $fetch(
        "http://localhost:5000/api/categories",
        {
          method: "GET",
        }
      );
      categories.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return { categories, getCategories };
});
