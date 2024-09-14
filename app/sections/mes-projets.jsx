import { projectData as data } from "../data/projectData";
import ProjectCard from "../../components/project-card";
import SmallProjectCard from "../../components/small-project-card";
import AnimatedCard from "../../components/animated-card";

const MesProjets = () => {
  const largeCards = data.slice(0, 3);
  const smallCards = data.slice(3, 5);

  return (
    <section className="max-container px-4 md:px-8 xl:px-16 my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
        {largeCards.map((project, index) => (
          <AnimatedCard key={project.id} index={index}>
            <ProjectCard project={project} />
          </AnimatedCard>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-8">
        {smallCards.map((project, index) => (
          <AnimatedCard key={project.id} index={index + 2}>
            <SmallProjectCard project={project} />
          </AnimatedCard>
        ))}
        <AnimatedCard index={5}>
          <div className="flex flex-col items-center justify-center text-center py-4">
            <h3 className="font-bold text-lg text-white">
              Envie de voir plus ?
            </h3>
            <p className="text-gray-500"> Explorez mon github</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/WillFDA"
              className="mt-3 bg-white hover:bg-gray-200 text-darkgray-200 py-1 px-6 rounded-md"
            >
              Mon github
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default MesProjets;
