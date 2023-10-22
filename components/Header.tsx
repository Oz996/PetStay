import React from "react";
import Logo from "./Logo";
import { Roboto } from "next/font/google";
import Link from "next/link";
import PingIcon from "./Icons/PingIcon";
import CalendarIcon from "./Icons/CalendarIcon";
import SearchIcon from "./Icons/SearchIcon";
import AuthModal from "./AuthModal";
import { useAuth } from "@/hooks/useAuth";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

const Header = () => {
  return (
    <header className="h-[5rem] w-full absolute left-0 top-0 flex-col">
      <div className="container mx-auto py-5 flex justify-between">
        <div className="text-4xl font-roboto">
          <Link href="/" className="flex gap-2 items-end">
            <Logo height="52" width="60" />
            <h1 className={`${roboto.className} text-primary`}>PetStay</h1>
          </Link>
        </div>
        <AuthModal />
      </div>
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
    </header>
  );
};

export default Header;
