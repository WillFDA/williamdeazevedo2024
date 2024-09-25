import Hero from "@/app/sections/hero";
import MesProjets from "@/app/sections/mes-projets";
import Skills from "@/app/sections/skills";
import Footer from "@/app/sections/footer";
import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Image
        className="hidden dark:block"
        alt="Background of hero filled with the W Logo"
        src="/HeroBackgroundDark.svg"
        width={2259}
        height={1395}
        style={{ position: "absolute", top: "0", zIndex: "-1" }}
      />
      <Image
        className="block dark:hidden "
        alt="Background of hero filled with the W Logo"
        src="/HeroBackgroundWhite.svg"
        width={2259}
        height={1395}
        style={{ position: "absolute", top: "0", zIndex: "-1" }}
      />
      <Header />
      <Hero />
      <Skills />
      <MesProjets />
      <Footer />
    </>
  );
}
