import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useUiConfigStore = defineStore("uiConfig", () => {
  const container = reactive({
    constrained: "!container",
  });
  const card = reactive({
    base: "overflow-hidden",
    header: {
      padding: "",
    },
  });

  return { container, card };
});
