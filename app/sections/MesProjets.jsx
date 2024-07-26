import React from "react";
import Image from "next/image";
import Link from "next/link";

const MesProjets = () => {
  const data = [
    {
      title: "Komin.io - Développement SaaS en alternance",
      short_title: "Komin.io",
      description:
        "Durant mon alternance, j'ai contribué au développement d'un SaaS en utilisant Ruby on Rails, Tailwind CSS et SCSS. J'ai dû m'adapter rapidement à cette stack technologique et j'ai participé à l'intégration de nouvelles interfaces pour améliorer l'expérience utilisateur de la plateforme.",
      short_description:
        "Développement SaaS avec Ruby on Rails et Tailwind CSS pendant mon alternance",
      image: "/komin.png",
      tags: [
        { title: "Ruby on Rails", style: "bg-red-800 text-red-300" },
        { title: "Tailwind CSS", style: "bg-blue-800 text-blue-300" },
        { title: "SCSS", style: "bg-purple-800 text-purple-300" },
      ],
      links: {
        externalLink: "https://www.komin.io/",
        github: "",
      },
      id: "komin_io",
    },
    {
      title: "Petits plats - Développement d'un algorithme de recherche",
      short_title: "Petits plats",
      description:
        "En utilisant du HTML avec TailwindCSS pour le front et du JavaScript Vanilla, j'ai intégré un site et développé un algorithme de recherche de recettes de cuisine",
      short_description: "Algorithme de recherche de recettes",
      image: "/petits_plats.png",
      tags: [
        { title: "JavaScript", style: "bg-yellow-800 text-yellow-100" },
        { title: "TailwindCSS", style: "bg-cyan-800 text-cyan-300" },
      ],
      links: {
        externalLink: "https://willfda.github.io/OC-petitplat/",
        github: "https://github.com/WillFDA/petits_plats",
      },
      id: "petits_plats",
    },
    {
      title: "Mon ancien Portfolio",
      short_title: "Ancien Portfolio",
      description:
        "Créé en utilisant NextJS, SCSS, Framer Motion et TypeScript, ce portfolio est mon ancien site web personnel. Il est responsive et a été un bon moyen de montrer mes compétences en développement web.",
      short_description: "Ancien portfolio avec NextJS et TypeScript",
      image: "/old_portfolio.png",
      tags: [
        { title: "NextJS", style: "bg-darkgray-200 text-white" },
        { title: "TailwindCSS", style: "bg-cyan-800 text-cyan-300" },
        { title: "Framer Motion", style: "bg-pink-800 text-ping-300" },
        { title: "TypeScript", style: "bg-cyan-800 text-cyan-300" },
      ],
      links: {
        externalLink: "https://willfda.github.io/old_portfolio/",
        github: "https://github.com/WillFDA/old_portfolio",
      },
      id: "old_portfolio",
    },
    {
      title: "Kasa App - Site d'Agence Immobilière",
      short_title: "Kasa App",
      description:
        "Grâce à React, SCSS, React Router j'ai créé ce site web pour une agence immobilière fictive lors de mon cursus OpenClassrooms",
      short_description:
        "Site web d'agence immobilière avec React et react router",
      image: "/kasa_app.png",
      tags: [
        { title: "React", style: "bg-blue-800 text-blue-300" },
        { title: "SCSS", style: "bg-purple-800 text-purple-300" },
        { title: "React Router", style: "bg-red-800 text-red-300" },
      ],
      links: {
        externalLink: "https://willfda.github.io/kasa_app/",
        github: "https://github.com/WillFDA/kasa_app",
      },
      id: "kasa_app",
    },
    {
      title: "Single Page design Portfolio",
      short_title: "Portfolio design",
      description:
        "Ce projet, créé avec Next.js et Tailwind CSS, est un défi de Front End Mentor que j'ai relevé par exemple en alignant précisément les blocs du Hero et en gérant un slider. Le site est responsive et fidèle au design Figma fourni.",
      short_description: "Portfolio design avec Next.js et Tailwind",
      image: "/single_page_portfolio.png",
      tags: [
        { title: "NextJS", style: "bg-darkgray-200 text-white" },
        { title: "TailwindCSS", style: "bg-cyan-800 text-cyan-300" },
        { title: "SwiperJS", style: "bg-yellow-800 text-yellow-100 " },
      ],
      links: {
        externalLink: "https://willfda.github.io/single_page_portfolio/",
        github: "https://github.com/WillFDA/single_page_portfolio",
      },
      id: "single_portfolio",
    },
  ];

  const largeCards = data.slice(0, 3);
  const smallCards = data.slice(3, 6);

  return (
    <section className="max-container px-4 md:px-8 xl:px-16 my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
        {largeCards.map((project) => (
          <Link
            key={project.id}
            href={project.links.externalLink}
            className="focus group cursor-pointer border border-gray-700 bg-darkgray-300 rounded-md overflow-hidden flex flex-col transform transition-transform ease-in-out duration-100 hover:border-gray-500 shadow-sm hover:-translate-y-1 focus:-translate-y-1"
          >
            <div className="w-full pb-[66%] bg-gray-100 relative border-b overflow-hidden">
              <Image
                src={project.image}
                fill={true}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                alt={`Image ${project.title}`}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="p-4 pb-0">
                <h3 className="font-bold text-lg hidden xl:block">
                  {project.title}
                </h3>
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
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-8">
        {smallCards.map((project) => (
          <Link
            key={project.id}
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
          </Link>
        ))}
        <div className="flex flex-col items-center justify-center text-center py-4">
          <h3 className="font-bold text-lg text-white">Envie de voir plus ?</h3>
          <p className="text-gray-500"> Explorez mon github</p>
          <Link
            href="https://github.com/WillFDA"
            className="mt-3 bg-white hover:bg-gray-200 text-darkgray-200 py-1 px-6 rounded-md"
          >
            Mon github
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MesProjets;
