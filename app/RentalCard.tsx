import { Rental } from "@/types/types";
import Image from "next/image";
import React from "react";

interface props {
  rental: Rental;
}

const RentalCard = ({ rental }: props) => {
  const image = rental.gallery.map((image) => (
    <figure
      className="w-[20rem] h-[12.5rem] rounded-xl group-hover:opacity-90 group-hover:object-top duration-300"
      key={image.id}
    >
      <Image
        className="group-hover:scale-[101%] duration-300"
        width={322}
        height={201}
        src={image.imageUrl}
        alt="Image of a rental"
      />
    </figure>
  ));

  const rentalList = [
    rental.people === 1
      ? `${rental.people} guest `
      : `${rental.people} guests `,
    rental.rooms === 1 ? `${rental.rooms} room ` : `${rental.rooms} rooms `,
    rental.beds === 1 ? `${rental.beds} bed ` : `${rental.beds} beds `,
    rental.bathroom === 1
      ? `${rental.bathroom} bathroom`
      : `${rental.bathroom} bathrooms`,
  ];
  console.log(rentalList);

  return (
    <article className="card group bg-base-100 shadow-xl cursor-pointer">
      <div className="card-body grid grid-cols-2">
        <div>{image[0]}</div>
        <div className="flex flex-col p-4">
          <h1 className="card-title text-[1.1rem] font-semibold">
            {rental.name}
          </h1>
          <div className="flex gap-3 text-gray-400 mb-5">
            <p className="border-r">
              {rental.dateArrival}
              <span className="mx-3">-</span>
              {rental.dateDeparture}
            </p>
            <p>{rental.price} SEK/night</p>
          </div>
          <div className="mb-5">{rentalList}</div>
          <ol className="flex gap-7 flex-wrap leading-3">
            {rental.feats.map((feat) => {
              return (
                <span
                  key={feat.id}
                  className="p-3 bg-primary_light rounded-full text-center w-[9rem]"
                >
                  {feat.feat}
                </span>
              );
            })}
          </ol>
        </div>
      </div>
    </article>
  );
};

export default RentalCard;
