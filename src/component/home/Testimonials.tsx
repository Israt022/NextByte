"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const AUTOPLAY_MS = 7000;

// Content moves up and fades out, the next one comes in from below (reversed for "prev")
const variants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -40 : 40 }),
};

const navBtn =
    "theme-transition flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-secondary text-text-primary hover:bg-brand hover:text-brand-foreground";

const Testimonials = () => {
    const { t } = useApp();
    const [[index, direction], setState] = useState<[number, number]>([0, 1]);
    const [paused, setPaused] = useState(false);

    const total = testimonials.length;

    const go = (dir: number) =>
        setState(([i]) => [(i + dir + total) % total, dir]);

    const goTo = (target: number) =>
        setState(([i]) => [target, target >= i ? 1 : -1]);

    // Autoplay (pauses on hover, restarts after every change)
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
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-block rounded-full border border-border bg-surface px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
                        {t.testimonialsTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                        {t.testimonialsTitle}
                    </h2>
                </motion.header>

                {/* Fixed card, only the content changes */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-10 lg:p-14"
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand/10 via-transparent to-transparent"
                    />

                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction} initial={false}>
                            <motion.div
                                key={index}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                aria-live="polite"
                            >
                                <TestimonialCard item={testimonials[index]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Arrows */}
                    <div className="relative mt-6 flex justify-end gap-3 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0 lg:bottom-14 lg:right-14">
                        <button type="button" onClick={() => go(-1)} aria-label={t.prevTestimonial} className={navBtn}>
                            <FaChevronLeft size={14} />
                        </button>
                        <button type="button" onClick={() => go(1)} aria-label={t.nextTestimonial} className={navBtn}>
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </motion.div>

                {/* Dots */}
                <div className="mt-8 flex items-center justify-center gap-3">
                    {testimonials.map((item, i) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`${t.goToTestimonial} ${i + 1}`}
                            aria-current={i === index}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                i === index ? "w-12 bg-brand" : "w-2.5 bg-border hover:bg-text-secondary"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;