"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
// import { whyItems } from "@/data/team";
import SectionHeading from "./SectionHeading";
import { whyItems } from "@/data/expertiesTeam";

const TeamWhy = () => {
    const { t } = useApp();

    return (
        <section
            id="why"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px]">
                <SectionHeading tag={t.whyTag} title={t.whyTitle} desc={t.whyDesc} />

                <div className="mt-14 grid gap-10 rounded-[2.5rem] border border-border bg-surface p-8 shadow-sm sm:grid-cols-2 sm:p-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
                    {whyItems.map(({ title, desc, icon: WhyIcon }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                            className="group text-center lg:px-6"
                        >
                            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                                <WhyIcon size={24} />
                            </span>
                            <h3 className="mt-6 text-lg font-bold text-text-primary">{t[title]}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{t[desc]}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamWhy;