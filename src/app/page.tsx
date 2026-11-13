import Advantage from "@/component/home/Advantage";
import Hero from "@/component/home/Hero";
import Process from "@/component/home/Process";
import Services from "@/component/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Process/>
      <Advantage/>
    </div>
  );
}
