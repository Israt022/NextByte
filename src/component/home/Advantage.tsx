"use client";

import { motion } from "framer-motion";
import { FaShieldHalved } from "react-icons/fa6";
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
                {/* Dark Slate Feature Container */}
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 p-8 shadow-2xl sm:p-12 lg:p-16">
                    {/* Subtle Radial Glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#B6FB44]/10 blur-[100px]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#B6FB44]/5 blur-[100px]"
                    />

                    {/* Split Layout: Narrative on left, 2x2 Unified Matrix on right */}
                    <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                        {/* Left Column (5 cols) */}
                        <motion.header
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="lg:col-span-5"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#B6FB44]/30 bg-[#B6FB44]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#B6FB44]">
                                <FaShieldHalved size={12} />
                                {t.advantageTag}
                            </span>

                            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl lg:leading-[1.12]">
                                {t.advantageTitle}
                            </h2>

                            <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                                {t.advantageDesc}
                            </p>

                            {/* Trust Stat Highlights */}
                            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    <div className="text-2xl font-black text-[#B6FB44] sm:text-3xl">
                                        &lt; 1s
                                    </div>
                                    <p className="mt-1 text-xs text-slate-400">
                                        Sub-second Load Times
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    <div className="text-2xl font-black text-white sm:text-3xl">
                                        100%
                                    </div>
                                    <p className="mt-1 text-xs text-slate-400">
                                        Source Code Ownership
                                    </p>
                                </div>
                            </div>
                        </motion.header>

                        {/* Right Column: 2x2 Grid (7 cols) */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                            {advantages.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <AdvantageCard item={item} index={index} />
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
