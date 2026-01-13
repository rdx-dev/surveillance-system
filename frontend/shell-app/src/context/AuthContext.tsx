import React, { createContext, useContext, useState, useCallback } from "react";
import { AuthContextType, User } from "./types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = useCallback((user: User, token: string) => {
    setUser(user);
    setToken(token);
    // TODO: Store in localStorage when auth service is ready
    // localStorage.setItem('token', token);
    // localStorage.setItem('user', JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    // TODO: Clear localStorage when auth service is ready
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
