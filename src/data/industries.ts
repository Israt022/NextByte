import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface IndustryData {
    title: Key;
    desc: Key;
    href: string;
}

// Point the hrefs at your real pages (or keep #contact to scroll to the contact section)
export const industries: IndustryData[] = [
    { title: "indEcomTitle", desc: "indEcomDesc", href: "#contact" },
    { title: "indSaasTitle", desc: "indSaasDesc", href: "#contact" },
    { title: "indRealEstateTitle", desc: "indRealEstateDesc", href: "#contact" },
    { title: "indEdtechTitle", desc: "indEdtechDesc", href: "#contact" },
];