import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const products = reactive([
    {
      img: "https://picsum.photos/300/176?random=1",
      id: "1",
      title: "title 2",
      cation:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "headphone",
    },
    {
      img: "https://picsum.photos/300/176?random=2",
      id: "2",
      title: "title 2",
      cation:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
  ]);

  return { products };
});
