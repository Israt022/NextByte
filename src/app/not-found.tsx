"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const NotFound = () => {
    const { t } = useApp();

    return (
        <section className="theme-transition relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden bg-surface px-5 py-20">
            {/* Background Pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,251,68,0.10),transparent_55%)]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(var(--text-secondary)_1px,transparent_1px)] [background-size:30px_30px]"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-full border border-brand/30 bg-brand/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary"
                >
                    {t.notFoundTag}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mt-8 text-[clamp(7rem,22vw,15rem)] font-black leading-none tracking-tighter text-brand"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                        {t.notFoundTitle}
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                        {t.notFoundDesc}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="theme-button inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold"
                        >
                            <FaHouse size={14} />
                            {t.backHome}
                        </Link>

                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface-secondary px-7 text-sm font-semibold text-text-primary transition-colors hover:border-brand hover:text-brand"
                        >
                            <FaArrowLeft size={14} />
                            {t.goBack}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound;