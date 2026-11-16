"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { pricing } from "@/data/pricing";
import PackageCard from "./PackageCard";
import SectionHeading from "./SectionHeading";

const selectClass =
    "w-full appearance-none rounded-2xl border border-border bg-surface-secondary px-5 py-4 pr-12 text-sm font-semibold text-text-primary outline-none transition-colors focus:border-brand";

const TeamPackages = () => {
    const { t } = useApp();
    const [mainId, setMainId] = useState(pricing[0].id);
    const [subId, setSubId] = useState(pricing[0].subs[0].id);

    const main = pricing.find((m) => m.id === mainId) ?? pricing[0];
    const sub = main.subs.find((s) => s.id === subId) ?? main.subs[0];

    // Switching the main service resets the sub-category to its first option
    const changeMain = (id: string) => {
        setMainId(id);
        setSubId(pricing.find((m) => m.id === id)?.subs[0].id ?? "");
    };

    const selects = [
        {
            label: t.pkgMainLabel,
            value: main.id,
            onChange: changeMain,
            options: pricing.map((m) => ({ id: m.id, label: t[m.title] })),
        },
        {
            label: t.pkgSubLabel,
            value: sub.id,
            onChange: setSubId,
            options: main.subs.map((s) => ({ id: s.id, label: t[s.title] })),
        },
    ];

    return (
        <section
            id="packages"
            className="theme-transition scroll-mt-[76px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px]">
                <SectionHeading tag={t.pkgTag} title={t.pkgTitle} desc={t.pkgDesc} />

                <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
                    {selects.map(({ label, value, onChange, options }) => (
                        <label key={label} className="block">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-text-secondary">
                                {label}
                            </span>
                            <span className="relative block">
                                <select
                                    value={value}
                                    onChange={(e) => onChange(e.target.value)}
                                    className={selectClass}
                                >
                                    {options.map((o) => (
                                        <option key={o.id} value={o.id}>{o.label}</option>
                                    ))}
                                </select>
                                <FaChevronDown
                                    size={12}
                                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-text-secondary"
                                />
                            </span>
                        </label>
                    ))}
                </div>

                {/* key remounts the block so it re-animates when the sub-category changes */}
                <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="mx-auto mt-14 max-w-2xl text-center">
                        <h3 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                            {t[sub.title]}
                        </h3>
                        <p className="mt-3 text-text-secondary">{t[sub.desc]}</p>
                    </div>

                    <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-3">
                        {sub.packages.map((pkg) => (
                            <PackageCard key={pkg.id} pkg={pkg} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamPackages;