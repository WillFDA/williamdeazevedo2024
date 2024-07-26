"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCard = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <motion.div
      className="grid"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2, // Ajoute un délai basé sur l'index
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
