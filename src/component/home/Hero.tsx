"use client";

import { useEffect, useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => setShow(true), 50);
        return () => clearTimeout(id);
    }, []);

    return (
        <section id="home" className="theme-transition relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
            {/* Subtle background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]"
            />

            <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <HeroLeft show={show} />
                    </div>
                    <div className="lg:col-span-5">
                        <HeroRight show={show} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
