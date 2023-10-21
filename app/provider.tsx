"use client";

import { AuthContextProvider } from "@/context/AuthContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
