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
            className={`theme-transition relative flex h-full flex-col justify-between rounded-3xl border p-8 transition-all duration-300 hover:shadow-xl sm:p-9 ${pkg.popular
                    ? "border-brand bg-surface shadow-lg ring-1 ring-brand/30"
                    : "border-border bg-surface shadow-sm hover:border-brand/40"
                }`}
        >
            <div>
                {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-foreground shadow-md">
                        {t.pkgPopular}
                    </span>
                )}

                <h3 className="text-2xl font-black text-text-primary">{t[pkg.name]}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                    {t[pkg.desc]}
                </p>

                <div className="mt-6 flex items-baseline gap-2 border-b border-border/80 pb-6">
                    <span className="text-4xl font-black text-brand sm:text-5xl">{price}</span>
                    <span className="text-xs font-semibold text-text-secondary">{t.pkgPerProject}</span>
                </div>

                <ul className="mt-6 space-y-3">
                    {pkg.features.map((key) => (
                        <li key={key} className="flex items-start gap-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                                <FaCheck size={9} />
                            </span>
                            <span>{t[key]}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 pt-4">
                <a
                    href={whatsappLink(waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] ${pkg.popular
                            ? "bg-brand text-brand-foreground hover:bg-brand-hover shadow-brand/20"
                            : "bg-text-primary text-surface hover:opacity-90"
                        }`}
                >
                    <FaWhatsapp size={16} /> <span>{t.pkgCta}</span> <FaArrowRight size={11} />
                </a>

                <Link
                    href="#addons"
                    className="mt-3.5 block text-center text-xs font-semibold text-text-secondary transition-colors hover:text-brand"
                >
                    {t.pkgCustomize}
                </Link>
            </div>
        </article>
    );
};

export default PackageCard;
