import Advantage from "@/component/home/Advantage";
import Hero from "@/component/home/Hero";
import Industries from "@/component/home/Industries";
import Process from "@/component/home/Process";
import Projects from "@/component/home/Projects";
import Services from "@/component/home/Services";
import Team from "@/component/home/Team";
import Testimonials from "@/component/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Process/>
      <Advantage/>
      <Industries />
      <Projects />
      <Team />
      <Testimonials />
    </div>
  );
}
