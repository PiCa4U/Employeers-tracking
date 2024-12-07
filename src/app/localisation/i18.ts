import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {ru} from "./locales/ru";
import {en} from "./locales/en";

const i18 = i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    compatibilityJSON: 'v3',

    debug: false,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n;
