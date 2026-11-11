"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
    FaInstagram,
    FaGithub,
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaPaperPlane,
    FaArrowUp,
    FaArrowRight,
} from "react-icons/fa6";
import Logo from "./Logo";
import { useApp } from "@/context/AppProviders";
import {
    companyLinks,
    serviceLinks,
    contactInfo,
    socialLinks,
} from "@/data/footer";

const socialIcons: Record<string, ReactNode> = {
    facebook: <FaFacebookF />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
    x: <FaXTwitter />,
    instagram: <FaInstagram />,
    github: <FaGithub />,
};

const iconCircle =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-secondary text-brand";

const Heading = ({ children }: { children: ReactNode }) => (
    <h3 className="mb-5 border-l-2 border-brand pl-3 text-sm font-bold uppercase tracking-widest text-text-primary">
        {children}
    </h3>
);

const linkClass =
    "theme-transition text-[15px] text-text-secondary hover:text-brand";

const Footer = () => {
    const { t } = useApp();

    return (
        <footer className="theme-transition border-t border-border bg-surface text-text-primary">
            <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-12 lg:pt-20">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1.1fr_1.1fr] lg:gap-12">

                    {/* Brand + contact + social */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="#home" aria-label="Home">
                            <Logo width={190} className="text-text-primary" />
                        </Link>

                        <p className="mt-8 max-w-md text-base leading-relaxed text-text-secondary">
                            {t.footerDesc}
                        </p>

                        <ul className="mt-8 space-y-4 text-sm">
                            <li className="flex items-center gap-4">
                                <span className={iconCircle}><FaPhone size={14} /></span>
                                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                                    {contactInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className={iconCircle}><FaEnvelope size={14} /></span>
                                <a href={`mailto:${contactInfo.email}`} className="break-all hover:text-brand">
                                    {contactInfo.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className={iconCircle}><FaLocationDot size={14} /></span>
                                <span className="text-text-secondary">{t.footerAddress}</span>
                            </li>
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.name}
                                    className="theme-transition flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-secondary text-text-primary hover:bg-brand hover:text-brand-foreground"
                                >
                                    {socialIcons[s.name]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <Heading>{t.footerCompany}</Heading>
                        <ul className="space-y-3.5">
                            {companyLinks.map((l) => (
                                <li key={l.key}>
                                    <Link href={l.href} className={linkClass}>
                                        {t[l.key]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <Heading>{t.footerServices}</Heading>
                        <ul className="space-y-3.5">
                            {serviceLinks.map((l) => (
                                <li key={l.key}>
                                    <Link href={l.href} className={linkClass}>
                                        {t[l.key]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Heading>{t.stayConnected}</Heading>
                        <p className="text-[15px] leading-relaxed text-text-secondary">
                            {t.newsletterText}
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="theme-transition mt-6 flex items-center gap-2 rounded-xl border border-border bg-surface-secondary p-2 pl-4 focus-within:border-brand"
                        >
                            <input
                                type="email"
                                required
                                placeholder={t.emailPlaceholder}
                                aria-label={t.emailPlaceholder}
                                className="min-w-0 flex-1 bg-transparent text-sm text-text-primary outline-none placeholder:text-text-secondary"
                            />
                            <button
                                type="submit"
                                aria-label={t.subscribe}
                                className="theme-button flex h-10 w-11 shrink-0 items-center justify-center rounded-lg"
                            >
                                <FaPaperPlane size={14} />
                            </button>
                        </form>

                        <Link
                            href="#contact"
                            className="theme-transition mt-5 flex h-[60px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-secondary text-sm font-semibold hover:bg-surface-hover"
                        >
                            {t.startConversation}
                            <FaArrowRight size={13} />
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-text-secondary sm:flex-row">
                    <p className="text-center sm:text-left">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-text-primary">Sawda Digital</span>. {t.rights}
                    </p>

                    <div className="flex items-center gap-5">
                        <Link href="/privacy" className="hover:text-brand">{t.privacy}</Link>
                        <Link href="/terms" className="hover:text-brand">{t.terms}</Link>
                        <button
                            type="button"
                            aria-label={t.backToTop}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="theme-transition flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-secondary text-text-primary hover:bg-brand hover:text-brand-foreground"
                        >
                            <FaArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;