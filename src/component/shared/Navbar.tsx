"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useApp } from "@/context/AppProviders";
import { navItems } from "@/data/Navigation";
import NavItem from "./Navitem";
import LanguageToggle from "./Languagetoggle";
import ThemeToggle from "./Themetoggle";
import Icon from "./Icon";
import MobileMenu from "./Mobilemenu";
// import Icon from "./Icon";
// import NavItem from "../../data/Navitem";
// import MobileMenu from "./MobileMenu";
// import LanguageToggle from "./LanguageToggle";
// import ThemeToggle from "./ThemeToggle";
// import { useApp } from "@/context/AppProviders";
// import { navItems } from "@/data/navigation";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useApp();

    return (
        <nav className="theme-transition sticky top-0 z-50 border-b border-border bg-[var(--navbar-bg)] shadow-[var(--shadow)]">
            <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">

                <Link href="#home" aria-label="NetByte IT Home">
                    <Logo width={150} className="text-text-primary" />
                </Link>

                <ul className="hidden items-center gap-1 xl:flex">
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <NavItem item={item} />
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? t.closeMenu : t.openMenu}
                        aria-expanded={menuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-primary xl:hidden"
                    >
                        <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </nav>
    );
};

export default Navbar;