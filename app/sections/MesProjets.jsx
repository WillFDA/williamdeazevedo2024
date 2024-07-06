import React from "react";
import Reveal from "../../components/Reveal";
import TitreProjets from "@/components/TitreProjets";
const MesProjets = () => {
  const data = [
    {
      title: "Kasa App - Site d'Agence Immobilière",
      description:
        "Grâce à React, SCSS, React Router j'ai crée ce site web pour una agence immobilière fictive lors de mon cursur openClassrooms",
      image: "/kasa_app.png",
      tags: ["React", "SCSS", "React Router"],
      links: {
        external: "https://willfda.github.io/kasa_app/",
        github: "https://github.com/WillFDA/kasa_app",
      },
      id: "kasa_app",
    },
    {
      title: "Petits plats - Développement d'un algorithne de recherche",
      description:
        "En utilisant du HTML avec TailwindCSS pour le front et du Javascript Vanilla , j'ai intégrer un site et développez un algorithme de recherche de recettes de cuisine",
      image: "/petits_plats.png",
      tags: ["JavaScript", "TailwindCSS"],
      links: {
        external: "https://willfda.github.io/kasa_app/",
        github: "https://github.com/WillFDA/kasa_app",
      },
      id: "petits_plats",
    },
    {
      title: "Single Page design Portfolio",
      description:
        "Ce projet, créé avec Next.js et Tailwind CSS. est un défi de Front End Mentor que j'ai relevé par exemple en alignant précisément les blocs du Hero et en gérant un slider. Le site est responsive et fidèle au design Figma fourni.",
      image: "/single_page_portfolio.png",
      tags: ["NextJS", "TailwindCSS", "SwiperJS"],
      links: {
        external: "https://willfda.github.io/kasa_app/",
        github: "https://github.com/WillFDA/kasa_app",
      },
      id: "single_portfolio",
    },
    {
      title: "Mon ancien Portfolio",
      description:
        "Crée en utilisant NextJS, SCSS, Framer Motion et TypeScript, ce portfolio est mon ancien site web personnel. Il est responsive et a été un bon moyen de montrer mes compétences en développement web.",
      image: "/old_portfolio.png",
      tags: ["NextJS", "TailwindCSS", "Framer-motion", "TypeScript"],
      links: {
        external: "https://willfda.github.io/kasa_app/",
        github: "https://github.com/WillFDA/kasa_app",
      },
      id: "old_portfolio",
    },
  ];
  return (
    <section className="max-container px-8 mt-36">
      <Reveal>
        <h2 className="text-4xl font-bold mb-4">Mes experiences et projets</h2>
      </Reveal>
      <Reveal>
        <p className="text-xl text-gray-400">
          Voici quelques projets sur lesquels j'ai travaillé, et mes experiences
        </p>
      </Reveal>
      <div className="flex w-full gap-20 items-start">
        <div className="w-full py-[50vh]">
          <ul>
            {data.map((project) => {
              return (
                <li key={project.id}>
                  <TitreProjets>{project.title}</TitreProjets>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full sticky top-0 h-screen flex items-center">
          <div className="w-full bg-gray-200 aspect-video"></div>
        </div>
      </div>
    </section>
  );
};

export default MesProjets;
