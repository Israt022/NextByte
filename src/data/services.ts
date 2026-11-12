import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface ServiceData {
    title: Key;
    tag: Key;
    desc: Key;
    image: string;
    href: string;
}

// Put the images in /public/images/services/ and point the hrefs at your real pages
export const services: ServiceData[] = [
    { title: "fsWeb", tag: "svcWebTag", desc: "svcWebDesc", image: "/images/services/web.jpg", href: "/services/web-design" },
    { title: "fsMedia", tag: "svcMediaTag", desc: "svcMediaDesc", image: "/images/services/media.jpg", href: "/services/media-production" },
    { title: "fsSocial", tag: "svcSocialTag", desc: "svcSocialDesc", image: "/images/services/social.jpg", href: "/services/social-media" },
    { title: "fsBranding", tag: "svcBrandingTag", desc: "svcBrandingDesc", image: "/images/services/branding.jpg", href: "/services/branding" },
    { title: "fsSeo", tag: "svcSeoTag", desc: "svcSeoDesc", image: "/images/services/seo.jpg", href: "/services/seo" },
    { title: "fsEcom", tag: "svcEcomTag", desc: "svcEcomDesc", image: "/images/services/ecommerce.jpg", href: "/services/ecommerce" },
];