"use client";

import BackArrow from "@/components/Icons/BackArrow";
import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const { email } = useAuth();
  return (
    <section>
      <BackArrow />
      <h1 className="text-4xl font-semibold text-center my-8">
        Create new reservation
      </h1>
      <div className="rounded-xl border border-black max-w-[50rem] mx-auto px-10 py-20">
        <form className="flex flex-col gap-10">
          <div className="flex gap-10 mx-auto">
            <input
              type="text"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
              placeholder="First Name"
            />
            <input
              type="text"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
              placeholder="Last Name"
            />
          </div>
          <div className="flex gap-10 mx-auto">
            <input
              type="email"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
              disabled
              value={email}
            />
            <input
              type="number"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
              placeholder="Phone number"
            />
          </div>
          <hr className="border-gray-300 w-10/12 mx-auto" />
          <div className="flex gap-10 mx-auto">
            <input
              type="text"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
              placeholder="Cardholder Name"
            />
            <input
              type="text"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] min-w-[17rem] focus:outline-primary"
              placeholder="Card Number"
            />
          </div>
          <button className="btn capitalize mt-5 bg-primary rounded-xl text-[1rem] text-white hover:bg-primary_hover duration-300 w-10/12 mx-auto">
            Next Step
          </button>
        </form>
      </div>
    </section>
  );
}
