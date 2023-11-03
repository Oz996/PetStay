import Description from "@/components/Description";
import { Rental } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  rental: Rental;
}

const RentalCard = ({ rental }: props) => {
  const image = rental.gallery.map((image) => (
    <figure
      className="md:w-[20rem] h-[12.5rem] rounded-xl group-hover:opacity-90 group-hover:object-top duration-300"
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

  return (
    <article className="card group bg-base-100 shadow-xl cursor-pointer lg:max-h-[18.5rem] max-md:mx-auto">
      <Link
        href={`/rental/${rental.id}`}
        className="card-body grid md:grid-cols-2"
      >
        <div>{image[0]}</div>
        <div className="flex flex-col p-4">
          <h1 className="card-title text-[1.1rem] font-semibold">
            {rental.name}
          </h1>
          <Description rental={rental} />
        </div>
      </Link>
    </article>
  );
};

export default RentalCard;
