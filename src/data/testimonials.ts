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

export const testimonials: TestimonialData[] = [
    {
        name: "David Mitchell",
        role: "tstRole1",
        category: "tstCatMedia",
        quote: "tstQuote1",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        rating: 5,
    },
    {
        name: "Sarah Rahman",
        role: "tstRole2",
        category: "tstCatWeb",
        quote: "tstQuote2",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        rating: 5,
    },
    {
        name: "Tanvir Ahmed",
        role: "tstRole3",
        category: "tstCatEcom",
        quote: "tstQuote3",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        rating: 5,
    },
];
