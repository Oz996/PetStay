"use client";

import { AuthContextProvider } from "@/context/AuthContext";
import { ReactElement } from "react";

export default function Provider({ children }: { children: ReactElement }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
