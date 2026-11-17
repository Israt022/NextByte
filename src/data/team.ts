import type { IconType } from "react-icons";
import {
    FaBullhorn,
    FaCartShopping,
    FaClock,
    FaCode,
    FaHandshake,
    FaLayerGroup,
    FaMagnifyingGlass,
    FaMobileScreenButton,
    FaPalette,
    FaPenNib,
    FaUsers,
    FaVideo,
} from "react-icons/fa6";
import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export type TeamIcon = "crown" | "laptop" | "chart" | "bag";

export interface TeamMember {
    name: string;
    category: Key;
    role: Key;
    bio: Key;
    icon: TeamIcon;
    image: string;
    linkedin: string;
    facebook?: string;
    x: string;
    badge: string;
    tint: string;
}

// 6 Full Team Members:
// Homepage uses the first 4 (team.slice(0, 4))
// Team page uses all 6
export const team: TeamMember[] = [
    {
        name: "Md Khairul Bashar",
        category: "teamCatExec",
        role: "teamRoleCeo",
        bio: "teamBioCeo",
        icon: "crown",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        x: "https://x.com",
        badge: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
        tint: "from-amber-500/10",
    },
    {
        name: "Md Junayed",
        category: "teamCatWeb",
        role: "teamRoleAi",
        bio: "teamBioTech",
        icon: "laptop",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        x: "https://x.com",
        badge: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
        tint: "from-blue-500/10",
    },
    {
        name: "Md Mohibullah Islam Reza",
        category: "teamCatMarket",
        role: "teamRoleStrategy",
        bio: "teamBioStrategy",
        icon: "chart",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        x: "https://x.com",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        tint: "from-emerald-500/10",
    },
    {
        name: "Md Asfier Rahman Marjan",
        category: "teamCatWix",
        role: "teamRoleWix",
        bio: "teamBioWix",
        icon: "bag",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        x: "https://x.com",
        badge: "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400",
        tint: "from-rose-500/10",
    },
    {
        name: "Tanvir Ahmed",
        category: "teamCatExecMember",
        role: "teamRoleOps",
        bio: "teamBioDesign",
        icon: "laptop",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        x: "https://x.com",
        badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
        tint: "from-cyan-500/10",
    },
    {
        name: "Sarah Rahman",
        category: "teamCatMarketing",
        role: "teamRoleMarketing",
        bio: "teamBioMarketing",
        icon: "chart",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        x: "https://x.com",
        badge: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
        tint: "from-purple-500/10",
    },
];

// /team page: digital capabilities
export interface Capability {
    title: Key;
    desc: Key;
    icon: IconType;
    href: string;
}

export const capabilities: Capability[] = [
    { title: "fsWeb", desc: "svcWebDesc", icon: FaCode, href: "/services/web-design" },
    { title: "fsMedia", desc: "svcMediaDesc", icon: FaVideo, href: "/services/media-production" },
    { title: "fsSocial", desc: "svcSocialDesc", icon: FaBullhorn, href: "/services/social-media" },
    { title: "fsBranding", desc: "svcBrandingDesc", icon: FaPenNib, href: "/services/branding" },
    { title: "fsSeo", desc: "svcSeoDesc", icon: FaMagnifyingGlass, href: "/services/seo" },
    { title: "fsEcom", desc: "svcEcomDesc", icon: FaCartShopping, href: "/services/ecommerce" },
    { title: "fsApp", desc: "capAppDesc", icon: FaMobileScreenButton, href: "/services/app-development" },
    { title: "fsUiux", desc: "capUiuxDesc", icon: FaPalette, href: "/services/ui-ux-design" },
];

// /team page: why us items
export const whyItems: { title: Key; desc: Key; icon: IconType }[] = [
    { title: "whySeniorTitle", desc: "whySeniorDesc", icon: FaUsers },
    { title: "whyStudioTitle", desc: "whyStudioDesc", icon: FaLayerGroup },
    { title: "whySpeedTitle", desc: "whySpeedDesc", icon: FaClock },
    { title: "whyPricingTitle", desc: "whyPricingDesc", icon: FaHandshake },
];
