import type { Metadata } from "next";
import RentalCard from "./RentalCard";
import { Rental } from "@/types/types";

export const metadata: Metadata = {
  title: "PetStay - Home",
  description: "Home page",
};

export default async function Home() {
  const getRentals = async () => {
    const res = await fetch("http://localhost:3000/api/rentals");
    const data = res.json();
    return data;
  };
  const data = await getRentals();

  return (
    <section className="pt-36">
      <div>
        {data?.map((rental: Rental) => (
          <RentalCard key={rental.id} rental={rental} />
        ))}
      </div>
    </section>
  );
}
