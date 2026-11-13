import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface FaqData {
    question: Key;
    answer: Key;
}

export const faqs: FaqData[] = [
    { question: "faqQ1", answer: "faqA1" },
    { question: "faqQ2", answer: "faqA2" },
    { question: "faqQ3", answer: "faqA3" },
    { question: "faqQ4", answer: "faqA4" },
    { question: "faqQ5", answer: "faqA5" },
];