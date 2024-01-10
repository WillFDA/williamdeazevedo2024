import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
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
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
    </>
  );
}
