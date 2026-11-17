"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHouse, FaCompass, FaFolderOpen, FaComments } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const NotFound = () => {
    const { t } = useApp();

    return (
        <section className="theme-transition relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden bg-background px-5 py-20">
            {/* Top Horizon Line */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />

            {/* Soft Ambient Brand Center Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.06] blur-[130px] dark:bg-brand/[0.04]"
            />

            {/* Clean Architectural Hairline Grid with Vignette */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 text-text-primary opacity-[0.03] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_95%)] dark:opacity-[0.04]"
            />

            {/* Main Content Stage */}
            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
                {/* Status Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary"
                >
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
                    {t.notFoundTag}
                </motion.span>

                {/* Monumental 404 Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative mt-6 select-none"
                >
                    <span className="text-[clamp(6rem,18vw,12rem)] font-black leading-none tracking-tighter text-text-primary/10">
                        404
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center text-[clamp(4.5rem,14vw,9rem)] font-black tracking-tight text-brand drop-shadow-sm">
                        404
                    </span>
                </motion.div>

                {/* Narrative Details */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
                    className="mt-2"
                >
                    <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
                        {t.notFoundTitle}
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
                        {t.notFoundDesc}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-brand px-7 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <FaHouse size={13} />
                            <span>{t.backHome}</span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-border bg-surface px-7 text-sm font-semibold text-text-primary shadow-sm transition-all hover:border-brand/40 hover:bg-surface-secondary active:scale-[0.98]"
                        >
                            <FaArrowLeft size={13} className="text-brand" />
                            <span>{t.goBack}</span>
                        </button>
                    </div>

                    {/* Quick Destination Shortcuts */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-border/80 pt-8 text-xs font-medium text-text-secondary">
                        <span className="text-text-secondary/70">Helpful Shortcuts:</span>
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 transition-colors hover:border-brand hover:text-brand"
                        >
                            <FaCompass size={11} className="text-brand" />
                            <span>Services</span>
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 transition-colors hover:border-brand hover:text-brand"
                        >
                            <FaFolderOpen size={11} className="text-brand" />
                            <span>Projects</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 transition-colors hover:border-brand hover:text-brand"
                        >
                            <FaComments size={11} className="text-brand" />
                            <span>Contact</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;
