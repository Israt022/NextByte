"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { projectFilters, projects, type ProjectFilter } from "@/data/project";
import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
    const { t } = useApp();
    const [active, setActive] = useState<ProjectFilter>("all");

    const visible =
        active === "all"
            ? projects
            : projects.filter((project) =>
                  project.categories.includes(active as any)
              );

    return (
        <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
            <div className="mx-auto w-full max-w-[1440px]">
                {/* Filter Tabs */}
                <div className="flex justify-center">
                    <div
                        role="group"
                        aria-label={t.projFilterLabel}
                        className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-surface p-1.5 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {projectFilters.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                aria-pressed={active === id}
                                onClick={() => setActive(id)}
                                className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                                    active === id
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
                                            stiffness: 450,
                                            damping: 35,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{t[label]}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Cards Grid */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                    ease: "easeOut",
                                }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProjectCards;
