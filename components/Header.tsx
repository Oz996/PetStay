import React from "react";
import Logo from "./Logo";
import { Roboto } from "next/font/google";
import Link from "next/link";
import AuthModal from "./AuthModal";

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
    </header>
  );
};

export default Header;
