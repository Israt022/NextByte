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
    index: number;
}

const FaqItem = ({ item, open, onToggle, index }: FaqItemProps) => {
    const { t, language } = useApp();
    const id = useId();

    const formattedIndex = (index + 1).toLocaleString(
        language === "bn" ? "bn-BD" : "en-US",
        { minimumIntegerDigits: 2 }
    );

    return (
        <div
            className={`border-b transition-colors duration-300 ${
                open ? "border-brand/60 bg-surface-secondary/40" : "border-border hover:border-brand/30"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-controls={id}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
            >
                <div className="flex items-center gap-4">
                    <span
                        className={`text-sm font-bold transition-colors ${
                            open ? "text-brand" : "text-text-secondary"
                        }`}
                    >
                        {formattedIndex}
                    </span>
                    <span
                        className={`text-base font-bold leading-snug transition-colors sm:text-lg ${
                            open ? "text-brand" : "text-text-primary"
                        }`}
                    >
                        {t[item.question]}
                    </span>
                </div>

                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                        open
                            ? "border-brand bg-brand text-brand-foreground rotate-180"
                            : "border-border bg-surface text-text-secondary"
                    }`}
                >
                    {open ? <FaMinus size={10} /> : <FaPlus size={10} />}
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="border-t border-border/40 px-5 pb-6 pt-4 text-xs leading-relaxed text-text-secondary sm:pl-14 sm:pr-8 sm:pb-7 sm:text-sm">
                            {t[item.answer]}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItem;
