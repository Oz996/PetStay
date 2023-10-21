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
  console.log(token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token || false);
    setToken(token);
  }, []);

  const signIn = (email: string, token: string) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setEmail(email);
    setToken(token);
  };

  const signOut = () => {
    localStorage.removeItem("token");
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
