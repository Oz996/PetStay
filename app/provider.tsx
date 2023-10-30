"use client";

import { AuthContextProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      {children}
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
    </AuthContextProvider>
  );
}
