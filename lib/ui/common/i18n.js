import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                core: {
                    welcome: "Welcome to CitizenSay!",
                    new: "New",
                    name: "Name",
                    create: "Create",
                    loginRequired: "Login required",
                    current: "Current",
                    all: "All"
                }
            }
        }
    });

export default i18n;