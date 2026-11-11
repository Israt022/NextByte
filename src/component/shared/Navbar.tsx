
"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative border-b border-black/5 bg-white shadow-sm">
            <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

                {/* Logo */}
                <Link href="#home" aria-label="NetByte IT Home">
                    <Logo width={190} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#222222] transition-colors hover:text-[#F477B6]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="#contact"
                    className="hidden rounded-full bg-[#F477B6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#e45d9f] lg:inline-flex"
                >
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-gray-200 lg:hidden"
                >
                    <span className={`h-0.5 w-5 bg-black transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`h-0.5 w-5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-5 bg-black transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-[#222222] transition-colors hover:text-[#F477B6]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 rounded-full bg-[#F477B6] px-5 py-3 text-center text-sm font-semibold text-white"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
