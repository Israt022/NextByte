"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
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
                            <FaUsers className="text-brand" size={12} />
                            {t.teamTag}
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                            {t.teamTitle}
                        </h2>
                    </div>

                    <Link
                        href="#contact"
                        className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-6 py-3 text-xs font-bold uppercase tracking-wider text-text-primary shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
                    >
                        <span>{t.teamCta}</span>
                        <FaArrowRight size={11} className="text-brand transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.header>

                {/* Team Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.1,
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
