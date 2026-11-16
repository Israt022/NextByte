"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
// import { capabilities } from "@/data/team";
import SectionHeading from "./SectionHeading";
import { capabilities } from "@/data/expertiesTeam";

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
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
                        >
                            <article className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                                    <CapIcon size={22} />
                                </span>

                                <h3 className="mt-6 text-lg font-bold leading-snug text-text-primary">
                                    {t[title]}
                                </h3>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                                    {t[desc]}
                                </p>

                                <Link
                                    href={href}
                                    className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-brand transition-all group-hover:gap-3"
                                >
                                    {t.capCta} <FaArrowRight size={12} />
                                </Link>
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamCapabilities;