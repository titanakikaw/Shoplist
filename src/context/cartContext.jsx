import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { useApiCall } from "../hooks/useApiCall";
import { cartReducer, initState } from "../reducers/cartReducer";
import { useErrorContext } from "./errorContext";
import { useLoadingContext } from "./loadingContext";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [{ cart, error, loading }, dispatch] = useReducer(
    cartReducer,
    initState
  );

  const { dispatchLoading } = useLoadingContext();
  const { dispatchError } = useErrorContext();

  const apiCallBack = useApiCall({
    dispatchLoading,
    dispatchError,
  });

  const loadCart = useCallback(async () => {
    apiCallBack(
      {
        apiData: { method: "get", url: "/660/cart" },
        type: "LOAD_CART",
      },
      dispatch
    );
  }, [apiCallBack]);

  const addToCart = useCallback(
    async (data) => {
      apiCallBack(
        {
          apiData: {
            method: "post",
            url: "/660/cart",
            data,
          },
          type: "ADD_CART",
        },
        dispatch
      );
    },
    [apiCallBack]
  );

  const updateCartItem = useCallback(
    (data) => {
      apiCallBack(
        {
          apiData: {
            method: "put",
            url: `/660/cart/${data.id}`,
            data,
          },
          type: "UPDATE_CART",
        },
        dispatch
      );
    },
    [apiCallBack]
  );
  const deleteCartItem = useCallback(
    (data) => {
      apiCallBack(
        {
          apiData: {
            method: "delete",
            url: `/660/cart/${data.id}`,
            data,
          },
          type: "DELETE_CART",
        },
        dispatch
      );
    },
    [apiCallBack]
  );

  const value = useMemo(
    () => ({
      loadCart,
      addToCart,
      updateCartItem,
      deleteCartItem,
      cart,
      error,
    }),
    [loadCart, addToCart, cart, error, deleteCartItem, updateCartItem]
  );

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCartContext = () => useContext(cartContext);
