import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import bg from "../locales/bg.json";

const messages = {
  en,
  bg,
};
const browserLocale = navigator.language.split("-")[0];
const i18n = createI18n({
  locale: messages[browserLocale] ? browserLocale : "en", // set locale
  fallbackLocale: "bg", // set fallback locale
  messages, // set locale messages
});

export default i18n;
