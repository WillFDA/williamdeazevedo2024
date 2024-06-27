"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const MotionDiv = ({ children }, customClasses) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1,.33 1"],
  });
  return (
    <motion.div
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      ref={ref}
      className={customClasses ? customClasses : "max-container px-8 mt-36"}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
