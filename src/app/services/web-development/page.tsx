import Faq from "@/component/home/Faq";
import Projects from "@/component/home/Projects";
import TeamAddons from "@/component/team/TeamAddons";
import TeamPackages from "@/component/team/TeamPackages";
import WebDevBackground from "@/component/services/web-development/WebDevBackground";
import WebDevHero from "@/component/services/web-development/WebDevHero";
import WebDevCapabilities from "@/component/services/web-development/WebDevCapabilities";
import WebDevTreeWorkflow from "@/component/services/web-development/WebDevTreeWorkflow";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development Services | NextByte IT",
    description: "Enterprise-grade web application engineering, modern headless platforms, and high-performance digital solutions.",
};

const WebDevelopmentPage = () => {
    return (
        <WebDevBackground>
            <main>
                <WebDevHero />
                <WebDevCapabilities />
                <WebDevTreeWorkflow />
                <Projects />
                <TeamPackages />
                <TeamAddons />
                <Faq />
            </main>
        </WebDevBackground>
    );
};

export default WebDevelopmentPage;
