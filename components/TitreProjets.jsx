"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
const TitreProjets = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  return (
    <p
      ref={ref}
      className={`text-5xl py-16 font-bold transition-colors duration-100 ease-in-out ${
        isInView ? "text-whit" : "text-darkgray-100"
      }`}
    >
      {children}
    </p>
  );
};

export default TitreProjets;
