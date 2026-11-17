"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCircleCheck, FaChartLine } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { featuredHref, featuredImage, featuredStats } from "@/data/project";

const ProjectFeatured = () => {
    const { t } = useApp();

    return (
        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
            <div className="mx-auto max-w-[1440px]">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface p-8 shadow-xl sm:p-12 lg:p-16"
                >
                    {/* Subtle Brand Ambient Glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand/10 blur-[100px]"
                    />

                    <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                        {/* Left Column: Narrative & Metrics (7 cols) */}
                        <div className="lg:col-span-7">
                            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                                <FaChartLine className="text-brand" size={12} />
                                {t.projFeaturedTag}
                            </span>

                            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                                {t.projFeaturedTitle}
                            </h2>

                            <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                                {t.projFeaturedDesc}
                            </p>

                            {/* Stat Metric Cards */}
                            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/80 pt-8">
                                {featuredStats.map(({ value, label }) => (
                                    <div
                                        key={label}
                                        className="rounded-2xl border border-border bg-surface-secondary p-4 text-center sm:p-5 sm:text-left"
                                    >
                                        <p className="text-2xl font-black text-brand sm:text-3xl lg:text-4xl">
                                            {value}
                                        </p>
                                        <p className="mt-1 text-xs font-medium text-text-secondary sm:text-sm">
                                            {t[label]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Action */}
                            <div className="mt-10 pt-2">
                                <Link
                                    href={featuredHref}
                                    className="inline-flex items-center gap-2.5 rounded-xl bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>{t.projFeaturedCta}</span>
                                    <FaArrowRight size={12} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Case Showcase Mockup Frame (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-surface-secondary shadow-lg sm:aspect-[16/10] lg:aspect-[4/3]">
                                <Image
                                    src={featuredImage}
                                    alt={t.projFeaturedTitle}
                                    fill
                                    sizes="(min-width: 1024px) 40vw, 90vw"
                                    className="object-cover"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-black/60 px-4 py-2.5 backdrop-blur-md">
                                    <div className="flex items-center gap-2">
                                        <FaCircleCheck className="text-emerald-400" size={14} />
                                        <span className="text-xs font-bold text-white">
                                            Verified Production Metrics
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-brand">
                                        90-Day Sprint
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectFeatured;
