import { Rental } from "@/types/types";
import React from "react";

interface props {
  rental: Rental;
}

const Description = ({ rental }: props) => {
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
    <>
      <div className="flex gap-3 text-gray-400 mb-5 max-sm:justify-center">
        <p className="border-r">
          {rental?.dateArrival}
          <span className="mx-3">-</span>
          {rental?.dateDeparture}
        </p>
        <p>{rental?.price} SEK/night</p>
      </div>
      <div className="md:flex md:flex-row md:justify-between flex-col lg:flex-col">
        <div className="mb-5">{rentalList}</div>
        <div className="flex flex-wrap gap-3 max-sm:justify-center">
          {rental?.feats?.map((feat) => {
            return (
              <span
                key={feat.id}
                className="p-2 bg-primary_light rounded-full text-center w-[9rem]"
              >
                {feat.feat}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Description;
