"use client";

import { useApp } from "@/context/AppProviders";
import type { ProcessStepData } from "@/data/process";

interface ProcessStepProps {
    step: ProcessStepData;
    index: number;
    total: number;
}

const ProcessStep = ({ step, index, total }: ProcessStepProps) => {
    const { t, language } = useApp();
    const StepIcon = step.icon;

    const formattedNumber = (index + 1).toLocaleString(
        language === "bn" ? "bn-BD" : "en-US",
        { minimumIntegerDigits: 2 }
    );

    return (
        <div className="group relative flex flex-col items-start lg:items-center lg:text-center">
            {/* Horizontal Connector Line for Desktop */}
            {index < total - 1 && (
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-7 hidden h-0.5 w-full bg-border transition-colors duration-500 group-hover:bg-brand/60 lg:block"
                />
            )}

            {/* Step Icon & Number Badge */}
            <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:gap-3">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-border bg-surface text-brand shadow-sm transition-all duration-300 group-hover:border-brand group-hover:bg-brand/10 group-hover:scale-105">
                    <StepIcon size={20} />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-brand-foreground shadow">
                        {formattedNumber}
                    </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary group-hover:text-brand">
                    Step {formattedNumber}
                </span>
            </div>

            {/* Content Body */}
            <div className="mt-4 pl-18 lg:mt-5 lg:pl-0">
                <h3 className="text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-brand">
                    {t[step.title]}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                    {t[step.desc]}
                </p>
            </div>
        </div>
    );
};

export default ProcessStep;
