"use client";
import React, { useEffect, useState } from "react";

const AnimationHeroH1 = ({ text, delay = 0.15, startDelay = 0, nameclass }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("animate");
  }, []);

  const words = text ? text.split(" ") : [];

  return (
    <div className="flex flex-wrap justify-left text-[clamp(2rem,6vw,7rem)] font-bold justify-center ">
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block opacity-0 transform translate-y-[-6rem] blur-[0.625rem] pr-[clamp(0.25rem,2vw,1rem)] ${animationClass} ${nameclass}`}
          style={{
            animationDelay: `${startDelay + i * delay}s`,
            WebkitAnimationDelay: `${startDelay + i * delay}s`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default AnimationHeroH1;
