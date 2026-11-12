"use client";

import { useEffect, useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
// import HomeLeft from "./HomeLeft";
// import HomeRight from "./HomeRight";

const Hero = () => {
    const [show, setShow] = useState(false);

    // Small delay so the hidden state paints first and the slide-in animates
    useEffect(() => {
        const id = setTimeout(() => setShow(true), 50);
        return () => clearTimeout(id);
    }, []);

    return (
        <section id="home" className="theme-transition relative overflow-hidden bg-surface">
            {/* Dotted pattern — uses currentColor so it works in both themes */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 text-text-secondary opacity-25 [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:32px_32px]"
            />

            <div className="relative mx-auto grid max-w-[1440px] items-center gap-20 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
                <HeroLeft show={show} />
                <HeroRight show={show} />
            </div>
        </section>
    );
};

export default Hero;