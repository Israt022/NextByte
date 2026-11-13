// const en = {
//     // Navigation
//     home: "Home",
//     services: "Services",
//     pricing: "Pricing",
//     projects: "Projects",
//     team: "Our Team",
//     contact: "Contact",

//     // Services dropdown
//     webDev: "Web Development",
//     appDev: "App Development",
//     uiux: "UI/UX Design",
//     itSupport: "IT Support & Networking",

//     // Pricing dropdown
//     websitePlans: "Website Packages",
//     appPlans: "App Packages",
//     maintenancePlans: "Maintenance Plans",

//     // Topbar
//     address: "Address, Bangladesh",
//     search: "Search",
//     quote: "Free Quote",
//     support: "Support",

//     // Controls
//     getStarted: "Get Started",
//     language: "Change language",
//     theme: "Change theme",
//     light: "Light",
//     dark: "Dark",
//     openMenu: "Open menu",
//     closeMenu: "Close menu",
// };

// export type Translations = typeof en;

// const bn: Translations = {
//     home: "হোম",
//     services: "সেবাসমূহ",
//     pricing: "প্রাইসিং",
//     projects: "প্রজেক্টস",
//     team: "আমাদের টিম",
//     contact: "যোগাযোগ",

//     webDev: "ওয়েব ডেভেলপমেন্ট",
//     appDev: "অ্যাপ ডেভেলপমেন্ট",
//     uiux: "ইউআই/ইউএক্স ডিজাইন",
//     itSupport: "আইটি সাপোর্ট ও নেটওয়ার্কিং",

//     websitePlans: "ওয়েবসাইট প্যাকেজ",
//     appPlans: "অ্যাপ প্যাকেজ",
//     maintenancePlans: "মেইনটেন্যান্স প্ল্যান",

//     address: "আপনার ঠিকানা, বাংলাদেশ",
//     search: "সার্চ",
//     quote: "ফ্রি কোটেশন",
//     support: "সাপোর্ট",

//     getStarted: "শুরু করুন",
//     language: "ভাষা পরিবর্তন",
//     theme: "থিম পরিবর্তন",
//     light: "লাইট",
//     dark: "ডার্ক",
//     openMenu: "মেনু খুলুন",
//     closeMenu: "মেনু বন্ধ করুন",
// };

// export const translations = { en, bn };
import { navbarEn, navbarBn } from "@/data/translations/navbar";
import { footerEn, footerBn } from "@/data/translations/footer";
import { heroBn, heroEn } from "@/data/translations/hero";
import { servicesBn, servicesEn } from "@/data/translations/services";
import { processBn, processEn } from "@/data/translations/process";
import { advantageBn, advantageEn } from "@/data/translations/advantage";
import { industriesBn, industriesEn } from "@/data/translations/industries";
import { projectsBn, projectsEn } from "@/data/translations/projects";

const en = {
    ...navbarEn,
    ...footerEn,
    ...heroEn,
    ...servicesEn,
    ...processEn,
    ...advantageEn,
    ...industriesEn,
    ...projectsEn,
};

const bn = {
    ...navbarBn,
    ...footerBn,
    ...heroBn,
    ...servicesBn,
    ...processBn,
    ...advantageBn,
    ...industriesBn,
    ...projectsBn,
};

export type Translations = typeof en;

export const translations = { en, bn };