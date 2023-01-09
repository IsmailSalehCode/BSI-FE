import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  getters: {
    projects() {
      return [
        {
          title: "",
          url: "",
        },
      ];
    },
  },
});
