"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { teamAll  } from "@/data/expertiesTeam";
// import TeamCard from "./TeamCard";
import SectionHeading from "./SectionHeading";
import TeamCard from "./TeamCard";

const TeamLeadership = () => {
    const { t } = useApp();

    return (
        <section id="team" className="scroll-mt-[76px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
            <div className="mx-auto max-w-[1440px]">
                <SectionHeading as="h1" tag={t.teamTag} title={t.teamTitle} desc={t.teamDesc} />

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {teamAll .map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.65, delay: (index % 3) * 0.15, ease: "easeOut" }}
                        >
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamLeadership;