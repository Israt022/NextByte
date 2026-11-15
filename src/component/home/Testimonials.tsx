"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaComments } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const AUTOPLAY_MS = 8000;

const variants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 30 : -30 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -30 : 30 }),
};

const Testimonials = () => {
    const { t } = useApp();
    const [[index, direction], setState] = useState<[number, number]>([0, 1]);
    const [paused, setPaused] = useState(false);

    const total = testimonials.length;

    const go = (dir: number) =>
        setState(([i]) => [(i + dir + total) % total, dir]);

    const goTo = (target: number) =>
        setState(([i]) => [target, target >= i ? 1 : -1]);

    useEffect(() => {
        if (paused) return;
        const id = setTimeout(() => go(1), AUTOPLAY_MS);
        return () => clearTimeout(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, paused]);

    return (
        <section
            id="testimonials"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* 2-Column Split Validation Studio */}
                <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Column: Client Summary & Selector (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                            <FaComments className="text-brand" size={12} />
                            {t.testimonialsTag}
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                            {t.testimonialsTitle}
                        </h2>

                        {/* Rating Card */}
                        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
                            <div className="text-3xl font-black text-brand">5.0</div>
                            <div className="border-l border-border pl-4">
                                <div className="text-sm font-bold text-text-primary">
                                    Client Satisfaction
                                </div>
                                <div className="text-xs text-text-secondary">
                                    Trusted by fast-growing brands
                                </div>
                            </div>
                        </div>

                        {/* Interactive Client Roster Selector */}
                        <div className="mt-6 hidden space-y-3 sm:block">
                            <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                                Client Stories:
                            </p>
                            {testimonials.map((item, i) => (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => goTo(i)}
                                    className={`group flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all ${
                                        i === index
                                            ? "border-brand bg-surface shadow-md"
                                            : "border-border bg-surface/60 hover:border-brand/40 hover:bg-surface"
                                    }`}
                                >
                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="40px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4
                                            className={`text-sm font-bold transition-colors ${
                                                i === index ? "text-brand" : "text-text-primary"
                                            }`}
                                        >
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-text-secondary line-clamp-1">
                                            {t[item.role]}
                                        </p>
                                    </div>
                                    <span
                                        className={`h-2.5 w-2.5 rounded-full transition-all ${
                                            i === index ? "bg-brand scale-125" : "bg-border"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="mt-8 flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => go(-1)}
                                aria-label={t.prevTestimonial}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-primary shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-brand-foreground active:scale-95"
                            >
                                <FaChevronLeft size={13} />
                            </button>
                            <button
                                type="button"
                                onClick={() => go(1)}
                                aria-label={t.nextTestimonial}
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-text-primary shadow-sm transition-all hover:border-brand hover:bg-brand hover:text-brand-foreground active:scale-95"
                            >
                                <FaChevronRight size={13} />
                            </button>
                            <span className="ml-2 text-xs font-semibold text-text-secondary">
                                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Column: Quote Viewport (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-10 lg:col-span-7 lg:p-12"
                    >
                        <AnimatePresence mode="wait" custom={direction} initial={false}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                            >
                                <TestimonialCard item={testimonials[index]} />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
