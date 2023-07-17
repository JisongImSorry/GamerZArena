// CarouselComponent.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css";

const CarouselComponent = ({ images, isSub }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        selectedItem={currentSlide}
        onChange={handleSlideChange}
        autoPlay
        interval={5000}
        transitionTime={500}
        renderArrowPrev={() => {
          return false;
        }}
        renderArrowNext={() => {
          return false;
        }}
        className="carousel-wrapper"
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Carousel slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
