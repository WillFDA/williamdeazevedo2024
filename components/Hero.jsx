import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container px-8 mb-36">
      <h1 className="bold-90 text-center">
        Salut, moi c'est
        <span className="text-main-200">
          <br /> William De Azevedo <br />
        </span>
        Développeur Front end
      </h1>
      <p className="text-center mt-12 text-xl">
        Autodidacte de 25 ans, je suis passioné par le développement <br /> web,
        le design et l'accessibilité depuis mes 16 ans
      </p>
      <div className="flex justify-center gap-12 mt-16">
        <button className="bg-white/5 hover:bg-white/10 backdrop-blur button">
          Me contacter
        </button>
        <button className="button bg-main-200 hover:bg-main-100">
          Voir mon CV
        </button>
      </div>
      <div className="flex justify-center mt-16">
        <button className="cursor-pointer">
          <Image src="/circle_arrow_down.svg" width={32} height={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
