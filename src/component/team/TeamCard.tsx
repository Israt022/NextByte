"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
    FaCrown,
    FaLaptopCode,
    FaChartPie,
    FaBagShopping,
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { TeamMember, TeamIcon } from "@/data/team";

const icons: Record<TeamIcon, ReactNode> = {
    crown: <FaCrown size={12} />,
    laptop: <FaLaptopCode size={12} />,
    chart: <FaChartPie size={12} />,
    bag: <FaBagShopping size={12} />,
};

const TeamCard = ({ member }: { member: TeamMember }) => {
    const { t } = useApp();

    return (
        <article className="group theme-transition relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl sm:p-6">
            <div>
                {/* Portrait Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-secondary">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient shadow overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Category pill inside portrait */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                            {icons[member.icon]}
                            {t[member.category]}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                </div>

                {/* Name, Role & Bio */}
                <div className="mt-5">
                    <h3 className="text-xl font-bold text-text-primary transition-colors group-hover:text-brand sm:text-2xl">
                        {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-brand sm:text-sm">
                        {t[member.role]}
                    </p>
                    {member.bio && (
                        <p className="mt-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                            {t[member.bio]}
                        </p>
                    )}
                </div>
            </div>

            {/* Social Connectors */}
            <div className="mt-6 flex items-center justify-between border-t border-border/80 pt-4">
                <span className="text-xs text-text-secondary">Connect</span>
                <div className="flex items-center gap-2">
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-secondary text-text-primary transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                        >
                            <FaLinkedinIn size={12} />
                        </a>
                    )}
                    {member.facebook && (
                        <a
                            href={member.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} Facebook`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-secondary text-text-primary transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                        >
                            <FaFacebookF size={12} />
                        </a>
                    )}
                    {member.x && (
                        <a
                            href={member.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} X`}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-secondary text-text-primary transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                        >
                            <FaXTwitter size={12} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default TeamCard;
