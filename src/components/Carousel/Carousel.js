import React from "react";
import { Carousel } from "antd";
import carouselData from "./CarouselData";

function CustomCarousel() {
  return (
    <div className="my-10">
      <Carousel autoplay>
        {carouselData.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" style={{ width: "100%" }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
