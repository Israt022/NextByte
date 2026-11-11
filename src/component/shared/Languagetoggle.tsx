"use client";

// import Icon from "./Icon";
import { useApp } from "@/context/AppProviders";
import Icon from "./Icon";

const options = [
    { code: "en", full: "English", short: "EN" },
    { code: "bn", full: "বাংলা", short: "বাং" },
] as const;

const LanguageToggle = () => {
    const { language, setLanguage, t } = useApp();

    return (
        <div
            role="group"
            aria-label={t.language}
            className="flex items-center gap-1 rounded-full border border-border p-1 md:gap-2 md:pl-3"
        >
            <Icon name="globe" className="hidden h-4 w-4 text-text-secondary md:block" />
            {options.map(({ code, full, short }) => {
                const active = language === code;
                return (
                    <button
                        key={code}
                        type="button"
                        lang={code}
                        aria-pressed={active}
                        onClick={() => setLanguage(code)}
                        className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors md:px-3 md:text-sm ${
                            active
                                ? "bg-brand text-brand-foreground"
                                : "text-text-secondary hover:text-brand"
                        }`}
                    >
                        <span className="md:hidden">{short}</span>
                        <span className="hidden md:inline">{full}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageToggle;