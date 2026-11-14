
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { projectFilters, projects, type ProjectFilter } from "@/data/project";
import ProjectCard from "./ProjectCard";
import DotBackground from "@/component/shared/DotBackground";

const spanClass = (index: number, total: number) => {
    const rest = total % 3;

    if (rest && index >= total - rest) {
        return rest === 1 ? "lg:col-span-6" : "lg:col-span-3";
    }

    return "lg:col-span-2";
};

const ProjectCards = () => {
    const { t } = useApp();
    const [active, setActive] = useState<ProjectFilter>("all");

    const visible =
        active === "all"
            ? projects
            : projects.filter((project) =>
                project.categories.includes(active)
            );

    return (
        <section className="pb-14 lg:pb-20">
            <DotBackground>
                <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 pb-0 sm:px-8 lg:px-12 lg:pt-14">
                    {/* Filter tabs */}
                    <div
                        role="group"
                        aria-label={t.projFilterLabel}
                        className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-surface-secondary p-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {projectFilters.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                aria-pressed={active === id}
                                onClick={() => setActive(id)}
                                className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${active === id
                                    ? "text-brand-foreground"
                                    : "text-text-secondary hover:text-text-primary"
                                    }`}
                            >
                                {active === id && (
                                    <motion.span
                                        layoutId="project-filter"
                                        className="absolute inset-0 rounded-full bg-brand"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 32,
                                        }}
                                    />
                                )}
                                <span className="relative">{t[label]}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div></div>
            </DotBackground>

            {/* Project cards - outside dotted background */}
            <div className="mx-auto mt-6 grid w-full max-w-[1440px] grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-6 lg:px-12">                <AnimatePresence mode="popLayout">
                {visible.map((project, index) => (
                    <motion.div
                        key={project.alt}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.06,
                            ease: "easeOut",
                        }}
                        className={spanClass(index, visible.length)}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </AnimatePresence>
            </div>
        </section>
    );
};

export default ProjectCards;
