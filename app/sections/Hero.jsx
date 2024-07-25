"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Logo from "../../components/Logo";
import AnimationHeroH1 from "../../components/AnimationHeroH1";
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
  return (
    <motion.section
      style={{ opacity: opacity }}
      ref={targetRef}
      className="max-container md:px-0 px-4 h-screen"
    >
      <motion.div
        style={{
          scale: scale,
          x: "50%",
          y: "40%",
          position: position,
          filter: useTransform(blur, (value) => `blur(${value}px)`),
        }}
        className="fixed bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 pb-12 w-full"
      >
        <Logo delay="0.2" />
        <AnimationHeroH1
          text="Salut, moi c'est "
          delay={0.15}
          startDelay={0.2}
          nameclass="text-white mt-4"
        />
        <AnimationHeroH1
          text="William De Azevedo"
          delay={0.15}
          startDelay={0.3}
          nameclass="text-main-200"
        />
        <AnimationHeroH1
          text="Développeur Front end"
          delay={0.15}
          startDelay={0.5}
          nameclass="text-white"
        />
        <p className="text-center mt-12 text-xl">
          Autodidacte de 25 ans, je suis passioné par le développement <br />{" "}
          web, le design et l'accessibilité depuis mes 16 ans
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
