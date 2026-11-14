"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { featuredHref, featuredStats } from "@/data/project";

const ProjectFeatured = () => {
    const { t } = useApp();

    return (
        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface-secondary p-8 shadow-xl sm:p-12"
            >
                <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                    {t.projFeaturedTag}
                </span>

                <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-4xl">
                    {t.projFeaturedTitle}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                    {t.projFeaturedDesc}
                </p>

                <ul className="mt-10 grid grid-cols-3 gap-4">
                    {featuredStats.map(({ value, label }) => (
                        <li key={label}>
                            <p className="text-2xl font-extrabold text-brand sm:text-3xl">{value}</p>
                            <p className="mt-1 text-xs text-text-secondary">{t[label]}</p>
                        </li>
                    ))}
                </ul>

                <Link
                    href={featuredHref}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg transition-colors hover:bg-brand-hover"
                >
                    {t.projFeaturedCta} <FaArrowRight size={12} />
                </Link>
            </motion.div>
        </section>
    );
};

export default ProjectFeatured;