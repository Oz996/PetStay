"use client";

import BackArrow from "@/components/BackArrow";
import { useAuth } from "@/hooks/useAuth";
import { Booking } from "@/types/types";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface props {
  bookings: Booking[];
}

const Profile = ({ bookings }: props) => {
  const [booking, setBooking] = useState<Booking[] | null>(null);

  const { email } = useAuth();
  console.log(booking);

  useEffect(() => {
    const filterBookings = () => {
      const userBooking = bookings.filter(
        (booking: Booking) => booking.user.email === email
      );
      setBooking(userBooking);
    };
    filterBookings();
  }, [bookings, email]);

  const cancelBooking = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/booking/${id}`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      console.log(id);
      if (res.ok) {
        toast.success("Booking has been canceled");
        setBooking(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <BackArrow />
      <div>
        <h1 className="font-semibold text-3xl pt-10">Current booking</h1>
        {booking === null || booking.length < 1 ? (
          <p className="text-xl">No bookings</p>
        ) : (
          <ul>
            {booking?.map((booking) => (
              <li key={booking.id} className="text-lg pt-5 w-[16rem]">
                <h2 className="text-xl border-b pb-2">{booking.rental.name}</h2>
                <div className="flex gap-1 pt-2">
                  <p>{booking.rental.dateArrival}</p>
                  <p>-</p>
                  <p>{booking.rental.dateDeparture}</p>
                </div>
                <div className="flex justify-between">
                  <p>{booking.rental.country}</p>
                  <div className="flex gap-1">
                    <p>{booking.rental.city},</p>
                    <p>{booking.rental.city_short}</p>
                  </div>
                </div>
                <div className="flex gap-5 pt-3">
                  <Link href={`/rental/${booking.rental.id}`}>
                    <button className="btn bg-primary hover:bg-primary_hover duration-300 text-white">
                      View
                    </button>
                  </Link>
                  <button
                    className="btn  bg-secondary hover:bg-danger duration-300 text-white"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Cancel Booking
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-[22rem]">
                      <AiOutlineExclamationCircle
                        size={35}
                        className="text-center w-full text-danger"
                      />
                      <p className="py-4 text-center">
                        Your booking will be canceled
                      </p>
                      <div className="flex justify-around pt-6">
                        <form method="dialog">
                          <button className="btn text-white uppercase w-[8rem] bg-primary hover:bg-primary_hover duration-300">
                            back
                          </button>
                        </form>
                        <button
                          onClick={() => cancelBooking(booking.id)}
                          className="btn text-white uppercase w-[8rem] bg-secondary hover:bg-danger duration-300"
                        >
                          confirm
                        </button>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
