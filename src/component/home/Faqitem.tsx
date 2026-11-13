"use client";

import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import type { FaqData } from "@/data/faq";

interface FaqItemProps {
    item: FaqData;
    open: boolean;
    onToggle: () => void;
}

const FaqItem = ({ item, open, onToggle }: FaqItemProps) => {
    const { t } = useApp();
    const id = useId();

    return (
        <div
            className={`theme-transition overflow-hidden rounded-2xl border transition-colors duration-300 ${
                open
                    ? "border-brand bg-surface-secondary"
                    : "border-border bg-surface hover:border-text-secondary/40"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-7"
            >
                <span className="text-base font-bold leading-snug text-text-primary sm:text-lg">
                    {t[item.question]}
                </span>

                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        open
                            ? "bg-brand text-brand-foreground"
                            : "bg-surface-secondary text-text-primary"
                    }`}
                >
                    {open ? <FaMinus size={11} /> : <FaPlus size={11} />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={id}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="border-t border-border px-5 pb-6 pt-5 text-[15px] leading-relaxed text-text-secondary sm:px-7 sm:pb-7">
                            {t[item.answer]}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItem;