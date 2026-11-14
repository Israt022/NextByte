"use client";

import { motion } from "framer-motion";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const ProjectHeading = () => {
    const { t } = useApp();

    return (
        <section className="px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
            <motion.header
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mx-auto max-w-4xl text-center"
            >
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-primary">
                    <FaScrewdriverWrench className="text-brand" />
                    {t.projTag}
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-[1.25] tracking-tight text-text-primary sm:text-6xl">
                    {t.projTitle}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
                    {t.projDesc}
                </p>
            </motion.header>
        </section>
    );
};

export default ProjectHeading;