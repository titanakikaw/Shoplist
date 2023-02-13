import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useApiCall } from "../hooks/useApiCall";
// import axiosInstance from "../utils/axiosInstance";
import { useErrorContext } from "./errorContext";
import { useLoadingContext } from "./loadingContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      setUser(json);
      localStorage.setItem("token", JSON.stringify(json));
      actions.resetForm();
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;

      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(rest),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      actions.resetForm();
      setUser(json);
      localStorage.setItem("token", JSON.stringify(json));
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  }, []);

  const changePass = useCallback(async (values, actions) => {
    const { confirm_password, ...rest } = values;
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await axiosInstance.post("/login", {
        email: token.user.email,
        password: rest.old_password,
      });

      const res1 = await axiosInstance.put(`users/${res.user.id}`, {
        email: token.user.email,
        password: rest.new_password,
      });

      setUser(null);
      localStorage.clear();
      setUser(res1);
      localStorage.setItem("token", JSON.stringify(res1));
      return true;
    } catch (error) {
      actions.setErrors({ serverError: error.message });
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);
  const value = useMemo(
    () => ({
      login,
      register,
      logout,
      changePass,
      user,
    }),
    [login, register, logout, changePass, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
