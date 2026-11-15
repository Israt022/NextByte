import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export type TeamIcon = "crown" | "laptop" | "chart" | "bag";

export interface TeamMember {
    name: string;
    category: Key;
    role: Key;
    icon: TeamIcon;
    image: string;
    linkedin: string;
    x: string;
    badge: string;
    tint: string;
}

export const team: TeamMember[] = [
    {
        name: "Md Khairul Bashar",
        category: "teamCatExec",
        role: "teamRoleCeo",
        icon: "crown",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        x: "https://x.com",
        badge: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
        tint: "from-amber-500/10",
    },
    {
        name: "Md Junayed",
        category: "teamCatWeb",
        role: "teamRoleAi",
        icon: "laptop",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        x: "https://x.com",
        badge: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
        tint: "from-blue-500/10",
    },
    {
        name: "Md Mohibullah Islam Reza",
        category: "teamCatMarket",
        role: "teamRoleStrategy",
        icon: "chart",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        x: "https://x.com",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        tint: "from-emerald-500/10",
    },
    {
        name: "Md Asfier Rahman Marjan",
        category: "teamCatWix",
        role: "teamRoleWix",
        icon: "bag",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        x: "https://x.com",
        badge: "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400",
        tint: "from-rose-500/10",
    },
];
