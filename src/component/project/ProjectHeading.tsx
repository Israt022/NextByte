"use client";

import { motion } from "framer-motion";
import { FaFolderOpen } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const ProjectHeading = () => {
    const { t } = useApp();

    return (
        <section className="px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
            <motion.header
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mx-auto max-w-4xl text-center"
            >
                <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                    <FaFolderOpen className="text-brand" size={12} />
                    {t.projTag}
                </span>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                    {t.projTitle}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                    {t.projDesc}
                </p>
            </motion.header>
        </section>
    );
};

export default ProjectHeading;
