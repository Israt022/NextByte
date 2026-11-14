import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { Translations } from "@/lib/translations";
import { socialLinks } from "./footer";

type Key = keyof Translations;

export interface FormField {
    name: string;
    label: Key;
    placeholder: Key;
    type: "text" | "email" | "tel";
    autoComplete: string;
    required: boolean;
}

export const formFields: FormField[] = [
    { name: "firstName", label: "contactFirstName", placeholder: "contactFirstPh", type: "text", autoComplete: "given-name", required: true },
    { name: "lastName", label: "contactLastName", placeholder: "contactLastPh", type: "text", autoComplete: "family-name", required: true },
    { name: "email", label: "contactEmailLabel", placeholder: "contactEmailPh", type: "email", autoComplete: "email", required: true },
    { name: "phone", label: "contactPhoneLabel", placeholder: "contactPhonePh", type: "tel", autoComplete: "tel", required: false },
];

// Reuses the footer service translations
export const serviceOptions: Key[] = [
    "fsWeb",
    "fsMedia",
    "fsSocial",
    "fsBranding",
    "fsSeo",
    "fsEcom",
    "fsApp",
    "fsUiux",
    "contactOther",
];

// Only 4 of the footer socials are shown here; hrefs come from data/footer.ts
const socialIcons: Record<string, IconType> = {
    facebook: FaFacebookF,
    linkedin: FaLinkedinIn,
    x: FaXTwitter,
    instagram: FaInstagram,
};

export const contactSocials = Object.keys(socialIcons).map((name) => ({
    name,
    icon: socialIcons[name],
    href: socialLinks.find((s) => s.name === name)?.href ?? "#",
}));