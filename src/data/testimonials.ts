import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface TestimonialData {
    name: string;
    role: Key;
    category: Key;
    quote: Key;
    image: string;
    rating: number;
}

// Put the avatars in /public/images/testimonials/ and replace the sample names with real clients
export const testimonials: TestimonialData[] = [
    {
        name: "David Mitchell",
        role: "tstRole1",
        category: "tstCatMedia",
        quote: "tstQuote1",
        image: "/images/testimonials/david.jpg",
        rating: 5,
    },
    {
        name: "Sarah Rahman",
        role: "tstRole2",
        category: "tstCatWeb",
        quote: "tstQuote2",
        image: "/images/testimonials/sarah.jpg",
        rating: 5,
    },
    {
        name: "Tanvir Ahmed",
        role: "tstRole3",
        category: "tstCatEcom",
        quote: "tstQuote3",
        image: "/images/testimonials/tanvir.jpg",
        rating: 5,
    },
];