"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { faqs } from "@/data/faq";
import FaqItem from "./Faqitem";
// import FaqItem from "./FaqItem";

const Faq = () => {
    const { t } = useApp();
    // First question open by default, only one open at a time
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="theme-transition scroll-mt-[76px] bg-background py-20 lg:py-28"
        >
            <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-12">
                {/* Left: header (sticks while scrolling on desktop) */}
                <motion.header
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="lg:sticky lg:top-28 lg:self-start"
                >
                    <span className="inline-block rounded-full border border-border bg-surface px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
                        {t.faqTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                        {t.faqTitle}
                    </h2>

                    <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
                        {t.faqDesc}
                    </p>
                </motion.header>

                {/* Right: accordion */}
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <motion.div
                            key={item.question}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.12,
                                ease: "easeOut",
                            }}
                        >
                            <FaqItem
                                item={item}
                                open={openIndex === index}
                                onToggle={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;