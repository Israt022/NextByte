"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";

const Loading = () => {
    const { t } = useApp();

    return (
        <section className="theme-transition relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden bg-background px-5">
            {/* Top Horizon Line */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            />

            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[100px]"
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Animated Loader */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-[3px] border-border border-t-brand"
                    />

                    <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-4 w-4 rounded-full bg-brand shadow-lg shadow-brand/50"
                    />
                </div>

                {/* Loading Text */}
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 text-xl font-bold tracking-tight text-text-primary"
                >
                    {t.loadingTitle}
                </motion.h2>

                <p className="mt-2 text-sm text-text-secondary">
                    {t.loadingDesc}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 flex items-center gap-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.span
                            key={dot}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: dot * 0.2,
                                ease: "easeInOut",
                            }}
                            className="h-2 w-2 rounded-full bg-brand"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Loading;
