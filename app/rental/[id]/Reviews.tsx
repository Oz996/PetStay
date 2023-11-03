"use client";

import { useAuth } from "@/hooks/useAuth";
import { Rental, Review } from "@/types/types";
import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import UserAvatar from "@/components/Icons/UserAvatar";
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";

interface props {
  rental: Rental;
  params: {
    id: string;
  };
}

const Reviews = ({ rental, params }: props) => {
  const [newReview, setNewReview] = useState<Review[]>(rental.reviews);
  console.log(newReview);
  const { isLoggedIn, email } = useAuth();
  console.log(email);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onReviewPost = async (data: FieldValues) => {
    const { title, review } = data;
    const userEmail = email;
    const res = await fetch(`http://localhost:3000/api/rental/${params?.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, review, userEmail }),
    });
    if (res.status === 201) {
      const data = await res.json();
      setNewReview([...newReview, data]);
      reset();
      console.log(res);
    }
  };

  const rating = newReview.length > 0 ? 5 : 0;

  return (
    <section className="mt-10">
      <div className="text-2xl flex gap-3">
        {rental.reviews.length > 0 && (
          <>
            <AiTwotoneStar className="text-primary text-3xl" />
            <p className="">{rating}</p>
            <p>({rental.reviews.length} reviews)</p>
          </>
        )}
      </div>

      {newReview.length === 0 ? (
        <div>
          <h2 className="text-2xl font-semibold">No reviews yet</h2>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 my-12 gap-3">
          {newReview.map((review) => (
            <div
              className="rounded-3xl border border-black py-6 flex flex-col md:grid md:grid-cols-2 max-h-[30rem] md:max-h-[18rem] overflow-y-scroll"
              key={review.id}
            >
              <div className="flex flex-col gap-5 font-semibold md:pl-20 items-center">
                <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center">
                  <UserAvatar />
                </div>
                <p>{review?.user?.email}</p>
                <p>{review?.createdAt?.slice(0, 10)}</p>
              </div>
              <div className="flex flex-col gap-8 md:-ml-14 max-sm:px-5">
                <h2 className="text-2xl font-bold max-sm:text-center max-sm:mt-3">
                  {review.title}
                </h2>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {isLoggedIn ? (
        <div className="mb-10 max-sm:px-5">
          <p className="text-xl my-3">Leave a review</p>
          <form
            onSubmit={handleSubmit(onReviewPost)}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="rounded-xl border px-3 pl-5 min-h-[3rem] w-full focus:outline-primary"
              placeholder="Title"
            />
            <ErrorMessage
              errors={errors}
              name="title"
              render={({ message }) => (
                <p className="text-red-500 text-sm font-semibold">{message}</p>
              )}
            ></ErrorMessage>
            <textarea
              rows={10}
              {...register("review", { required: "Cannot be empty" })}
              className="textarea border border-gray-200 rounded-xl focus:outline-primary text-lg resize-none"
              placeholder="Your review"
            />
            <ErrorMessage
              errors={errors}
              name="review"
              render={({ message }) => (
                <p className="text-red-500 text-sm font-semibold">{message}</p>
              )}
            ></ErrorMessage>
            <button
              type="submit"
              className="btn bg-primary text-white capitalize text-[1rem] hover:bg-primary_hover"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p className="mb-10">Sign in to leave a review</p>
      )}
    </section>
  );
};

export default Reviews;
