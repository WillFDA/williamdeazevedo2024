import AnimatedPills from "../../components/AnimatedPills";
import IconsSlider from "../../components/IconsSlider";
import Reveal from "../../components/Reveal";
const Skills = () => {
  return (
    <section className="max-container px-4 sm:px-8 2xl:my-36 mt-20">
      <Reveal>
        <h2 className="md:text-4xl text-2xl font-bold mb-4">Mes compétences</h2>
      </Reveal>
      <Reveal>
        <p className="text-base md:text-xl text-gray-400">
          Technologies et logiciels que j’ai pu utiliser lors de mes stages et
          étude
        </p>
      </Reveal>
      <div className="lg:mt-36 mt-16 flex flex-col gap-8">
        <IconsSlider />
      </div>
      <div className="flex gap-8 justify-center mt-36 flex-wrap">
        <AnimatedPills />
      </div>
    </section>
  );
};

export default Skills;
