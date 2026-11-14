"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { projectFilters, projects, type ProjectFilter } from "@/data/project";
import ProjectCard from "./ProjectCard";

// Rows of 3 cards; a short last row stretches to fill the width (5 cards → 3 + 2 wide)
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

    const visible = projects.filter(
        (project) => active === "all" || project.categories.includes(active)
    );

    return (
        <section className="px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14">
            <div className="mx-auto max-w-[1440px]">
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
                            className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                                active === id
                                    ? "text-brand-foreground"
                                    : "text-text-secondary hover:text-text-primary"
                            }`}
                        >
                            {active === id && (
                                <motion.span
                                    layoutId="project-filter"
                                    className="absolute inset-0 rounded-full bg-brand"
                                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                />
                            )}
                            <span className="relative">{t[label]}</span>
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, index) => (
                            <motion.div
                                key={project.alt}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                                className={spanClass(index, visible.length)}
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