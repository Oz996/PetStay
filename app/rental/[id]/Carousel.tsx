"use client";
import { Rental } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

interface props {
  rental: Rental;
}

const Carousel = ({ rental }: props) => {
  console.log(rental);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = rental.gallery.length;

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  };

  const goToNextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    goToSlide(currentSlide - 1);
  };

  return (
    <div className="carousel w-7/12">
      {rental.gallery.map((image, index) => (
        <div
          key={image.id}
          id={`slide${index}`}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "" : "hidden"
          }`}
        >
          <Image
            src={image.imageUrl}
            width={400}
            height={400}
            alt="Picture of rental"
            className="w-full h-[28rem] rounded-lg object-cover"
            priority={true}
          />
          <div className="absolute bg-white opacity-80 left-0 bottom-0 w-full p-3 flex gap-1 text-lg font-semibold justify-center">
            <p>{currentSlide + 1}</p> /<p>{rental.gallery.length}</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a onClick={goToPreviousSlide} className="btn btn-circle">
              ❮
            </a>
            <a onClick={goToNextSlide} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
