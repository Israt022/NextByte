"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { whyItems } from "@/data/team";
import SectionHeading from "./SectionHeading";

const TeamWhy = () => {
    const { t } = useApp();

    return (
        <section
            id="why"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px]">
                <SectionHeading tag={t.whyTag} title={t.whyTitle} desc={t.whyDesc} />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {whyItems.map(({ title, desc, icon: WhyIcon }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                            className="group theme-transition flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"
                        >
                            <div>
                                <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-brand transition-all group-hover:border-brand/40 group-hover:bg-brand/10">
                                    <WhyIcon size={20} />
                                </span>
                                <h3 className="mt-6 text-lg font-bold text-text-primary transition-colors group-hover:text-brand">
                                    {t[title]}
                                </h3>
                                <p className="mt-2.5 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                    {t[desc]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamWhy;
