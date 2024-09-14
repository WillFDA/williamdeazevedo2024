"use client";

import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const SliderItem = ({ src, alt, width = 70, height = 70, tooltip }) => (
  <Tippy
    content={tooltip}
    animation="scale"
    duration={[300, 200]}
    arrow={false}
    theme="custom"
    className="tippy-box"
  >
    <div className="slider-item inline-block mx-4">
      <Image
        className="w-14 lg:w-[70px] object-contain"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  </Tippy>
);

export default SliderItem;
