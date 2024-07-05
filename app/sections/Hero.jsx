"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Logo from "../../components/Logo";

const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  const titleLines = [
    ["Salut, moi c'est"],
    ["William De Azevedo"],
    ["Développeur Front end"],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={targetRef}
      className="max-container h-screen"
    >
      <motion.div
        style={{
          scale: scale,
          x: "50%",
          y: "40%",
          position: position,
          filter: useTransform(blur, (value) => `blur(${value}px)`),
        }}
        className="fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 pb-12"
      >
        <Logo delay="0.2" />
        <motion.h1
          className="bold-90 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className={lineIndex === 1 ? "text-main-200" : ""}
            >
              {line[0].split(" ").map((word, wordIndex) => (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  variants={wordVariants}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h1>
        <p className="text-center mt-12 text-xl">
          Autodidacte de 25 ans, je suis passioné par le développement <br />{" "}
          web, le design et l'accessibilité depuis mes 16 ans
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
