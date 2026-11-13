"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { team } from "@/data/team";
import TeamCard from "./TeamCard";

const Team = () => {
    const { t } = useApp();

    return (
        <section
            id="team"
            className="theme-transition scroll-mt-[76px] bg-background py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            {t.teamTag}
                        </span>

                        <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                            {t.teamTitle}
                        </h2>
                    </div>

                    <Link
                        href="#contact"
                        className="theme-transition flex w-fit items-center gap-3 rounded-full border border-border bg-surface px-7 py-4 text-sm font-semibold text-text-primary shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        {t.teamCta} <FaArrowRight size={13} />
                    </Link>
                </motion.header>

                {/* Team Cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                        >
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;