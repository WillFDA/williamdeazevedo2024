import ButtonAnimated from "@/components/ui/button-animated";
export default function Hero() {
  return (
    <>
      <div className="w-full max-container md:px-0 px-4 my-16">
        <h1 className="text-center -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms] text-balance py-6 text-5xl font-medium leading-none tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
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
        <ButtonAnimated />
      </div>
    </>
  );
}
