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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mt-14 rounded-[2.5rem] border border-border bg-surface-secondary p-6 sm:p-10"
                >
                    {/* Base package */}
                    <label className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-sm font-bold uppercase tracking-wider text-text-secondary">
                            {t.addonBase}
                        </span>
                        <span className="relative block w-full sm:w-96">
                            <select
                                value={base.id}
                                onChange={(e) => setBaseId(e.target.value)}
                                className="w-full appearance-none rounded-2xl border border-border bg-surface px-5 py-3.5 pr-12 text-sm font-semibold text-text-primary outline-none transition-colors focus:border-brand"
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
                        </span>
                    </label>

                    {/* Add-on checkboxes */}
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {addons.map((addon) => {
                            const on = checked.includes(addon.id);
                            return (
                                <li key={addon.id}>
                                    <label
                                        className={`flex h-full cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-colors ${
                                            on
                                                ? "border-brand bg-brand/10"
                                                : "border-border bg-surface hover:border-brand/40"
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={on}
                                            onChange={() => toggle(addon.id)}
                                            className="peer sr-only"
                                        />
                                        <span
                                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-brand-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-brand ${
                                                on ? "border-brand bg-brand" : "border-border bg-surface-secondary"
                                            }`}
                                        >
                                            {on && <FaCheck size={11} />}
                                        </span>
                                        <span>
                                            <span className="block font-bold leading-snug text-text-primary">
                                                {t[addon.title]}
                                            </span>
                                            <span className="mt-2 block text-sm font-bold text-brand">
                                                + {formatPrice(addon.price, language)}
                                            </span>
                                        </span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Live total */}
                    <div className="mt-8 flex flex-col gap-6 rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-5">
                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/25 text-pink-300">
                                <FaStar size={20} />
                            </span>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                    {t.addonTotal}
                                </p>
                                <p className="text-4xl font-extrabold" aria-live="polite">
                                    {formatPrice(total, language)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={whatsappLink(waText)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-600"
                            >
                                <FaWhatsapp size={18} /> {t.addonBook}
                            </a>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
                            >
                                {t.addonQuote} <FaArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamAddons;