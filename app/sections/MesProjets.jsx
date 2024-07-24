import React from "react";
import Reveal from "../../components/Reveal";
const MesProjets = () => {
  const data = [
    {
      title: "Kasa App - Site d'Agence Immobilière",
      description:
        "Grâce à React, SCSS, React Router j'ai crée ce site web pour una agence immobilière fictive lors de mon cursur openClassrooms",
      image: "/kasa_app.png",
      tags: ["React", "SCSS", "React Router"],
      links: {
        externalLink: "https://willfda.github.io/kasa_app/",
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
        externalLink: "https://willfda.github.io/petits_plats/",
        github: "https://github.com/WillFDA/petits_plats",
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
        externalLink: "https://willfda.github.io/single_page_portfolio/",
        github: "https://github.com/WillFDA/single_page_portfolio",
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
        externalLink: "https://willfda.github.io/old_portfolio/",
        github: "https://github.com/WillFDA/old_portfolio",
      },
      id: "old_portfolio",
    },
  ];
  return <></>;
};

export default MesProjets;
