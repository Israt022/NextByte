"use client";

import type { IconType } from "react-icons";
import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
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
        { icon: FaLocationDot, label: t.contactVisit, value: t.address },
    ];

    return (
        <div className="space-y-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface-secondary p-8">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(157,23,77,0.25),transparent_60%)]"
                />

                <div className="relative">
                    <h2 className="text-2xl font-extrabold tracking-tight text-text-primary">
                        {t.contactInfoTitle}
                    </h2>

                    <ul className="mt-8 space-y-7">
                        {rows.map(({ icon: RowIcon, label, value, href }) => (
                            <li key={label} className="flex items-center gap-4">
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-brand/15 text-brand">
                                    <RowIcon size={18} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                                        {label}
                                    </p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="break-all text-lg font-bold text-text-primary transition-colors hover:text-brand"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="font-bold text-text-primary">{value}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <hr className="my-8 border-border" />

                    <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                        {t.contactFollow}
                    </p>
                    <ul className="mt-4 flex gap-3">
                        {contactSocials.map(({ name, icon: SocialIcon, href }) => (
                            <li key={name}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-primary transition-colors hover:bg-brand hover:text-brand-foreground"
                                >
                                    <SocialIcon size={15} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <a
                href={`https://wa.me/${contactInfo.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-[2rem] border border-green-500/30 bg-green-500/10 p-5 transition-colors hover:bg-green-500/20"
            >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-white">
                    <FaWhatsapp size={26} />
                </span>
                <span>
                    <span className="block text-lg font-bold text-text-primary">
                        {t.contactWhatsapp}
                    </span>
                    <span className="block text-xs font-semibold text-green-500">
                        {t.contactWhatsappSub}
                    </span>
                </span>
            </a>
        </div>
    );
};

export default ContactInfo;