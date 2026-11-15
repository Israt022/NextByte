"use client";

import Link from "next/link";
import { FaArrowRight, FaMagnifyingGlass, FaWandSparkles } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { heroServices } from "@/data/hero";

const HeroLeft = ({ show }: { show: boolean }) => {
    const { t } = useApp();

    return (
        <div
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${show ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
        >
            {/* Tag & Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                    <FaWandSparkles className="text-brand" size={12} />
                    {t.heroTag}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-secondary shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    {t.heroBadge}
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-6xl xl:text-7xl lg:leading-[1.12]">
                {t.heroTitle}{" "}
                <span className="relative inline-block rounded-2xl bg-brand px-3.5 py-1 text-brand-foreground shadow-md">
                    {t.heroHighlight}
                </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                    href="#services"
                    className="inline-flex h-13 min-w-[180px] items-center justify-center gap-2.5 rounded-xl bg-brand px-6 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                    <FaMagnifyingGlass size={13} />
                    {t.findService}
                </Link>
                <Link
                    href="#contact"
                    className="inline-flex h-13 min-w-[180px] items-center justify-center gap-2.5 rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-text-primary shadow-sm transition-all hover:border-brand/40 hover:bg-surface-secondary active:scale-[0.98]"
                >
                    {t.contactUs}
                    <FaArrowRight size={12} className="text-brand" />
                </Link>
            </div>

            {/* Popular Services Chips */}
            <div className="mt-10 border-t border-border/80 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    {t.popularServices}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {heroServices.map((key) => (
                        <li key={key}>
                            <Link
                                href="#services"
                                className="inline-block rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary shadow-sm transition-all hover:border-brand hover:text-brand"
                            >
                                {t[key]}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeroLeft;
