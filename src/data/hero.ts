import type { Translations } from "@/lib/translations";

// Put your 3 images in /public/images/ (or change the paths here)
export const heroImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
];

export const heroSlideInterval = 3000; // ms

// Reuses the footer service translations
export const heroServices: (keyof Translations)[] = [
    "fsSeo",
    "fsWeb",
    "fsBranding",
    "fsApp",
];