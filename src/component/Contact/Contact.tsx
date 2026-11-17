"use client";

import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa6";
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
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                        <FaComments className="text-brand" size={12} />
                        {t.contactTag}
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                        {t.contactTitle}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
                        {t.contactDesc}
                    </p>
                </motion.header>

                {/* 2-Column Split: Info (5 cols) & Form (7 cols) */}
                <div className="mt-14 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <ContactInfo />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
