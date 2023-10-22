import type { Metadata } from "next";
import RentalCard from "./RentalCard";
import { Rental } from "@/types/types";
import next from "next";
import axios from "axios";

export const metadata: Metadata = {
  title: "PetStay - Home",
  description: "Home page",
};

export default async function Home() {
  const getRentals = async () => {
    const res = await fetch("http://localhost:3000/api/rentals", {
      next: { revalidate: 20 },
    });
    const data = res.json();
    return data;
  };
  const data = await getRentals();
  console.log(data);
  // const res = await fetch("http://localhost:3000/api/rentals", {
  //   next: { revalidate: 20 },
  // });
  // const data = res.json();

  return (
    <section className="pt-36">
      <div className="grid grid-cols-2">
        {data?.map((rental: Rental) => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </div>
    </section>
  );
}
