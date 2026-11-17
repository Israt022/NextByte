import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export type ProjectCategory = "web" | "app" | "branding" | "uiux" | "growth";
export type ProjectFilter = "all" | ProjectCategory;

export interface ProjectData {
    title: Key;
    desc: Key;
    alt: Key;
    image: string;
    href: string;
    categories: ProjectCategory[];
}

export const projectFilters: { id: ProjectFilter; label: Key }[] = [
    { id: "all", label: "projAll" },
    { id: "web", label: "projWeb" },
    { id: "branding", label: "projBranding" },
    { id: "uiux", label: "projUiux" },
    { id: "growth", label: "projGrowth" },
];

// Curated high-resolution Unsplash placeholders for IT and digital solutions
export const projects: ProjectData[] = [
    {
        title: "proj1Title",
        desc: "proj1Desc",
        alt: "projAlt1",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        href: "#contact",
        categories: ["web", "app"],
    },
    {
        title: "proj2Title",
        desc: "proj2Desc",
        alt: "projAlt2",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
        href: "#contact",
        categories: ["app", "uiux"],
    },
    {
        title: "proj3Title",
        desc: "proj3Desc",
        alt: "projAlt3",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
        href: "#contact",
        categories: ["branding", "uiux"],
    },
    {
        title: "proj4Title",
        desc: "proj4Desc",
        alt: "projAlt4",
        image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
        href: "#contact",
        categories: ["web", "growth"],
    },
    {
        title: "proj5Title",
        desc: "proj5Desc",
        alt: "projAlt5",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
        href: "#contact",
        categories: ["web", "uiux"],
    },
    {
        title: "proj6Title",
        desc: "proj6Desc",
        alt: "projAlt6",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        href: "#contact",
        categories: ["growth", "branding"],
    },
];

// Featured case study
export const featuredHref = "#contact";
export const featuredImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80";

export const featuredStats: { value: string; label: Key }[] = [
    { value: "+218%", label: "projStatTraffic" },
    { value: "3.2x", label: "projStatPipeline" },
    { value: "-42%", label: "projStatCac" },
];
