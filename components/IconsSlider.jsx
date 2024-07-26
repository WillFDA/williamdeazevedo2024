import { iconData } from "./../app/data/iconData";
import SliderItem from "./SliderItem";

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
