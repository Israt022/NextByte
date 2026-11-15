"use client";

import { motion } from "framer-motion";
import { FaCodeBranch, FaCircleCheck, FaBolt, FaComments } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { processSteps } from "@/data/process";
import ProcessStep from "./ProcessStep";

const Process = () => {
    const { t } = useApp();

    return (
        <section
            id="process"
            className="theme-transition scroll-mt-[76px] bg-background py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
                        {t.processTag}
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                        {t.processTitle}
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                        {t.processDesc}
                    </p>
                </motion.header>

                {/* Timeline Presentation */}
                <div className="relative mt-16 rounded-[2.5rem] border border-border bg-surface p-8 shadow-sm sm:p-12 lg:p-16">
                    {/* Vertical Connecting Line for Mobile/Tablet */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-16 left-15 top-16 w-0.5 bg-border lg:hidden"
                    />

                    <div className="grid gap-12 sm:gap-14 lg:grid-cols-5 lg:gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <ProcessStep
                                    step={step}
                                    index={index}
                                    total={processSteps.length}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Operational Guarantee Strip */}
                    <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-text-secondary">
                        <div className="flex items-center gap-2">
                            <FaCircleCheck className="text-brand" size={14} />
                            <span>Transparent Milestone Approvals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBolt className="text-brand" size={14} />
                            <span>Fast & Agile Iterative Cycles</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaComments className="text-brand" size={14} />
                            <span>Direct Communication with Senior Leads</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
