import Faq from "@/component/home/Faq"
import Projects from "@/component/home/Projects"
import TeamAddons from "@/component/team/TeamAddons"
import TeamPackages from "@/component/team/TeamPackages"
import TeamWhy from "@/component/team/TeamWhy"

const page = () => {
    return (
        <div>
            <Projects />
            <TeamPackages />
            <TeamAddons />
            <Faq />
        </div>
    )
}

export default page