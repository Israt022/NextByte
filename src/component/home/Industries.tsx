"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaNetworkWired,
    FaServer,
    FaBuilding,
    FaGraduationCap,
    FaCartShopping,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { industries } from "@/data/industries";

const sectorIcons = [
    <FaCartShopping key="0" size={20} />,
    <FaServer key="1" size={20} />,
    <FaBuilding key="2" size={20} />,
    <FaGraduationCap key="3" size={20} />,
];

const sectorHighlights = [
    ["Custom Shopify", "bKash & Nagad", "Inventory Sync"],
    ["Multi-Tenant Portals", "Secure Cloud APIs", "Analytics Dashboards"],
    ["Virtual Unit Showcases", "Interactive Listings", "Buyer Inquiries"],
    ["LMS Portals", "Course Marketplaces", "Automated Certifications"],
];

const Industries = () => {
    const { t } = useApp();

    return (
        <section
            id="industries"
            className="theme-transition scroll-mt-[76px] bg-background py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                            <FaNetworkWired className="text-brand" size={12} />
                            Industry Domains
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                            {t.industriesTitle}
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
                        {t.industriesDesc}
                    </p>
                </motion.header>

                {/* 2x2 Sector Solutions Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
                    {industries.map((item, index) => (
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
                            className="group theme-transition relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-surface-secondary/60 hover:shadow-xl sm:p-9"
                        >
                            <div>
                                {/* Icon Header */}
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-brand transition-all group-hover:border-brand/40 group-hover:bg-brand/10">
                                        {sectorIcons[index % sectorIcons.length]}
                                    </div>
                                    <span className="text-xs font-bold text-text-secondary">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl font-bold text-text-primary transition-colors group-hover:text-brand sm:text-2xl">
                                    {t[item.title]}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                    {t[item.desc]}
                                </p>

                                {/* Capability Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {sectorHighlights[index]?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg border border-border bg-surface-secondary px-3 py-1 text-xs font-medium text-text-secondary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Link */}
                            <div className="mt-8 border-t border-border/80 pt-5">
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-primary transition-all group-hover:text-brand"
                                >
                                    <span>{t.industryCta}</span>
                                    <FaArrowRight size={11} className="text-brand transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
