import { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface ProjectData {
    title: Key;
    desc: Key;
    image: string;
    href: string;
}

// Put the images in /public/images/projects/ and point the hrefs at your real pages
export const projects: ProjectData[] = [
    { title: "prjAnalyticsTitle", desc: "prjAnalyticsDesc", image: "/images/projects/analytics.jpg", href: "/projects/analytics-dashboard" },
    { title: "prjEcomTitle", desc: "prjEcomDesc", image: "/images/projects/ecommerce.jpg", href: "/projects/ecommerce-platform" },
    { title: "prjSchoolTitle", desc: "prjSchoolDesc", image: "/images/projects/school.jpg", href: "/projects/school-management" },
];