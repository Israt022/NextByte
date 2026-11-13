"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { TestimonialData } from "@/data/testimonials";

// Only the content of the card. The card shell stays fixed in Testimonials.tsx
const TestimonialCard = ({ item }: { item: TestimonialData }) => {
    const { t } = useApp();

    return (
        <div>
            {/* Top row */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <FaQuoteLeft className="text-brand" size={26} />
                    <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-text-primary">
                        {t[item.category]}
                    </span>
                </div>

                <div className="flex gap-1 text-amber-400" aria-label={`${item.rating} / 5`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} size={16} />
                    ))}
                </div>
            </div>

            {/* Quote */}
            <p className="mt-7 min-h-[140px] text-lg font-medium leading-[1.8] text-text-primary sm:min-h-[120px] sm:text-xl lg:text-2xl lg:leading-[1.7]">
                {t[item.quote]}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4 border-t border-border pt-6 sm:pr-28">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-brand bg-surface-secondary">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary">{item.name}</h3>
                    <p className="text-sm text-text-secondary">{t[item.role]}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;