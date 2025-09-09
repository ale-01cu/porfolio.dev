import es from "./es.json";
import en from "./en.json";

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18N = ({ currentLocale = "en" }) => {
  if (currentLocale === LANGUAGES.ENGLISH) return en;
  if (currentLocale === LANGUAGES.SPANISH) return es;
  return es;
};
