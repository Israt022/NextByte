"use client";

// import Icon from "./Icon";
import { useApp } from "@/context/AppProviders";
import Icon from "./Icon";

const SearchBar = () => {
    const { t } = useApp();

    return (
        <form action="/search" role="search" className="relative w-full max-w-72">
            <input
                type="search"
                name="q"
                placeholder={t.search}
                aria-label={t.search}
                className="h-10 w-full rounded-full border border-border bg-transparent pl-4 pr-10 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-brand"
            />
            <button
                type="submit"
                aria-label={t.search}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary transition-colors hover:text-brand"
            >
                <Icon name="search" />
            </button>
        </form>
    );
};

export default SearchBar;