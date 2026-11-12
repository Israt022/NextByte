"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBullhorn, FaRocket } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { heroImages, heroSlideInterval } from "@/data/hero";
// import { heroImages, heroSlideInterval } from "@/data/home";

const badge =
    "absolute flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2.5 text-xs font-bold uppercase tracking-wider shadow-lg";

const HeroRight = ({ show }: { show: boolean }) => {
    const { t } = useApp();
    const [active, setActive] = useState(0);

    // Change image every 3 seconds
    useEffect(() => {
        const id = setInterval(
            () => setActive((i) => (i + 1) % heroImages.length),
            heroSlideInterval
        );
        return () => clearInterval(id);
    }, []);

    return (
        <div
            className={`transition-all delay-150 duration-700 ease-out motion-reduce:transition-none ${
                show ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
        >
            {/* <div className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md"> */}
            <div className="relative ml-auto aspect-[4/5] w-full max-w-sm sm:max-w-md lg:mr-0">
                {/* Decorative shapes */}
                <div className="absolute -right-6 -top-6 h-24 w-24 rotate-12 rounded-3xl bg-brand/20" />
                <div className="absolute -right-10 bottom-1/4 h-14 w-14 rounded-full bg-text-secondary/30" />

                {/* Image slider (crossfade) */}
                <div className="relative h-full w-full rotate-1 overflow-hidden rounded-[2rem] border-4 border-surface bg-surface-secondary shadow-2xl">
                    {heroImages.map((src, i) => (
                        <Image
                            key={src}
                            src={src}
                            alt={t.heroImageAlt}
                            aria-hidden={i !== active}
                            fill
                            priority={i === 0}
                            sizes="(min-width: 1024px) 28rem, 90vw"
                            className={`object-cover transition-all duration-1000 ease-in-out motion-reduce:transition-none ${
                                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                            }`}
                        />
                    ))}
                </div>

                {/* Floating badges */}
                <div className={`${badge} -top-8 right-0 text-brand sm:-right-6`}>
                    <FaBullhorn size={16} /> {t.heroAdsRoi}
                </div>

                <div className={`${badge} -bottom-6 -left-2 normal-case tracking-normal sm:-left-8`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10">
                        <span className="h-3.5 w-3.5 rounded-full bg-brand" />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-sm text-text-primary">{t.heroCardTitle}</span>
                        <span className="text-xs font-normal text-text-secondary">{t.heroCardSub}</span>
                    </span>
                </div>

                <div className={`${badge} -bottom-14 right-0 text-purple-500 sm:-right-4`}>
                    <FaRocket size={14} /> {t.heroHighConversion}
                </div>
            </div>
        </div>
    );
};

export default HeroRight;