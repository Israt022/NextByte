"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { projects } from "@/data/projects";
const Projects = () => {
    const { t } = useApp();

    return (
        <section
            id="projects"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
                        {t.projectsTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                        {t.projectsTitle}
                    </h2>
                </motion.header>

                {/* Project Cards (middle card sits lower on desktop) */}
                <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            className={index === 1 ? "lg:mt-16" : ""}
                        >
                            <Link href={project.href} className="group block">
                                {/* Image + hover arrow */}
                                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border-4 border-surface bg-surface shadow-[var(--shadow)]">
                                    <Image
                                        src={project.image}
                                        alt={t[project.title]}
                                        fill
                                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                                    />

                                    <span className="absolute bottom-3 right-3 flex h-12 w-12 translate-y-[150%] items-center justify-center rounded-xl bg-surface text-text-primary opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
                                        <FaArrowRight size={16} />
                                    </span>
                                </div>

                                {/* Text */}
                                <div className="mt-6 px-2">
                                    <h3 className="flex items-center gap-3 text-xl font-bold text-text-primary transition-colors group-hover:text-brand">
                                        <span className="h-0.5 w-6 bg-brand" />
                                        {t[project.title]}
                                    </h3>
                                    <p className="mt-3 pl-9 text-sm text-text-secondary">
                                        {t[project.desc]}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-16 flex justify-center"
                >
                    <Link
                        href="/projects"
                        className="theme-transition group flex items-center gap-4 rounded-full border border-border bg-surface px-8 py-4 text-sm font-bold uppercase tracking-wider text-text-primary shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        {t.viewAllProjects}
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform group-hover:translate-x-1">
                            <FaArrowRight size={13} />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;