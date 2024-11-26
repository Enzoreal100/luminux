import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            title: "Welcome to LuminUX",
            text: "Let the concepts become real",
            what: "What is LuminUX?",
            how: "How does it work?",
            aboutBtn: "About",
            portfolioBtn: "Portfolio",
            contactBtn: "Contact Us",
            about: "About Us",
            portfolio: "Portfolio",
        },
    },
    pt: {
        translation: {
            title: "Bem-vindo ao LuminUX",
            text: "Deixe os conceitos se tornarem reais",
            what: "O que é LuminUX?",
            how: "Como funciona?",
            aboutBtn: "Sobre",
            portfolioBtn: "Portfólio",
            contactBtn: "Contate-nos",
            about: "Sobre nós",  
            portfolio: "Portfólio",
        },
    },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

  export default i18n;