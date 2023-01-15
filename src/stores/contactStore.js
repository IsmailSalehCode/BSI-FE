import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  getters: {
    email() {
      return {
        path: "mailto:office@blueskyinvest.xyz",
        text: "office@blueskyinvest.xyz",
      };
    },
    phone1() {
      return {
        path: "tel:+359876930003",
        text: "+359 87 693 0003",
      };
    },
    phone2() {
      return {
        path: "tel:+359889249559",
        text: "+359 88 924 9559",
      };
    },
  },
});
