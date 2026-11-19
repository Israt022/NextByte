import Faq from "@/component/home/Faq";
import Projects from "@/component/home/Projects";
import TeamAddons from "@/component/team/TeamAddons";
import TeamPackages from "@/component/team/TeamPackages";
import UiUxBackground from "@/component/services/ui-ux/UiUxBackground";
import UiUxHero from "@/component/services/ui-ux/UiUxHero";
import UiUxCapabilities from "@/component/services/ui-ux/UiUxCapabilities";
import UiUxTreeWorkflow from "@/component/services/ui-ux/UiUxTreeWorkflow";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UI/UX Design Services | NextByte IT",
    description: "Human-centered digital product design, scalable Figma design systems, and high-fidelity interactive prototypes.",
};

const UIUX = () => {
    return (
        <UiUxBackground>
            <main className="w-full">
                <UiUxHero />
                <UiUxCapabilities />
                <UiUxTreeWorkflow />
                <Projects />
                <TeamPackages />
                <TeamAddons />
                <Faq />
            </main>
        </UiUxBackground>
    );
};

export default UIUX;
