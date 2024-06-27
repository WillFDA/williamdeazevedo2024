"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const AnimatedPills = () => {
  // Ref pour observer l'élément
  const ref = useRef(null);
  const isInView = useInView(ref);
  // Pills data et classes
  const pills = [
    { name: "NextJS", class: "bg-orange-600/5 border-orange-600/60" },
    { name: "HTML", class: "bg-orange-600/5 border-orange-600/60" },
    { name: "CSS", class: "bg-green-600/5 border-green-600/60" },
    { name: "TailwindCSS", class: "bg-blue-600/5 border-blue-600/70" },
    { name: "React", class: "bg-cyan-600/5 border-cyan-600/60" },
    { name: "Redux", class: "bg-purple-600/5 border-white/60" },
    { name: "Javascript", class: "bg-yellow-600/5 border-yellow-600/60" },
    { name: "Typescript", class: "bg-teal-600/5 border-teal-600/60" },
    { name: "Figma", class: "bg-white/5 border-white/60" },
  ];
  // Animation de fade in
  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  // Map des pills
  return pills.map((pill, index) => (
    <motion.li
      ref={ref}
      key={index}
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariant}
      viewport={{ once: true }}
      className={`pill ${pill.class}`}
      custom={index}
    >
      {pill.name}
    </motion.li>
  ));
};

export default AnimatedPills;
