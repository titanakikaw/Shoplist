import React, { createContext, useContext, useMemo, useReducer } from "react";
import { errorInitialState, errorReducer } from "../reducers/errorReducer";

export const errorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, dispatchError] = useReducer(errorReducer, errorInitialState);
  const value = useMemo(
    () => ({
      error,
      dispatchError,
    }),
    [error, dispatchError]
  );
  return (
    <errorContext.Provider value={value}>{children}</errorContext.Provider>
  );
};

export const useErrorContext = () => useContext(errorContext);
