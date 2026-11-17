"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaChevronDown, FaStar, FaWhatsapp } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { addons, allPackages, formatPrice, pricing, whatsappLink } from "@/data/pricing";
import SectionHeading from "./SectionHeading";

const TeamAddons = () => {
    const { t, language } = useApp();
    const [baseId, setBaseId] = useState(allPackages[0].id);
    const [checked, setChecked] = useState<string[]>([]);

    const base = allPackages.find((p) => p.id === baseId) ?? allPackages[0];
    const selected = addons.filter((a) => checked.includes(a.id));
    const total = base.price + selected.reduce((sum, a) => sum + a.price, 0);

    const toggle = (id: string) =>
        setChecked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

    const waText = t.addonWaMessage
        .replace("{package}", t[base.name])
        .replace("{addons}", selected.map((a) => t[a.title]).join(", ") || t.addonNone)
        .replace("{total}", formatPrice(total, language));

    return (
        <section
            id="addons"
            className="theme-transition scroll-mt-[76px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28"
        >
            <div className="mx-auto max-w-[1440px]">
                <SectionHeading tag={t.addonTag} title={t.addonTitle} desc={t.addonDesc} />

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="mt-14 rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10 lg:p-12"
                >
                    {/* Base package dropdown */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                                {t.addonBase}
                            </span>
                            <h3 className="mt-1 text-lg font-bold text-text-primary">
                                Select Your Foundation Package
                            </h3>
                        </div>

                        <div className="relative w-full sm:w-96">
                            <select
                                value={base.id}
                                onChange={(e) => setBaseId(e.target.value)}
                                className="w-full appearance-none rounded-2xl border border-border bg-surface-secondary px-5 py-3.5 pr-12 text-sm font-semibold text-text-primary outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
                            >
                                {pricing.flatMap((m) => m.subs).map((sub) => (
                                    <optgroup key={sub.id} label={t[sub.title]}>
                                        {sub.packages.map((p) => (
                                            <option key={p.id} value={p.id}>
                                                {t[p.name]} ({formatPrice(p.price, language)})
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                            <FaChevronDown
                                size={12}
                                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-text-secondary"
                            />
                        </div>
                    </div>

                    {/* Add-on selection list */}
                    <div className="mt-8">
                        <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                            Optional Add-on Capabilities
                        </p>
                        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {addons.map((addon) => {
                                const on = checked.includes(addon.id);
                                return (
                                    <li key={addon.id}>
                                        <label
                                            className={`flex h-full cursor-pointer items-start gap-3.5 rounded-2xl border p-5 transition-all ${
                                                on
                                                    ? "border-brand bg-brand/10 shadow-sm"
                                                    : "border-border bg-surface-secondary hover:border-brand/40 hover:bg-surface"
                                            }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={on}
                                                onChange={() => toggle(addon.id)}
                                                className="peer sr-only"
                                            />
                                            <span
                                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-brand-foreground transition-colors ${
                                                    on ? "border-brand bg-brand" : "border-border bg-surface"
                                                }`}
                                            >
                                                {on && <FaCheck size={10} />}
                                            </span>
                                            <span className="flex-1">
                                                <span className="block font-bold leading-snug text-text-primary">
                                                    {t[addon.title]}
                                                </span>
                                                <span className="mt-1.5 block text-xs font-bold text-brand">
                                                    + {formatPrice(addon.price, language)}
                                                </span>
                                            </span>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Live Total & Checkout Bar */}
                    <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-4">
                            <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#B6FB44]/15 text-[#B6FB44]">
                                <FaStar size={18} />
                            </span>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    {t.addonTotal}
                                </p>
                                <p className="text-3xl font-black text-white sm:text-4xl" aria-live="polite">
                                    {formatPrice(total, language)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href={whatsappLink(waText)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <FaWhatsapp size={16} /> <span>{t.addonBook}</span>
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                <span>{t.addonQuote}</span> <FaArrowRight size={11} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamAddons;
