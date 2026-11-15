"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar, FaCircleCheck } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { TestimonialData } from "@/data/testimonials";

interface TestimonialCardProps {
    item: TestimonialData;
}

const TestimonialCard = ({ item }: TestimonialCardProps) => {
    const { t } = useApp();

    return (
        <div className="relative flex flex-col justify-between p-2 sm:p-4">
            {/* Top Bar: Stars + Category */}
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-1 text-amber-400" aria-label={`${item.rating} / 5`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} size={15} />
                    ))}
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {t[item.category]}
                </span>
            </div>

            {/* Quotation Mark */}
            <div className="mt-8 text-brand/30">
                <FaQuoteLeft size={36} />
            </div>

            {/* Quote Statement */}
            <blockquote className="mt-4 text-xl font-bold leading-relaxed text-text-primary sm:text-2xl sm:leading-relaxed lg:text-3xl lg:leading-relaxed">
                {t[item.quote]}
            </blockquote>

            {/* Client Signature */}
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand bg-surface-secondary">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-text-primary sm:text-lg">
                            {item.name}
                        </h4>
                        <FaCircleCheck className="text-emerald-500" size={14} title="Verified Client" />
                    </div>
                    <p className="text-xs text-text-secondary sm:text-sm">
                        {t[item.role]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
