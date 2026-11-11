"use client";

import Link from "next/link";
// import Icon from "../component/shared/Icon";
import { useApp } from "@/context/AppProviders";
import { NavItemData } from "@/data/Navigation";
import Icon from "./Icon";
// import type { NavItemData } from "@/data/navigation";

// Drops keyboard focus so the CSS dropdown closes after a click
const closeDropdown = () => (document.activeElement as HTMLElement | null)?.blur();

const NavItem = ({ item }: { item: NavItemData }) => {
    const { t } = useApp();

    return (
        <div className="group relative">
            <Link
                href={item.href}
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-brand/10 hover:text-brand group-focus-within:text-brand"
            >
                {t[item.key]}
                {item.children && (
                    <Icon
                        name="chevronDown"
                        className="h-4 w-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                    />
                )}
            </Link>

            {item.children && (
                <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-60 rounded-xl border border-border bg-[var(--navbar-bg)] p-2 shadow-[var(--shadow)]">
                        {item.children.map((child) => (
                            <li key={child.key}>
                                <Link
                                    href={child.href}
                                    onClick={closeDropdown}
                                    className="block rounded-lg px-3 py-2 text-sm text-text-primary transition-colors hover:bg-brand/10 hover:text-brand"
                                >
                                    {t[child.key]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavItem;