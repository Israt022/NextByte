"use client";

// import Icon from "./Icon";
import { useApp } from "@/context/AppProviders";
import Icon from "./Icon";

const ThemeToggle = () => {
    const { theme, toggleTheme, t } = useApp();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={t.theme}
            title={t.theme}
            onClick={toggleTheme}
            className="flex h-11 items-center gap-2 rounded-full border-2 border-brand p-1 text-text-primary transition-colors hover:bg-brand/10 md:pr-5"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Icon name={isDark ? "moon" : "sun"} className="h-4 w-4" />
            </span>
            <span className="hidden min-w-10 text-center text-sm font-semibold md:inline">
                {isDark ? t.dark : t.light}
            </span>
        </button>
    );
};

export default ThemeToggle;