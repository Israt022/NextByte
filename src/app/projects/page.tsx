import ProjectCards from "@/component/project/ProjectCards";
import ProjectFeatured from "@/component/project/ProjectFeatured";
import ProjectHeading from "@/component/project/ProjectHeading";
import DotBackground from "@/component/shared/DotBackground";
import { div } from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | NetByte IT",
};

const ProjectPage = () => (
    <div>

    <DotBackground>
        <ProjectHeading />
        <ProjectCards />
    </DotBackground>
        <ProjectFeatured />
    </div>
);

export default ProjectPage;