"use client";
import Image from "next/image";

const iconData = [
  { src: "/React-icon.png", alt: "React Logo icon" },
  {
    src: "/react-router-mark-color-inverted.png",
    alt: "React Router Logo icon",
  }, // Ajusté
  { src: "/next.svg", alt: "Next JS Logo icon", width: 80 },
  { src: "/Tailwind_CSS_Logo.png", alt: "Tailwind CSS Logo icon" },
  { src: "/Typescript_logo.png", alt: "TypeScript Logo Icon" },
  { src: "/Figma_logo.png", alt: "Figma Logo Icon" },
  {
    src: "/Ruby_On_Rails_Logo.png",
    alt: "Ruby On Rails Logo Icon",
    width: 80,
    height: 50,
  },
  { src: "/react-query-logo.png", alt: "React Query Logo icon", width: 80 },
  { src: "/Redux_logo.png", alt: "Redux toolkit Logo icon" },
  { src: "/js-logo.png", alt: "Javascript Logo Icon" },
];

const SliderItem = ({ src, alt, width = 70, height = 70 }) => (
  <div className="slider-item inline-block mx-4">
    <Image
      className="w-14 lg:w-[70px] object-contain"
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  </div>
);

const IconsSlider = () => {
  const firstSliderIcons = iconData.slice(0, 5);
  const secondSliderIcons = iconData.slice(5);

  return (
    <>
      <div className="slider overflow-hidden whitespace-nowrap my-8">
        <div className="slider-track inline-block animate-slide">
          {[...firstSliderIcons, ...firstSliderIcons].map((icon, index) => (
            <SliderItem key={`first-${index}`} {...icon} />
          ))}
        </div>
      </div>
      <div className="slider overflow-hidden whitespace-nowrap my-8">
        <div className="slider-track-2 inline-block animate-slide-reverse">
          {[...secondSliderIcons, ...secondSliderIcons].map((icon, index) => (
            <SliderItem key={`second-${index}`} {...icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IconsSlider;
