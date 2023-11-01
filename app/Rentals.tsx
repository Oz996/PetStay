"use client";

import PingIcon from "../components/Icons/PingIcon";
import CalendarIcon from "../components/Icons/CalendarIcon";
import SearchIcon from "../components/Icons/SearchIcon";
import RentalCard from "./RentalCard";
import { Rental } from "@/types/types";
import { useState } from "react";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";

interface props {
  rentals: Rental[];
}

const Rentals = ({ rentals }: props) => {
  const [search, setSearch] = useState<Rental[]>([]);

  const { register, handleSubmit, reset } = useForm();

  interface Data {
    city: string;
  }

  const onSearch = async (data: FieldValues) => {
    const { city, dateArrival, dateDeparture, type } = data;
    const res = await axios.get(
      `http://localhost:3000/api/rentals/search?city=${city}&dateArrival=${dateArrival}&dateDeparture=${dateDeparture}&type=${type}`
    );
    setSearch(res.data.search);
    console.log(res.data.search);
    reset();
  };

  console.log(rentals);

  const displayRentals = search.length > 0 ? search : rentals;

  return (
    <>
      <nav className="container mx-auto h-[6.5rem] max-sm:p-5">
        <form onSubmit={handleSubmit(onSearch)}>
          <ul className="grid grid-cols-2 gap-10 lg:flex justify-between lg:gap-0">
            <li className="flex items-center">
              <PingIcon className="absolute ml-4" />
              <input
                type="text"
                {...register("city")}
                className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Enter Destination"
              />
            </li>
            <li className="flex items-center">
              <CalendarIcon className="absolute ml-4" />
              <input
                type="text"
                {...register("dateArrival")}
                className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Arrival Date"
              />
            </li>
            <li className="flex items-center">
              <CalendarIcon className="absolute ml-4" />
              <input
                type="text"
                {...register("dateDeparture")}
                className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Departure Date"
              />
            </li>
            <li className="flex items-center">
              <CalendarIcon className="absolute ml-4" />
              <input
                type="text"
                {...register("type")}
                className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Property Type"
              />
            </li>
            <button
              type="submit"
              className="bg-secondary hover:bg-danger duration-300 btn min-h-[3rem] w-[6rem] rounded-lg flex justify-center items-center"
            >
              <SearchIcon className="" />
            </button>
          </ul>
          {search.length > 0 && (
            <div
              className="flex gap-1 items-center text-secondary text-lg underline cursor-pointer mt-2"
              onClick={() => setSearch(rentals)}
            >
              <RiCloseFill size={20} />
              <p>reset filters</p>
            </div>
          )}
        </form>
      </nav>
      <section className="pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {displayRentals?.map((rental: Rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Rentals;
