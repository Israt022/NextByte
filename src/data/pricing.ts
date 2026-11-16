import type { Translations } from "@/lib/translations";
import { contactInfo } from "./footer";

type Key = keyof Translations;

export interface PricingPackage {
    id: string;
    name: Key;
    desc: Key;
    price: number; // BDT
    features: Key[];
    popular?: boolean;
}

export interface SubCategory {
    id: string;
    title: Key;
    desc: Key;
    packages: PricingPackage[];
}

export interface MainService {
    id: string;
    title: Key; // reuses the footer service keys
    subs: SubCategory[];
}

// PLACEHOLDER PRICES (BDT) — replace with your real rates.
// Add more services / sub-categories / packages here and the selectors update automatically.
export const pricing: MainService[] = [
    {
        id: "web",
        title: "fsWeb",
        subs: [
            {
                id: "wp",
                title: "subWpTitle",
                desc: "subWpDesc",
                packages: [
                    { id: "wp-starter", name: "pkgWpStarter", desc: "pkgWpStarterDesc", price: 20000, features: ["featPages13", "featResponsive", "featContactWa", "featRevisions"] },
                    { id: "wp-business", name: "pkgWpBusiness", desc: "pkgWpBusinessDesc", price: 35000, popular: true, features: ["featPages57", "featPayment", "featSpeedSecurity", "featMaintenance1"] },
                    { id: "wp-premium", name: "pkgWpPremium", desc: "pkgWpPremiumDesc", price: 60000, features: ["featPages10", "featApi", "featMultiLang", "featSupport3"] },
                ],
            },
            {
                id: "next",
                title: "subNextTitle",
                desc: "subNextDesc",
                packages: [
                    { id: "next-launch", name: "pkgNextLaunch", desc: "pkgNextLaunchDesc", price: 80000, features: ["featNextLanding", "featResponsive", "featSeoTech", "featDeploy"] },
                    { id: "next-growth", name: "pkgNextGrowth", desc: "pkgNextGrowthDesc", price: 150000, popular: true, features: ["featDashboard", "featAuth", "featPayment", "featMaintenance1"] },
                    { id: "next-enterprise", name: "pkgNextEnterprise", desc: "pkgNextEnterpriseDesc", price: 250000, features: ["featSaas", "featApi", "featScaling", "featSupport3"] },
                ],
            },
        ],
    },
    {
        id: "branding",
        title: "fsBranding",
        subs: [
            {
                id: "identity",
                title: "subIdentityTitle",
                desc: "subIdentityDesc",
                packages: [
                    { id: "brand-essentials", name: "pkgBrandEssentials", desc: "pkgBrandEssentialsDesc", price: 8000, features: ["featLogo", "featPalette", "featFiles", "featRevisions"] },
                    { id: "brand-suite", name: "pkgBrandSuite", desc: "pkgBrandSuiteDesc", price: 18000, popular: true, features: ["featStationery", "featSocialKit", "featGuide", "featPalette"] },
                    { id: "brand-system", name: "pkgBrandSystem", desc: "pkgBrandSystemDesc", price: 35000, features: ["featPackaging", "featAdCreatives", "featBrandStrategy", "featGuide"] },
                ],
            },
        ],
    },
];

export const allPackages: PricingPackage[] = pricing.flatMap((m) =>
    m.subs.flatMap((s) => s.packages)
);

export const addons: { id: string; title: Key; price: number }[] = [
    { id: "payment", title: "addonPayment", price: 4000 },
    { id: "speed", title: "addonSpeed", price: 3000 },
    { id: "pages", title: "addonPages", price: 3000 },
    { id: "express", title: "addonExpress", price: 3000 },
];

/* ---------- Helpers ---------- */

// ৳ 20,000 in English, ৳ ২০,০০০ in Bangla
export const formatPrice = (amount: number, language: string) =>
    `৳ ${amount.toLocaleString(language === "bn" ? "bn-BD" : "en-US")}`;

// WhatsApp deep link with a prefilled message (uses the phone from data/footer.ts)
export const whatsappLink = (text: string) =>
    `https://wa.me/${contactInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;