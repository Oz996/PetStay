"use client";

import { useState } from "react";
import React from "react";
import Logo from "./Logo";

const AuthModal = () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <button
        className="h-[2.5rem] bg-primary min-w-[7.5rem] rounded-full text-white hover:bg-primary_hover duration-300"
        onClick={() => document.getElementById("my_modal_2")!.showModal()}
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
          {!register ? (
            <>
              <h3 className="font-bold text-4xl text-center my-4">Sign in</h3>
              <form className="flex flex-col gap-10 p-12">
                <input
                  type="text"
                  className="rounded-xl border px-5 min-h-[3rem] w-full text-lg focus:outline-primary"
                  placeholder="E-mail address"
                />
                <input
                  type="password"
                  className="rounded-xl border px-5 min-h-[3rem] w-full text-lg focus:outline-primary"
                  placeholder="Password"
                />
                <button className="h-[2.5rem] mt-10 bg-primary rounded-xl text-white hover:bg-primary_hover duration-300">
                  Sign in
                </button>
                <p className="text-center">
                  Not a member yet?{" "}
                  <span
                    className="cursor-pointer underline text-primary"
                    onClick={() => setRegister(true)}
                  >
                    Sign up
                  </span>
                </p>
              </form>
            </>
          ) : (
            <>
              <h3 className="font-bold text-4xl text-center my-4">Sign up</h3>
              <form className="flex flex-col gap-10 p-12">
                <input
                  type="text"
                  className="rounded-xl border px-5 min-h-[3rem] w-full text-lg focus:outline-primary"
                  placeholder="E-mail address"
                />
                <input
                  type="password"
                  className="rounded-xl border px-5 min-h-[3rem] w-full text-lg focus:outline-primary"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="rounded-xl border px-5 min-h-[3rem] w-full text-lg focus:outline-primary"
                  placeholder="Confirm Password"
                />
                <button className="h-[2.5rem] mt-10 bg-primary rounded-xl text-white hover:bg-primary_hover duration-300">
                  Sign up
                </button>
                <p className="text-center">
                  Already a member?{" "}
                  <span
                    className="cursor-pointer underline text-primary"
                    onClick={() => setRegister(false)}
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
