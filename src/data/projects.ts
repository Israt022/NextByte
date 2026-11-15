import { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface ProjectData {
    title: Key;
    desc: Key;
    image: string;
    href: string;
}

export const projects: ProjectData[] = [
    {
        title: "prjAnalyticsTitle",
        desc: "prjAnalyticsDesc",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        href: "/projects/analytics-dashboard"
    },
    {
        title: "prjEcomTitle",
        desc: "prjEcomDesc",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        href: "/projects/ecommerce-platform"
    },
    {
        title: "prjSchoolTitle",
        desc: "prjSchoolDesc",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
        href: "/projects/school-management"
    },
];
