import { projectData } from "@/app/data/projectData";
import Logo from "@/components/Logo";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";
export default function Projet({ params }) {
  const project = projectData.find((p) => p.id === params.id);

  if (!project) return <div>Projet non trouvé</div>;

  return (
    <>
      <main className="max-container px-4 md:px-8 xl:px-16 my-24 gap-12 flex flex-col justify-center items-center ">
        <Link href="/">
          <Logo />
        </Link>
        <Reveal>
          <h1 className="text-2xl md:text-3xl font-bold sm:text-center text-white">
            {project.title}
          </h1>
        </Reveal>
        <Reveal>
          <Image
            src={project.image}
            alt={project.id}
            width={1920}
            height={1080}
            className="rounded-lg aspect-video object-cover"
          />
        </Reveal>
        <div class="flex gap-8 justify-between">
          <div class="flex flex-col gap-3 max-w-[60%]">
            <h2 className="text-xl font-semibold text-left">
              Description du projet
            </h2>
            <p class="text-gray-400">{project.description}</p>
          </div>
          <div class="flex gap-4 flex-1 flex-wrap gap-y-4">
            {project.tags.map((tag, index) => (
              <span
                key={tag.title}
                className={`px-3 py-1 h-fit rounded ${
                  index > 1 ? "sm:hidden lg:block" : ""
                } ${tag.style}`}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id,
  }));
}
