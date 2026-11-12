"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { ServiceData } from "@/data/services";
// import type { ServiceData } from "@/data/services";

const ServiceCard = ({ service }: { service: ServiceData }) => {
    const { t } = useApp();

    return (
        <article className="group flex flex-col rounded-3xl border border-border bg-surface p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="relative aspect-[7/3] overflow-hidden rounded-2xl bg-surface-secondary">
                <Image
                    src={service.image}
                    alt={t[service.title]}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <span className="flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface-secondary px-3 py-1 text-[11px] font-semibold text-text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {t[service.tag]}
                </span>

                <h3 className="mt-4 text-xl font-bold text-text-primary transition-colors group-hover:text-brand">
                    {t[service.title]}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {t[service.desc]}
                </p>

                <Link
                    href={service.href}
                    className="mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-brand transition-all hover:gap-3"
                >
                    {t.learnMore} <FaArrowRight size={12} />
                </Link>
            </div>
        </article>
    );
};

export default ServiceCard;