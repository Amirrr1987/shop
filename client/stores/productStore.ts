import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const products = reactive([
    {
      img: "https://picsum.photos/300/176?random=1",
      id: "1",
      title: "title 1",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "headphone",
    },
    {
      img: "https://picsum.photos/300/176?random=2",
      id: "2",
      title: "title 2",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
    {
      img: "https://picsum.photos/300/176?random=3",
      id: "3",
      title: "title 3",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
    {
      img: "https://picsum.photos/300/176?random=4",
      id: "4",
      title: "title 4",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
    {
      img: "https://picsum.photos/300/176?random=5",
      id: "5",
      title: "title 5",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
    {
      img: "https://picsum.photos/300/176?random=6",
      id: "6",
      title: "title 6",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
    {
      img: "https://picsum.photos/300/176?random=7",
      id: "7",
      title: "title 7",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
    {
      img: "https://picsum.photos/300/176?random=8",
      id: "8",
      title: "title 8",
      caption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, minus.",
      category: "speaker",
    },
  ]);

  const findOne = (id: string) => {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex) return products[productIndex];
  };
  const categories = reactive([
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
      label: "speaker",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D8%A8%D8%A7%D8%B2%DB%8C.png",
      label: "gaming",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D8%B1%D9%88%DA%AF%D9%88%D8%B4%DB%8C.png",
      label: "on-ear",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-tws.png",
      label: "TWS",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.png",
      label: "speaker",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D8%A8%D8%A7%D8%B2%DB%8C.png",
      label: "gaming",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D8%B1%D9%88%DA%AF%D9%88%D8%B4%DB%8C.png",
      label: "on-ear",
    },
    {
      img: "https://biinoise.com/wp-content/uploads/2023/05/%D9%87%D8%AF%D9%81%D9%88%D9%86-tws.png",
      label: "TWS",
    },
  ]);

  return { products, findOne, categories };
});
