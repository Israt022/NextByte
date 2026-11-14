"use client";

import Image from "next/image";
import { useApp } from "@/context/AppProviders";
import type { ProjectData } from "@/data/project";

const windowDots = ["bg-red-400", "bg-amber-400", "bg-green-400"];

const ProjectCard = ({ project }: { project: ProjectData }) => {
    const { t } = useApp();

    return (
        <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface-secondary shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            {/* Browser-window top bar */}
            <div className="flex gap-1.5 px-3 py-2.5" aria-hidden="true">
                {windowDots.map((color) => (
                    <span key={color} className={`h-2 w-2 rounded-full ${color}`} />
                ))}
            </div>

            <div className="relative h-52 overflow-hidden lg:h-60">
                <Image
                    src={project.image}
                    alt={t[project.alt]}
                    fill
                    sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
            </div>
        </article>
    );
};

export default ProjectCard;