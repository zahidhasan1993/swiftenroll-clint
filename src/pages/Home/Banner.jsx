import React from "react";
import img1 from "../../assets/Banner/1.jpg";
import img2 from "../../assets/Banner/2.jpg";
import img3 from "../../assets/Banner/3.jpg";
import img4 from "../../assets/Banner/4.jpg";
import img5 from "../../assets/Banner/5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={true}
      showIndicators={false}
    >
      <div className="h-[40rem]">
        <img src={img1} alt="Banner Image" />
      </div>
      <div className="h-[40rem]">
        <img src={img2} alt="Banner Image" />
      </div>
      <div className="h-[40rem]">
        <img src={img3} alt="Banner Image" />
      </div>
      <div className="h-[40rem]">
        <img src={img4} alt="Banner Image" />
      </div>
      <div className="h-[40rem]">
        <img src={img5} alt="Banner Image" />
      </div>
    </Carousel>
  );
};

export default Banner;
