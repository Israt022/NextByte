"use client";

import { useApp } from "@/context/AppProviders";
import { services } from "@/data/services";
import ServiceCard from "./Servicecard";
import { motion } from "framer-motion";

const Services = () => {
    const { t } = useApp();

    return (
        <section
            id="services"
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
                    <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-text-primary">
                        {t.servicesTag}
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold leading-[1.3] tracking-tight text-text-primary sm:text-5xl">
                        {t.servicesTitle}
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                        {t.servicesDesc}
                    </p>
                </motion.header>

                {/* Service Cards */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;