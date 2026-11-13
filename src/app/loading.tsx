
"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";

const Loading = () => {
    const { t } = useApp();

    return (
        <section className="theme-transition relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden bg-surface px-5">
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,251,68,0.10),transparent_55%)]"
            />

            {/* Dotted Pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(var(--text-secondary)_1px,transparent_1px)] [background-size:30px_30px]"
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Animated Loader */}
                <div className="relative flex h-20 w-20 items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-[3px] border-border border-t-brand"
                    />

                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-4 w-4 rounded-full bg-brand shadow-[0_0_25px_rgba(182,251,68,0.6)]"
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

                {/* Progress Dots */}
                <div className="mt-6 flex items-center gap-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.span
                            key={dot}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [0.8, 1.15, 0.8],
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
