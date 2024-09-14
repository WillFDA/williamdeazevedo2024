import ButtonAnimated from "@/components/ui/button-animated";
import Logo from "../../components/logo";
import ToggleTheme from "@/components/toggle-theme";
import { ArrowDownToLine } from "lucide-react";
export default function Hero() {
  return (
    <>
      <div className="w-full max-container md:px-0 px-4 my-8">
        <header
          style={{ backdropFilter: "blur(50px)" }}
          className="blurBackground sticky top-4 z-[100] mx-auto w-4/5 rounded-xl border-black/10 dark:border-white/10 max-md:top-0 max-md:w-full max-md:rounded-none max-md:border-b max-md:px-2 max-md:py-1 md:border"
        >
          <div className="container flex h-16 items-center justify-between space-x-4 px-4 sm:space-x-0">
            <Logo />
            <ToggleTheme />
          </div>
        </header>
        <div className="my-10">
          <h1 className="text-center text-balance py-6 text-5xl font-medium leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-[#385ffd] to-[#ccd7ff] bg-clip-text text-transparent">
              William
            </span>{" "}
            De Azevedo <br /> Développeur{" "}
            <span className="bg-gradient-to-r from-[#385ffd] to-[#ccd7ff] bg-clip-text text-transparent">
              Front end
            </span>
          </h1>
          <p className="-translate-y-4 text-balance text-lg font-light text-center my-8 tracking-tight text-gray-400 md:text-xl">
            Autodidacte de 25 ans, je suis passioné par le développement <br />{" "}
            web, le design et l'accessibilité depuis mes 16 ans
          </p>
          <div className="mb-12 flex justify-center gap-4 max-md:mx-auto max-md:w-2/3 max-md:flex-col">
            <a href="" className="p-1">
              <ButtonAnimated>
                <ArrowDownToLine />
                Télécharger mon CV
              </ButtonAnimated>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
