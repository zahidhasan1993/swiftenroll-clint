import React from "react";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../../assets/Banner/1.jpg";
import img2 from "../../assets/Banner/2.jpg";
import img3 from "../../assets/Banner/3.jpg";
import img4 from "../../assets/Banner/4.jpg";
import img5 from "../../assets/Banner/5.jpg";
import "keen-slider/keen-slider.min.css";

const Banner = () => {
  const [sliderRef] = useKeenSlider({
    loop: true, // Enable the loop
    duration: 500,
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={img1} className="w-full h-[45rem]" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={img2} className="w-full h-[45rem]" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={img3} className="w-full h-[45rem]" alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src={img4} className="w-full h-[45rem]" alt="" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <img src={img5} className="w-full h-[45rem]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
