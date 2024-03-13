import { reactive } from "vue";
import type { Category, Menu } from "~/types/CategoryModel";
export const uiContainer = reactive({
  constrained: "!container mx-auto",
});

export const uiCard = reactive({
  base: "overflow-hidden",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6",
  },
  header: {
    base: "",
    background: "",
    padding: "",
  },
  footer: {
    base: "flex gap-x-4",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
});
const transformCategoriesToMenus = (categories: Category[]): Menu[] => {
  const categoryMap: Record<string, Menu> = {};

  // Step 1: Create a map of categories using _id as the key
  categories.forEach((category) => {
    categoryMap[category._id] = { ...category, children: [] };
  });

  // Step 2: Build the nested structure by linking parents to children
  categories.forEach((category) => {
    if (category.parent_id && categoryMap[category.parent_id]) {
      categoryMap[category.parent_id].children.push(categoryMap[category._id]);
    } else {
      // If no parent_id or parent not found, it's a top-level menu
      menus.value.push(categoryMap[category._id]);
    }
  });

  return menus.value;
};
