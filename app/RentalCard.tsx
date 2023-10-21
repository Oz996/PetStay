import { Rental } from "@/types/types";
import Image from "next/image";
import React from "react";

interface props {
  rental: Rental;
}

const RentalCard = ({ rental }: props) => {
  console.log(rental);

  const image = rental.gallery.map((image) => (
    <figure key={image.id}>
      <Image width={400} height={500} src={image.imageUrl} alt="Rental" />
    </figure>
  ));
  return (
    <article className="card  bg-base-100 shadow-xl">
      <div className="card-body flex flex-row gap-5">
        {image[0]}
        <div className="flex flex-col">
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
        </div>
      </div>
    </article>
  );
};

export default RentalCard;
