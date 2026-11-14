
import ProjectCards from "@/component/project/ProjectCards";
import ProjectFeatured from "@/component/project/ProjectFeatured";
import ProjectHeading from "@/component/project/ProjectHeading";
import DotBackground from "@/component/shared/DotBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | NetByte IT",
};

const ProjectPage = () => (
    <main>
        <DotBackground>
            <ProjectHeading />
        </DotBackground>
            <ProjectCards />

        <ProjectFeatured />
    </main>
);

export default ProjectPage;
