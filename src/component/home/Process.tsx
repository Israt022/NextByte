"use client";

import { useApp } from "@/context/AppProviders";
import { processSteps } from "@/data/process";
import ProcessStep from "./ProcessStep";

const Process = () => {
    const { t } = useApp();

    return (
        <section
            id="process"
            className="theme-transition scroll-mt-[76px] bg-surface py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <header className="mx-auto max-w-3xl text-center">
                    <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
                        {t.processTag}
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                        {t.processTitle}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                        {t.processDesc}
                    </p>
                </header>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {processSteps.map((step, index) => (
                        <ProcessStep key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;