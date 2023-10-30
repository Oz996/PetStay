import React from "react";
import PingIcon from "../components/Icons/PingIcon";
import CalendarIcon from "../components/Icons/CalendarIcon";
import SearchIcon from "../components/Icons/SearchIcon";

const Navbar = () => {
  return (
    <nav className="container mx-auto h-[6.5rem]">
      <ul className="grid grid-cols-2 gap-10 lg:flex justify-between lg:gap-0">
        <li className="flex items-center">
          <PingIcon className="absolute ml-4" />
          <input
            type="text"
            className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
            placeholder="Enter Destination"
          />
        </li>
        <li className="flex items-center">
          <CalendarIcon className="absolute ml-4" />
          <input
            type="text"
            className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
            placeholder="Arrival Date"
          />
        </li>
        <li className="flex items-center">
          <CalendarIcon className="absolute ml-4" />
          <input
            type="text"
            className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
            placeholder="Departure Date"
          />
        </li>
        <li className="flex items-center">
          <CalendarIcon className="absolute ml-4" />
          <input
            type="text"
            className="rounded-xl border px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
            placeholder="Property Type"
          />
        </li>
        <button className="bg-secondary hover:bg-danger duration-300 btn min-h-[3rem] w-[6rem] rounded-lg flex justify-center items-center">
          <SearchIcon className="" />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
