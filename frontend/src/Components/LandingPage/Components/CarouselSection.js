import React from "react";
import { Carousel, Image } from "react-bootstrap";

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image fluid className="w-100" src="/static/assets/thinking.png" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image fluid className="w-100" src="/static/assets/headache.png" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
