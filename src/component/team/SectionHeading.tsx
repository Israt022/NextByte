"use client";

import { motion } from "framer-motion";

// Shared centered section header. Pass already-translated strings.
// Use as="h1" for the first heading on a page.
const SectionHeading = ({
    tag,
    title,
    desc,
    as: Title = "h2",
}: {
    tag: string;
    title: string;
    desc?: string;
    as?: "h1" | "h2";
}) => (
    <motion.header
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
    >
        <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
            {tag}
        </span>
        <Title className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
            {title}
        </Title>
        {desc && (
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">{desc}</p>
        )}
    </motion.header>
);

export default SectionHeading;