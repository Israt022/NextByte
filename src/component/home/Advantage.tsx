"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { advantages } from "@/data/advantage";
import AdvantageCard from "./AdvantageCard";

const Advantage = () => {
    const { t } = useApp();

    return (
        <section
            id="advantage"
            className="theme-transition scroll-mt-[76px] bg-surface py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 px-6 py-12 shadow-2xl sm:px-12 lg:px-16 lg:py-16">
                    {/* Green Glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(182,251,68,0.16),transparent_55%)]"
                    />

                    <div className="relative">
                        {/* Section Header */}
                        <motion.header
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="max-w-3xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FB44]">
                                {t.advantageTag}
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold leading-[1.3] tracking-tight text-white sm:text-5xl">
                                {t.advantageTitle}
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                                {t.advantageDesc}
                            </p>
                        </motion.header>

                        {/* Advantage Cards */}
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {advantages.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.15,
                                        ease: "easeOut",
                                    }}
                                >
                                    <AdvantageCard item={item} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;