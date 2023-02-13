import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { useApiCall } from "../hooks/useApiCall";
import {
  productInitialState,
  ProductReducer,
} from "../reducers/productReducer";
import { useErrorContext } from "./errorContext";
import { useLoadingContext } from "./loadingContext";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [{ products }, dispatch] = useReducer(
    ProductReducer,
    productInitialState
  );
  const { dispatchLoading } = useLoadingContext();
  const { dispatchError } = useErrorContext();
  const apiCallBack = useApiCall({
    dispatchLoading,
    dispatchError,
  });

  const loadProducts = useCallback(async () => {
    apiCallBack(
      {
        apiData: {
          url: "660/products",
          method: "get",
        },
        type: "LOAD_PRODUCTS",
      },
      dispatch
    );
  }, []);

  const value = useMemo(
    () => ({
      products,
      loadProducts,
    }),
    [products, loadProducts]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
