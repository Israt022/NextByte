import type { Translations } from "@/lib/translations";

export interface NavLinkData {
    key: keyof Translations;
    href: string;
}

export interface NavItemData extends NavLinkData {
    children?: NavLinkData[];
}

// Child hrefs are placeholder routes — point them at your real pages.
export const navItems: NavItemData[] = [
    { key: "home", href: "#home" },
    {
        key: "services",
        href: "#services",
        children: [
            { key: "webDev", href: "/services/web-development" },
            { key: "appDev", href: "/services/app-development" },
            { key: "uiux", href: "/services/ui-ux-design" },
            { key: "itSupport", href: "/services/it-support" },
        ],
    },
    {
        key: "pricing",
        href: "#pricing",
        children: [
            { key: "websitePlans", href: "/pricing/website" },
            { key: "appPlans", href: "/pricing/app" },
            { key: "maintenancePlans", href: "/pricing/maintenance" },
        ],
    },
    { key: "projects", href: "#portfolio" },
    { key: "team", href: "#team" },
    { key: "contact", href: "#contact" },
];

export const topbarLinks: NavLinkData[] = [
    { key: "quote", href: "#contact" },
    { key: "support", href: "#contact" },
];