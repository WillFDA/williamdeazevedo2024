import AboutMe from "@/app/sections/AboutMe";
import Footer from "@/app/sections/Footer";
import Hero from "@/app/sections/Hero";
import MesProjets from "@/app/sections/MesProjets";
import Skills from "@/app/sections/Skills";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Image
        alt="Background of hero filled with the W Logo"
        src="/HeroBackground.svg"
        width={2259}
        height={1395}
        style={{ position: "absolute", top: "0", zIndex: "-1" }}
      />
      <Hero />
      <MesProjets />
      <Skills />
      <AboutMe />
      <Footer />
    </>
  );
}
