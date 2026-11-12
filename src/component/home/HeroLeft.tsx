"use client";

import Link from "next/link";
import { FaArrowRight, FaMagnifyingGlass, FaMicrochip } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { heroServices } from "@/data/hero";
// import { heroServices } from "@/data/home";

const HeroLeft = ({ show }: { show: boolean }) => {
    const { t } = useApp();

    return (
        <div
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                show ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
        >
            <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-surface px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-500 shadow-sm">
                <FaMicrochip /> {t.heroTag}
            </span>

            <span className="mt-3 flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                {t.heroBadge}
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-6xl xl:text-7xl">
                {t.heroTitle}{" "}
                <span className="inline-block -rotate-2 rounded-2xl bg-brand px-4 pb-1 text-brand-foreground shadow-lg">
                    {t.heroHighlight}
                </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary">
                {t.heroDesc}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <Link
                    href="#services"
                    className="flex h-[60px] min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-text-primary px-8 font-semibold text-surface shadow-lg transition-opacity hover:opacity-90"
                >
                    <FaMagnifyingGlass /> {t.findService}
                </Link>
                <Link
                    href="#contact"
                    className="flex h-[60px] min-w-[220px] items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-8 font-semibold text-text-primary transition-colors hover:border-brand hover:text-brand"
                >
                    {t.contactUs} <FaArrowRight size={14} />
                </Link>
            </div>

            <p className="mt-12 text-xs font-bold uppercase tracking-widest text-text-secondary">
                {t.popularServices}
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
                {heroServices.map((key) => (
                    <li key={key}>
                        <Link
                            href="#services"
                            className="block rounded-xl border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-sm transition-colors hover:border-brand hover:text-brand"
                        >
                            {t[key]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroLeft;