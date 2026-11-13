"use client";

import { useApp } from "@/context/AppProviders";
import type { AdvantageData } from "@/data/advantage";

const AdvantageCard = ({ item }: { item: AdvantageData }) => {
    const { t } = useApp();
    const ItemIcon = item.icon;

    return (
        <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B6FB44]/30 hover:bg-white/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <span
                className={`flex h-14 w-14 items-center justify-center rounded-xl bg-[#B6FB44]/10 text-[#B6FB44] ${item.iconColor}`}
            >
                <ItemIcon size={22} />
            </span>

            <h3 className="mt-6 text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#B6FB44]">
                {t[item.title]}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {t[item.desc]}
            </p>
        </article>
    );
};

export default AdvantageCard;