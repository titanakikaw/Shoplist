import React, { createContext, useContext, useMemo, useReducer } from "react";
import {
  loadingInitialState,
  loadingReducer,
} from "../reducers/loadingReducer";

export const loadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, dispatchLoading] = useReducer(
    loadingReducer,
    loadingInitialState
  );

  const value = useMemo(
    () => ({
      loading,
      dispatchLoading,
    }),
    [loading, dispatchLoading]
  );
  return (
    <loadingContext.Provider value={value}>{children}</loadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(loadingContext);
