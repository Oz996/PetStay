"use client";
import BackArrow from "@/components/Icons/BackArrow";
import CreditCard from "@/components/Icons/CreditCard";
import { useAuth } from "@/hooks/useAuth";
import { Rental } from "@/types/types";
import Image from "next/image";

interface props {
  rental: Rental;
  params: { id: string };
}

const Confirm = ({ params, rental }: props) => {
  const user = JSON.parse(localStorage.getItem("order") as string);
  const { email } = useAuth();
  console.log(rental);

  const year = new Date().getFullYear();
  console.log(user);

  const image = rental.gallery.map((image) => (
    <Image
      key={image.id}
      className="w-full h-[24.5rem] object-cover rounded-r-xl"
      width={300}
      height={300}
      src={image.imageUrl}
      alt="Image of a rental"
    />
  ));

  return (
    <section>
      <article>
        <BackArrow />
        <h1 className="text-4xl font-semibold text-center my-8">
          Your trip details
        </h1>
        <div className="max-w-[90rem] max-h-[30rem] bg-base-100 shadow-xl mx-auto rounded-xl border">
          <div className="grid grid-cols-2">
            <div className="py-10 px-10">
              <h2 className="text-3xl font-semibold">{rental?.name}</h2>
              <hr className="my-10 border-gray-300" />
              <div className="flex justify-between">
                <div className="flex flex-col gap-10 text-xl">
                  <div>
                    <p>
                      {rental?.dateArrival}
                      <span className="mx-3">-</span>
                      {rental?.dateDeparture}
                    </p>
                    <p className="text-gray-400">{year}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>{rental.address}</p>
                    <p>
                      {rental.city}, {rental.city_short}
                    </p>
                    <p className="text-gray-400">{rental.country}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-xl">
                  <div className="flex gap-1">
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                  </div>
                  <p>{email}</p>
                  <div>
                    <CreditCard />
                    <p className="text-gray-400 text-lg">XXXX-XXXX-XXXX-XXX</p>
                  </div>
                </div>
              </div>
            </div>
            {image[0]}
          </div>
        </div>
      </article>
      <div className="max-w-[90rem] shadow-xl mx-auto rounded-xl border bg-primary py-10 px-20 mt-20">
        <h2 className="text-center text-white text-4xl font-semibold mb-8">
          Message to host
        </h2>
        <textarea
          rows={8}
          className="w-full resize-none py-10 px-20 rounded-xl text-xl focus:outline-none"
          placeholder="Additional information... "
        />
      </div>
    </section>
  );
};

export default Confirm;
