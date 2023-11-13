"use client";

import { useAuth } from "@/hooks/useAuth";
import { Booking } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1 className="font-semibold text-3xl pt-10">Your bookings</h1>
      <ul>
        {booking?.map((booking) => (
          <li key={booking.id} className="text-lg pt-5">
            <h2>{booking.rental.name}</h2>
            <div className="flex gap-1">
              <p>{booking.rental.dateArrival}</p>
              <p>-</p>
              <p>{booking.rental.dateDeparture}</p>
            </div>
            <p>{booking.rental.country}</p>
            <div className="flex gap-1">
              <p>{booking.rental.city},</p>
              <p>{booking.rental.city_short}</p>
            </div>
            <div className="flex gap-5">
              <Link href={`/rental/${booking.rental.id}`}>
                <button className="btn bg-primary hover:bg-primary_hover text-white">
                  View
                </button>
              </Link>
              <button className="btn bg-secondary hover:bg-danger text-white">
                Cancel Booking
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
