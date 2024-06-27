import AnimatedPills from "./AnimatedPills";
import IconsSlider from "./IconsSlider";
import Reveal from "./Reveal";
const Skills = () => {
  return (
    <section className="max-container px-8 mb-36">
      <Reveal>
        <h2 className="text-4xl font-bold mb-4">Mes compétences</h2>
      </Reveal>
      <Reveal>
        <p className="text-xl text-gray-400">
          Technologies et logiciels que j’ai pu utiliser lors de mes stages et
          étude
        </p>
      </Reveal>
      <div className="mt-36 flex flex-col gap-8">
        <IconsSlider />
      </div>
      <div className="flex gap-8 justify-center mt-36 flex-wrap">
        <AnimatedPills />
      </div>
    </section>
  );
};

export default Skills;
