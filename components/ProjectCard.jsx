import Image from "next/image";
import AnimatedCard from "./AnimatedCard";

const ProjectCard = ({ project }) => (
  <AnimatedCard>
    <a
      href={project.links.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="focus group cursor-pointer border border-gray-700 bg-darkgray-300 rounded-md overflow-hidden flex flex-col transform transition-transform ease-in-out duration-100 hover:border-gray-500 shadow-sm hover:-translate-y-1 focus:-translate-y-1"
    >
      <div className="w-full pb-[66%] bg-gray-100 relative border-b overflow-hidden">
        <Image
          src={project.image}
          fill={true}
          style={{ objectFit: "cover" }}
          alt={`Image ${project.title}`}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="p-4 pb-0">
          <h3 className="font-bold text-lg hidden xl:block">{project.title}</h3>
          <h3 className="font-bold text-lg md:block xl:hidden">
            {project.short_title}
          </h3>
          <p className="text-sm mt-3 text-gray-400 hidden xl:block">
            {project.description}
          </p>
          <p className="text-sm mt-3 text-gray-400 md:block xl:hidden">
            {project.short_description}
          </p>
        </div>
        <div className="flex p-4 flex-wrap gap-4 text-sm">
          {project.tags.map((tag, index) => (
            <span
              key={tag.title}
              className={`px-3 py-1 rounded ${
                index > 1 ? "sm:hidden lg:block" : ""
              } ${tag.style}`}
            >
              {tag.title}
            </span>
          ))}
        </div>
      </div>
    </a>
  </AnimatedCard>
);

export default ProjectCard;
