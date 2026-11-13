"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
    FaCrown,
    FaLaptopCode,
    FaChartPie,
    FaBagShopping,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { TeamMember, TeamIcon } from "@/data/team";

const icons: Record<TeamIcon, ReactNode> = {
    crown: <FaCrown />,
    laptop: <FaLaptopCode />,
    chart: <FaChartPie />,
    bag: <FaBagShopping />,
};

const socialClass =
    "theme-transition flex h-8 w-8 items-center justify-center rounded-full bg-surface-secondary text-text-primary hover:bg-brand hover:text-brand-foreground";

const TeamCard = ({ member }: { member: TeamMember }) => {
    const { t } = useApp();

    return (
        <article className="group theme-transition relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-surface p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            {/* Soft accent tint */}
            <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-bl ${member.tint} via-transparent to-transparent`}
            />

            {/* Category badge + status dot */}
            <div className="relative flex items-center justify-between gap-2">
                <span
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${member.badge}`}
                >
                    {icons[member.icon]}
                    {t[member.category]}
                </span>
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            </div>

            {/* Photo */}
            <div className="relative mx-auto mt-5 w-full max-w-[210px] rounded-[2rem] border border-border bg-surface p-2 shadow-[var(--shadow)]">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface-secondary">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 60vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                </div>
            </div>

            {/* Info */}
            <div className="relative mt-5 flex flex-1 flex-col text-center">
                <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="mt-3 flex-1 text-xs font-semibold leading-relaxed text-brand">
                    {t[member.role]}
                </p>

                <div className="mt-4 flex items-center justify-center gap-2 border-t border-border pt-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`} className={socialClass}>
                        <FaLinkedinIn size={13} />
                    </a>
                    <a href={member.x} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} X`} className={socialClass}>
                        <FaXTwitter size={13} />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default TeamCard;