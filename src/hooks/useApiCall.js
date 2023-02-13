import React, { useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";

export const useApiCall = ({ dispatchLoading, dispatchError }) => {
  const apiCallBack = useCallback(async ({ apiData, type }, dispatch) => {
    try {
      dispatchLoading({
        type: `${type}_REQUEST`,
        payload: apiData?.data?.productId,
      });
      dispatchError({
        type: `${type}_REQUEST`,
      });
      const res = await axiosInstance(apiData);
      dispatch({
        type: `${type}_SUCCESS`,
        payload:
          apiData.method === "delete" ? apiData.url.split("/").at(-1) : res,
      });
      dispatchLoading({
        type: `${type}_SUCCESS`,
        payload: apiData?.data?.productId,
      });
    } catch (error) {
      dispatchLoading({
        type: `${type}_FAIL`,
        payload: apiData?.data?.productId,
      });
      dispatchError({
        type: `${type}_FAIL`,
        payload: {
          error: error.message,
          item: apiData?.data,
        },
      });

      dispatch({ type: "LOAD_FAIL", payload: error });
    }
  }, []);

  return apiCallBack;
};
