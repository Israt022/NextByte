import Faq from "@/component/home/Faq";
import Projects from "@/component/home/Projects";
import TeamAddons from "@/component/team/TeamAddons";
import TeamPackages from "@/component/team/TeamPackages";
import AppDevBackground from "@/component/services/app-development/AppDevBackground";
import AppDevHero from "@/component/services/app-development/AppDevHero";
import AppDevCapabilities from "@/component/services/app-development/AppDevCapabilities";
import AppDevTreeWorkflow from "@/component/services/app-development/AppDevTreeWorkflow";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mobile App Development Services | NextByte IT",
    description: "Enterprise native and cross-platform mobile application engineering using Flutter, React Native, Swift, and Kotlin.",
};

const AppDevsPage = () => {
    return (
        <AppDevBackground>
            <main className="w-full">
                <AppDevHero />
                <AppDevCapabilities />
                <AppDevTreeWorkflow />
                <Projects />
                <TeamPackages />
                <TeamAddons />
                <Faq />
            </main>
        </AppDevBackground>
    );
};

export default AppDevsPage;
