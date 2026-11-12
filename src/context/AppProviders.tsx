"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { translations, type Translations } from "@/lib/translations";

type Theme = "light" | "dark";
type Language = "en" | "bn";

interface AppContextType {
    theme: Theme;
    language: Language;
    t: Translations;
    toggleTheme: () => void;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
}

const THEME_KEY = "nextbyte-theme";
const LANGUAGE_KEY = "nextbyte-language";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProviders = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("dark");
    const [language, setLanguage] = useState<Language>("en");
    const [ready, setReady] = useState(false);

    // Load saved preferences once on the client
    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_KEY);
        const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

        if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
        if (savedLanguage === "en" || savedLanguage === "bn") setLanguage(savedLanguage);
        setReady(true);
    }, []);

    // Apply and persist (skipped until saved values are loaded)
    useEffect(() => {
        if (!ready) return;
        document.documentElement.dataset.theme = theme;
        document.documentElement.lang = language;
        localStorage.setItem(THEME_KEY, theme);
        localStorage.setItem(LANGUAGE_KEY, language);
    }, [theme, language, ready]);

    const value = useMemo<AppContextType>(
        () => ({
            theme,
            language,
            t: translations[language],
            setLanguage,
            toggleTheme: () => setTheme((p) => (p === "dark" ? "light" : "dark")),
            toggleLanguage: () => setLanguage((p) => (p === "en" ? "bn" : "en")),
        }),
        [theme, language]
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used inside AppProviders");
    return context;
};