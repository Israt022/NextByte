"use client";

import Link from "next/link";
// import Icon from "./Icon";
import { useApp } from "@/context/AppProviders";
// import { navItems } from "@/data/navigation";
import Icon from "./Icon";
import { navItems } from "@/data/Navigation";

const linkClass =
    "block py-2 text-sm font-medium text-text-primary transition-colors hover:text-brand";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
    const { t } = useApp();

    return (
        <div className="absolute left-0 top-full w-full border-t border-border bg-[var(--navbar-bg)] px-5 py-4 shadow-lg xl:hidden">
            <ul className="flex flex-col">
                {navItems.map((item) => (
                    <li key={item.key}>
                        {item.children ? (
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-text-primary [&::-webkit-details-marker]:hidden">
                                    {t[item.key]}
                                    <Icon
                                        name="chevronDown"
                                        className="h-4 w-4 transition-transform group-open:rotate-180"
                                    />
                                </summary>
                                <ul className="ml-3 border-l border-border pl-3">
                                    {item.children.map((child) => (
                                        <li key={child.key}>
                                            <Link href={child.href} onClick={onClose} className={linkClass}>
                                                {t[child.key]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        ) : (
                            <Link href={item.href} onClick={onClose} className={linkClass}>
                                {t[item.key]}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            <Link
                href="#contact"
                onClick={onClose}
                className="mt-3 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
            >
                {t.getStarted}
            </Link>
        </div>
    );
};

export default MobileMenu;