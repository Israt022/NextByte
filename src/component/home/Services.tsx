"use client";

import { motion } from "framer-motion";
import { FaLayerGroup } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { services } from "@/data/services";
import ServiceCard from "./Servicecard";

const Services = () => {
    const { t } = useApp();

    const [featuredService, secondService, thirdService, ...otherServices] = services;

    return (
        <section
            id="services"
            className="theme-transition scroll-mt-[76px] bg-surface-secondary py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-primary">
                            <FaLayerGroup className="text-brand" size={12} />
                            {t.servicesTag}
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:leading-[1.15]">
                            {t.servicesTitle}
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
                        {t.servicesDesc}
                    </p>
                </motion.header>

                {/* Editorial Bento Grid */}
                <div className="mt-14 space-y-8">
                    {/* Primary Highlight Banner */}
                    {featuredService && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <ServiceCard service={featuredService} variant="featured" />
                        </motion.div>
                    )}

                    {/* Dual Cards Row */}
                    <div className="grid gap-8 sm:grid-cols-2">
                        {secondService && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            >
                                <ServiceCard service={secondService} />
                            </motion.div>
                        )}
                        {thirdService && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <ServiceCard service={thirdService} />
                            </motion.div>
                        )}
                    </div>

                    {/* Triplet Cards Row */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {otherServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >
                                <ServiceCard service={service} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
