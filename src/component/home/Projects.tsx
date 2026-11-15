"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUpRightFromSquare, FaFolderOpen } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { projects } from "@/data/projects";

const Projects = () => {
    const { t } = useApp();
    const [flagship, ...otherProjects] = projects;

    return (
        <section
            id="projects"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary py-20 lg:py-28"
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
                            <FaFolderOpen className="text-brand" size={12} />
                            {t.projectsTag}
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                            {t.projectsTitle}
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-6 py-3 text-xs font-bold uppercase tracking-wider text-text-primary shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
                    >
                        <span>{t.viewAllProjects}</span>
                        <FaArrowRight size={11} className="text-brand transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.header>

                {/* Asymmetric Case Studio: Flagship + Lateral Stack */}
                <div className="mt-14 grid gap-8 lg:grid-cols-12">
                    {/* Flagship Case Study (7 Cols) */}
                    {flagship && (
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                            className="lg:col-span-7"
                        >
                            <Link href={flagship.href} className="group block h-full">
                                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-500 hover:border-brand/50 hover:shadow-2xl">
                                    {/* Image Viewport */}
                                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-secondary">
                                        <Image
                                            src={flagship.image}
                                            alt={t[flagship.title]}
                                            fill
                                            sizes="(min-width: 1024px) 55vw, 95vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute left-4 top-4 rounded-full border border-border/80 bg-surface/90 px-3.5 py-1 text-xs font-bold text-text-primary backdrop-blur-md">
                                            Featured Project
                                        </div>
                                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                                            <FaArrowUpRightFromSquare size={13} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-text-primary transition-colors group-hover:text-brand sm:text-3xl">
                                                {t[flagship.title]}
                                            </h3>
                                            <p className="mt-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                                                {t[flagship.desc]}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold text-text-primary">
                                            <span className="text-text-secondary">
                                                Web Application & Cloud
                                            </span>
                                            <span className="flex items-center gap-1.5 text-brand">
                                                <span>View Case Study</span>
                                                <FaArrowRight size={10} />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    )}

                    {/* Secondary Projects Stack (5 Cols) */}
                    <div className="flex flex-col gap-8 lg:col-span-5">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.65,
                                    delay: (index + 1) * 0.12,
                                    ease: "easeOut",
                                }}
                                className="flex-1"
                            >
                                <Link href={project.href} className="group block h-full">
                                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-secondary sm:w-48 sm:shrink-0">
                                            <Image
                                                src={project.image}
                                                alt={t[project.title]}
                                                fill
                                                sizes="(min-width: 640px) 200px, 90vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="mt-4 flex flex-1 flex-col justify-between sm:mt-0">
                                            <div>
                                                <h3 className="text-lg font-bold text-text-primary transition-colors group-hover:text-brand">
                                                    {t[project.title]}
                                                </h3>
                                                <p className="mt-2 text-xs leading-relaxed text-text-secondary line-clamp-2">
                                                    {t[project.desc]}
                                                </p>
                                            </div>

                                            <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-3 text-xs font-semibold text-text-primary">
                                                <span className="text-[11px] text-text-secondary">
                                                    Case Study
                                                </span>
                                                <FaArrowUpRightFromSquare
                                                    size={11}
                                                    className="text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
