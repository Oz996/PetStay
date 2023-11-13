"use client";

import BackArrow from "@/components/BackArrow";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function Page({ params }: { params: { id: string } }) {
  // const initState = {
  //   firstName: "",
  //   lastName: " ",
  //   phone: 0,
  //   cardName: "",
  //   cardNumber: 0,
  // };
  const orderData = localStorage.getItem("order");
  const [formData, setFormData] = useState({});
  console.log(formData);
  const { email, isLoggedIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const orderData = JSON.stringify(data);
    localStorage.setItem("order", orderData);
    setFormData(data);

    router.push(`/confirm/${params.id}`);
  };
  useEffect(() => {
    const data = JSON.parse(orderData as string);
    setFormData(data);
  }, [orderData]);

  const validateCard = (value: string) => {
    const pattern =
      /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/;
    return (
      pattern.test(value) ||
      " Invalid card number forma (e.g., XXXX-XXXX-XXXX-XXXX)t"
    );
  };

  if (!isLoggedIn)
    return (
      <div className="flex flex-col justify-center items-center">
        <Logo width="120" height="120" />
        <h1 className="text-4xl font-semibold text-center my-8">
          Sign in to book
        </h1>
      </div>
    );

  return (
    <section>
      <BackArrow />
      <h1 className="text-4xl font-semibold text-center my-8">
        Create new reservation
      </h1>
      <div className="rounded-xl mdborder md:border-black max-w-[50rem] mx-auto px-10 py-5 md:py-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row gap-10 mx-auto">
            <div>
              <input
                type="text"
                {...register("firstName", {
                  required: "This field is required",
                })}
                className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] max-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="First Name"
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                  <p className="text-red-500 text-sm font-semibold m-2">
                    {message}
                  </p>
                )}
              ></ErrorMessage>
            </div>
            <div>
              <input
                type="text"
                {...register("lastName", {
                  required: "This field is required",
                })}
                className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] max-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Last Name"
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ message }) => (
                  <p className="text-red-500 text-sm font-semibold m-2 ">
                    {message}
                  </p>
                )}
              ></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mx-auto">
            <input
              type="email"
              className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] max-h-[3rem] min-w-[17rem] focus:outline-primary"
              disabled
              value={email as string}
            />
            <div>
              <input
                type="text"
                {...register("phone", { required: "This field is required" })}
                className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] max-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Phone number"
              />
              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ message }) => (
                  <p className="text-red-500 text-sm font-semibold m-2">
                    {message}
                  </p>
                )}
              ></ErrorMessage>
            </div>
          </div>
          <hr className="border-gray-300 w-10/12 mx-auto" />
          <div className="flex flex-col md:flex-row gap-10 mx-auto">
            <div>
              <input
                type="text"
                {...register("cardName", {
                  required: "This field is required",
                })}
                className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] max-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Cardholder Name"
              />
              <ErrorMessage
                errors={errors}
                name="cardName"
                render={({ message }) => (
                  <p className="text-red-500 text-sm font-semibold m-2">
                    {message}
                  </p>
                )}
              ></ErrorMessage>
            </div>
            <div>
              <input
                type="text"
                {...register("cardNumber", {
                  required: "This field is required",
                  validate: validateCard,
                })}
                className="rounded-xl border border-black px-3 pl-12 min-h-[3rem] max-h-[3rem] min-w-[17rem] focus:outline-primary"
                placeholder="Card Number"
              />
              <ErrorMessage
                errors={errors}
                name="cardNumber"
                render={({ message }) => (
                  <p className="text-red-500 text-sm font-semibold m-2 w-52">
                    {message}
                  </p>
                )}
              ></ErrorMessage>
            </div>
          </div>
          <button
            type="submit"
            className="btn capitalize mt-5 bg-primary rounded-xl text-[1rem] text-white hover:bg-primary_hover duration-300 w-10/12 mx-auto"
          >
            Next Step
          </button>
        </form>
      </div>
    </section>
  );
}
