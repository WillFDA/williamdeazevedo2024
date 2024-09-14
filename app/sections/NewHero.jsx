import AnimationHeroH1 from "../../components/AnimationHeroH1";
import Logo from "../../components/Logo";
export default function NewHero() {
  return (
    <>
      <div className="w-full max-container md:px-0 px-4 my-8">
        <header
          style={{ backdropFilter: "blur(50px)" }}
          className="blurBackground sticky top-4 z-[100] mx-auto w-4/5 rounded-xl border-black/10 dark:border-white/10 max-md:top-0 max-md:w-full max-md:rounded-none max-md:border-b max-md:px-2 max-md:py-1 md:border"
        >
          <div className="container flex h-16 items-center justify-between space-x-4 px-4 sm:space-x-0">
            <Logo />
          </div>
        </header>
        <h1 className="">William De Azevedo</h1>
        <h1>Développeur Front end</h1>
        <p className="text-left mt-12 text-xl">
          Autodidacte de 25 ans, je suis passioné par le développement <br />{" "}
          web, le design et l'accessibilité depuis mes 16 ans
        </p>
      </div>
    </>
  );
}
