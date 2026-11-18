"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaChevronRight,
    FaCode,
    FaGaugeHigh,
    FaHouse,
    FaRocket,
    FaShieldHalved,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const WebDevHero = () => {
    const { t } = useApp();

    return (
        <section className="relative px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
            <div className="mx-auto max-w-[1440px]">
                {/* Breadcrumb Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    aria-label="Breadcrumb"
                    className="mb-8 flex items-center gap-2 text-xs font-medium text-text-secondary"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
                    >
                        <FaHouse size={11} />
                        <span>{t.webDevBreadcrumbHome}</span>
                    </Link>
                    <FaChevronRight size={9} className="opacity-40" />
                    <Link
                        href="/#services"
                        className="transition-colors hover:text-brand"
                    >
                        {t.webDevBreadcrumbServices}
                    </Link>
                    <FaChevronRight size={9} className="opacity-40" />
                    <span className="font-semibold text-text-primary">
                        {t.webDevBreadcrumbCurrent}
                    </span>
                </motion.nav>

                {/* 2-Column Split Hero */}
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column: Heading & CTAs (7 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        {/* Service Category Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
                            <FaCode className="text-brand" size={12} />
                            <span>{t.webDevHeroTag}</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-6xl xl:text-7xl lg:leading-[1.1]">
                            {t.webDevHeroTitle}{" "}
                            <span className="relative inline-block rounded-2xl bg-brand px-3.5 py-1 text-brand-foreground shadow-md">
                                {t.webDevHeroHighlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                            {t.webDevHeroDesc}
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex h-13 min-w-[190px] items-center justify-center gap-2.5 rounded-xl bg-brand px-7 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <FaRocket size={13} />
                                <span>{t.webDevConsultCta}</span>
                            </Link>
                            <Link
                                href="#packages"
                                className="inline-flex h-13 min-w-[180px] items-center justify-center gap-2.5 rounded-xl border border-border bg-surface px-7 text-sm font-semibold text-text-primary shadow-sm transition-all hover:border-brand/40 hover:bg-surface-secondary active:scale-[0.98]"
                            >
                                <span>{t.webDevPricingCta}</span>
                                <FaArrowRight size={12} className="text-brand" />
                            </Link>
                        </div>

                        {/* Telemetry Stats Bar */}
                        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border/80 pt-8">
                            <div className="rounded-2xl border border-border bg-surface p-3.5 text-center sm:p-4 sm:text-left">
                                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                                    <FaShieldHalved className="text-brand" size={13} />
                                    <span className="text-lg font-black text-text-primary sm:text-xl">
                                        99.98%
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] font-medium text-text-secondary sm:text-xs">
                                    {t.webDevStatUptime}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-3.5 text-center sm:p-4 sm:text-left">
                                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                                    <FaGaugeHigh className="text-brand" size={13} />
                                    <span className="text-lg font-black text-brand sm:text-xl">
                                        &lt; 0.8s
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] font-medium text-text-secondary sm:text-xs">
                                    {t.webDevStatSpeed}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-3.5 text-center sm:p-4 sm:text-left">
                                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span className="text-lg font-black text-text-primary sm:text-xl">
                                        100/100
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] font-medium text-text-secondary sm:text-xs">
                                    {t.webDevStatScore}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Code & Architecture Showcase Frame (5 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                            {/* Window Shell */}
                            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl">
                                {/* Chrome Window Bar */}
                                <div className="flex items-center justify-between border-b border-border bg-surface-secondary/80 px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                                        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <span className="font-mono text-[11px] text-text-secondary">
                                        app/services/web-development/page.tsx
                                    </span>
                                    <span className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-brand">
                                        Next.js 15
                                    </span>
                                </div>

                                {/* Code Editor + High-Res Architectural Preview */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary sm:aspect-[16/11]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                                        alt="Modern Web Development Code Architecture"
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 40vw, 90vw"
                                        className="object-cover"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                                    {/* Floating Code Snippet Card */}
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/70 p-4 text-xs font-mono text-white backdrop-blur-md">
                                        <div className="flex items-center justify-between text-[11px] text-brand">
                                            <span>// Production Architecture</span>
                                            <span>React 19 + TypeScript</span>
                                        </div>
                                        <p className="mt-2 text-white/90">
                                            <span className="text-purple-400">export default</span>{" "}
                                            <span className="text-blue-400">async function</span>{" "}
                                            <span className="text-yellow-300">WebApp</span>() &#123;
                                        </p>
                                        <p className="pl-4 text-slate-300">
                                            return &lt;<span className="text-emerald-400">EdgeRenderedEngine</span> speed=&#123;<span className="text-orange-400">true</span>&#125; /&gt;
                                        </p>
                                        <p className="text-white/90">&#125;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WebDevHero;
