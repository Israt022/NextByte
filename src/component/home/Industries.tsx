"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { industries } from "@/data/industries";

const Industries = () => {
    const { t } = useApp();

    return (
        <section
            id="industries"
            className="theme-transition scroll-mt-[76px] bg-background py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                        {t.industriesTitle}
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                        {t.industriesDesc}
                    </p>
                </motion.header>

                {/* Industry Cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {industries.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            className="group theme-transition flex flex-col rounded-3xl border border-border bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                            <h3 className="text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-brand">
                                {t[item.title]}
                            </h3>

                            <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                                {t[item.desc]}
                            </p>

                            <div className="mt-6 border-t border-border pt-5">
                                <Link
                                    href={item.href}
                                    className="flex w-fit items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
                                >
                                    {t.industryCta} <FaArrowRight size={12} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;