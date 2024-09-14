import AnimatedCard from "./animated-card";

const SmallProjectCard = ({ project }) => (
  <AnimatedCard>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={project.links.externalLink}
      className="focus group border border-gray-700 bg-darkgray-300 rounded-md overflow-hidden flex-col transform transition-transform ease-in-out duration-100 hover:border-gray-500 hidden md:flex"
    >
      <div className="flex flex-1 flex-col justify-between">
        <div className="p-4 pb-0">
          <h3 className="font-bold text-lg">{project.short_title}</h3>
          <p className="text-sm mt-3 text-gray-400">
            {project.short_description}
          </p>
        </div>
        <div className="flex p-4 flex-wrap gap-2 text-sm">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={tag.title}
              className={`px-2 py-1 rounded ${
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

export default SmallProjectCard;
