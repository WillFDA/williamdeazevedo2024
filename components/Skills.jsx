import IconsSlider from "./IconsSlider";

const Skills = () => {
  return (
    <section className="max-container px-8 mb-36">
      <h2 className="text-4xl font-bold mb-4">Mes compétences</h2>
      <p className="text-xl text-gray-400">
        Technologies et logiciels que j’ai pu utiliser lors de mes stages et
        étude
      </p>
      <div className="mt-36 flex flex-col gap-8">
        <IconsSlider />
      </div>
      <div className="flex gap-8 justify-center mt-36 flex-wrap">
        <div className="pill bg-black/20 border-white/60">NextJS</div>
        <div className="pill bg-orange-600/5 border-orange-600/60">HTML</div>
        <div className="pill bg-green-600/5 border-green-600/60">CSS</div>
        <div className="pill bg-blue-600/5 border-blue-600/70">TailwindCSS</div>
        <div className="pill bg-cyan-600/5 border-cyan-600/60">React</div>
        <div className="pill bg-purple-600/5 border-white/60">Redux</div>
        <div className="pill bg-yellow-600/5 border-yellow-600/60">
          Javascript
        </div>
        <div className="pill bg-teal-600/5 border-teal-600/60">Typescript</div>
        <div className="pill bg-white/5 border-white/60">Figma</div>
      </div>
    </section>
  );
};

export default Skills;
