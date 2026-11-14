import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export type ProjectCategory = "web" | "branding" | "uiux" | "growth";
export type ProjectFilter = "all" | ProjectCategory;

export interface ProjectData {
    alt: Key; // image alt text (also used as the unique key)
    image: string;
    categories: ProjectCategory[];
}

export const projectFilters: { id: ProjectFilter; label: Key }[] = [
    { id: "all", label: "projAll" },
    { id: "web", label: "projWeb" },
    { id: "branding", label: "projBranding" },
    { id: "uiux", label: "projUiux" },
    { id: "growth", label: "projGrowth" },
];

// Put the images in /public/images/projects/.
// "All Work" shows every project; a category tab shows the projects listing that category.
export const projects: ProjectData[] = [
    { alt: "projAlt1", image: "/images/projects/project-1.jpg", categories: ["web", "uiux"] },
    { alt: "projAlt2", image: "/images/projects/project-2.jpg", categories: ["uiux"] },
    { alt: "projAlt3", image: "/images/projects/project-3.jpg", categories: ["web", "growth"] },
    { alt: "projAlt4", image: "/images/projects/project-4.jpg", categories: ["branding", "growth"] },
    { alt: "projAlt5", image: "/images/projects/project-5.jpg", categories: ["branding"] },
];

// Featured case study (placeholder numbers — replace with real results)
export const featuredHref = "/#contact";

export const featuredStats: { value: string; label: Key }[] = [
    { value: "+218%", label: "projStatTraffic" },
    { value: "3.2x", label: "projStatPipeline" },
    { value: "42%", label: "projStatCac" },
];