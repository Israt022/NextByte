"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaBolt,
    FaChevronRight,
    FaHouse,
    FaMobileScreenButton,
    FaRocket,
    FaShieldHalved,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const AppDevHero = () => {
    const { t } = useApp();

    return (
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
                        <span>{t.appDevBreadcrumbHome}</span>
                    </Link>
                    <FaChevronRight size={9} className="opacity-40" />
                    <Link
                        href="/#services"
                        className="transition-colors hover:text-brand"
                    >
                        {t.appDevBreadcrumbServices}
                    </Link>
                    <FaChevronRight size={9} className="opacity-40" />
                    <span className="font-semibold text-text-primary">
                        {t.appDevBreadcrumbCurrent}
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
                            <FaMobileScreenButton className="text-brand" size={12} />
                            <span>{t.appDevHeroTag}</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl lg:leading-[1.15]">
                            {t.appDevHeroTitle}{" "}
                            <span className="relative inline-block rounded-2xl bg-brand px-3.5 py-1 text-brand-foreground shadow-md">
                                {t.appDevHeroHighlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                            {t.appDevHeroDesc}
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex h-13 min-w-[190px] items-center justify-center gap-2.5 rounded-xl bg-brand px-7 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <FaRocket size={13} />
                                <span>{t.appDevConsultCta}</span>
                            </Link>
                            <Link
                                href="#packages"
                                className="inline-flex h-13 min-w-[180px] items-center justify-center gap-2.5 rounded-xl border border-border bg-surface px-7 text-sm font-semibold text-text-primary shadow-sm transition-all hover:border-brand/40 hover:bg-surface-secondary active:scale-[0.98]"
                            >
                                <span>{t.appDevPricingCta}</span>
                                <FaArrowRight size={12} className="text-brand" />
                            </Link>
                        </div>

                        {/* Telemetry Stats Bar */}
                        <div className="mt-12 grid grid-cols-1 gap-3 border-t border-border/80 pt-8 sm:grid-cols-3 sm:gap-4">
                            <div className="rounded-2xl border border-border bg-surface p-3.5 text-center sm:p-4 sm:text-left">
                                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                                    <FaBolt className="text-brand" size={13} />
                                    <span className="text-lg font-black text-text-primary sm:text-xl">
                                        60 FPS
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] font-medium text-text-secondary sm:text-xs">
                                    {t.appDevStatFps}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-3.5 text-center sm:p-4 sm:text-left">
                                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                                    <FaShieldHalved className="text-brand" size={13} />
                                    <span className="text-lg font-black text-brand sm:text-xl">
                                        99.9%
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] font-medium text-text-secondary sm:text-xs">
                                    {t.appDevStatCrash}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border bg-surface p-3.5 text-center sm:p-4 sm:text-left">
                                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span className="text-lg font-black text-text-primary sm:text-xl">
                                        iOS & Android
                                    </span>
                                </div>
                                <p className="mt-1 text-[11px] font-medium text-text-secondary sm:text-xs">
                                    {t.appDevStatStores}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Mobile Showcase Chassis (5 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                            {/* Smartphone Device Shell */}
                            <div className="overflow-hidden rounded-[2.5rem] border-4 border-border bg-surface p-2 shadow-2xl shadow-black/10 dark:shadow-black/50">
                                {/* Bezel Frame Inner */}
                                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-surface-secondary">
                                    {/* Top Dynamic Island / Speaker Pill */}
                                    <div className="absolute left-1/2 top-3 z-20 flex h-4.5 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-black">
                                        <span className="h-2 w-2 rounded-full bg-slate-800" />
                                    </div>

                                    {/* Screen Image Preview */}
                                    <Image
                                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
                                        alt="Modern Mobile Application Engineering"
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 35vw, 85vw"
                                        className="object-cover"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

                                    {/* Mobile Top Status Row */}
                                    <div className="absolute left-6 right-6 top-3 flex items-center justify-between text-[11px] font-semibold text-white/90">
                                        <span>9:41</span>
                                        <div className="flex items-center gap-1.5 text-[10px]">
                                            <span>5G</span>
                                            <span>100%</span>
                                        </div>
                                    </div>

                                    {/* Floating App Telemetry Badge */}
                                    <div className="absolute top-14 left-4 right-4 rounded-xl border border-white/15 bg-black/60 p-2.5 text-center text-xs font-mono text-white backdrop-blur-md">
                                        <span className="text-brand font-semibold">// Flutter 3.x + Swift Native</span>
                                    </div>

                                    {/* Floating Bottom App Card */}
                                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/75 p-4 text-xs font-mono text-white backdrop-blur-md">
                                        <div className="flex items-center justify-between text-[11px] text-brand">
                                            <span>Cross-Platform Core</span>
                                            <span>60 FPS Native</span>
                                        </div>
                                        <p className="mt-2 text-white/90">
                                            <span className="text-purple-400">class</span>{" "}
                                            <span className="text-yellow-300">NextGenMobileApp</span>{" "}
                                            <span className="text-purple-400">extends</span>{" "}
                                            <span className="text-blue-400">StatefulWidget</span>
                                        </p>
                                        <p className="pl-3 text-slate-300 truncate">
                                            syncState: <span className="text-emerald-400">OfflineFirst</span>,
                                        </p>
                                        <p className="pl-3 text-slate-300 truncate">
                                            biometrics: <span className="text-orange-400">HardwareProtected</span>
                                        </p>
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

export default AppDevHero;
