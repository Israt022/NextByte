"use client";

import { useApp } from "@/context/AppProviders";
import type { AdvantageData } from "@/data/advantage";

interface AdvantageCardProps {
    item: AdvantageData;
    index: number;
}

const AdvantageCard = ({ item, index }: AdvantageCardProps) => {
    const { t, language } = useApp();
    const ItemIcon = item.icon;

    const formattedIndex = (index + 1).toLocaleString(
        language === "bn" ? "bn-BD" : "en-US",
        { minimumIntegerDigits: 2 }
    );

    return (
        <article className="group theme-transition relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#B6FB44]/40 hover:bg-white/[0.07] sm:p-7">
            <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#B6FB44]/70 group-hover:text-[#B6FB44]">
                        {formattedIndex}
                    </span>
                    <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#B6FB44] transition-all group-hover:border-[#B6FB44]/30 group-hover:bg-[#B6FB44]/10"
                    >
                        <ItemIcon size={18} />
                    </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#B6FB44]">
                    {t[item.title]}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {t[item.desc]}
                </p>
            </div>
        </article>
    );
};

export default AdvantageCard;
