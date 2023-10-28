"use client"

import { ReactElement, createContext, useEffect, useState } from "react";

interface AuthContext {
  isLoggedIn: boolean;
  token: string | null;
  email: string | null;
  signIn: (token: string, email: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  console.log(email);
  console.log(isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setIsLoggedIn(!!token || false);
    setToken(token);
    setEmail(email)
  }, [token, email]);

  const signIn = (email: string, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setIsLoggedIn(true);
    setEmail(email);
    setToken(token);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setEmail(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
