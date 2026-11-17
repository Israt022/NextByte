"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { capabilities } from "@/data/team";
import SectionHeading from "./SectionHeading";

const TeamCapabilities = () => {
    const { t } = useApp();

    return (
        <section
            id="capabilities"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px]">
                <SectionHeading tag={t.capTag} title={t.capTitle} />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {capabilities.map(({ title, desc, icon: CapIcon, href }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: "easeOut" }}
                        >
                            <article className="group theme-transition flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
                                <div>
                                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-brand transition-all group-hover:border-brand/40 group-hover:bg-brand/10">
                                        <CapIcon size={20} />
                                    </span>

                                    <h3 className="mt-6 text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-brand">
                                        {t[title]}
                                    </h3>
                                    <p className="mt-2.5 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                        {t[desc]}
                                    </p>
                                </div>

                                <div className="mt-6 border-t border-border/80 pt-4">
                                    <Link
                                        href={href}
                                        className="inline-flex items-center gap-2 text-xs font-bold text-text-primary transition-all group-hover:text-brand"
                                    >
                                        <span>{t.capCta}</span>
                                        <FaArrowRight size={11} className="text-brand transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamCapabilities;
