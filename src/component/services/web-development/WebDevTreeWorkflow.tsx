"use client";

import { motion } from "framer-motion";
import {
    FaCodeBranch,
    FaCompassDrafting,
    FaCube,
    FaDesktop,
    FaRocket,
    FaServer,
    FaShieldHalved,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const WebDevTreeWorkflow = () => {
    const { t } = useApp();

    return (
        <section className="relative py-20 lg:py-28">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                        <FaCodeBranch className="text-brand" size={12} />
                        {t.webDevTreeTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                        {t.webDevTreeTitle}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                        {t.webDevTreeDesc}
                    </p>
                </motion.header>

                {/* Tree Workflow Architecture */}
                <div className="relative mx-auto mt-16 max-w-5xl">
                    {/* Central Tree Trunk Line (Desktop Only) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-12 left-1/2 top-12 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand/60 via-border to-brand/60 lg:block"
                    />

                    {/* Vertical Connecting Line (Mobile & Tablet) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-12 left-6 top-12 w-0.5 bg-gradient-to-b from-brand/60 via-border to-brand/60 lg:hidden"
                    />

                    <div className="space-y-12 sm:space-y-16">
                        {/* 1. ROOT NODE (Centered Foundation) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative flex flex-col items-start lg:items-center"
                        >
                            <div className="flex items-center gap-4 lg:flex-col lg:gap-3">
                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-brand bg-surface text-brand shadow-lg shadow-brand/10">
                                    <FaCompassDrafting size={20} />
                                </div>
                                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                                    [ ROOT // ARCHITECTURE ]
                                </span>
                            </div>

                            <div className="mt-4 w-full rounded-3xl border border-brand/40 bg-surface p-6 shadow-sm sm:p-8 lg:mt-6 lg:max-w-2xl lg:text-center">
                                <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
                                    {t.treeRootTitle}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                    {t.treeRootDesc}
                                </p>
                            </div>
                        </motion.div>

                        {/* 2. BRANCHING LEVEL 1: Design (Left) & Frontend (Right) */}
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                            {/* Branch 1: UI/UX (Left) */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative flex flex-col items-start pl-14 lg:pl-0"
                            >
                                <div className="absolute left-3 top-3 -translate-x-1/2 rounded-full border border-border bg-surface p-2 text-brand lg:hidden">
                                    <FaDesktop size={14} />
                                </div>

                                <div className="w-full rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-brand/50 hover:shadow-xl sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs font-bold text-brand">
                                            ├── BRANCH 01
                                        </span>
                                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-secondary text-brand lg:flex">
                                            <FaDesktop size={16} />
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-text-primary sm:text-xl">
                                        {t.treeBranch1Title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                        {t.treeBranch1Desc}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Branch 2: Frontend (Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="relative flex flex-col items-start pl-14 lg:pl-0"
                            >
                                <div className="absolute left-3 top-3 -translate-x-1/2 rounded-full border border-border bg-surface p-2 text-brand lg:hidden">
                                    <FaCube size={14} />
                                </div>

                                <div className="w-full rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-brand/50 hover:shadow-xl sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs font-bold text-brand">
                                            └── BRANCH 02
                                        </span>
                                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-secondary text-brand lg:flex">
                                            <FaCube size={16} />
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-text-primary sm:text-xl">
                                        {t.treeBranch2Title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                        {t.treeBranch2Desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 3. BRANCHING LEVEL 2: Backend (Left) & QA (Right) */}
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                            {/* Branch 3: Backend (Left) */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative flex flex-col items-start pl-14 lg:pl-0"
                            >
                                <div className="absolute left-3 top-3 -translate-x-1/2 rounded-full border border-border bg-surface p-2 text-brand lg:hidden">
                                    <FaServer size={14} />
                                </div>

                                <div className="w-full rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-brand/50 hover:shadow-xl sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs font-bold text-brand">
                                            ├── BRANCH 03
                                        </span>
                                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-secondary text-brand lg:flex">
                                            <FaServer size={16} />
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-text-primary sm:text-xl">
                                        {t.treeBranch3Title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                        {t.treeBranch3Desc}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Branch 4: QA & Security (Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="relative flex flex-col items-start pl-14 lg:pl-0"
                            >
                                <div className="absolute left-3 top-3 -translate-x-1/2 rounded-full border border-border bg-surface p-2 text-brand lg:hidden">
                                    <FaShieldHalved size={14} />
                                </div>

                                <div className="w-full rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-brand/50 hover:shadow-xl sm:p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs font-bold text-brand">
                                            └── BRANCH 04
                                        </span>
                                        <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-secondary text-brand lg:flex">
                                            <FaShieldHalved size={16} />
                                        </div>
                                    </div>
                                    <h3 className="mt-4 text-lg font-bold text-text-primary sm:text-xl">
                                        {t.treeBranch4Title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                        {t.treeBranch4Desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 4. CROWN NODE (Converged Deployment & Scale) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative flex flex-col items-start lg:items-center"
                        >
                            <div className="flex items-center gap-4 lg:flex-col lg:gap-3">
                                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-brand bg-brand text-brand-foreground shadow-lg shadow-brand/20">
                                    <FaRocket size={20} />
                                </div>
                                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">
                                    [ CROWN // DEPLOYMENT & SCALE ]
                                </span>
                            </div>

                            <div className="mt-4 w-full rounded-3xl border border-brand/50 bg-surface p-6 shadow-xl sm:p-8 lg:mt-6 lg:max-w-2xl lg:text-center">
                                <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
                                    {t.treeCrownTitle}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                    {t.treeCrownDesc}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevTreeWorkflow;
