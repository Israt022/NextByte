"use client";

import type { IconType } from "react-icons";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { contactSocials } from "@/data/contact";
import { contactInfo } from "@/data/footer";

const ContactInfo = () => {
    const { t } = useApp();

    const rows: { icon: IconType; label: string; value: string; href?: string }[] = [
        {
            icon: FaPhone,
            label: t.contactCall,
            value: contactInfo.phone,
            href: `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`,
        },
        {
            icon: FaEnvelope,
            label: t.contactEmail,
            value: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
        },
        {
            icon: FaLocationDot,
            label: t.contactVisit,
            value: t.address,
        },
    ];

    return (
        <div className="space-y-6">
            {/* Direct Channels Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-sm sm:p-9">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand/10 blur-3xl"
                />

                <div className="relative">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black tracking-tight text-text-primary">
                            {t.contactInfoTitle}
                        </h2>
                        <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface-secondary px-3 py-1 text-[11px] font-semibold text-emerald-500">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                            Live Support
                        </span>
                    </div>

                    <ul className="mt-8 space-y-6">
                        {rows.map(({ icon: RowIcon, label, value, href }) => (
                            <li key={label} className="flex items-start gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-brand shadow-sm">
                                    <RowIcon size={17} />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                                        {label}
                                    </p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="mt-1 block break-all text-base font-bold text-text-primary transition-colors hover:text-brand sm:text-lg"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="mt-1 text-base font-bold text-text-primary sm:text-lg">
                                            {value}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Strip */}
                    <div className="mt-8 border-t border-border/80 pt-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                            {t.contactFollow}
                        </p>
                        <ul className="mt-3 flex gap-2.5">
                            {contactSocials.map(({ name, icon: SocialIcon, href }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-secondary text-text-primary transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                                    >
                                        <SocialIcon size={14} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* WhatsApp Quick Direct Action Card */}
            <a
                href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-sm transition-all hover:border-emerald-500/60 hover:bg-emerald-500/15 sm:p-7"
            >
                <div className="flex items-center gap-4">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 transition-transform group-hover:scale-105">
                        <FaWhatsapp size={24} />
                    </span>
                    <div>
                        <span className="block text-lg font-bold text-text-primary">
                            {t.contactWhatsapp}
                        </span>
                        <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            {t.contactWhatsappSub}
                        </span>
                    </div>
                </div>

                <span className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
                    <FaClock size={11} className="text-emerald-500" />
                    <span>&lt; 15 min</span>
                </span>
            </a>
        </div>
    );
};

export default ContactInfo;
