import Image from "next/image";
import CodeBlock from "./CodeBlock";

const AboutMe = () => {
  return (
    <section className="max-container px-8 mt-36">
      <h2 className="text-4xl font-bold mb-4">A propos de moi</h2>
      <p className="text-xl text-gray-400">
        Qui je suis, d'ou je viens et vers ou je vais !
      </p>
      <div className="flex justify-center mt-20 mb-36">
        <div className="flex flex-col w-full bg-darkgray-200 border border-darkgray-100 rounded-2xl">
          <div className="h-16 flex justify-center items-center border-b border-darkgray-100">
            <div className="bg-darkgray-300 w-96 h-6 flex justify-center items-center rounded border border-darkgray-100 relative">
              <span className="text-xs">william-portfolio-picture.dev</span>
              <Image
                src="/Arrows_Reload.svg"
                width={16}
                height={16}
                alt="Reload icon"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "8px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="h-[614px] flex">
            <div className="w-1/2 flex flex-col">
              <div className="h-96 flex flex-col">
                <div className="h-16 flex items-end gap-2">
                  <span className="py-2 px-4 bg-darkgray-300 rounded-t-lg leading-none ml-5 mb-0 cursor-pointer">
                    index.html
                  </span>
                  <span className="py-2 px-4 rounded-t-lg leading-none mb-0 hover:bg-darkgray-300/80 cursor-pointer">
                    script.js
                  </span>
                  <span className="py-2 px-4 rounded-t-lg leading-none mb-0 hover:bg-darkgray-300/80 cursor-pointer">
                    package.json
                  </span>
                </div>
                <div className="flex-1 w-full flex bg-darkgray-300 gap-2 p-2 pl-0">
                  <div className="w-9 h-full flex flex-col items-end text-gray-500">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                  </div>
                  <CodeBlock />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 p-2 pl-6">
                <ul className="flex gap-5 text-gray-600">
                  <li className="text-white">Terminal</li>
                  <li>Output</li>
                  <li>Debug Console</li>
                  <li>Problems</li>
                </ul>
                <div className="flex flex-col">
                  <span>Compiled in 160ms (1236 modules)</span>
                  <span>Compiled in 150ms (1236 modules)</span>
                  <span>Compiled in 134ms (1236 modules)</span>
                  <span>Compiled in 170ms (1236 modules)</span>
                  <span>Compiled in 165ms (1236 modules)</span>
                  <span>Compiled in 145ms (1236 modules)</span>
                  <span>Compiled in 160ms (1236 modules)</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col border-l border-darkgray-100">
              <div className="h-16 border-b border-darkgray-100 flex justify-center relative">
                <Image
                  src="/Logo.svg"
                  alt="Logo W for William"
                  width={33}
                  height={19}
                />
                <Image
                  src="/Hamburger_LG.svg"
                  alt="Hamburger icon"
                  width={24}
                  height={24}
                  style={{
                    position: "absolute",
                    left: "24px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              <div className="flex-1 bg-darkgray-300 flex justify-center items-center">
                <Image
                  src="/picture.png"
                  width={400}
                  height={400}
                  alt="Picture of myself"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto gap-8 mb-12">
        <h3 className="text-2xl font-normal mb-4 cursor-pointer">
          Mes Expériences
        </h3>
        <h3 className="text-2xl font-normal mb-4 text-gray-600 hover:text-white cursor-pointer">
          Mes Etudes
        </h3>
      </div>
      <ul className="h-12 flex rounded-full bg-darkgray-200 w-2/3 mx-auto p-1">
        <li className="flex-1 flex-shrink-0 rounded-full h-full flex justify-center items-center hover:text-white bg-[#0f1115]">
          2023
        </li>
        <li className="flex-1 flex-shrink-0 rounded-full h-full flex justify-center items-center text-darkgray-100 hover:text-white">
          2020
        </li>
        <li className="flex-1 flex-shrink-0 rounded-full h-full flex justify-center items-center text-darkgray-100 hover:text-white">
          2018
        </li>
        <li className="flex-1 flex-shrink-0 rounded-full h-full flex justify-center items-center text-darkgray-100 hover:text-white">
          2016
        </li>
      </ul>
      <div className="h-fit w-2/3 bg-darkgray-200 mt-8 p-4 rounded-2xl mx-auto flex flex-col ">
        <span className="text-lg text-white mb-4">Freelance</span>
        <p className=" text-md text-gray-400 leading-6">
          Réalisation de Maquettes: Conception et réalisation de maquettes pour
          divers projets, y compris des sites web et des matériaux imprimés, en
          utilisant des outils de design pour visualiser et affiner les concepts
          avant la production. <br /> <br /> Gestion de Projet: Gestion autonome
          de tous les aspects des projets, de l'initialisation à la livraison
          finale, tout en maintenant une communication constante avec les
          clients pour assurer leur satisfaction.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
