import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  }
  const logout = () => {
    setIsLoggedIn(false);
  }

  const value = {
    isLoggedIn,
    login,
    logout
  }

  return <AuthContext value={value}>
    {children}
  </AuthContext>
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    // You tried to use useAuth outside of <AuthContext> or in some component that doesn't have access to AuthContext
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}