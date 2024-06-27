import React from "react";
import Reveal from "./Reveal";
const MesProjets = () => {
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
    </section>
  );
};

export default MesProjets;
