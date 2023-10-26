import Description from "@/components/Description";
import BackArrow from "@/components/Icons/BackArrow";
import { Neighborhood, Rental } from "@/types/types";
import React from "react";
import Carousel from "./Carousel";
import { AiOutlineCheck, AiOutlineWifi } from "react-icons/ai";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdOutlineKitchen } from "react-icons/md";
import { PiBathtub, PiShower } from "react-icons/pi";
import { TbMicrowave, TbDogBowl } from "react-icons/tb";
import { FaCat } from "react-icons/fa";
import Map from "./Map";
import DogWalk from "@/components/Icons/DogWalk";

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
          <h1 className="text-4xl font-semibold mb-5">{rental?.name}</h1>
          <Description rental={rental} />
          <button className="h-[3rem] btn w-[25rem] mt-5 bg-primary rounded-xl uppercase text-[1rem] text-white hover:bg-primary_hover duration-300">
            book now
          </button>
        </div>
        <Carousel rental={rental} />
      </div>
      <div className="grid grid-cols-2 gap-20 my-20">
        <div>
          <h2 className="text-3xl font-semibold mb-5">{rental?.name}</h2>
          <p className="text-lg">{rental?.description}</p>
        </div>
        <div className="bg-primary_light rounded-xl p-8">
          <h2 className="text-lg font-semibold">Pet Policy</h2>
          <p>{rental.pet_policy}</p>
        </div>
      </div>
      <div className="bg-primary_light rounded-xl p-8 mb-32">
        <h2 className="text-lg font-semibold">Sound level</h2>
        <p>
          {rental.sound_level}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-5">Amenities</h2>
          <div className="flex flex-col gap-4">
            {rental.amenities.self_check_in && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <AiOutlineCheck size={35} /> <p>Self check-in</p>{" "}
              </div>
            )}
            {rental.amenities.wifi && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <AiOutlineWifi size={35} /> <p>Wifi</p>{" "}
              </div>
            )}
            {rental.amenities.free_parking && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <RiParkingBoxLine size={35} /> <p>Fee parking</p>{" "}
              </div>
            )}
            {rental.amenities.kitchen && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <MdOutlineKitchen size={35} /> <p>Kitchen</p>{" "}
              </div>
            )}
            {rental.amenities.bath_tub && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <PiBathtub size={35} /> <p>Bath tub</p>{" "}
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5">Amenities</h2>
          <div className="flex flex-col gap-4">
            {rental.dog_amenities.microwave && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <TbMicrowave size={35} /> <p>Microwave</p>{" "}
              </div>
            )}
            {rental.dog_amenities.shower && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <PiShower size={35} /> <p>Shower</p>{" "}
              </div>
            )}
            {rental.dog_amenities.dog_food && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <TbDogBowl size={35} /> <p>Dog food</p>{" "}
              </div>
            )}
            {rental.dog_amenities.cats && (
              <div className="flex gap-6 items-center text-xl">
                {" "}
                <FaCat size={35} /> <p>Cats allowed</p>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-32">
        <Map rental={rental}/>
        <div className="px-10">
          <h2 className="text-2xl font-bold mb-5">
            Pet-friendly Neighborhoods
          </h2>
          <ul className="p-8">
            {rental.neighborhood.map((item: Neighborhood) => (
              <li key={item.id} className="text-xl grid grid-cols-2 my-3">
                <div className="flex gap-3 items-center">
                  <DogWalk />
                  <p>{item.name}</p>
                </div>
                <div className="font-light flex gap-2">
                  <p>{item.distance}</p>
                  <p>min walk</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Details;
