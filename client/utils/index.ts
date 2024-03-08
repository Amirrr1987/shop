import { reactive } from "vue";
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