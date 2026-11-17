"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    tag: string;
    title: string;
    desc?: string;
    as?: "h1" | "h2";
}

const SectionHeading = ({
    tag,
    title,
    desc,
    as: Title = "h2",
}: SectionHeadingProps) => (
    <motion.header
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
    >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {tag}
        </span>
        <Title className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            {title}
        </Title>
        {desc && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                {desc}
            </p>
        )}
    </motion.header>
);

export default SectionHeading;
