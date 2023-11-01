import type { Metadata } from "next";
import axios from "axios";
import Rentals from "./Rentals";

export const metadata: Metadata = {
  title: "PetStay - Home",
  description: "Home page",
};

export default async function Home() {
  const getRentals = async () => {
    const res = await axios.get("http://localhost:3000/api/rentals");
    const data = res.data;
    return data;
  };
  const data = await getRentals();
  // const res = await fetch("http://localhost:3000/api/rentals", {
  //   next: { revalidate: 20 },
  // });
  // const data = res.json();

  return (
    <>
      <Rentals rentals={data} />
    </>
  );
}
