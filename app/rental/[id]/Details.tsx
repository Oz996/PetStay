import Description from "@/components/Description";
import BackArrow from "@/components/Icons/BackArrow";
import { Rental } from "@/types/types";
import React from "react";
import Carousel from "./Carousel";

interface props {
  rental: Rental;
}

const Details = ({ rental }: props) => {
  const rentalList = [
    rental?.people === 1
      ? `${rental?.people} guest `
      : `${rental?.people} guests `,
    rental?.rooms === 1 ? `${rental?.rooms} room ` : `${rental?.rooms} rooms `,
    rental?.beds === 1 ? `${rental?.beds} bed ` : `${rental?.beds} beds `,
    rental?.bathroom === 1
      ? `${rental?.bathroom} bathroom`
      : `${rental?.bathroom} bathrooms`,
  ];

  return (
    <section>
      <BackArrow />
      <div className="grid grid-cols-2">
        <div className="pt-10">
          <p className="text-4xl font-semibold mb-5">{rental?.name}</p>
          <Description rental={rental} />
          <button className="h-[3rem] btn w-[25rem] mt-5 bg-primary rounded-xl uppercase text-[1rem] text-white hover:bg-primary_hover duration-300">
            book now
          </button>
        </div>
        <Carousel rental={rental} />
      </div>
    </section>
  );
};

export default Details;
