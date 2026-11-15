import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface ServiceData {
    title: Key;
    tag: Key;
    desc: Key;
    image: string;
    href: string;
}

export const services: ServiceData[] = [
    {
        title: "fsWeb",
        tag: "svcWebTag",
        desc: "svcWebDesc",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
        href: "/services/web-design"
    },
    {
        title: "fsMedia",
        tag: "svcMediaTag",
        desc: "svcMediaDesc",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
        href: "/services/media-production"
    },
    {
        title: "fsSocial",
        tag: "svcSocialTag",
        desc: "svcSocialDesc",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
        href: "/services/social-media"
    },
    {
        title: "fsBranding",
        tag: "svcBrandingTag",
        desc: "svcBrandingDesc",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80",
        href: "/services/branding"
    },
    {
        title: "fsSeo",
        tag: "svcSeoTag",
        desc: "svcSeoDesc",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
        href: "/services/seo"
    },
    {
        title: "fsEcom",
        tag: "svcEcomTag",
        desc: "svcEcomDesc",
        image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80",
        href: "/services/ecommerce"
    },
];
