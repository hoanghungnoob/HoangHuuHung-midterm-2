import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = useState(0);
useEffect(()=>{
  console.log(currentImage);
},[currentImage])
  /* You will need to hanle the click on left and right button */
  const handleLeft = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
   
  };

  const handleRight = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeft} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImage].src} alt={images[currentImage].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRight} />
    </div>
  );
};

