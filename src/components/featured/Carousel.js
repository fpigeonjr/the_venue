import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";
const Carousel = () => {
  const settings = { dots: false, infinate: true, autoplay: true, speed: 500 };
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="image_carousel"
            style={{ height: "100vh", background: `url(${slide_one})` }}
          />
        </div>
        <div>
          <div
            className="image_carousel"
            style={{ height: "100vh", background: `url(${slide_two})` }}
          />
        </div>
        <div>
          <div
            className="image_carousel"
            style={{ height: "100vh", background: `url(${slide_three})` }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
