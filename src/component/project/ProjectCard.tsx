"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { ProjectData } from "@/data/project";

import type { Translations } from "@/lib/translations";

const categoryLabelKeyMap: Record<string, keyof Translations> = {
    web: "projWeb",
    app: "projWeb",
    branding: "projBranding",
    uiux: "projUiux",
    growth: "projGrowth",
};

const ProjectCard = ({ project }: { project: ProjectData }) => {
    const { t } = useApp();

    return (
        <article className="group theme-transition relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl sm:p-6">
            <div>
                {/* Visual Image Viewport */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-secondary">
                    <Image
                        src={project.image}
                        alt={t[project.alt]}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Category pill overlays */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                        {project.categories.slice(0, 2).map((cat) => {
                            const labelKey = categoryLabelKeyMap[cat];
                            return (
                                <span
                                    key={cat}
                                    className="rounded-full border border-white/20 bg-black/60 px-3 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md"
                                >
                                    {labelKey ? t[labelKey] : cat}
                                </span>
                            );
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="mt-5">
                    <h3 className="text-xl font-bold text-text-primary transition-colors group-hover:text-brand sm:text-2xl">
                        {t[project.title]}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                        {t[project.desc]}
                    </p>
                </div>
            </div>

            {/* Action Footer */}
            <div className="mt-6 border-t border-border/80 pt-4">
                <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-text-primary transition-colors group-hover:text-brand"
                >
                    <span>{t.projViewCase}</span>
                    <FaArrowRight size={11} className="text-brand transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    );
};

export default ProjectCard;
