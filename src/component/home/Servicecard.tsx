"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { ServiceData } from "@/data/services";

interface ServiceCardProps {
    service: ServiceData;
    variant?: "featured" | "standard";
}

const ServiceCard = ({ service, variant = "standard" }: ServiceCardProps) => {
    const { t } = useApp();

    if (variant === "featured") {
        return (
            <article className="group theme-transition relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-brand/50 hover:shadow-xl lg:flex-row">
                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8 sm:p-10 lg:w-1/2">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-semibold text-text-primary">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            {t[service.tag]}
                        </span>

                        <h3 className="mt-5 text-2xl font-black text-text-primary transition-colors group-hover:text-brand sm:text-3xl">
                            {t[service.title]}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                            {t[service.desc]}
                        </p>
                    </div>

                    <div className="mt-8 pt-4">
                        <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 rounded-xl bg-text-primary px-6 py-3 text-sm font-bold text-surface transition-all hover:opacity-90 active:scale-[0.98]"
                        >
                            <span>{t.learnMore}</span>
                            <FaArrowRight size={12} className="text-brand" />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-secondary sm:aspect-[21/9] lg:aspect-auto lg:w-1/2">
                    <Image
                        src={service.image}
                        alt={t[service.title]}
                        fill
                        sizes="(min-width: 1024px) 50vw, 95vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </article>
        );
    }

    return (
        <article className="group theme-transition relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl sm:p-7">
            <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-secondary">
                    <Image
                        src={service.image}
                        alt={t[service.title]}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Tag */}
                <div className="mt-6 flex items-center justify-between">
                    <span className="rounded-full border border-border bg-surface-secondary px-3 py-1 text-xs font-medium text-text-secondary">
                        {t[service.tag]}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-text-primary transition-colors group-hover:text-brand">
                    {t[service.title]}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-relaxed text-text-secondary sm:text-sm">
                    {t[service.desc]}
                </p>
            </div>

            {/* Link */}
            <div className="mt-6 border-t border-border/80 pt-4">
                <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-text-primary transition-colors group-hover:text-brand"
                >
                    <span>{t.learnMore}</span>
                    <FaArrowRight size={11} className="text-brand transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    );
};

export default ServiceCard;
