"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCircleQuestion, FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { faqs } from "@/data/faq";
import FaqItem from "./Faqitem";

const Faq = () => {
    const { t } = useApp();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="theme-transition scroll-mt-[76px] bg-background py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column (5 cols, sticky on desktop) */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                            <FaCircleQuestion className="text-brand" size={12} />
                            {t.faqTag}
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                            {t.faqTitle}
                        </h2>

                        <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                            {t.faqDesc}
                        </p>

                        {/* Consultation Prompt Card */}
                        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-sm">
                            <h3 className="text-base font-bold text-text-primary">
                                Have questions about your project scope?
                            </h3>
                            <p className="mt-1 text-xs text-text-secondary">
                                Reach out directly to our team for a free consultation and project roadmap.
                            </p>

                            <Link
                                href="#contact"
                                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-brand-foreground shadow-md shadow-brand/10 transition-all hover:bg-brand-hover"
                            >
                                <span>{t.contactUs}</span>
                                <FaArrowRight size={11} />
                            </Link>
                        </div>
                    </motion.header>

                    {/* Right Column (7 cols) */}
                    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:col-span-7">
                        {faqs.map((item, index) => (
                            <motion.div
                                key={item.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                            >
                                <FaqItem
                                    item={item}
                                    open={openIndex === index}
                                    onToggle={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
