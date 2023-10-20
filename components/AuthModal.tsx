"use client";

import { useState } from "react";
import React from "react";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AuthModal = () => {
  const [userRegister, setUserRegister] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterSubmit = async (data) => {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.status);
  };

  return (
    <>
      <button
        className="h-[2.5rem] btn btn-sm bg-primary min-w-[7.5rem] rounded-full capitalize text-[1rem] text-white hover:bg-primary_hover duration-300"
        onClick={() => {
          document.getElementById("my_modal_2")!.showModal();
          setUserRegister(false);
        }}
      >
        Log in
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col gap-3">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex justify-center">
            <Logo height="80" width="100" className="" />
          </div>
          {!userRegister ? (
            <>
              <h3 className="font-bold text-4xl text-center my-4">Sign in</h3>
              <form className="flex flex-col gap-10 p-12">
                <input
                  type="text"
                  className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                  placeholder="E-mail address"
                />
                <input
                  type="password"
                  className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                  placeholder="Password"
                />
                <button className="h-[2.5rem] mt-6 btn btn-sm capitalize text-[1rem] bg-primary rounded-xl text-white hover:bg-primary_hover duration-300">
                  Sign in
                </button>
                <p className="text-center">
                  Not a member yet?{" "}
                  <span
                    className="cursor-pointer underline text-primary"
                    onClick={() => setUserRegister(true)}
                  >
                    Sign up
                  </span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h3 className="font-bold text-4xl text-center my-4">Sign up</h3>
              <form
                onSubmit={handleSubmit(onRegisterSubmit)}
                className="flex flex-col gap-10 p-12"
              >
                <input
                  type="text"
                  {...register("email", { required: "Email is required" })}
                  className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                  placeholder="E-mail address"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm font-semibold  my-[-1rem]">
                      {message}
                    </p>
                  )}
                ></ErrorMessage>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                  placeholder="Password"
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm font-semibold my-[-1rem]">
                      {message}
                    </p>
                  )}
                ></ErrorMessage>
                <input
                  type="password"
                  {...register("cPassword", {
                    required: "Please confirm password",
                  })}
                  className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  errors={errors}
                  name="cPassword"
                  render={({ message }) => (
                    <p className="text-red-500 text-sm font-semibold  my-[-1rem]">
                      {message}
                    </p>
                  )}
                ></ErrorMessage>
                <button
                  type="submit"
                  className="h-[2.5rem] mt-6 btn btn-sm capitalize text-[1rem] bg-primary rounded-xl text-white hover:bg-primary_hover duration-300"
                >
                  Sign up
                </button>
                <p className="text-center">
                  Already a member?{" "}
                  <span
                    className="cursor-pointer underline text-primary"
                    onClick={() => setUserRegister(false)}
                  >
                    Sign in
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AuthModal;
