import { defineStore } from "pinia";

export const useIsmailStore = defineStore("ismail", {
  getters: {
    email() {
      return {
        path: "mailto:ceo@spacengc.com",
        text: "ceo@spacengc.com",
      };
    },
    instagram() {
      return {
        path: "https://www.instagram.com/ismails.2",
        text: "ismails.2",
      };
    },
    facebook() {
      return {
        path: "https://www.facebook.com/ismail.saleh.921230",
        text: "Ismail Saleh",
      };
    },
  },
});
