import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import koTranslation from "./locales/ko.json";

const resources = {
  en: { translation: enTranslation },
  ko: { translation: koTranslation }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "en", // 마지막 선택한 언어 기억
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;