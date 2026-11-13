"use client";

import { useApp } from "@/context/AppProviders";
import type { ProcessStepData } from "@/data/process";

const ProcessStep = ({ step, index }: { step: ProcessStepData; index: number }) => {
    const { t, language } = useApp();
    const StepIcon = step.icon;

    // 01, 02… in English and ০১, ০২… in Bangla
    const number = (index + 1).toLocaleString(language === "bn" ? "bn-BD" : "en-US", {
        minimumIntegerDigits: 2,
    });

    return (
        <article className="flex flex-col rounded-3xl border border-border bg-surface-secondary p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-brand">{number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-brand">
                    <StepIcon size={18} />
                </span>
            </div>

            <h3 className="mt-6 text-lg font-bold leading-snug text-text-primary">
                {t[step.title]}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {t[step.desc]}
            </p>
        </article>
    );
};

export default ProcessStep;