import type { Translations } from "@/lib/translations";

// High-quality Unsplash placeholders for hero imagery
export const heroImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
];

export const heroSlideInterval = 4000; // ms

// Reuses the footer service translations
export const heroServices: (keyof Translations)[] = [
    "fsSeo",
    "fsWeb",
    "fsBranding",
    "fsApp",
];
