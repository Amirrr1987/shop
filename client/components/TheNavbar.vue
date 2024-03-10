<template>
  <!-- <div class="flex"> -->
  <!-- <UAvatar
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
    /> -->
  <!-- <UHorizontalNavigation
      class="bg-red shadow"
      :links="links"
      :ui="uiConfig.navbar"
    /> -->
  <!-- </div> -->

  <nav class="shadow bg-primary py-4">
    <div class="container mx-auto">
      <ul class="flex gap-x-4">
        <li><ULink to="/">Home</ULink></li>
        <li v-for="item in categoryStore.categories" :key="item._id">
          <ULink :to="`/products/${item.label}`"> {{ item.label }}</ULink>
        </li>
        <li><ULink to="/contact">Contact</ULink></li>
      </ul>
    </div>
  </nav>
</template>
<script setup lang="ts">
// const links = [
//   {
//     label: "Home",
//     avatar: {
//       src: "https://biinoise.com/wp-content/uploads/2020/12/logo-site-1-e1684931997977.png",
//     },
//     to: "/",
//     children: [
//       {
//         label: "Home",
//         avatar: {
//           src: "https://biinoise.com/wp-content/uploads/2020/12/logo-site-1-e1684931997977.png",
//         },
//         to: "/",
//       },
//     ],
//   },

//   {
//     label: "products",
//     icon: "i-heroicons-building-storefront",
//     to: "/products",
//   },

//   {
//     label: "Contact",
//     icon: "i-heroicons-phone",
//     to: "/contact",
//   },
// ];

// const uiConfig = reactive({
//   navbar: {
//     wrapper: "relative w-full flex items-center justify-between",
//     container: "container mx-auto px-4",
//     inner: "min-w-0",
//     base: "group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",
//     before:
//       "before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
//     after:
//       "after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",
//     active:
//       "text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",
//     inactive:
//       "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
//     label: "truncate relative",
//     icon: {
//       base: "flex-shrink-0 w-5 h-5 relative",
//       active: "text-gray-700 dark:text-gray-200",
//       inactive:
//         "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200",
//     },
//     avatar: {
//       base: "flex-shrink-0",
//       size: "2xs",
//     },
//     badge: {
//       base: "flex-shrink-0 ml-auto relative rounded",
//       color: "gray",
//       variant: "solid",
//       size: "xs",
//     },
//   },
// });
const categoryStore = useCategoryStore();

onMounted(async () => {
  await categoryStore.getCategories();
});
</script>
