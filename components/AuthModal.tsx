"use client";

import { useRef, useState } from "react";
import React from "react";
import Logo from "./Logo";
import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useAuth } from "@/hooks/useAuth";
import UserAvatar from "./Icons/UserAvatar";
import Link from "next/link";

const AuthModal = () => {
  const [userRegister, setUserRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const { signIn, isLoggedIn, signOut } = useAuth();

  const {
    register: signUpRegister,
    handleSubmit: signUpHandleSubmit,
    formState: { errors: signUpErrors },
  } = useForm();
  const {
    register: signInRegister,
    handleSubmit: signInHandleSubmit,
    formState: { errors: signInErrors },
    getValues,
    reset,
  } = useForm();

  const onRegisterSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        setUserRegister(false);
        reset();
      }
      console.log(res.status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSignInSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        modalRef.current!.close();
        const data = await res.json();
        const token = data.token;
        const email = getValues("email");
        console.log(email);
        signIn(email, token);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <button
            className="h-[2.5rem] btn btn-sm bg-primary min-w-[7.5rem] rounded-full capitalize text-[1rem] text-white hover:bg-primary_hover duration-300"
            onClick={() => {
              if (document) {
                (
                  document.getElementById("my_modal_2") as HTMLFormElement
                ).showModal();
              }
            }}
          >
            Log in
          </button>
          <dialog ref={modalRef} id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col gap-3 max-sm:w-full">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="flex justify-center">
                <Logo height="80" width="100" className="max-sm:hidden" />
              </div>
              {!userRegister ? (
                <>
                  <h3 className="font-bold text-4xl text-center my-4">
                    Sign in
                  </h3>
                  <form
                    onSubmit={signInHandleSubmit(onSignInSubmit)}
                    className="flex flex-col gap-10 md:p-12 max-sm:py-5"
                  >
                    <input
                      type="text"
                      {...signInRegister("email", {
                        required: "Email is required",
                      })}
                      className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                      placeholder="E-mail address"
                    />
                    <ErrorMessage
                      errors={signInErrors}
                      name="email"
                      render={({ message }) => (
                        <p className="text-red-500 text-sm font-semibold  my-[-1rem]">
                          {message}
                        </p>
                      )}
                    ></ErrorMessage>
                    <input
                      type="password"
                      {...signInRegister("password", {
                        required: "Password is required",
                      })}
                      className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      errors={signInErrors}
                      name="password"
                      render={({ message }) => (
                        <p className="text-red-500 text-sm font-semibold  my-[-1rem]">
                          {message}
                        </p>
                      )}
                    ></ErrorMessage>
                    <button
                      type="submit"
                      className="h-[2.5rem] mt-6 btn btn-sm capitalize text-[1rem] bg-primary rounded-xl text-white hover:bg-primary_hover duration-300"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <span className="loading loading-spinner loading-sm"></span>
                      )}
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
                  <h3 className="font-bold text-4xl text-center my-4">
                    Sign up
                  </h3>
                  <form
                    onSubmit={signUpHandleSubmit(onRegisterSubmit)}
                    className="flex flex-col gap-10 max-sm:py-5 md:p-12"
                  >
                    <input
                      type="text"
                      {...signUpRegister("email", {
                        required: "Email is required",
                      })}
                      className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                      placeholder="E-mail address"
                    />
                    <ErrorMessage
                      errors={signUpErrors}
                      name="email"
                      render={({ message }) => (
                        <p className="text-red-500 text-sm font-semibold  my-[-1rem]">
                          {message}
                        </p>
                      )}
                    ></ErrorMessage>
                    <input
                      type="password"
                      {...signUpRegister("password", {
                        required: "Password is required",
                      })}
                      className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      errors={signUpErrors}
                      name="password"
                      render={({ message }) => (
                        <p className="text-red-500 text-sm font-semibold my-[-1rem]">
                          {message}
                        </p>
                      )}
                    ></ErrorMessage>
                    <input
                      type="password"
                      {...signUpRegister("cPassword", {
                        required: "Please confirm password",
                      })}
                      className="rounded-xl border px-5 min-h-[3rem] w-full focus:outline-primary"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage
                      errors={signUpErrors}
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
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <span className="loading loading-spinner loading-sm"></span>
                      )}
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
      ) : (
        <>
          <div className="dropdown">
            <label tabIndex={0}>
              <button className="h-[2.5rem] btn btn-sm bg-primary max-w-[7.5rem] rounded-full capitalize text-[1rem] text-white hover:bg-primary_hover duration-300">
                <UserAvatar height="35" />
                Profile
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-lg"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <p onClick={() => signOut()}>Logout</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default AuthModal;
