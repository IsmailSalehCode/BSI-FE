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
    emailRules() {
      const emailRules = [
        (v) => !!v || "Required",
        (v) =>
          (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
            v
          ) &&
            v.length <= 320) ||
          "Invalid e-mail",
      ];
      return emailRules;
    },
    rules() {
      const rules = {
        required: (v) => !!v || "Required field",

        onlyLetters: (v) =>
          (v && /^([^0-9!@#$%^&*()\-_+/\\,.<>='"|{};[\]]*)$/.test(v)) || //works here but in regex101 it wants '/' to be escaped-> '\/'
          "Only letters",
        max(maxNum) {
          return (v) =>
            (v || "").toString().length <= maxNum || "Text is too long!";
        },
        min(minNum) {
          return (v) =>
            (v || "").toString().length >= minNum || "Text is too short!";
        },
      };
      return rules;
    },
  },
});
