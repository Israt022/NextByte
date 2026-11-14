"use client";

import { motion } from "framer-motion";
import { FaHand } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
    const { t } = useApp();

    return (
        <section
            id="contact"
            className="scroll-mt-[76px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px]">
                <motion.header
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-4 py-2 text-xs font-bold uppercase tracking-widest text-text-primary">
                        <FaHand className="text-amber-400" />
                        {t.contactTag}
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold leading-[1.25] tracking-tight text-text-primary sm:text-6xl">
                        {t.contactTitle}
                    </h1>

                    <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                        {t.contactDesc}
                    </p>
                </motion.header>

                <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1fr_2fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <ContactInfo />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;