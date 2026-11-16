import DotBackground from "@/component/shared/DotBackground";
import TeamAddons from "@/component/team/TeamAddons";
import TeamCapabilities from "@/component/team/TeamCapabilities";
import TeamLeadership from "@/component/team/TeamLeadership";
import TeamPackages from "@/component/team/TeamPackages";
import TeamWhy from "@/component/team/TeamWhy";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Our Team | NetByte IT",
};

const TeamPage = () => (
    <DotBackground>
        <TeamLeadership />
        <TeamCapabilities />
        <TeamPackages />
        <TeamAddons />
        <TeamWhy />
    </DotBackground>
);

export default TeamPage;