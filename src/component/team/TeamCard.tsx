"use client";

import Image from "next/image";
import {  FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { TeamMember } from "@/data/expertiesTeam";
// import type { TeamMember } from "@/data/team";

const socials = [
    { key: "linkedin", icon: FaLinkedinIn },
    { key: "facebook", icon: FaFacebook },
    { key: "x", icon: FaXTwitter },
] as const;

const TeamCard = ({ member }: { member: TeamMember }) => {
    const { t } = useApp();

    return (
        <article className="group h-full overflow-hidden rounded-[2rem] border border-border bg-surface-secondary shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                </div>
            </div>

            <div className="px-6 pb-6 pt-3">
                <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{t[member.role]}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{t[member.bio]}</p>

                <ul className="mt-5 flex gap-2 border-t border-border pt-5">
                    {socials.map(({ key, icon: SocialIcon }) => (
                        <li key={key}>
                            <a
                                href={member[key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} – ${key}`}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:bg-brand hover:text-brand-foreground"
                            >
                                <SocialIcon size={13} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default TeamCard;