import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ro from "./locales/ro.json";
import ru from "./locales/ru.json";

i18next.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		ro: { translation: ro },
		ru: { translation: ru }
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false
	}
});

export default i18next;