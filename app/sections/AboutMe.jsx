"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import CodeBlock from "../../components/CodeBlock";
import Reveal from "../../components/Reveal";

const AboutMe = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const imageBlur = useTransform(scrollYProgress, [0, 0.3], [0, 10]);
  const textY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  return (
    <section ref={targetRef} className="max-container mt-[-20vh]">
      <div className="h-[300vh] w-full">
        <div className="sticky top-[10vh] overflow-hidden px-8">
          <Reveal>
            <h2 className="text-4xl font-bold mb-4">A propos de moi</h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-400">
              Qui je suis, d'ou je viens et vers ou je vais !
            </p>
          </Reveal>
          <div className="flex justify-center mt-20 mb-36">
            <div className="flex flex-col w-full bg-darkgray-200 shadow-lg border border-darkgray-100 rounded-2xl">
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
                <div className="w-1/2 lg:flex flex-col hidden">
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
                <div className="lg:w-1/2 w-full flex flex-col border-l border-darkgray-100">
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
                  <div className="flex-1 flex justify-center items-center relative overflow-hidden">
                    <motion.div
                      style={{
                        y: imageY,
                        filter: useTransform(
                          imageBlur,
                          (value) => `blur(${value}px)`
                        ),
                        opacity: opacity,
                      }}
                      className="absolute inset-0 flex justify-center items-center"
                    >
                      <Image
                        src="/picture.png"
                        width={400}
                        height={400}
                        alt="Picture of myself"
                      />
                    </motion.div>
                    <motion.div
                      style={{ y: textY, opacity: textOpacity }}
                      className="absolute inset-0 flex flex-col justify-start items-center text-left px-8 space-y-4 overflow-y-auto"
                    >
                      <h3 className="text-2xl font-bold mb-2">Mon histoire</h3>

                      <div className="space-y-4">
                        <p className="text-lg">
                          Passionné par l'informatique et la créativité visuelle
                          depuis mon jeune âge, j'ai commencé à explorer
                          l'univers de l'infographie à seulement 11 ans.
                        </p>

                        <p className="text-lg">Mon voyage a débuté par :</p>
                        <ul className="list-disc list-inside ml-4 mt-2">
                          <li>La modélisation 3D</li>
                          <li>Le montage vidéo</li>
                          <li>
                            Le traitement d'image pour créer des affiches et
                            d'autres matériaux graphiques
                          </li>
                        </ul>

                        <p className="text-lg">
                          J'ai ensuite approfondi mes connaissances en
                          poursuivant des études universitaires en impression et
                          plurimédia.
                        </p>

                        <p className="text-lg">
                          Toujours intrigué par le potentiel de l'informatique,
                          j'ai décidé en 2022 de m'orienter vers le
                          développement web, en commençant une formation
                          d'intégrateur web.
                        </p>

                        <p className="text-lg font-semibold">
                          Aujourd'hui, je suis fier d'être diplômé, avec
                          plusieurs mois d'expérience dans le domaine, prêt à
                          apporter ma passion et mes compétences à de nouveaux
                          défis et projets.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
