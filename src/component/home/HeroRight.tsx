"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBullhorn, FaRocket, FaStar } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { heroImages, heroSlideInterval } from "@/data/hero";

const HeroRight = ({ show }: { show: boolean }) => {
    const { t } = useApp();
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setActive((i) => (i + 1) % heroImages.length),
            heroSlideInterval
        );
        return () => clearInterval(id);
    }, []);

    return (
        <div
            className={`relative transition-all delay-150 duration-700 ease-out motion-reduce:transition-none ${
                show ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
        >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                {/* Decorative background shape */}
                <div
                    aria-hidden="true"
                    className="absolute -right-4 -top-4 -bottom-4 -left-4 rounded-[2.5rem] bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent blur-xl"
                />

                {/* Main Large Visual Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-2 border-border bg-surface-secondary shadow-2xl sm:aspect-[1/1] lg:aspect-[4/5]">
                    {heroImages.map((src, i) => (
                        <Image
                            key={src}
                            src={src}
                            alt={t.heroImageAlt}
                            aria-hidden={i !== active}
                            fill
                            priority={i === 0}
                            sizes="(min-width: 1024px) 45vw, 90vw"
                            className={`object-cover transition-all duration-1000 ease-in-out motion-reduce:transition-none ${
                                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                            }`}
                        />
                    ))}

                    {/* Gradient Overlay at bottom for contrast */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Slide Dots Indicator */}
                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {heroImages.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setActive(i)}
                                aria-label={`View hero slide ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    i === active ? "w-8 bg-brand" : "w-2 bg-white/60 hover:bg-white"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating Badge 1: High Conversion ROI (Top Right) */}
                <div className="absolute -right-2 -top-5 flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6 sm:top-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <FaRocket size={16} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-text-primary">
                            {t.heroHighConversion}
                        </p>
                        <p className="text-[11px] text-text-secondary">
                            {t.heroAdsRoi}
                        </p>
                    </div>
                </div>

                {/* Floating Badge 2: Trusted Growth Partner (Bottom Left) */}
                <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 shadow-xl backdrop-blur-md sm:-bottom-8 sm:-left-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <FaStar size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-extrabold text-text-primary">
                            {t.heroCardTitle}
                        </p>
                        <p className="text-xs text-text-secondary">
                            {t.heroCardSub}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRight;
