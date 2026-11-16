"use client";

import Link from "next/link";
import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { formatPrice, whatsappLink, type PricingPackage } from "@/data/pricing";

const PackageCard = ({ pkg }: { pkg: PricingPackage }) => {
    const { t, language } = useApp();
    const price = formatPrice(pkg.price, language);
    const waText = t.pkgWaMessage.replace("{package}", t[pkg.name]).replace("{price}", price);

    return (
        <article
            className={`relative flex h-full flex-col rounded-[2rem] border bg-surface-secondary p-8 transition duration-300 hover:shadow-xl ${
                pkg.popular
                    ? "border-brand shadow-xl ring-1 ring-brand/30"
                    : "border-border shadow-sm"
            }`}
        >
            {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-foreground">
                    {t.pkgPopular}
                </span>
            )}

            <h3 className="text-xl font-bold text-text-primary">{t[pkg.name]}</h3>
            <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-text-secondary">
                {t[pkg.desc]}
            </p>

            <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-brand">{price}</span>
                <span className="text-sm text-text-secondary">{t.pkgPerProject}</span>
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {pkg.features.map((key) => (
                    <li key={key} className="flex gap-3 text-sm text-text-secondary">
                        <FaCheck size={12} className="mt-1 shrink-0 text-brand" />
                        {t[key]}
                    </li>
                ))}
            </ul>

            <a
                href={whatsappLink(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                    pkg.popular
                        ? "bg-brand text-brand-foreground hover:bg-brand-hover"
                        : "bg-text-primary text-surface hover:opacity-90"
                }`}
            >
                <FaWhatsapp size={16} /> {t.pkgCta} <FaArrowRight size={12} />
            </a>

            <Link
                href="#addons"
                className="mt-4 text-center text-xs font-semibold text-text-secondary transition-colors hover:text-brand"
            >
                {t.pkgCustomize}
            </Link>
        </article>
    );
};

export default PackageCard;