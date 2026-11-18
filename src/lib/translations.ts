import { navbarEn, navbarBn } from "@/data/translations/navbar";
import { footerEn, footerBn } from "@/data/translations/footer";
import { heroBn, heroEn } from "@/data/translations/hero";
import { servicesBn, servicesEn } from "@/data/translations/services";
import { processBn, processEn } from "@/data/translations/process";
import { advantageBn, advantageEn } from "@/data/translations/advantage";
import { industriesBn, industriesEn } from "@/data/translations/industries";
import { projectsBn, projectsEn } from "@/data/translations/projects";
import { teamBn, teamEn } from "@/data/translations/team";
import { testimonialsBn, testimonialsEn } from "@/data/translations/testimonials";
import { faqBn, faqEn } from "@/data/translations/faq";
import { notFoundBn, notFoundEn } from "@/data/translations/notfound";
import { loadingEn, loadingBn } from "@/data/translations/loading";
import { projectBn, projectEn } from "@/data/translations/project";
import { contactBn, contactEn } from "@/data/translations/contact";
import { pricingBn, pricingEn } from "@/data/translations/pricing";
import { webDevBn, webDevEn } from "@/data/translations/webdev";

const en = {
    ...navbarEn,
    ...footerEn,
    ...heroEn,
    ...servicesEn,
    ...processEn,
    ...advantageEn,
    ...industriesEn,
    ...projectsEn,
    ...teamEn,
    ...testimonialsEn,
    ...faqEn,
    ...notFoundEn,
    ...loadingEn,
    ...projectEn,
    ...contactEn,
    ...pricingEn,
    ...webDevEn,
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
    ...teamBn,
    ...testimonialsBn,
    ...faqBn,
    ...notFoundBn,
    ...loadingBn,
    ...projectBn,
    ...contactBn,
    ...pricingBn,
    ...webDevBn,
};

export type Translations = typeof en;

export const translations = { en, bn };
