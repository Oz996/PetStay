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
  const [mobile, setMobile] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const {
    register: registerMobile,
    handleSubmit: submitMobile,
    reset: resetMobile,
  } = useForm();

  const onSearch = async (data: FieldValues) => {
    const { city, dateArrival, dateDeparture, type } = data;
    const res = await axios.get(
      `http://localhost:3000/api/rentals/search?city=${city}&dateArrival=${dateArrival}&dateDeparture=${dateDeparture}&type=${type}`
    );
    const search = res.data.search;
    setSearch(search);
    console.log(res);
    console.log(search);
  };

  const displayRentals = search.length > 0 ? search : rentals;
  console.log(displayRentals);

  return (
    <>
      <button
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_2") as HTMLFormElement
            ).showModal();
          }
        }}
        className="bg-secondary hover:bg-danger duration-300 btn min-h-[3rem] w-[9rem] rounded-xl hidden max-sm:flex absolute left-20 top-[13rem] text-white"
      >
        Filters
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box mb-[20rem]">
          {mobile && (
            <form onSubmit={submitMobile(onSearch)}>
              <ul className="flex flex-col gap-5 justify-center items-center pt-8">
                <li className="flex items-center">
                  <PingIcon className="absolute ml-4" />
                  <input
                    type="text"
                    {...registerMobile("city")}
                    className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                    placeholder="Enter Destination"
                  />
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="absolute ml-4" />
                  <input
                    type="text"
                    {...registerMobile("dateArrival")}
                    className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                    placeholder="Arrival Date"
                  />
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="absolute ml-4" />
                  <input
                    type="text"
                    {...registerMobile("dateDeparture")}
                    className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                    placeholder="Departure Date"
                  />
                </li>
                <li className="flex items-center">
                  <CalendarIcon className="absolute ml-4" />
                  <input
                    type="text"
                    {...registerMobile("type")}
                    className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
                    placeholder="Property Type"
                  />
                </li>
                <button
                  type="submit"
                  className="bg-secondary hover:bg-danger duration-300 btn min-h-[3rem] w-[6rem] rounded-lg flex justify-center items-center self-end"
                >
                  <SearchIcon className="" />
                </button>
              </ul>
              {search.length > 0 && (
                <div
                  className="flex gap-1 items-center text-secondary text-lg cursor-pointer mt-2 hover:underline"
                  onClick={() => {
                    setSearch([]);
                    resetMobile();
                  }}
                >
                  <RiCloseFill size={20} />
                  <p>reset filters</p>
                </div>
              )}
            </form>
          )}
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setMobile(false)}
        >
          <button>close</button>
        </form>
      </dialog>
      <nav className="container mx-auto h-[6.5rem] max-sm:p-5 max-sm:hidden">
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
              className="flex gap-1 items-center text-secondary text-lg cursor-pointer mt-2 hover:underline"
              onClick={() => {
                setSearch([]);
                reset();
              }}
            >
              <RiCloseFill size={20} />
              <p>reset filters</p>
            </div>
          )}
        </form>
      </nav>
      <section className="pt-36">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-lg:mt-10">
          {displayRentals?.map((rental: Rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Rentals;
