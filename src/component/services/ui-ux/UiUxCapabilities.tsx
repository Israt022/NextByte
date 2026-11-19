"use client";

import { motion } from "framer-motion";
import {
    FaBezierCurve,
    FaCodeCompare,
    FaLayerGroup,
    FaMagnifyingGlassChart,
    FaPenNib,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const designToolBadges = [
    { name: "Figma Pro", category: "Design & Systems" },
    { name: "FigJam", category: "UX Architecture" },
    { name: "Framer", category: "Interactive Prototype" },
    { name: "ProtoPie", category: "Micro-Interactions" },
    { name: "Storybook", category: "Token Handoff" },
    { name: "WCAG 2.1 AAA", category: "Accessibility" },
    { name: "Maze", category: "User Testing" },
    { name: "Miro", category: "Journey Mapping" },
    { name: "Principle", category: "Motion Design" },
    { name: "Apple HIG", category: "iOS Standards" },
    { name: "Material 3", category: "Android Standards" },
    { name: "Zeplin", category: "Dev Specs" },
];

const UiUxCapabilities = () => {
    const { t } = useApp();

    const capabilities = [
        {
            icon: FaMagnifyingGlassChart,
            title: t.uiUxCap1Title,
            desc: t.uiUxCap1Desc,
            tags: ["User Interviews", "Personas", "Heuristic Audits", "Friction Removal"],
        },
        {
            icon: FaLayerGroup,
            title: t.uiUxCap2Title,
            desc: t.uiUxCap2Desc,
            tags: ["Figma Tokens", "Atomic UI", "Auto-Layout 5.0", "Dark/Light Modes"],
        },
        {
            icon: FaBezierCurve,
            title: t.uiUxCap3Title,
            desc: t.uiUxCap3Desc,
            tags: ["High-Fi Prototyping", "Touch Gestures", "Motion Physics", "User Testing"],
        },
        {
            icon: FaCodeCompare,
            title: t.uiUxCap4Title,
            desc: t.uiUxCap4Desc,
            tags: ["Tailwind Export", "Pixel-Perfect Specs", "Design QA", "Storybook Sync"],
        },
    ];

    return (
        <section className="relative py-20 lg:py-28">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                        <FaPenNib className="text-brand" size={12} />
                        {t.uiUxCapTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                        {t.uiUxCapTitle}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                        {t.uiUxCapDesc}
                    </p>
                </motion.header>

                {/* 4 Core Design Pillars */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {capabilities.map((item, index) => {
                        const ItemIcon = item.icon;
                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="group theme-transition relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"
                            >
                                <div>
                                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-brand transition-all group-hover:border-brand/40 group-hover:bg-brand/10">
                                        <ItemIcon size={20} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold leading-snug text-text-primary transition-colors group-hover:text-brand">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/70 pt-5">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-border bg-surface-secondary px-2.5 py-0.5 text-[11px] font-mono text-text-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Verified Design Tool Ecosystem Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mt-14 rounded-3xl border border-border bg-surface-secondary p-6 sm:p-8"
                >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
                                // Supported Design Ecosystem
                            </span>
                            <h3 className="mt-1 text-lg font-bold text-text-primary sm:text-xl">
                                Industry-Standard Tools & Design Standards
                            </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            {designToolBadges.map((b) => (
                                <span
                                    key={b.name}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold text-text-primary shadow-sm transition-all hover:border-brand/50 hover:text-brand"
                                >
                                    <span>{b.name}</span>
                                    <span className="text-[10px] text-text-secondary">({b.category})</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default UiUxCapabilities;
