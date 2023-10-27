"use client";

import { useAuth } from "@/hooks/useAuth";
import { Rental } from "@/types/types";

interface props {
  rental: Rental;
}

const Reviews = ({ rental }: props) => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="mt-10">
      {rental.review.length === 0 ? (
        <div>
          <h2 className="text-2xl font-semibold">No reviews yet</h2>
        </div>
      ) : (
        3
      )}
      {!isLoggedIn ? (
        <div>
          <h2 className="text-xl my-3">Leave a review</h2>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              className="rounded-xl border px-3 pl-5 min-h-[3rem] w-full focus:outline-primary"
              placeholder="Title"
            />
            <textarea
              rows={10}
              className="textarea border border-gray-200 rounded-xl focus:outline-primary text-lg resize-none"
              placeholder="Your review"
            />
            <button className="btn bg-primary text-white capitalize text-[1rem] hover:bg-primary_hover">Submit</button>
          </form>
        </div>
      ) : (
        3
      )}
    </div>
  );
};

export default Reviews;
