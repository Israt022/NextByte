"use client";

import { motion } from "framer-motion";
import {
    FaCode,
    FaDatabase,
    FaLaptopCode,
    FaLayerGroup,
    FaServer,
    FaShopify,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";

const techBadges = [
    { name: "Next.js 15", category: "Framework" },
    { name: "React 19", category: "Library" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS v4", category: "Styling" },
    { name: "Node.js", category: "Runtime" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma ORM", category: "Data Layer" },
    { name: "AWS & Vercel", category: "Cloud & Edge" },
    { name: "Headless Shopify", category: "E-Commerce" },
    { name: "Sanity & Strapi", category: "Headless CMS" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL & REST", category: "API Arch" },
];

const WebDevCapabilities = () => {
    const { t } = useApp();

    const capabilities = [
        {
            icon: FaLaptopCode,
            title: t.webDevCap1Title,
            desc: t.webDevCap1Desc,
            tags: ["Next.js App Router", "React 19", "Edge Caching", "Role-Based Auth"],
        },
        {
            icon: FaLayerGroup,
            title: t.webDevCap2Title,
            desc: t.webDevCap2Desc,
            tags: ["Sanity.io", "Strapi", "Headless WP", "Visual Editing"],
        },
        {
            icon: FaShopify,
            title: t.webDevCap3Title,
            desc: t.webDevCap3Desc,
            tags: ["Instant Checkout", "bKash & Nagad", "Inventory Sync", "High Conversion"],
        },
        {
            icon: FaServer,
            title: t.webDevCap4Title,
            desc: t.webDevCap4Desc,
            tags: ["Serverless APIs", "PostgreSQL", "Prisma ORM", "AWS Infrastructure"],
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
                        <FaCode className="text-brand" size={12} />
                        {t.webDevCapTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                        {t.webDevCapTitle}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                        {t.webDevCapDesc}
                    </p>
                </motion.header>

                {/* 4 Core Engineering Pillars */}
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

                {/* Verified Tech Stack Strip */}
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
                                // Supported Tech Ecosystem
                            </span>
                            <h3 className="mt-1 text-lg font-bold text-text-primary sm:text-xl">
                                Industry-Standard Stacks & Tools We Deploy
                            </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            {techBadges.map((b) => (
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

export default WebDevCapabilities;
