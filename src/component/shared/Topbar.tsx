"use client";

import { useApp } from "@/context/AppProviders";
import { site } from "@/lib/Site";
import Link from "next/link";
import Icon from "./Icon";
import SearchBar from "./Searchbar";
import { topbarLinks } from "@/data/Navigation";
import SocialLinks from "./Sociallinks";
// import Icon from "./Icon";
// import SearchBar from "./SearchBar";
// import SocialLinks from "./SocialLinks";
// import { useApp } from "@/context/AppProviders";
// import { site } from "@/data/site";
// import { topbarLinks } from "@/data/navigation";

const Topbar = () => {
    const { t } = useApp();

    return (
        <div className="theme-transition border-b border-border bg-[var(--topbar-bg)] text-text-secondary">
            <div className="mx-auto flex min-h-[60px] max-w-[1440px] items-center justify-between gap-4 px-5 text-sm sm:px-8 lg:px-12">

                <div className="flex items-center gap-6 font-semibold">
                    <a
                        href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-2 whitespace-nowrap transition-colors hover:text-brand"
                    >
                        <Icon name="phone" className="h-4 w-4 text-brand" />
                        {site.phone}
                    </a>
                    <p className="hidden items-center gap-2 lg:flex">
                        <Icon name="mapPin" className="h-4 w-4 text-brand" />
                        {t.address}
                    </p>
                </div>

                <div className="hidden flex-1 justify-center md:flex">
                    <SearchBar />
                </div>

                <div className="flex items-center gap-6">
                    <ul className="hidden items-center gap-6 font-medium xl:flex">
                        {topbarLinks.map(({ key, href }) => (
                            <li key={key}>
                                <Link href={href} className="transition-colors hover:text-brand">
                                    {t[key]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <SocialLinks className="hidden sm:flex" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;