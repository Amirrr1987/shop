import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import type { Product } from "~/types/ProductModel";

export const useProductStore = defineStore("product", () => {

  const products = reactive<Product[]>([]);

  for (let i = 1; i <= 20; i++) {
    products.push({
      _id: i.toString(),
      img: `https://picsum.photos/300/176?random=${i}`,
      title: `Product ${i}`,
      caption: `Description for Product ${i}`,
      price: Math.floor(Math.random() * 1000) + 1, // Random price between 1 and 1000
      category_id: ((i % 5) + 1).toString(), // Assigning a category_id from 1 to 5
    });
  }

  const findOne = (id: string) => {
    const productIndex = products.findIndex((product) => product._id === id);
    if (productIndex) return products[productIndex];
  };

  return { products, findOne };
});
