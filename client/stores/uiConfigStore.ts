import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useUiConfigStore = defineStore("uiConfig", () => {
  const container = reactive({
    constrained: "!container",
  });

  return { container };
});
