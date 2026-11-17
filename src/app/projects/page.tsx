import ProjectCards from "@/component/project/ProjectCards";
import ProjectFeatured from "@/component/project/ProjectFeatured";
import ProjectHeading from "@/component/project/ProjectHeading";
import DotBackground from "@/component/shared/DotBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | NextByte IT",
};

const ProjectPage = () => (
    <DotBackground>
        <main>
            <ProjectHeading />
            <ProjectCards />
            <ProjectFeatured />
        </main>
    </DotBackground>
);

export default ProjectPage;
